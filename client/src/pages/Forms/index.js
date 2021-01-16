import React from 'react'
import CreateItemForm from "../../components/CreateItemForm"
import FormTable from '../../components/FormTable';
import './style.css';
import { useAuth0 } from '@auth0/auth0-react';

const Forms = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="form-container">
        <div className="header">Header</div>

        <div className="form">
          <h1>Form</h1>
          <CreateItemForm />
        </div>

        <div className="items">
          <FormTable />
        </div>
      </div>
    )
  )
}

export default Forms;
