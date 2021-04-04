import { useListContext } from 'ra-core';
import { Button, Datagrid, DateField, List, NumberField, TextField } from 'ra-ui-materialui';
import * as React from 'react';

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour12: true, hour: 'numeric', minute: 'numeric' }

export const PatientList = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <NumberField source="id" label="patient id" />
                <TextField source="firstname" label="first name" />
                <TextField source="lastname" label="last name" />
                <NumberField source="phoneNumber" label="phone number" />
                <DateField source="admitDate" options={dateOptions} label="admit date" />
                <DateField source="dischargeDate" showTime options={dateOptions} label="discharge date" />
            </Datagrid>
        </List>
    );
}