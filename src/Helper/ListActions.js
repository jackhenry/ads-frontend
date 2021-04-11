import { makeStyles, Typography } from '@material-ui/core';
import * as React from 'react';
import { BulkDeleteButton } from 'react-admin';

export const ListActions = ({ permissions, required, ...props}) => {
    
    const useStyles = makeStyles(({ palette }) => ({
        error: {
            color: palette.error.main
        }
    }));

    const classes = useStyles();

    if (permissions !== required) {
        return (
            <React.Fragment>
                <Typography variant="caption" className={classes.error}>Only {required}s can delete</Typography>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <BulkDeleteButton {...props} />
        </React.Fragment>
    )
}