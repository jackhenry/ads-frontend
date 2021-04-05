import { Datagrid, List, NumberField, DateField } from 'ra-ui-materialui';
import * as React from 'react';


export const StockList = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <NumberField source="id" label="drug id" />
                <NumberField source="quantity" label="qty" />
                <NumberField source="threshold" label="threshold" />
                <DateField source="expirationDate" label="expiration" />
            </Datagrid>
        </List>
    );
}