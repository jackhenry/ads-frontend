import { Create, SimpleForm, TextInput } from 'ra-ui-materialui';
import * as React from 'react';
import { EmployeeTypeRadio } from './EmployeeTypeRadio';

export const EmployeeCreate = (props) => (
   <Create {...props}>
       <SimpleForm>
           <TextInput source="firstname" />
           <TextInput source="lastname" />
           <TextInput type="password" source="password" />
           <EmployeeTypeRadio />
       </SimpleForm>
   </Create> 
)