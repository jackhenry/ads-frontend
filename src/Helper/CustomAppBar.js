import { makeStyles, Typography } from '@material-ui/core';
import { AppBar } from 'ra-ui-materialui';
import { useAuthState } from 'react-admin';
import { React, useEffect, useState } from 'react';
import { getClientToken, getClientAccountId, getClientRole } from '../Auth/auth-provider';

const getAccount = async (accountId, token) => {
    const request = new Request(`http://localhost:8080/ads/api/auth/user/${accountId}`, {
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
    
    const [username, setUsername] = useState();
    const {authenticated } = useAuthState();
    const role = getClientRole();

    useEffect(() => {
        if (authenticated) {
            const token = getClientToken();
            const accountId = getClientAccountId();
            if (token && accountId) {
                getAccount(accountId, token).then(json => {
                    if (json) {
                        setUsername(json.username);
                    }
                })
            }
        }
    }, [authenticated])

    return (
        <AppBar {...props}>
            <Typography variant="h6">Automatic Dispensing System</Typography>
            <span className={classes.spacer} />
        </AppBar>
    )
}