import { Button } from '@material-ui/core';
import {
  DateField, DateInput, Edit, SimpleForm, TextInput, TopToolbar,
} from 'ra-ui-materialui';
import * as React from 'react';

const sendDischargeRequest = async id => {
  fetch(`http://localhost:8080/ads/api/patient/${id}/discharge`, {
    method: 'PUT'
  })
  .then(response => console.log("success"))
  .catch(err => console.log(err));
}

const PatientEditActions = (props) => { 
  console.log(props);
  const { data: { id } } = props;

  return (
    <TopToolbar>
      <Button variant="contained" color="primary" onClick={() => sendDischargeRequest(id)}>Discharge</Button>
    </TopToolbar>
  );
}
export const PatientEdit = (props) => {
  return (
    <Edit actions={<PatientEditActions />} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="firstname" />
        <TextInput source="lastname" />
        <TextInput source="phoneNumber" />
        <DateField showTime source="admitDate" />
        <DateField showTime source="dischargeDate" />
      </SimpleForm>
    </Edit>
  );
}
