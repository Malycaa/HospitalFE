import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { today } from "../lib/Utils";
import { Button, Container, Form, Row, Col, Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const MedicationListModal = (props) => {
  useEffect(() => {}, []);

  return (
    <>
      <div>
        <Modal
          {...props}
          // show={props.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Medication List
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card body className="bg-dark" style={{ paddingTop: 16 }}>
              <Table bordered hover variant="dark" className="text-center">
                <thead>
                  <tr>
                    <th style={{ paddingBottom: 17 }}>Medication Name</th>
                    <th style={{ paddingBottom: 17 }}>Mecication Dose</th>
                  </tr>
                </thead>
                <tbody>
                  {props.show ? (
                    props.data.medications.map((el, index) => (
                      <tr key={index}>
                        <td style={{ paddingTop: 14 }}>{el.medication_name ?? "-"}</td>
                        <td style={{ paddingTop: 14 }}>{el.medication_dose ?? "-"}</td>
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
      </div>
    </>
  );
};

export default MedicationListModal;
