import * as React from 'react';
import { Layout } from 'ra-ui-materialui';
import { CustomAppBar } from './CustomAppBar';

export const AppLayout = (props) => {
    return (
        <Layout {...props} appBar={CustomAppBar} />
    );
}