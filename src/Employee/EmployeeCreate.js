import { Create, SimpleForm, TextInput } from 'ra-ui-materialui'
import * as React from 'react'

export const EmployeeCreate = (props) => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="firstname" />
        <TextInput source="lastname" />
      </SimpleForm>
    </Create>
  )
  