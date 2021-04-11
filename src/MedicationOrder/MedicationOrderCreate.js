import * as React from 'react';
import { Typography } from '@material-ui/core';
import { SelectInput, Create, SimpleForm, TextInput, DateInput, NumberInput } from 'ra-ui-materialui';
import { getClientToken } from '../Auth/auth-provider';
import { FilteredSelect } from '../Helper/FilteredSelect';
import { InsufficientPermission } from '../Error/InsufficientPermission';
import { serverHostname } from '../env';

const patientFilter = json => json.map(obj => {
    console.log(obj);
    const {id, firstname, lastname} = obj;
    return {
        id: id,
        name: `${firstname} ${lastname}`
    }
})

const doctorFilter = json => {
    const employees = json.map(obj => {
        const {id, firstname, lastname, employeeType} = obj;
        return {
            id: id,
            name: `${firstname} ${lastname}`,
            isDoctor: employeeType === 'doctor' ? true : false
        }
    });
    return employees.filter(employee => employee.isDoctor);
}

const getAvailableStock = async () => {
    const headers = { Authorization: getClientToken() };
    const stock = await (await fetch(`${serverHostname()}/stock`, { headers })).json()
    const drugs = await (await fetch(`${serverHostname()}/drug`, { headers })).json()

    const stockDrugIds = stock.map(obj => obj.id);
    
    return drugs.filter(obj => stockDrugIds.includes(obj.id));
}

export const MedicationOrderCreate = ({permissions, ...props}) => {

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
    
    if (permissions !== 'doctor') {
        return <InsufficientPermission role="doctor" resourceName="Create Prescription" />
    }

    return (
       <Create {...props}>
           <SimpleForm>
               <Typography variant="h5" style={{ marginBottom: 8, marginLeft: 4}}>Edit prescription</Typography>
               <FilteredSelect variant="outlined" filter={patientFilter} optionText="name" source="patientId" url={`${serverHostname()}/patient`} />
               <FilteredSelect variant="outlined" filter={doctorFilter} optionText="name" source="doctorId" url={`${serverHostname()}/employee`} />
               <SelectInput variant="outlined" label="drug" source="drugId" choices={drugStock} />
               <NumberInput variant="outlined" source="quantity" />
               <DateInput variant="outlined" source="creationDate" />
               <DateInput variant="outlined" source="expirationDate" />
           </SimpleForm>
       </Create>
    )
}