import { Datagrid, List, TextField } from 'ra-ui-materialui';
import * as React from 'react';

export const EmployeeList = (props) => (
    <List {...props} title="Employees">
        <Datagrid rowClick="edit">
            <TextField source="id" label="ID" />
            <TextField source="accountId" label="Account ID" />
            <TextField source="firstname" label="First Name" />
            <TextField source="lastname" label="Last Name" />
            <TextField source="employeeType" label="Type" />
        </Datagrid>
    </List>
)