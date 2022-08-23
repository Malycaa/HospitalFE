import React, { useState, useEffect } from "react";
import { Button, Container, Form, Row, Col, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import api from "../lib/api";
import { setToken } from "../reducers/token-store";
import register from "../register.jpg";
import NavbarDoctors from "../components/NavbarDoctors";
import CustomListDropDown from "./DropDown";
import CustomListDropDownMedication from "./DropDownMedication";
// import { CustomListDropDown } from './DropDown';

const GivingTreatment = () => {
  const [user_id, setuser_id] = useState("")
  const [sickness, setsickness] = useState("")
  const [sickness_desc, setsickness_desc] = useState("")
  const [sickness_handling, setsickness_handling] = useState("")
  const [medications, setmedications] = useState([{ index: 0, medication_id: 0 }])
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { patient_id } = useParams()

  const handleSubmit = async () => {
    try {

      let isValid = true
      const url = `/api/treatment/addTreatment`;
      for (let i = 0; i < medications.length; i++) {
        if (medications[i].medication_id === 0) {
          isValid = false
          break
        }
      }
      if (isValid) {
        setLoading(true);
        await api.post(url, {
          patient_id: patient_id,
          sickness: sickness,
          sickness_desc: sickness_desc,
          sickness_handling: sickness_handling,
          medications: medications
        });
        alert("Success Register Treatment");
        setLoading(false);
        navigate("/doctors");
      } else {
        alert('please fill the medication')
      }

    } catch (error) {
      alert("Failed Registering Treatment");
    }
  };

  const addMedicationEvent = (el) => {
    const index = medications.length
    console.log(medications.length)
    setmedications(medications.concat({ index: index, medication_id: 0 }))
  }

  const medicationDropdownEvent = (item) => {
    console.log(item.index)
    medications[item.index].medication_id = item.medication_id

  };
  useEffect(() => {
    console.log(patient_id)

  }, [])


  return (
    <>
      <NavbarDoctors />
      <Container>
        <Row>
          <Col md={5} style={{ height: "80vh" }}>
            <Container className="h-100 d-flex align-items-center justify-content-center w-100">
              <Form
                action=""
                method="POST"
                encType=""
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSubmit();
                }}
              >
                <Col md={6}>
                  <h3>Giving Treatment</h3>
                </Col>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mt-2 text-start">
                      <Form.Label>Sickness</Form.Label>
                      <Form.Control
                        type="text"
                        id="sickness"
                        placeholder="Sickness"
                        required
                        onChange={(event) =>
                          setsickness(event.target.value)
                        }
                        disabled={loading}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mt-2 text-start">
                      <Form.Label>Sickness Description</Form.Label>
                      <Form.Control
                        type="text"
                        id="sickness_desc"
                        placeholder="Sickness Description"
                        required
                        onChange={(event) =>
                          setsickness_desc(event.target.value)
                        }
                        disabled={loading}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mt-2 text-start">
                      <Form.Label>Sickness Handler</Form.Label>
                      <Form.Control
                        type="Text"
                        id="sickness_handling"
                        placeholder="Sickness Handler"
                        required
                        onChange={(event) => setsickness_handling(event.target.value)}
                        disabled={loading}
                      />
                    </Form.Group>
                  </Col>
                  <Form.Group className="mt-2 text-start">

                    <Form.Label style={{ paddingTop: 5, paddingRight: 17 }}>Medications</Form.Label>
                    {/* &nbsp;&nbsp;&nbsp; */}
                    <Button variant='dark' onClick={addMedicationEvent}>+</Button>
                    <hr></hr>

                    {medications.map((el, index) => (
                      <Col md={12} key={el.index}>
                        <CustomListDropDownMedication
                          onChange={medicationDropdownEvent}
                          tapAdd={addMedicationEvent}
                          isLoading={loading}
                          index={el.index}
                        />
                      </Col>
                    ))}
                  </Form.Group>

                  {/* <Col md={12}>
                    <CustomListDropDownMedication

                      onChange={medicationDropdownEvent}
                      isLoading={loading}
                    />
                  </Col> */}

                  <Col md={12}>
                    <div className="d-grid mt-2">
                      <Button type="submit" variant="dark" disabled={loading}>
                        {loading ? (
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                        ) : (
                          " "
                        )}
                        {loading ? "  Loading.." : "  Register"}
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Col>
          <Col md={7}>
            <Container className="h-100 d-flex align-items-center justify-content-center w-100">
              <img src={register} className="img-fluid" alt="logo" />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GivingTreatment;
