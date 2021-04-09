import { Datagrid, List, NumberField, DateField, ReferenceField, TextField } from 'ra-ui-materialui';
import * as React from 'react';


export const StockList = (props) => {
    return (
        <List {...props} title="Stock">
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
    );
}