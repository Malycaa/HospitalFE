import React, { useEffect, useState } from "react";
import { Button, Form, Container, Card, Spinner } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import NavbarDoctors from "../components/NavbarDoctors";
import api from "../lib/api";
import ViewPatient from "./ViewPatient";

const PatientTable = () => {
  const [getSearch, setSearch] = useState("");
  const [getLoading, setLoading] = useState(false);
  const [getData, setData] = useState([]);
  const [getSelectedId, setSelectedId] = useState(0);
  const [getModalShow, setModalShow] = useState(false);
  const [getInit, setInit] = useState(true);

  const getPatientData = async () => {
    try {
      setLoading(true);
      const ls = require("localstorage-ttl");
      const data = ls.get("user");
      const url = `/api/patient/inquiryPatient`;
      await api
        .post(url, {
          patient_name: getSearch,
          user_id: data.user_id,
        })
        .then((result) => {
          setData([...result.data.data]);
          setLoading(false);
        });
    } catch (error) {
      alert(error);
    }
  };

  const modalAction = (x) => {
    console.log("masok");
    setSelectedId(x);
    setTimeout(() => {
      setModalShow(true);
    }, 100);
  };

  useEffect(() => {
    if (getInit) {
      getPatientData();
      setInit(false);
    }
  }, []);

  return (
    <>
      <NavbarDoctors />
      <div style={{ height: "80vh", paddingLeft:20, paddingRight:20 }}>
        <Form className="d-flex w-50">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(event) => setSearch(event.target.value)}
          />
          <Button variant="dark" onClick={getPatientData}>
            Search
          </Button>
        </Form>
        <br></br>
        {!getLoading ? (
          <Card body className="bg-dark">
            <Table
              // striped
              // bordered
              hover
              variant="dark"
              className="text-center"
            >
              <thead>
                <tr>
                  <th style={{ paddingBottom: 17 }}>Patient Name</th>
                  <th style={{ paddingBottom: 17 }}>Gender</th>
                  <th style={{ paddingBottom: 17 }}>Complaints</th>
                  <th style={{ paddingBottom: 17 }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {getData.map((el, index) => (
                  <tr key={index}>
                    <td style={{ paddingTop: 14 }}>{el.patient_name}</td>
                    <td style={{ paddingTop: 14 }}>{el.gender}</td>
                    <td style={{ paddingTop: 14 }}>{el.complaints}</td>
                    <td>
                      <Button
                        className="bg-white text-dark"
                        style={{ borderColor: "white" }}
                        onClick={() => modalAction(el.patient_id)}
                      >
                        View
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
        <ViewPatient
          patient_id={getSelectedId}
          show={getModalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
};

export default PatientTable;
