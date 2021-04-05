import { Create, SimpleForm, TextInput, NumberInput, DateInput } from 'ra-ui-materialui';
import * as React from 'react';

export const StockCreate = (props) => (
   <Create {...props}>
       <SimpleForm>
           <TextInput source="drugId" />
           <NumberInput source="quantity" />
           <NumberInput source="threshold" />
           <DateInput source="expirationDate" />
       </SimpleForm>
   </Create> 
)