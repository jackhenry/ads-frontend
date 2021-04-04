import { required } from 'ra-core';
import { Edit, SimpleForm, TextInput } from 'ra-ui-materialui';
import * as React from 'react';
import { EmployeeTypeRadio } from './EmployeeTypeRadio';

export const EmployeeEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="firstname" validate={required()} />
            <TextInput source="lastname" validate={required()} />
            <EmployeeTypeRadio />
        </SimpleForm>
    </Edit>
)