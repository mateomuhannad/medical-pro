import { useEffect, useState } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Modal,
  CardBody,
  FormGroup,
  Form,
  Input
} from "reactstrap";
import PatientInfo from './PatientInfo';


const PatientManagement = () => {

  const arrowCol = [
    {
      userImg: <img alt="..." src={require("../../assets/img/theme/team-1-800x800.jpg")} />,
      userName: 'Jhon Mateo'
    },
    {
      userImg: <img alt="..." src={require("../../assets/img/theme/team-1-800x800.jpg")} />,
      userName: 'Jhon Mateo'
    },
    {
      userImg: <img alt="..." src={require("../../assets/img/theme/team-1-800x800.jpg")} />,
      userName: 'Jhon Mateo'
    },
    {
      userImg: <img alt="..." src={require("../../assets/img/theme/team-1-800x800.jpg")} />,
      userName: 'Jhon Mateo'
    },
    {
      userImg: <img alt="..." src={require("../../assets/img/theme/team-1-800x800.jpg")} />,
      userName: 'Jhon Mateo'
    },
    {
      userImg: <img alt="..." src={require("../../assets/img/theme/team-1-800x800.jpg")} />,
      userName: 'Jhon Mateo'
    },
    {
      userImg: <img alt="..." src={require("../../assets/img/theme/team-1-800x800.jpg")} />,
      userName: 'Jhon Mateo'
    },
    {
      userImg: <img alt="..." src={require("../../assets/img/theme/team-1-800x800.jpg")} />,
      userName: 'Jhon Mateo'
    },
    {
      userImg: <img alt="..." src={require("../../assets/img/theme/team-1-800x800.jpg")} />,
      userName: 'Jhon Mateo'
    },
    {
      userImg: <img alt="..." src={require("../../assets/img/theme/team-1-800x800.jpg")} />,
      userName: 'Jhon Mateo'
    }
  ]
  const [userInfo, setUserInfo] = useState(true);
  const [state, setState] = useState(false);
  const toggleModal = () => {
    setState(!state);
  };
  const patientInfo = () => {
    setUserInfo(false);
  }

  useEffect(() => {
    setUserInfo(true);
  }, []);

  return (

    <>
      {userInfo ? <div>
        <div className="header bg-gradient-info pb-6 pt-2"></div >
        <div style={{ padding: 10 }}>
          <Container fluid>
            <div className="header-body" >
              {/* Card stats */}
              <Button color="primary" size="lg" type="button" onClick={toggleModal}>
                New Patient
              </Button>
              <Row>
                {arrowCol.map((index, i) => {
                  return (
                    <Col lg="6" xl="3" key={i} style={{ padding: 14, height: '100%' }}>
                      <Card className="card-stats  bg-gradient-info mb-4 mb-xl-0" style={{ cursor: 'pointer' }} onClick={patientInfo}>
                        <CardBody>
                          <Row style={{
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            <Col className="col-auto" style={{ height: '100%' }}>
                              <span className="avatar avatar-sm rounded-circle">
                                {index.userImg}
                              </span>
                            </Col>
                            <Col>
                              <h2>
                                {index.userName}
                              </h2>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  )
                })}
              </Row>
            </div>
          </Container>
          <Modal
            className="modal-dialog-centered"
            isOpen={state}
            toggle={toggleModal}
          >
            <div className="modal-body">
              <Col className="order-xl-1" xl="12">
                <Card className="bg-secondary shadow">
                  <CardBody>
                    <Form>
                      <h6 className="heading-small text-muted mb-4">
                        Please enter user information
                      </h6>
                      <div className="pl-lg-12">
                        <Row>
                          <Col lg="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-username"
                              >
                                Username
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue="lucky.jesse"
                                id="input-username"
                                placeholder="Username"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-email"
                              >
                                Email address
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-email"
                                placeholder="jesse@example.com"
                                type="email"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                First name
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue="Lucky"
                                id="input-first-name"
                                placeholder="First name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                Last name
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue="Jesse"
                                id="input-last-name"
                                placeholder="Last name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      <hr className="my-4" />
                      {/* Address */}
                      <h6 className="heading-small text-muted mb-4">
                        Contact information
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-address"
                              >
                                Address
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                id="input-address"
                                placeholder="Home Address"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-city"
                              >
                                City
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue="New York"
                                id="input-city"
                                placeholder="City"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-country"
                              >
                                Country
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue="United States"
                                id="input-country"
                                placeholder="Country"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-country"
                              >
                                Postal code
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-postal-code"
                                placeholder="Postal code"
                                type="number"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      {/* <hr className="my-4" /> */}
                      {/* Description */}
                      {/* <h6 className="heading-small text-muted mb-4">About me</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="A few words about you ..."
                          rows="4"
                          defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                        Open Source."
                          type="textarea"
                        />
                      </FormGroup>
                    </div> */}
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </div>
            <div className="modal-footer">
              <Button
                color="secondary"
                data-dismiss="modal"
                type="button"
                onClick={toggleModal}
              >
                Close
              </Button>
              <Button color="primary" type="button">
                Save changes
              </Button>
            </div>
          </Modal>
        </div>
      </div>
        :
        <PatientInfo />}

    </>
  );
};

export default PatientManagement;
