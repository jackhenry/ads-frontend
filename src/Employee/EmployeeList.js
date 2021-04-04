import { Datagrid, List, TextField } from 'ra-ui-materialui';
import * as React from 'react';

export const EmployeeList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="firstname" />
            <TextField source="lastname" />
        </Datagrid>
    </List>
)