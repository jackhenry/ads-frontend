import * as React from 'react';
import { Admin, Resource, ListGuesser, Create, SimpleForm, TextInput } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://localhost:8080/ads/api');

const EmployeeCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="firstname" />
      <TextInput source="lastname" />
    </SimpleForm>
  </Create>
)

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="employee" list={ListGuesser} create={EmployeeCreate} />
  </Admin>
)

export default App;
