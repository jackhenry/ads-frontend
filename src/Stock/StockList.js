import { Datagrid, List, NumberField, DateField, ReferenceField, TextField } from 'ra-ui-materialui';
import * as React from 'react';
import { AccountInfoContainer } from '../Auth/AccountInfoContainer';
import { ListActions } from '../Helper/ListActions';


export const StockList = ({ permissions, ...props }) => {
    return (
        <AccountInfoContainer>
            <List {...props} title="Stock" bulkActionButtons={<ListActions permissions={permissions} required="pharmatech" />}>
                <Datagrid rowClick="edit">
                    <NumberField source="id" label="ID" />
                    <ReferenceField source="id" label="Name" reference="drug">
                        <TextField source="drugName" />
                    </ReferenceField>
                    <NumberField source="quantity" label="Quantity" />
                    <NumberField source="threshold" label="Threshold" />
                    <DateField source="expirationDate" label="Expiration" />
                </Datagrid>
            </List>
        </AccountInfoContainer>
    );
}