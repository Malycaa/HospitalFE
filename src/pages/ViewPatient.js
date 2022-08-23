import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useParams, Link } from "react-router-dom";
import api from "../lib/api";
import { Button, Container, Form, Row, Col, Spinner } from "react-bootstrap";

const ViewPatient = (props) => {
  const [data, setdata] = useState({});
  const [loading, setloading] = useState(false);

  const getData = async () => {
    try {
      const url = `/api/patient/getPatientById/${props.patient_id}`;
      setloading(true);
      await api.get(url).then((result) => {
        setdata(result.data.data);
        setloading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (props.show) {
      getData();
    }
  }, [props.show]);

  return (
    <>
      <Modal
        {...props}
        // show={props.show}
        // size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Patient Detail
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!loading ? (
            <Container className="text-center">
              <Row>
                <Col md={6}>
                  <Form.Group className="mt-2 text-start">
                    <Form.Label>Patient Name</Form.Label>
                    <Form.Control
                      type="text"
                      id="username"
                      placeholder="Username"
                      value={data.patient_name ?? ""}
                      required
                      disabled
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mt-2 text-start">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      type="text"
                      id="username"
                      placeholder="Username"
                      value={data.gender ?? ""}
                      required
                      disabled
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mt-2 text-start">
                    <Form.Label>Birth Place</Form.Label>
                    <Form.Control
                      type="text"
                      id="username"
                      placeholder="Username"
                      value={data.birth_place ?? ""}
                      required
                      disabled
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mt-2 text-start">
                    <Form.Label>Birth Date</Form.Label>
                    <Form.Control
                      type="text"
                      id="username"
                      placeholder="Username"
                      value={data.birth_date ?? ""}
                      required
                      disabled
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Form.Group className="mt-2 text-start">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      id="username"
                      placeholder="Username"
                      value={data.address ?? ""}
                      required
                      disabled
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Form.Group className="mt-2 text-start">
                    <Form.Label>Complaints</Form.Label>
                    <Form.Control
                      as="textarea"
                      id="username"
                      placeholder="Username"
                      value={data.complaints ?? ""}
                      required
                      disabled
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          ) : (
            <Container className="text-center">
              <Spinner
                as="span"
                animation="border"
                size="lg"
                role="status"
                aria-hidden="true"
              />
            </Container>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!loading ? (
            <div>
              <Button
                className="bg-dark text-white"
                style={{ borderColor: "white" }}
                onClick={props.onHide}
              >
                Close
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button
                className="bg-dark text-white"
                style={{ borderColor: "white" }}
              >
                <Link to={`/givingtreatment/${data.patient_id}`}>
                  {" "}
                  Add Treatment
                </Link>
              </Button>
            </div>
          ) : null}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ViewPatient;
