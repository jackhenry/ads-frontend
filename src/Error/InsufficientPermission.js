import { makeStyles } from '@material-ui/core';
import { Block } from '@material-ui/icons';
import { React } from 'react';

export const InsufficientPermission = ({resourceName, ...props}) => {
    
    const useStyles = makeStyles(props => {
        const { palette } = props;
        console.log(props);
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
            <span>Resource Name: {resourceName}</span>
        </div>
    )
}