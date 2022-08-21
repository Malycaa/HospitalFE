import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import NavbarDoctors from '../components/NavbarDoctors';
import api from '../lib/api';

export default class PatientTable extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      patient_name: '',
      loading: false
    }
  }

  componentDidMount = async () => {
    this.getPatientData()
  };

  // const[patient_name, setpatient_name] = useState("")
  // const[data, setdata] = useState([])
  // const[loading, setloading] = useState(false)

  getPatientData = async () => {
    try {
      this.setState({ loading: true })
      const ls = require('localstorage-ttl')
      const data = ls.get('user')
      const url = `/api/patient/inquiryPatient`;
      const response = await api.post(url, {
        patient_name: this.state.patient_name,
        user_id: data.user_id

      }).then((result) => {
        this.setState({
          data: result.data.data
        }, () => {
          console.log('new state', this.state.data);
          this.setState({ loading: false })
        })

      });
    } catch (error) {
      alert(error)
    }
  }
  render() {
    return (
      <>

        <NavbarDoctors />
        <Form className="d-flex w-25" >
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={event => this.setState({ patient_name: event.target.value })}
          />
          <Button variant="dark" onClick={this.getPatientData}>Search</Button>
        </Form>
        <br></br>
        <Table striped bordered hover variant="dark" >
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Gender</th>
              <th>Complaints</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((el, index) => (
              <tr key={index}>
                <td>{el.patient_name}</td>
                <td>{el.gender}</td>
                <td>{el.complaints}</td>
                <td><Button>view</Button></td>
              </tr>
            ))}


          </tbody>
        </Table>
      </>
    )
  }



}
