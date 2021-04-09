import { Typography, makeStyles } from '@material-ui/core';
import { Toolbar } from 'react-admin'
import { Create, SimpleForm, TextInput } from 'ra-ui-materialui';
import * as React from 'react';

export const DrugCreate = (props) => (
   <Create {...props}>
       <SimpleForm>
           <Typography variant="h5" style={{ marginBottom: 8, marginLeft: 4}}>Enter drug info</Typography>
           <TextInput source="drugName" label="Name" variant="outlined" />
           <TextInput source="concentration" label="Concentration" variant="outlined" />
       </SimpleForm>
   </Create> 
)