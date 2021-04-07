import { number } from 'ra-core';
import { Create, SimpleForm, DateInput, TextInput } from 'ra-ui-materialui';
import * as React from 'react';
import { FilteredSelect } from '../Helper/FilteredSelect';

const filter = json => json.map(obj => {
    const {id, drugName, concentration} = obj;
    return {
        id: id,
        name: `id ${id}: ${drugName} (${concentration})`
    }
})

export const StockCreate = (props) => (
   <Create {...props}>
       <SimpleForm>
           <FilteredSelect url="http://localhost:8080/ads/api/drug" filter={filter} optionText="name" source="id" />
           <TextInput source="quantity" validate={number()} />
           <TextInput source="threshold" validate={number()} />
           <DateInput source="expirationDate" />
       </SimpleForm>
   </Create> 
)