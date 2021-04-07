import { number } from 'ra-core';
import { Create, SimpleForm, NumberInput, DateInput, SelectInput, AutocompleteArrayInput, TextInput } from 'ra-ui-materialui';
import * as React from 'react';

const DrugSelectInput = (props) => {

    
    const [choices , setChoices] = React.useState();

    React.useEffect(() => {
        const fetchDrugs = async () => {
            const response = await fetch('http://localhost:8080/ads/api/drug');
            const json = await response.json();
            return json;
        }
        fetchDrugs().then(json => {
            console.log(json);
            const newChoices = json.map(obj => {
                console.log(obj);
                const { id, drugName, concentration } = obj;
                return {
                    id: id,
                    name: `id: ${id}: ${drugName} (${concentration})`
                }
            });
            setChoices(newChoices)
        });
    }, [])

    return (
        <SelectInput choices={choices} optionText="name" source="id"/>
    )
}

export const StockCreate = (props) => (
   <Create {...props}>
       <SimpleForm>
           <DrugSelectInput />
           <TextInput source="quantity" validate={number()} />
           <TextInput source="threshold" validate={number()} />
           <DateInput source="expirationDate" />
       </SimpleForm>
   </Create> 
)