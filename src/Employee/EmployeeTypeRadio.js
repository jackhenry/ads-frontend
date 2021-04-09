import { makeStyles } from '@material-ui/core';
import { RadioButtonGroupInput } from 'ra-ui-materialui';
import * as React from 'react';

const employeeTypeChoices = [
    { id: 'doctor', name: 'Doctor'},
    { id: 'nurse', name: 'Nurse'},
    { id: 'pharmatech', name: 'Pharma Tech'},
]

export const EmployeeTypeRadio = (props) => {
    
    const useStyles = makeStyles({
        '@global': {
            '#employeeType': {
                flexDirection: 'column',
                marginTop: 8
            }
        }
    })
    
    useStyles();

    return (
        <RadioButtonGroupInput {...props} source="employeeType" choices={employeeTypeChoices} /> 
    )
} 