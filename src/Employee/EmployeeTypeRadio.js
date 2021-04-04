import { RadioButtonGroupInput } from 'ra-ui-materialui';
import * as React from 'react';

const employeeTypeChoices = [
    { id: 'doctor', name: 'Doctor'},
    { id: 'nurse', name: 'Nurse'},
    { id: 'pharmatech', name: 'Pharma Tech'},
]

export const EmployeeTypeRadio = (props) => (
    <RadioButtonGroupInput {...props} source="employeeType" choices={employeeTypeChoices} /> 
)