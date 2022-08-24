import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { today, truncate } from "../lib/Utils";
import { Button, Container, Form, Row, Col, Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import MedicationListModal from "./MedicationListModal";
import { LightTooltip, HtmlTooltip } from "../lib/Common";

const TreatmentMoodal = (props) => {
  const [getModalShow, setModalShow] = useState(false);
  const [getSelected, setSelected] = useState({});

  useEffect(() => {}, []);

  const tapSelectEvent = (el) => {
    setSelected(el);
    setTimeout(() => {
      setModalShow(true);
    }, 100);
  };

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
              Treatments
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card body className="bg-dark" style={{ paddingTop: 16 }}>
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
                        <td style={{ paddingTop: 14 }}>{el.sickness ?? "-"}</td>
                        <LightTooltip title={el.sickness_desc} placement="top">
                          <td style={{ paddingTop: 14 }}>
                            {truncate(el.sickness_desc ?? "-", 7)}
                          </td>
                        </LightTooltip>
                        <LightTooltip
                          title={el.sickness_handling}
                          placement="top"
                        >
                          <td style={{ paddingTop: 14 }}>
                            {truncate(el.sickness_handling ?? "-", 7)}
                          </td>
                        </LightTooltip>

                        <td style={{ paddingTop: 14 }}>
                          {today(el.createTime)}
                        </td>
                        <td>
                          <Button
                            className="bg-white text-dark"
                            style={{ borderColor: "white" }}
                            onClick={() => tapSelectEvent(el)}
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
        <MedicationListModal
          show={getModalShow}
          data={getSelected}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
};

export default TreatmentMoodal;
