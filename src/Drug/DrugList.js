import { Datagrid, List, NumberField, TextField } from 'ra-ui-materialui';
import * as React from 'react';


export const DrugList = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <NumberField source="id" label="drug id" />
                <TextField source="drugName" label="name" />
                <TextField source="concentration" label="concentration" />
            </Datagrid>
        </List>
    );
}