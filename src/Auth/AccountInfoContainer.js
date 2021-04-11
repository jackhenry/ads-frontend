import { makeStyles, Typography } from '@material-ui/core';
import { useAuthState } from 'ra-core';
import { React, useEffect, useState } from 'react';
import { serverHostname } from '../env';
import { getClientAccountId, getClientRole, getClientToken } from './auth-provider';


const getAccount = async (accountId, token) => {
    const request = new Request(`${serverHostname()}/auth/user/${accountId}`, {
        headers: new Headers({
            'Authorization': `Bearer ${token}`
        }) 
    });
    
    return await (await fetch(request)).json();
}

export const AccountInfoContainer = (props) => {
    
    const useStyles = makeStyles(({palette}) => ({
        wrapper: {
            display: 'flex',
            justifyContent: 'end'
        },
        columns: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start'
        },
        infoSpan: {
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'end',
            paddingRight: 4,
            fontWeight: 300,
            fontSize: 9,
            color: palette.info.main
        },
        gray: {
            color: "#eee"
        },
        info: {
            color: palette.primary.main
        }
    }));
    
    const classes = useStyles();
    
    const [username, setUsername] = useState();
    const {authenticated } = useAuthState();
    const role = getClientRole();

    useEffect(() => {
        let isMounted = true;
        if (authenticated) {
            const token = getClientToken();
            const accountId = getClientAccountId();
            if (isMounted && token && accountId) {
                getAccount(accountId, token).then(json => {
                    if (json) {
                        setUsername(json.username);
                    }
                })
            }
        }
        return () => { isMounted = false }
    }, [authenticated])

    if (!username) {
        return <span />
    }

    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.columns}>
                    <div className={classes.infoSpan}>
                        <Typography className={classes.gray} style={{lineHeight: 1.2}} variant="caption">
                            user: <span className={classes.info}>{username}</span>
                        </Typography> 
                    </div>
                    <div className={classes.infoSpan}>
                        <Typography className={classes.gray} style={{lineHeight: 1.2}} variant="caption">
                            role: <span className={classes.info}>{role}</span>
                        </Typography> 
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    )
}