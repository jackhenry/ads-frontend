import { Button, makeStyles, Tooltip, Typography } from '@material-ui/core';
import { useAuthState } from 'react-admin';
import { Datagrid, List, TextField, DateField, ReferenceField, NumberField } from 'ra-ui-materialui';
import * as React from 'react';
import { AccountInfoContainer } from '../Auth/AccountInfoContainer';
import { getClientToken } from '../Auth/auth-provider';
import { ListActions } from '../Helper/ListActions';
import { serverHostname } from '../env';

const deleteMedicationOrder = async (id, token) => {
    const response = await fetch(`${serverHostname()}/mo/${id}/disperse`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
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
    const response = await fetch(`${serverHostname()}/stock`, {
        headers: new Headers({
            Authorization: `Bearer ${token}`
        })
    });
    return await response.json();
}

const FillOrderButton = ({ permissions, record }) => {
    const { id, drugId, quantity } = record;

    const useStyles = makeStyles(({palette}) => ({
        error: {
            color: palette.error.main
        }
    }));

    const classes = useStyles();
   
    const [drugStock, setDrugStock] = React.useState(null);
    const token = getClientToken();
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
        deleteMedicationOrder(id, token).then(json => window.location.reload());
    }
   
    if (drugStock === null) {
        return <span />
    }
    
    if (drugStock < quantity) {
        return (
            <Typography variant="subtitle2" className={classes.error}>Insufficient Stock</Typography>
        )
    }
    
    if (permissions === 'pharmatech') {
        return (
            <Typography variant="subtitle2" className={classes.error}>Pharma techs cannot disperse</Typography>
        )
    }

    return (
        <Button variant="contained" color="secondary" onClick={handleClick}>disperse</Button>
    )
}

export const MedicationOrderList = ({ permissions, ...props}) => {
    return (
        <AccountInfoContainer>
            <List {...props} title="Prescriptions" bulkActionButtons={<ListActions permissions={permissions} required="doctor" />}>
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
                    <DateField source="creationDate" />
                    <DateField source="expirationDate" />
                    <FillOrderButton permissions={permissions} />
                </Datagrid>
            </List>
        </AccountInfoContainer>
    );
}