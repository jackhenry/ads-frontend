import { Datagrid, DateField, List, NumberField, TextField } from 'ra-ui-materialui';
import * as React from 'react';
import { AccountInfoContainer } from '../Auth/AccountInfoContainer';
import { ListActions } from '../Helper/ListActions';

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour12: true, hour: 'numeric', minute: 'numeric' }

export const PatientList = ({ permissions, ...props}) => {
    return (
        <AccountInfoContainer>
            <List {...props} title="Patients" bulkActionButtons={<ListActions permissions={permissions} required={"nurse"}/>}>
                <Datagrid rowClick="edit">
                    <NumberField source="id" label="ID" />
                    <TextField source="firstname" label="First Name" />
                    <TextField source="lastname" label="Last Name" />
                    <NumberField source="phoneNumber" label="Phone #" sortable={false} />
                    <DateField source="admitDate" options={dateOptions} label="Admitted" />
                    <DateField source="dischargeDate" showTime options={dateOptions} label="Discharged" />
                </Datagrid>
            </List>
        </AccountInfoContainer>
    );
}