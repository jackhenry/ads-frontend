import { required } from 'ra-core';
import { Edit, SimpleForm, TextInput } from 'ra-ui-materialui';
import * as React from 'react';
import { EmployeeTypeRadio } from './EmployeeTypeRadio';
import { InsufficientPermission } from '../Error/InsufficientPermission';

export const EmployeeEdit = ({ permissions, ...props }) => {

    if (permissions !== 'pharmatech') {
        return <InsufficientPermission role='pharmatech' resourceName='Employee Edit'/>
    }
    
    return (
        <Edit {...props}>
            <SimpleForm variant="filled">
                <TextInput disabled label="Id" source="id" />
                <TextInput source="firstname" validate={required()} />
                <TextInput source="lastname" validate={required()} />
                <EmployeeTypeRadio />
            </SimpleForm>
        </Edit>
    )
} 