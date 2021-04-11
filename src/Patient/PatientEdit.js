import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import {
  DateField, Edit, SimpleForm, TextInput, TopToolbar,
} from 'ra-ui-materialui';
import { InsufficientPermission } from '../Error/InsufficientPermission';
import { serverHostname } from '../env';



const PatientEditActions = (props) => { 
   
  if (props === null || !props.data) {
    return <TopToolbar />
  }

  const { data: { id } } = props;
  const { onDischarge } = props;

  return (
    <TopToolbar>
      <Button variant="contained" color="primary" onClick={() => onDischarge(id)}>Discharge</Button>
    </TopToolbar>
  );
}

const redirect = (basePath, id, data) => `/patient/${id}/show`;

export const PatientEdit = ({ permissions, ...props }) => {
  
  const [isDischarged, setIsDischarged] = React.useState(false);
  if (permissions !== 'nurse') {
      return <InsufficientPermission role='nurse' resourceName='Patient Edit'/>
  }
  
  const sendDischargeRequest = async id => {
    fetch(`${serverHostname()}/patient/${id}/discharge`, {
      method: 'PUT'
    })
    .then(response => {
      setIsDischarged(true);
    })
    .catch(err => console.log(err));
  }
  
  if (isDischarged) {
    console.log(props);
    return (
      <Dialog open={true}>
        <DialogTitle>Successful Discharge</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The patient was successfully discharged.
          </DialogContentText>
          <DialogActions>
            <Button onClick={() => window.location.href="/#/patient"}>OK</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Edit actions={<PatientEditActions onDischarge={sendDischargeRequest} />} {...props}>
      <SimpleForm redirect={redirect}>
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
