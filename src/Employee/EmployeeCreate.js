import { Typography } from '@material-ui/core';
import { Create, SimpleForm, TextInput } from 'ra-ui-materialui';
import * as React from 'react';
import { InsufficientPermission } from '../Error/InsufficientPermission';
import { EmployeeTypeRadio } from './EmployeeTypeRadio';

export const EmployeeCreate = ({permissions, ...props}) => {
    
    if (permissions !== 'pharmatech') {
        return <InsufficientPermission role='pharmatech' resourceName="Employee Create" />
    }

    return (
        <Create {...props}>
            <SimpleForm>
                <Typography variant="h5" style={{ marginBottom: 8, marginLeft: 4}}>Create a new employee</Typography>
                <TextInput source="firstname" variant="outlined" />
                <TextInput source="lastname" variant="outlined" />
                <TextInput source="username" variant="outlined" />
                <TextInput type="password" source="password" variant="outlined" />
                <EmployeeTypeRadio />
            </SimpleForm>
        </Create> 
    )
}