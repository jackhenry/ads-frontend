import * as React from 'react';
import { Datagrid, List, NumberField, TextField } from 'ra-ui-materialui';
import { AccountInfoContainer } from '../Auth/AccountInfoContainer';

export const DrugList = (props) => {
    return (
        <AccountInfoContainer>
        <List {...props} title="Drugs">
            <Datagrid rowClick="edit">
                <NumberField source="id" label="ID" />
                <TextField source="drugName" label="Name" />
                <TextField source="concentration" label="Concentration" />
            </Datagrid>
        </List>
        </AccountInfoContainer>
    );
}