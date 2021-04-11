import { Datagrid, List, TextField } from 'ra-ui-materialui';
import * as React from 'react';
import { AccountInfoContainer } from '../Auth/AccountInfoContainer';
import { ListActions } from '../Helper/ListActions';

export const EmployeeList = ({ permissions, ...props }) => {
    return (
        <AccountInfoContainer>
            <List {...props} title="Employees" bulkActionButtons={<ListActions permissions={permissions} required="pharmatech" />}>
                <Datagrid rowClick="edit">
                    <TextField source="id" label="ID" />
                    <TextField source="accountId" label="Account ID" sortable={false} />
                    <TextField source="firstname" label="First Name" />
                    <TextField source="lastname" label="Last Name" />
                    <TextField source="employeeType" label="Type" sortable={false} />
                </Datagrid>
            </List>
        </AccountInfoContainer>
    )
}