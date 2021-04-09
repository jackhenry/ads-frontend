import { useListContext } from 'ra-core';
import { Button, Datagrid, DateField, List, NumberField, TextField } from 'ra-ui-materialui';
import * as React from 'react';

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour12: true, hour: 'numeric', minute: 'numeric' }

export const PatientList = (props) => {
    return (
        <List {...props} title="Patients">
            <Datagrid rowClick="edit">
                <NumberField source="id" label="ID" />
                <TextField source="firstname" label="First Name" />
                <TextField source="lastname" label="Last Name" />
                <NumberField source="phoneNumber" label="Phone #" />
                <DateField source="admitDate" options={dateOptions} label="Admitted" />
                <DateField source="dischargeDate" showTime options={dateOptions} label="Discharged" />
            </Datagrid>
        </List>
    );
}