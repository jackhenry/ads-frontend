import { Datagrid, List, NumberField, TextField } from 'ra-ui-materialui';
import * as React from 'react';


export const DrugList = (props) => {
    return (
        <List {...props} title="Drugs">
            <Datagrid rowClick="edit">
                <NumberField source="id" label="ID" />
                <TextField source="drugName" label="Name" />
                <TextField source="concentration" label="Concentration" />
            </Datagrid>
        </List>
    );
}