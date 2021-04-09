import * as React from 'react';
import { Typography } from '@material-ui/core';
import { Edit, TextInput, DateInput, SimpleForm } from 'ra-ui-materialui';

export const StockEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <Typography variant="h5" style={{ marginBottom: 8, marginLeft: 4}}>Edit item info</Typography>
                <TextInput disabled source="drugId" label="Drug id" variant="outlined" />
                <TextInput source="quantity" variant="outlined" />
                <TextInput source="threshold" variant="outlined" />
                <DateInput source="expirationDate" variant="outlined" /> 
            </SimpleForm>
        </Edit>
    )
}