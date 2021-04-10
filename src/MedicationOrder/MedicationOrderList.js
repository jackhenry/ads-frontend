import { Button } from '@material-ui/core';
import { useAuthState } from 'react-admin';
import { Datagrid, List, TextField, DateField, ReferenceField, NumberField} from 'ra-ui-materialui';
import * as React from 'react';
import { AccountInfoContainer } from '../Auth/AccountInfoContainer';

const deleteMedicationOrder = async (id) => {
    const response = await fetch(`http://localhost:8080/ads/api/mo/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    
    return await response.json();
}

const getDrugStock = async (drugId) => {
    const auth = localStorage.getItem("auth");
    let token = ''
    if (auth) {
        token = JSON.parse(auth).token;
    }
    const response = await fetch(`http://localhost:8080/ads/api/stock`, {
        headers: new Headers({
            Authorization: `Bearer ${token}`
        })
    });
    return await response.json();
}

const FillOrderButton = ({ record }) => {
    const { id, drugId, quantity } = record;
   
    const [drugStock, setDrugStock] = React.useState(null);
    React.useEffect(() => {
        if (drugId) {
            getDrugStock(drugId).then(json => {
                const drugStock = json.filter(obj => obj.drugId === drugId);
                if (drugStock.length > 0) {
                    setDrugStock(drugStock[0].quantity);
                }
            });
        }
    }, [drugId])

    const handleClick = event => {
        deleteMedicationOrder(id).then(json => console.log('deleted.'));
    }
   
    if (drugStock === null) {
        return <span />
    }
    
    if (drugStock < quantity) {
        return (
            <span>Insufficient Stock</span>
        )
    }

    return (
        <Button variant="contained" color="secondary" onClick={handleClick}>disperse</Button>
    )
}

export const MedicationOrderList = (props) => {
    const { authenticated } = useAuthState();
    console.log('is auth');
    console.log(authenticated);
    return (
        <AccountInfoContainer>
            <List {...props} title="Prescriptions">
                <Datagrid rowClick="edit">
                    <ReferenceField label="Drug" source="drugId" reference="drug">
                        <TextField source="drugName" />
                    </ReferenceField>
                    <ReferenceField label="Patient" source="patientId" reference="patient">
                        <TextField source="fullname" label="patient first name" />
                    </ReferenceField>
                    <ReferenceField label="Doctor" source="doctorId" reference="employee">
                        <TextField source="fullname" label="doctor name" />
                    </ReferenceField>
                    <NumberField source="quantity" />
                    <DateField showTime source="creationDate" />
                    <DateField showTime source="expirationDate" />
                    <FillOrderButton />
                </Datagrid>
            </List>
        </AccountInfoContainer>
    );
}