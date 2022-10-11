import { useEffect, useState } from "react";
import {
    Card,
    Button,
    Row,
    Col,
    Modal,
    CardBody,
    FormGroup,
    Form,
    Input,
    CardTitle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Navbar,
    Nav,
    Container,
    Media
} from "reactstrap";

const PatientManagement = () => {

    return (

        <>
            <div className="header bg-gradient-info pb-6 pt-2"></div >
            <Container fluid style={{ padding: 10 }}>
                {/* <div className="bg-gradient-info" > */}
                <Row style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Col lg="6" xl="4" >
                        <Card className=" mb-4 mb-lg-0">
                            <CardBody>
                                <Row>
                                    <Col className="col-auto">
                                        <img alt="..." src={require("../../assets/img/theme/team-1-800x800.jpg")} style={{ width: 200 }} />
                                    </Col>
                                    <div className="col" style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        alignContent: 'space-around',
                                    }}>
                                        <CardTitle className="text-uppercase text-muted mb-0">
                                            User Name (42 y/o WF)
                                        </CardTitle>
                                        <span className="h4 font-weight-bold mb-0">DOB: 6.8.1980</span>
                                        <p className="h4 font-weight-bold mb-0">Contact: H:
                                            <UncontrolledDropdown nav>
                                                <DropdownToggle className="pr-0" nav>
                                                    (597) 874-1810
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" right>
                                                    <DropdownItem to="/admin/user-profile"
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-around'
                                                        }}>
                                                        <span>My profile</span>
                                                        <i className="ni ni-single-02" />
                                                    </DropdownItem>
                                                    <DropdownItem to="/admin/user-profile">
                                                        <span>Settings</span>
                                                        <i className="ni ni-settings-gear-65" />
                                                    </DropdownItem>
                                                    <DropdownItem to="/admin/user-profile" >
                                                        <span>Activity</span>
                                                        <i className="ni ni-calendar-grid-58" />
                                                    </DropdownItem>
                                                    <DropdownItem to="/admin/user-profile" >
                                                        <span>Support</span>
                                                        <i className="ni ni-support-16" />
                                                    </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        <span>Logout</span>
                                                        <i className="ni ni-user-run" />
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </p>
                                        <p className="h4 font-weight-bold mb-0">Emergency:

                                            <UncontrolledDropdown nav>
                                                <DropdownToggle className="pr-0" nav>
                                                    Sellect preferred Contact
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" right>
                                                    <DropdownItem to="/admin/user-profile"
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-around'
                                                        }}>
                                                        <span>My profile</span>
                                                        <i className="ni ni-single-02" />
                                                    </DropdownItem>
                                                    <DropdownItem to="/admin/user-profile">
                                                        <span>Settings</span>
                                                        <i className="ni ni-settings-gear-65" />
                                                    </DropdownItem>
                                                    <DropdownItem to="/admin/user-profile" >
                                                        <span>Activity</span>
                                                        <i className="ni ni-calendar-grid-58" />
                                                    </DropdownItem>
                                                    <DropdownItem to="/admin/user-profile" >
                                                        <span>Support</span>
                                                        <i className="ni ni-support-16" />
                                                    </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        <span>Logout</span>
                                                        <i className="ni ni-user-run" />
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </p>
                                    </div>
                                </Row>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6" xl="2">
                        <Card className="card-stats mb-4 mb-lg-0">
                            <CardBody>
                                <Row>
                                    <div className="col">
                                        <CardTitle className="text-uppercase text-muted mb-0">
                                            DOLE:01/21/2021
                                        </CardTitle>
                                        <p className="h4 font-weight-bold mb-0">1° ins:
                                            <UncontrolledDropdown nav>
                                                <DropdownToggle className="pr-0" nav>
                                                    N/a
                                                    <i class="ni ni-bold-down"></i>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" right>
                                                    <DropdownItem to="/admin/user-profile"
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-around'
                                                        }}>
                                                        <span>My profile</span>
                                                        <i class="ni ni-bold-down"></i>
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </p>
                                        <p className="h4 font-weight-bold mb-0">2° ins:
                                            <UncontrolledDropdown nav>
                                                <DropdownToggle className="pr-0" nav>
                                                    N/a
                                                    <i class="ni ni-bold-down"></i>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" right>
                                                    <DropdownItem to="/admin/user-profile"
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-around'
                                                        }}>
                                                        <span>My profile</span>
                                                        <i class="ni ni-bold-down"></i>
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </p>
                                        <p className="h4 font-weight-bold mb-0">3° ins:
                                            <UncontrolledDropdown nav>
                                                <DropdownToggle className="pr-0" nav>
                                                    N/a
                                                    <i class="ni ni-bold-down"></i>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" right>
                                                    <DropdownItem to="/admin/user-profile"
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-around'
                                                        }}>
                                                        <span>My profile</span>
                                                        <i class="ni ni-bold-down"></i>
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </p>
                                    </div>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6" xl="3">
                        <Card className="card-stats mb-4 mb-lg-0">
                            <CardBody>
                                <Row>
                                    <div className="col">
                                        <p className="h4 font-weight-bold mb-0">Allergies:
                                            <UncontrolledDropdown nav>
                                                <DropdownToggle className="pr-0" nav>
                                                    NKDA
                                                    <i class="ni ni-bold-down"></i>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" right>
                                                    <DropdownItem to="/admin/user-profile"
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-around'
                                                        }}>
                                                        <span>My profile</span>
                                                        <i class="ni ni-bold-down"></i>
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </p>
                                        <p className="h4 font-weight-bold mb-0">Pharmacies:
                                            <UncontrolledDropdown nav>
                                                <DropdownToggle className="pr-0" nav>
                                                    Select Pharmacies
                                                    <i class="ni ni-bold-down"></i>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" right>
                                                    <DropdownItem to="/admin/user-profile"
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-around'
                                                        }}>
                                                        <span>My profile</span>
                                                        <i class="ni ni-bold-down"></i>
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </p>
                                        <CardTitle className="text-uppercase text-muted mb-0">
                                            Providers:John Smith, M.D. (Internal Medicine
                                        </CardTitle>
                                    </div>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6" xl="3">
                        <Card className="card-stats mb-4 mb-lg-0">
                            <CardBody>
                                <Row>
                                    <div className="col">
                                        <p className="h4 font-weight-bold mb-0">Weight:
                                            <UncontrolledDropdown nav>
                                                <DropdownToggle className="pr-0" nav>
                                                    220.46 lbs (100 kg)
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" right>
                                                    <DropdownItem to="/admin/user-profile"
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-around'
                                                        }}>
                                                        <span>My profile</span>
                                                        <i class="ni ni-bold-down"></i>
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </p>
                                        <p className="h4 font-weight-bold mb-0">Height:
                                            <UncontrolledDropdown nav>
                                                <DropdownToggle className="pr-0" nav>
                                                    5'9" (175.26 cm)
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" right>
                                                    <DropdownItem to="/admin/user-profile"
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-around'
                                                        }}>
                                                        <span>My profile</span>
                                                        <i class="ni ni-bold-down"></i>
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </p>
                                        <p className="h4 font-weight-bold mb-0">SeCr:
                                            <UncontrolledDropdown nav>
                                                <DropdownToggle className="pr-0" nav>
                                                    1 mg/dL
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" right>
                                                    <DropdownItem to="/admin/user-profile"
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-around'
                                                        }}>
                                                        <span>My profile</span>
                                                        <i class="ni ni-bold-down"></i>
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </p>
                                        <p className="h4 font-weight-bold mb-0">CrCl:
                                            <UncontrolledDropdown nav>
                                                <DropdownToggle className="pr-0" nav>
                                                    169.44 mL/min
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" right>
                                                    <DropdownItem to="/admin/user-profile"
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-around'
                                                        }}>
                                                        <span>My profile</span>
                                                        <i class="ni ni-bold-down"></i>
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </p>
                                        <p className="h4 font-weight-bold mb-0">BMI:
                                            <UncontrolledDropdown nav>
                                                <DropdownToggle className="pr-0" nav>
                                                    169.44 mL/min
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" right>
                                                    <DropdownItem to="/admin/user-profile"
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-around'
                                                        }}>
                                                        <span>My profile</span>
                                                        <i class="ni ni-bold-down"></i>
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </p>
                                    </div>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg='9' xl='9'>
                        <Row>
                            <Col lg="12" xl="12" >
                                <Card className=" mb-4 mb-lg-0" style={{ borderColor: '#e3e3e3' }}>
                                    <CardBody style={{ display: 'flex' }}>
                                        <Button color="info" outline type="button" className="function-btn">
                                            LOCATION<i class="ni ni-bold-down"></i>
                                        </Button>
                                        <Button color="info" outline type="button" className="function-btn">
                                            ADD NOTE<i class="ni ni-bold-down"></i>
                                        </Button>
                                        <Button color="info" outline type="button" className="function-btn">
                                            OLD NOTES<i class="ni ni-bold-down"></i>
                                        </Button>
                                        <Button color="info" outline type="button" className="function-btn">
                                            TYPE OF NOTE<i class="ni ni-bold-down"></i>
                                        </Button>
                                        <Button color="info" outline type="button" className="function-btn">
                                            SAVE COMPLATE
                                        </Button>
                                        <Button color="info" outline type="button" className="function-btn">
                                            PREVIEW
                                        </Button>
                                        <Button color="info" outline type="button" className="function-btn">
                                            SEND
                                        </Button>
                                        <Button color="info" outline type="button" className="function-btn">
                                            TEMPLATE
                                        </Button>
                                        <Button color="info" outline type="button" className="function-btn">
                                            DATE
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>

                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col lg="8" xl="3" >
                                <Card className=" mb-4 mb-lg-0 Answer" style={{ borderColor: '#e3e3e3' }}>
                                    <CardBody style={{
                                        display: 'flex',
                                        flexWrap: 'wrap'
                                    }}>
                                        <p className="Answer"><h4>Chief Complaints </h4></p>
                                        <p className="Answer"><h4>History of Present Illness</h4></p>
                                        <p className="Answer"><h4>Past Medical History</h4></p>
                                        <p className="Answer"><h4>Medications</h4></p>
                                        <p className="Answer"><h4>Social History</h4></p>
                                        <p className="Answer"><h4>Family History</h4></p>
                                        <p className="Answer"><h4>Review of System</h4></p>
                                        <p className="Answer"><h4>Physical Exam</h4></p>

                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="8" xl="9" style={{ display: 'flex' }}>
                                <Card className=" mb-4 mb-lg-0" style={{ borderColor: '#e3e3e3', flexGrow: 1, textAlign: 'center' }}>
                                    <CardBody >
                                        Problems Toolbar
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg='3' xl='3' style={{ display: 'flex' }}>
                        <Card className=" mb-4 mb-lg-0" style={{ borderColor: '#e3e3e3', flexGrow: 1 }}>
                            <CardBody >
                                Problems Toolbar
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                {/* </div> */}
            </Container>
        </>
    );
};

export default PatientManagement;
