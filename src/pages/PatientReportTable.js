import * as React from "react";
import { useState, useEffect } from "react";
import api from "../lib/api";
import { Button, Form, Container, Card, Spinner, Table } from "react-bootstrap";
import NavbarSuperAdmin from "../components/NavbarSuperAdmin";
import { truncate, today } from "../lib/Utils";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { LightTooltip, HtmlTooltip } from "../lib/Common";
import TreatmentMoodal from "./TreatmentModal";

const PatientReportTable = () => {
  const [getSearch, setSearch] = useState("");
  const [getLoading, setLoading] = useState(false);
  const [getData, setData] = useState([]);
  const [getModalShow, setModalShow] = useState(false);
  const [getInit, setInit] = useState(true);
  const [getSelected, setSelected] = useState({});

  useEffect(() => {
    if (getInit) {
      getApiData();
      setInit(false);
    }
  }, []);

  const getApiData = async () => {
    const url = `/api/patient/inquiryPatientByAdmin`;
    try {
      setLoading(true);
      await api
        .post(url, {
          value: getSearch,
        })
        .then((result) => {
          setData([...result.data.data]);
          setLoading(false);
        });
    } catch (error) {
      alert(error);
    }
  };

  const deleteApiData = async (props) => {
    const url = `/api/patient/deletePatientById/${props.patient_id}`;
    console.log(props.patient_id)
    try {
      setLoading(true);
      await api
        .delete(url)
        .then((result) => {
          if (result.status !== 200) {
            alert('delete failed')
          } else {
            getApiData()
          }
          // setLoading(false);
        });
    } catch (error) {
      alert(error);
    }
  };

  const tapSelectEvent = (el) => {
    setSelected(el);
    setTimeout(() => {
      setModalShow(true);
    }, 100);
  };

  return (
    <>
      <NavbarSuperAdmin />
      <div style={{ height: "80vh", paddingLeft: 20, paddingRight: 20 }}>
        <Form className="d-flex w-50">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(event) => setSearch(event.target.value)}
          />
          <Button variant="dark" onClick={getApiData}>
            Search
          </Button>
        </Form>
        <br></br>
        {!getLoading ? (
          <Card body className="bg-dark" style={{ paddingTop: 16 }}>
            <Table
              // striped
              bordered
              hover
              variant="dark"
            // className="text-center"
            >
              <thead>
                <tr>
                  <th style={{ paddingBottom: 17 }}>Patient Name</th>
                  <th style={{ paddingBottom: 17 }}>Gender</th>
                  <th style={{ paddingBottom: 17 }}>Birth Place</th>
                  <th style={{ paddingBottom: 17 }}>Birth Date</th>
                  <th style={{ paddingBottom: 17 }}>Address</th>
                  <th style={{ paddingBottom: 17 }}>Complaints</th>
                  <th style={{ paddingBottom: 17 }}>Registration Date</th>
                  <th style={{ paddingBottom: 17 }} className="text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {getData.map((el, index) => (
                  <tr key={index}>
                    <td style={{ paddingTop: 14 }}>{el.patient_name}</td>
                    <td style={{ paddingTop: 14 }}>{el.gender}</td>
                    <td style={{ paddingTop: 14 }}>{el.birth_place}</td>
                    <td style={{ paddingTop: 14 }}>{today(el.birth_date)}</td>
                    <HtmlTooltip
                      title={
                        <React.Fragment>
                          <Form.Group
                            className="mt-2 text-start"
                            style={{ paddingBottom: 10 }}
                          >
                            <h6 style={{ fontWeight: "bold" }}>Address</h6>
                            <Form.Control
                              as="textarea"
                              id="address"
                              placeholder="Address"
                              value={el.address ?? ""}
                              required
                              disabled
                            />
                          </Form.Group>
                        </React.Fragment>
                      }
                      placement="right"
                    >
                      <td style={{ paddingTop: 14 }}>
                        {truncate(el.address, 7)}
                      </td>
                    </HtmlTooltip>
                    <HtmlTooltip
                      title={
                        <React.Fragment>
                          <Form.Group
                            className="mt-2 text-start"
                            style={{ paddingBottom: 10 }}
                          >
                            <h6 style={{ fontWeight: "bold" }}>Complaints</h6>
                            <Form.Control
                              as="textarea"
                              id="complaints"
                              placeholder="Complaints"
                              value={el.complaints ?? ""}
                              required
                              disabled
                            />
                          </Form.Group>
                        </React.Fragment>
                      }
                      placement="right"
                    >
                      <td style={{ paddingTop: 14 }} disabled>
                        {truncate(el.complaints, 7)}
                      </td>
                    </HtmlTooltip>
                    <td style={{ paddingTop: 14 }}>
                      {today(el.registrationDate)}
                    </td>
                    <td className="text-center">
                      <Button
                        className="bg-white text-dark"
                        style={{ borderColor: "white" }}
                        onClick={() => tapSelectEvent(el)}
                      >
                        View
                      </Button>
                      &nbsp;&nbsp;
                      <Button
                        className="bg-white text-dark"
                        style={{ borderColor: "white" }}
                        onClick={() => deleteApiData(el)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        ) : (
          <Container className="text-center" style={{ paddingTop: 70 }}>
            <Spinner
              as="span"
              animation="border"
              size="lg"
              role="status"
              aria-hidden="true"
            />
          </Container>
        )}
        <TreatmentMoodal
          show={getModalShow}
          data={getSelected}
          onHide={() => setModalShow(false)}
        />
        <h6 style={{ fontWeight: "bold" }}>&nbsp;</h6>
        <h6 style={{ fontWeight: "bold" }}>&nbsp;</h6>
      </div>
    </>
  );
};

export default PatientReportTable;
