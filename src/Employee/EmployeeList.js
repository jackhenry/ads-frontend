import { Datagrid, List, TextField } from 'ra-ui-materialui';
import * as React from 'react';

export const EmployeeList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="employee id" />
            <TextField source="accountId" label="account id" />
            <TextField source="firstname" label="first name" />
            <TextField source="lastname" label="last name" />
            <TextField source="employeeType" label="job" />
        </Datagrid>
    </List>
)