import React, { useState } from "react";
import { Button, Container, Form, Row, Col, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../lib/api";
import { setToken } from "../reducers/token-store";
import register from "../register.jpg";
import NavbarSuperAdmin from "../components/NavbarSuperAdmin";
import CustomListDropDown from "./DropDown";
import CustomListDropDownMedication from "./DropDownMedication";
// import { CustomListDropDown } from './DropDown';

const GivingTreatment = () => {
  const [sickness, setsickness] = useState("")
  const [sickness_desc, setsickness_desc] = useState("")
  const [sickness_handling, setsickness_handling] = useState("")
  const [createTime, setcreateTime] = useState("")
  const [medications, setmedications] = useState([{}])
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const url = `/api/treatment/addTreatment`;
      const response = await api.post(url, {
        sickness: sickness,
        sickness_desc: sickness_desc,
        sickness_handling: sickness_handling,
        createTime: createTime,
        medications: medications
      });
      alert("Success Registering Patient");
      setLoading(false);
      navigate("/superadmin");
    } catch (error) {
      alert("Failed Registering Patient");
    }
  };

  const medicationDropdownEvent = (item) => {
    setuser_id(item.medication_id);
  };

  return (
    <>
      <NavbarSuperAdmin />
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
                          setpatient_name(event.target.value)
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
                  <Col md={6}>
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
                  <Col md={6}>
                    <Form.Group className="mt-2 text-start">
                      <Form.Label>Created Time</Form.Label>
                      <Form.Control
                        type="text"
                        id="createdTime"
                        placeholder="CreatedTime"
                        required
                        onChange={(event) => setcreateTime(event.target.value)}
                        disabled={loading}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <CustomListDropDownMedication
                      onChange={medicationDropdownEvent}
                      isLoading={loading}
                    />
                  </Col>
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
