import { Layout } from 'ra-ui-materialui';
import { React } from 'react';
import { CustomAppBar } from './CustomAppBar';

export const AppLayout = (props) => {
    return (
        <Layout {...props} appBar={CustomAppBar} />
    );
}