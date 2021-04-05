import { Create, SimpleForm, TextInput } from 'ra-ui-materialui';
import * as React from 'react';

export const DrugCreate = (props) => (
   <Create {...props}>
       <SimpleForm>
           <TextInput source="drugName" />
           <TextInput source="concentration" />
       </SimpleForm>
   </Create> 
)