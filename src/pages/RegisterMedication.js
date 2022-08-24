import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../lib/api'
import NavbarSuperAdmin from '../components/NavbarSuperAdmin'
import { Col, Container, Form, Row, Button, Spinner } from 'react-bootstrap'
import register from "../register.jpg";

// const RegisterMedication = () => {
// const [medication_name, setmedication_name] = useState("")
// const [medication_dose, setmedication_dose] = useState("")
// const [loading, setloading] = useState(false)
// const navigate = useNavigate()

//   const handleSubmit = async () => {
//     try {
//       setloading(true)
//       const url = `/api/medication/addMedication`
//       const response = await api.post(url, {
//         medication_name: medication_name,
//         medication_dose: medication_dose
//       })
//       alert("Success Registering Medication")
//       setloading(false)
//       navigate('/superadmin')
//     } catch (error) {
//       alert('Failed Registering Medication')
//     }
//     return (
//       <>
//         <NavbarSuperAdmin />
//         <Container>
//           <Row>
//             <Col md={5} style={{ height: "80vh" }}>
//               <Container className="h-100 d-flex align-items-center justify-content-center w-100">
//                 <Form
//                   action=""
//                   method="POST"
//                   encType=""
//                   onSubmit={(event) => {
//                     event.preventDefault();
//                     handleSubmit();
//                   }}
//                 >
//                   <Row>
//                     <Col md={6}>
//                       <h3>Register Medication</h3>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md={6}>
//                       <Form.Group className='mt-2'>
//                         <Form.Label>Medication Name</Form.Label>
//                         <Form.Control
//                           type="text"
//                           id="medication_name"
//                           placeholder="Medication Name"
//                           required
//                           onChange={(event) =>
//                             setmedication_name(event.target.value)
//                           }
//                           disabled={loading} />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group className='mt-2'>
//                         <Form.Label>Medication Dose</Form.Label>
//                         <Form.Control
//                           type="text"
//                           id="medication_dose"
//                           placeholder="Medication Dose"
//                           required
//                           onChange={(event) =>
//                             setmedication_dose(event.target.value)
//                           }
//                           disabled={loading} />
//                       </Form.Group>
//                     </Col>
//                     <Col md={12}>
//                       <div className="d-grid mt-2">
//                         <Button type="submit" variant="dark" disabled={loading}>
//                           {loading ? (
//                             <Spinner
//                               as="span"
//                               animation="border"
//                               size="sm"
//                               role="status"
//                               aria-hidden="true"
//                             />
//                           ) : (
//                             " "
//                           )}
//                           {loading ? "  Loading.." : "  Register"}
//                         </Button>
//                       </div>
//                     </Col>
//                   </Row>
//                 </Form>
//               </Container>
//             </Col>
//           </Row>
//         </Container>
//       </>
//     )
//   }
// }
const RegisterMedication = () => {
  const [medication_name, setmedication_name] = useState("")
  const [medication_dose, setmedication_dose] = useState("")
  const [loading, setloading] = useState(false)
  const navigate = useNavigate()
  // const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      setloading(true)
      const url = `/api/medication/addMedication`
      const response = await api.post(url, {
        medication_name: medication_name,
        medication_dose: medication_dose
      })
      alert("Success Registering Medication");
      setloading(false);
      navigate("/superadmin");
    } catch (error) {
      alert("Failed Registering Medication");
    }
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
                <Row>
                  <Col md={6}>
                    <h3>Register Medication</h3>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className='mt-2'>
                      <Form.Label>Medication Name</Form.Label>
                      <Form.Control
                        type="text"
                        id="medication_name"
                        placeholder="Medication Name"
                        required
                        onChange={(event) =>
                          setmedication_name(event.target.value)
                        }
                        disabled={loading} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mt-2'>
                      <Form.Label>Medication Dose</Form.Label>
                      <Form.Control
                        type="text"
                        id="medication_dose"
                        placeholder="Medication Dose"
                        required
                        onChange={(event) =>
                          setmedication_dose(event.target.value)
                        }
                        disabled={loading} />
                    </Form.Group>
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

export default RegisterMedication
