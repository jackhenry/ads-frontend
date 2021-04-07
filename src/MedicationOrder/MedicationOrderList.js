import { Button } from '@material-ui/core';
import { Datagrid, List, TextField, DateField, ReferenceField, NumberField} from 'ra-ui-materialui';
import * as React from 'react';

const deleteMedicationOrder = async (id) => {
    const response = await fetch(`http://localhost:8080/ads/api/mo/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    
    return await response.json();
}

const FillOrderButton = ({ record }) => {
    const { id } = record;
    const handleClick = event => {
        deleteMedicationOrder(id).then(json => console.log('deleted.'));
    }
    
    return (
        <Button variant="contained" color="secondary" onClick={handleClick}>disperse</Button>
    )
}

export const MedicationOrderList = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <ReferenceField label="Drug" source="drugId" reference="drug">
                    <TextField source="drugName" />
                </ReferenceField>
                <ReferenceField label="Patient" source="patientId" reference="patient">
                    <TextField source="fullname" label="patient first name" />
                </ReferenceField>
                <ReferenceField label="Doctor" source="doctorId" reference="employee">
                    <TextField source="fullname" label="doctor name" />
                </ReferenceField>
                <NumberField source="quantity" />
                <DateField showTime source="creationDate" />
                <DateField showTime source="expirationDate" />
                <FillOrderButton />
            </Datagrid>
        </List>
    );
}