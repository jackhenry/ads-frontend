import * as React from 'react';
import { Admin, Resource, useNotify} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { EmployeeList } from './Employee/EmployeeList';
import { EmployeeCreate } from './Employee/EmployeeCreate';
import { EmployeeEdit } from './Employee/EmployeeEdit';
import { PatientList } from './Patient/PatientList';
import { PatientCreate } from './Patient/PatientCreate';
import { PatientEdit } from './Patient/PatientEdit';
import { DrugList } from './Drug/DrugList';
import { DrugCreate } from './Drug/DrugCreate';
import { StockList } from './Stock/StockList';
import { StockCreate } from './Stock/StockCreate';
import { StockEdit } from './Stock/StockEdit';
import { MedicationOrderList } from './MedicationOrder/MedicationOrderList';
import { MedicationOrderCreate } from './MedicationOrder/MedicationOrderCreate';
import { wrappedDataProvider } from './providerWrapper';

// const dataProvider = jsonServerProvider('http://localhost:8080/ads/api');

const App = () => {
  return (
    <Admin dataProvider={wrappedDataProvider}>
      <Resource name="employee" list={EmployeeList} create={EmployeeCreate} edit={EmployeeEdit} />
      <Resource name="patient" list={PatientList} create={PatientCreate} edit={PatientEdit} />
      <Resource name="drug" list={DrugList} create={DrugCreate} />
      <Resource name="stock" list={StockList} create={StockCreate} edit={StockEdit} options={{ label: 'StockItem', }} />
      <Resource name="mo" list={MedicationOrderList} create={MedicationOrderCreate} options={{ label: 'Prescription'}} />
    </Admin>
  )
}

export default App;
