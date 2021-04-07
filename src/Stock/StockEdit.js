import * as React from 'react';
import { Edit, TextInput, DateInput, SimpleForm } from 'ra-ui-materialui';

export const StockEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput disabled source="drugId" label="Drug id" />
                <TextInput source="quantity" />
                <TextInput source="threshold" />
                <DateInput source="expirationDate" /> 
            </SimpleForm>
        </Edit>
    )
}