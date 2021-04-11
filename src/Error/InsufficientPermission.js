import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import { Block } from '@material-ui/icons';

export const InsufficientPermission = ({resourceName, role, ...props}) => {
    
    const useStyles = makeStyles(props => {
        const { palette } = props;
        return {
            wrapper: {
                display: 'flex',
                flexDirection: 'column',
                marginTop: 20
            },
            header: {
                display: 'flex',
                alignItems: 'center',
                alignSelf: 'center',
                fontWeight: 600,
                fontSize: 28
            },
            subheader: {
                display: 'flex',
                alignItems: 'center',
                alignSelf: 'center',
                fontWeight: 600,
                fontSize: 28
            },
            message: {
                display: 'flex',
                alignItems: 'center',
                alignSelf: 'center',
            },
            blockIcon: {
                fontSize: 140,
                fill: palette.error.main
            },
            cancelIcon: {
                fontSize: 28,
                marginTop: 3,
                marginRight: 6,
                fill: 'red'
            }
        }
    })

    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}><Block className={classes.blockIcon}/></div>
            <span className={classes.subheader}>Access Denied</span>
            <span className={classes.message}>Resource Name: {resourceName}</span>
            <span className={classes.message}>You do not have the required permission to access this resource.</span>
            <span className={classes.message}>Required role: {role}</span>
        </div>
    )
}