import * as React from 'react';
import { Typography } from '@material-ui/core';
import { Edit, TextInput, DateInput, SimpleForm, ReferenceField, TextField} from 'ra-ui-materialui';
import { InsufficientPermission } from '../Error/InsufficientPermission';

export const StockEdit = ({ permissions, ...props }) => {
    
    if (permissions !== 'pharmatech') {
        return <InsufficientPermission role='pharmatech' resourceName='Stock Edit' />
    }

    return (
        <Edit {...props}>
            <SimpleForm>
                <Typography variant="h5" style={{ marginBottom: 8, marginLeft: 4}}>Edit item info</Typography>
                <ReferenceField label="Drug Name" source="drugId" reference="drug">
                    <TextField source="drugName" />
                </ReferenceField>
                <TextInput disabled source="drugId" label="Drug id" variant="outlined" />
                <TextInput source="quantity" variant="outlined" />
                <TextInput source="threshold" variant="outlined" />
                <DateInput source="expirationDate" variant="outlined" /> 
            </SimpleForm>
        </Edit>
    )
}