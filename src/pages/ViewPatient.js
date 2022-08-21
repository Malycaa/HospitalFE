import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom'
import api from '../lib/api';
import { Button } from 'react-bootstrap';

const ViewPatient = (props) => {
  const [patient_name, setpatient_name] = useState("");
  const [birth_place, setbirth_place] = useState("");
  const [birth_date, setbirth_date] = useState("");
  const [address, setaddress] = useState("");
  const [gender, setgender] = useState("");
  const [complaints, setcomplaints] = useState("");
  const [data, setdata] = useState({})
  const [loading, setloading] = useState(true)
  const params = useParams()
  const getData = async () => {
    try {
      setloading(true)
      const url = `/api/patient/getPatientById/${props.patient_id}`
      const response = await api.get(url)
      setdata(response.data.data)
      setpatient_name(response.data.data.patient_name)
      setloading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  })
  // useEffect(() => {
  //   console.log(para)
  // });
  if (loading) {
    return <Modal></Modal>
  } else {
    return (
      <>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Giving Treatment
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{patient_name}</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>

      </>
    )
  }

}

export default ViewPatient
