import * as React from 'react';
import { Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { EmployeeList } from './Employee/EmployeeList';
import { EmployeeCreate } from './Employee/EmployeeCreate';
import { EmployeeEdit } from './Employee/EmployeeEdit';
import { PatientList } from './Patient/PatientList';
import { PatientCreate } from './Patient/PatientCreate';
import { PatientEdit } from './Patient/PatientEdit';

const dataProvider = jsonServerProvider('http://localhost:8080/ads/api');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="employee" list={EmployeeList} create={EmployeeCreate} edit={EmployeeEdit} />
    <Resource name="patient" list={PatientList} create={PatientCreate} edit={PatientEdit} />
  </Admin>
)

export default App;
