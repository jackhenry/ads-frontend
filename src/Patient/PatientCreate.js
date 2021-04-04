import { Create, SimpleForm, TextInput } from 'ra-ui-materialui';
import * as React from 'react';

export const PatientCreate = (props) => (
   <Create {...props}>
       <SimpleForm>
           <TextInput source="firstname" />
           <TextInput source="lastname" />
           <TextInput source="phoneNumber" />
       </SimpleForm>
   </Create> 
)