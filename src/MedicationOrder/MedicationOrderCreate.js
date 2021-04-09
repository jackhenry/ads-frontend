import { SelectInput, Create, SimpleForm, TextInput, DateInput } from 'ra-ui-materialui';
import * as React from 'react';
import { FilteredSelect } from '../Helper/FilteredSelect';

const patientFilter = json => json.map(obj => {
    console.log(obj);
    const {id, firstname, lastname} = obj;
    return {
        id: id,
        name: `id ${id}: ${firstname} ${lastname}`
    }
})

const doctorFilter = json => {
    const employees = json.map(obj => {
        const {id, firstname, lastname, employeeType} = obj;
        return {
            id: id,
            name: `id ${id}: ${firstname} ${lastname}`,
            isDoctor: employeeType === 'doctor' ? true : false
        }
    });
    return employees.filter(employee => employee.isDoctor);
}

const getAvailableStock = async () => {
    const stock = await (await fetch('http://localhost:8080/ads/api/stock')).json()
    const drugs = await (await fetch('http://localhost:8080/ads/api/drug')).json()

    const stockDrugIds = stock.map(obj => obj.id);
    
    return drugs.filter(obj => stockDrugIds.includes(obj.id));
}

export const MedicationOrderCreate = (props) => {

    const [drugStock, setDrugStock] = React.useState([]);
    React.useEffect(() => {
        getAvailableStock().then(json => {
            const choices = json.map(obj => ({
                id: obj.id,
                name: `${obj.drugName} (${obj.concentration})`
            }))
            setDrugStock(choices);
        })
    }, []);

    return (
       <Create {...props}>
           <SimpleForm>
               <FilteredSelect filter={patientFilter} optionText="name" source="patientId" url="http://localhost:8080/ads/api/patient" />
               <FilteredSelect filter={doctorFilter} optionText="name" source="doctorId" url="http://localhost:8080/ads/api/employee" />
               <SelectInput label="drug" source="drugId" choices={drugStock} />
               <TextInput source="quantity" />
               <DateInput source="creationDate" />
               <DateInput source="expirationDate" />
           </SimpleForm>
       </Create>
    )
}