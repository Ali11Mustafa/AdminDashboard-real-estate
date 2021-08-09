import React, { useState } from "react"
import MetaTags from "react-meta-tags"
import { MDBDataTable } from "mdbreact"
import "../Tables/datatables.scss"

import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
  CardTitle,
  CardSubtitle,
  Label,
  Input,
  Container,
  CustomInput,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  ButtonDropdown,
  InputGroup,
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import Flatpickr from "react-flatpickr"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const FormValidations = () => {
  const [fnm, setfnm] = useState(false)
  const [lnm, setlnm] = useState(false)
  const [unm, setunm] = useState(false)
  const [city, setcity] = useState(false)
  const [stateV, setstateV] = useState(false)
  const [singlebtn, setSinglebtn] = useState(false)
  const [singlebtn1, setSinglebtn1] = useState(false)
  const [singlebtn2, setSinglebtn2] = useState(false)
  const [singlebtn3, setSinglebtn3] = useState(false)
  const [singlebtn4, setSinglebtn4] = useState(false)
  const [singlebtn5, setSinglebtn5] = useState(false)
  const [singlebtn6, setSinglebtn6] = useState(false)
  const [singlebtn7, setSinglebtn7] = useState(false)
  const [singlebtn8, setSinglebtn8] = useState(false)
  const [singlebtn9, setSinglebtn9] = useState(false)
  const [singlebtn10, setSinglebtn10] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    var fnm = document.getElementById("validationTooltip01").value
    var lnm = document.getElementById("validationTooltip02").value
    var unm = document.getElementById("validationTooltipUsername").value
    var city = document.getElementById("validationTooltip03").value
    var stateV = document.getElementById("validationTooltip04").value

    if (fnm === "") {
      setfnm(false)
    } else {
      setfnm(true)
    }

    if (lnm === "") {
      setlnm(false)
    } else {
      setlnm(true)
    }

    if (unm === "") {
      setunm(false)
    } else {
      setunm(true)
    }

    if (city === "") {
      setcity(false)
    } else {
      setcity(true)
    }

    if (stateV === "") {
      setstateV(false)
    } else {
      setstateV(true)
    }

    var d1 = document.getElementsByName("validate")

    document.getElementById("tooltipForm").classList.add("was-validated")

    for (var i = 0; i < d1.length; i++) {
      d1[i].style.display = "block"
    }
  }

  //for change tooltip display propery
  function changeHandeler(event, eleId) {
    if (event.target.value !== "")
      document.getElementById(eleId).style.display = "none"
    else document.getElementById(eleId).style.display = "block"
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Form" breadcrumbItem="Form Validation" />
          <Row>
            <Col xl="12">
              <Card>
                <CardBody>
                  <AvForm className="needs-validation">
                    <Row>
                      <Col md="3" sm="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">
                            ناو-شوێن-گەڕەک
                          </Label>
                          <AvField
                            name="naw-shwen"
                            type="text"
                            errorMessage="Enter First Name"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom01"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="3" sm="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom02">
                            جۆری داواکردن
                          </Label>
                          <AvField
                            name="nrx"
                            type="text"
                            errorMessage="Enter Last name"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom02"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="3" sm="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom02">
                            ژمارەی مۆبایل
                          </Label>
                          <AvField
                            name="jmaray mobail"
                            type="text"
                            errorMessage="Enter Last name"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom02"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="3" sm="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom02">داواکار</Label>
                          <AvField
                            name="dawakar"
                            type="text"
                            errorMessage="Enter Last name"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom02"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="3" sm="6">
                        <h1></h1>
                      </Col>
                      <Col md="3" sm="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom02">تێبینی</Label>
                          <AvField
                            style={{ padding: "20px", marginTop: "-5px" }}
                            name="jmaray zawey"
                            type="text"
                            errorMessage="Enter Last name"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom02"
                          />
                        </FormGroup>
                      </Col>

                      <Col md="3" sm="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">جۆری موڵک</Label>
                          <Dropdown
                            isOpen={singlebtn3}
                            toggle={() => setSinglebtn3(!singlebtn3)}
                          >
                            <DropdownToggle
                              className="form-control"
                              caret
                              style={{ textAlign: "left" }}
                            >
                              <i className="mdi mdi-chevron-down" />
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem>A</DropdownItem>
                              <DropdownItem>B</DropdownItem>
                              <DropdownItem>C</DropdownItem>
                              <DropdownItem>D</DropdownItem>
                              <DropdownItem>E</DropdownItem>
                              <DropdownItem>F</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </FormGroup>
                      </Col>
                      <Col md="3" sm="6">
                        <FormGroup className="mb-3">
                          <Label>بەروار</Label>
                          <InputGroup>
                            {/* <DatePicker
                          selected={startDate}
                          onChange={date => setStartDate(date)}
                          dateFormat="MM/yyyy"
                          showMonthYearPicker
                        /> */}
                            <Flatpickr
                              className="form-control d-block"
                              placeholder="dd M,yyyy"
                              options={{
                                altInput: true,
                                altFormat: "F j, Y",
                                dateFormat: "Y-m-d",
                              }}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col lg="4" md="4" sm="4" xs="4">
                        <Button color="success" type="submit">
                          زیادکردن
                        </Button>
                      </Col>
                      <Col lg="4" md="4" sm="6" sm="4" xs="4">
                        <Button color="info" type="submit">
                          زیادکردن
                        </Button>
                      </Col>

                      <Col lg="4" md="4" sm="6" sm="4" xs="4">
                        <Button color="danger" type="submit">
                          زیادکردن
                        </Button>
                      </Col>
                    </Row>
                    <Row className="mb-5 mt-5">
                      <h1 style={{ textAlign: "center" }}>گەڕان</h1>
                    </Row>
                    <Row>
                      <Col md="3" sm="6"></Col>
                      <Col md="3" sm="6"></Col>

                      <Col md="3" sm="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom02">ناحیە</Label>

                          <Dropdown
                            isOpen={singlebtn8}
                            toggle={() => setSinglebtn8(!singlebtn8)}
                          >
                            <DropdownToggle
                              className="form-control"
                              caret
                              style={{ textAlign: "left" }}
                            >
                              <i className="mdi mdi-chevron-down" />
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem>A</DropdownItem>
                              <DropdownItem>B</DropdownItem>
                              <DropdownItem>C</DropdownItem>
                              <DropdownItem>D</DropdownItem>
                              <DropdownItem>E</DropdownItem>
                              <DropdownItem>F</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </FormGroup>
                      </Col>

                      <Col md="3" sm="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">جۆری عەرز</Label>

                          <AvField
                            name="jmaray zawey"
                            type="text"
                            errorMessage="Enter Last name"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom02"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <Card>
                          <CardBody>
                            <div className="table-responsive">
                              <Table className="table mb-0">
                                <thead>
                                  <tr>
                                    <th>دەستکاری</th>
                                    <th>سڕینەوە</th>
                                    <th>ناوی داواکار</th>
                                    <th>ژمارەی مۆبایل</th>
                                    <th>جۆری داواکاری</th>
                                    <th>شوێن</th>
                                    <th>جۆری موڵک</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <Button color="dark">دەستکاری</Button>
                                    </td>
                                    <td>
                                      <Button color="danger">سڕینەوە</Button>
                                    </td>
                                    <td>ئەحمەد</td>
                                    <td>٠٧٥٠١٢٣٤٥٦٧</td>
                                    <td>فرۆشتن</td>
                                    <td>کۆیە</td>
                                    <td>دوکان</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Button color="dark">دەستکاری</Button>
                                    </td>
                                    <td>
                                      <Button color="danger">سڕینەوە</Button>
                                    </td>
                                    <td>ئەحمەد</td>
                                    <td>٠٧٥٠١٢٣٤٥٦٧</td>
                                    <td>فرۆشتن</td>
                                    <td>کۆیە</td>
                                    <td>دوکان</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Button color="dark">دەستکاری</Button>
                                    </td>
                                    <td>
                                      <Button color="danger">سڕینەوە</Button>
                                    </td>
                                    <td>ئەحمەد</td>
                                    <td>٠٧٥٠١٢٣٤٥٦٧</td>
                                    <td>فرۆشتن</td>
                                    <td>کۆیە</td>
                                    <td>دوکان</td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </AvForm>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default FormValidations
