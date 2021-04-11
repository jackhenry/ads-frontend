import * as React from 'react';
import { number } from 'ra-core';
import { useNotify } from 'react-admin';
import { Create, SimpleForm, DateInput, TextInput } from 'ra-ui-materialui';
import { InsufficientPermission } from '../Error/InsufficientPermission';
import { FilteredSelect } from '../Helper/FilteredSelect';
import { serverHostname } from '../env';

const filter = json => json.map(obj => {
    const {id, drugName, concentration} = obj;
    return {
        id: id,
        name: `${drugName} (${concentration})`
    }
})

export const StockCreate = ({ permissions, ...props}) => {
    const notify = useNotify();
    if (permissions !== 'pharmatech') {
       return <InsufficientPermission role="pharmatech" resourceName="Stock Create" /> 
    }
    
    const handleFailure = error => {
        console.log('error');
        console.log(error);
        notify('Drug is already in stock. Please update existing stock.');
    }

    return (
        <Create {...props} onFailure={handleFailure}>
            <SimpleForm>
                <FilteredSelect url={`${serverHostname()}/drug`} filter={filter} optionText="name" source="id" variant="outlined"/>
                <TextInput source="quantity" validate={number()} variant="outlined"/>
                <TextInput source="threshold" validate={number()} variant="outlined" />
                <DateInput source="expirationDate" variant="outlined"/>
            </SimpleForm>
        </Create> 
    )
}