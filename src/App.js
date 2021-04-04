import * as React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { EmployeeList } from './Employee/EmployeeList';
import { EmployeeCreate } from './Employee/EmployeeCreate';
import { EmployeeEdit } from './Employee/EmployeeEdit';

const dataProvider = jsonServerProvider('http://localhost:8080/ads/api');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="employee" list={EmployeeList} create={EmployeeCreate} edit={EmployeeEdit} />
  </Admin>
)

export default App;
