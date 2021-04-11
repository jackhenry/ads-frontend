import * as React from 'react';
import { Datagrid, List, NumberField, TextField } from 'ra-ui-materialui';
import { AccountInfoContainer } from '../Auth/AccountInfoContainer';
import { ListActions } from '../Helper/ListActions'

export const DrugList = ({ permissions, ...props }) => {

    return (
        <AccountInfoContainer>
        <List {...props} title="Drugs" bulkActionButtons={<ListActions permissions={permissions} required="pharmatech" />}>
            <Datagrid rowClick="edit">
                <NumberField source="id" label="ID" />
                <TextField source="drugName" label="Name" />
                <TextField source="concentration" label="Concentration" />
            </Datagrid>
        </List>
        </AccountInfoContainer>
    );
}