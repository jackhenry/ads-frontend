import { Create, SimpleForm, TextInput, DateInput } from 'ra-ui-materialui';
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

const drugFilter = json => json.map(obj => {
    const {id, drugName, concentration} = obj;
    return {
        id: id,
        name: `id ${id}: ${drugName} (${concentration})`
    }
})

export const MedicationOrderCreate = (props) => {
    return (
       <Create {...props}>
           <SimpleForm>
               <FilteredSelect filter={patientFilter} optionText="name" source="patientId" url="http://localhost:8080/ads/api/patient" />
               <FilteredSelect filter={doctorFilter} optionText="name" source="doctorId" url="http://localhost:8080/ads/api/employee" />
               <FilteredSelect filter={drugFilter} optionText="name" source="drugId" url="http://localhost:8080/ads/api/drug" />
               <TextInput source="quantity" />
               <DateInput source="creationDate" />
               <DateInput source="expirationDate" />
           </SimpleForm>
       </Create>
    )
}