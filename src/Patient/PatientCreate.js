import { makeStyles, Typography } from '@material-ui/core';
import { Toolbar } from 'react-admin'
import { Create, SaveButton, SimpleForm, TextInput } from 'ra-ui-materialui';
import * as React from 'react';

const CommitToolbar = props => {
    
    const useStyle = makeStyles(({ palette }) => ({
        saveButton: {
            backgroundColor: palette.secondary.main,
            '&:hover': {
                backgroundColor: palette.secondary.alternative
            }
        }
    }));

    const classes = useStyle();

    return (
        <Toolbar {...props}>
            <SaveButton icon={<span/>} label="Admit Patient" className={classes.saveButton} />
        </Toolbar>
    )
}

export const PatientCreate = (props) => (
   <Create {...props}>
       <SimpleForm toolbar={<CommitToolbar />}>
           <Typography variant="h5" style={{ marginBottom: 8, marginLeft: 4}}>Enter patient info</Typography>
           <TextInput source="firstname" variant="outlined" />
           <TextInput source="lastname" variant="outlined" />
           <TextInput source="phoneNumber" variant="outlined" />
       </SimpleForm>
   </Create> 
)