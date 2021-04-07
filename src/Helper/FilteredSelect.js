import {SelectInput} from 'ra-ui-materialui';
import React, { useEffect, useState } from 'react';

export const FilteredSelect = (props) => {
    const {url, filter, optionText, source} = props;

    const [choices, setChoices] = useState(); 
    
    useEffect(() => {
        const fetchData = async (url) => {
           const response = await fetch(url); 
           return await response.json(); 
        }
        
        fetchData(url).then(json => {
            console.log(json);
            setChoices(filter(json))
        });
    }, [filter, url]);
    
    return (
        <SelectInput choices={choices} optionText={optionText} source={source}/>
    )
}