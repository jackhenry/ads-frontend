import { required } from 'ra-core';
import { useNotify } from 'react-admin';
import { Edit, SimpleForm, TextInput } from 'ra-ui-materialui';
import * as React from 'react';
import { EmployeeTypeRadio } from './EmployeeTypeRadio';

export const EmployeeEdit = (props) => {
    const notify = useNotify();
    
    return (
        <Edit onFailure={() => console.log("FUCK YOU")} {...props}>
            <SimpleForm variant="filled">
                <TextInput disabled label="Id" source="id" />
                <TextInput source="firstname" validate={required()} />
                <TextInput source="lastname" validate={required()} />
                <EmployeeTypeRadio />
            </SimpleForm>
        </Edit>
    )
} 