import {SelectInput} from 'ra-ui-materialui';
import React, { useEffect, useState } from 'react';
import { getClientToken } from '../Auth/auth-provider';

export const FilteredSelect = (props) => {
    const {url, filter, optionText, source, ...rest} = props;

    const [choices, setChoices] = useState(); 
    
    useEffect(() => {
        const fetchData = async (url) => {
           const token = getClientToken();
           const response = await fetch(url  + "?_start=0&_end=10000", {
               headers: new Headers({
                   Authorization: `Bearer ${token}`
               })
           }); 
           return await response.json(); 
        }
        
        fetchData(url).then(json => {
            console.log(json);
            setChoices(filter(json))
        });
    }, [filter, url]);
    
    return (
        <SelectInput choices={choices} optionText={optionText} source={source} {...rest}/>
    )
}