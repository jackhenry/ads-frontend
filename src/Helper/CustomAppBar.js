import * as React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { AppBar } from 'ra-ui-materialui';
import { useAuthState } from 'react-admin';
import { getClientToken, getClientAccountId, getClientRole } from '../Auth/auth-provider';
import { serverHostname } from '../env';

const getAccount = async (accountId, token) => {
    const request = new Request(`${serverHostname()}/auth/user/${accountId}`, {
        headers: new Headers({
            'Authorization': `Bearer ${token}`
        }) 
    });
    
    return await (await fetch(request)).json();
}

export const CustomAppBar = props => {
    const useStyles = makeStyles({
        spacer: {
            flex: 1
        },
        accountInfoWrapper: {
            display: 'flex',
            flexDirection: 'column',
            width: 120 
        },
        line: {
            lineHeight: 1.2
        }
    })
    
    const classes = useStyles();
    
    return (
        <AppBar {...props}>
            <Typography variant="h6">Automatic Dispensing System</Typography>
            <span className={classes.spacer} />
        </AppBar>
    )
}