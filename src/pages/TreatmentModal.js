import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { today } from "../lib/Utils";
import { Button, Container, Form, Row, Col, Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const TreatmentMoodal = (props) => {
  useEffect(() => {}, []);

  return (
    <>
      <Modal
        {...props}
        // show={props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Treatments
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card body className="bg-dark">
            <Table bordered hover variant="dark" className="text-center">
              <thead>
                <tr>
                  <th style={{ paddingBottom: 17 }}>Sickness</th>
                  <th style={{ paddingBottom: 17 }}>Sickness Description</th>
                  <th style={{ paddingBottom: 17 }}>Sickness Handling</th>
                  <th style={{ paddingBottom: 17 }}>Created Time</th>
                  <th style={{ paddingBottom: 17 }}>Medication</th>
                </tr>
              </thead>
              <tbody>
                {props.show ? (
                  props.data.treatments.map((el, index) => (
                    <tr key={index}>
                      <td style={{ paddingTop: 14 }}>{el.sickness}</td>
                      <td style={{ paddingTop: 14 }}>{el.sickness_desc}</td>
                      <td style={{ paddingTop: 14 }}>{el.sickness_handling}</td>
                      <td style={{ paddingTop: 14 }}>{today(el.createTime)}</td>
                      <td>
                        <Button
                          className="bg-white text-dark"
                          style={{ borderColor: "white" }}
                          // onClick={() => modalAction(el.patient_id)}
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <div></div>
                )}
              </tbody>
            </Table>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="bg-dark text-white"
            style={{ borderColor: "white" }}
            onClick={props.onHide}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TreatmentMoodal;
