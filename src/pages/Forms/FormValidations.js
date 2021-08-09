import React, { useState } from "react"
import MetaTags from "react-meta-tags"

import {
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
                          {/**<AvField
                          name="lastname"
                          placeholder="Last name"
                          type="text"
                          errorMessage="Enter Last name"
                          className="form-control"
                          validate={{ required: { value: true } }}
                          id="validationCustom02"
                        /> */}
                          <Label htmlFor="validationCustom02">جۆری عەرز</Label>

                          <Dropdown
                            isOpen={singlebtn1}
                            toggle={() => setSinglebtn1(!singlebtn1)}
                          >
                            <DropdownToggle
                              className="form-control"
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
                          <Label htmlFor="validationCustom02">
                            ژمارەی مۆبایل
                          </Label>
                          <AvField
                            name="mobile"
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
                            ناوی فرۆشیار
                          </Label>
                          <AvField
                            name="froshyar"
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
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">ڕووبەر</Label>
                          <AvField
                            name="rwabar"
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
                          {/**<AvField
                        name="lastname"
                        placeholder="Last name"
                        type="text"
                        errorMessage="Enter Last name"
                        className="form-control"
                        validate={{ required: { value: true } }}
                        id="validationCustom02"
                      /> */}
                          <Label htmlFor="validationCustom02">ڕووگە</Label>

                          <Dropdown
                            isOpen={singlebtn2}
                            toggle={() => setSinglebtn2(!singlebtn2)}
                          >
                            <DropdownToggle
                              className="form-control"
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

                      {/** <Col md="3" sm="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom02">Last name</Label>
                          <AvField
                            name="lastname"
                            placeholder="Last name"
                            type="text"
                            errorMessage="Enter Last name"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom02"
                          />
                        </FormGroup>
                      </Col>*/}

                      <Col md="3" sm="6">
                        <FormGroup className="mb-3">
                          {/**<AvField
                            name="lastname"
                            placeholder="Last name"
                            type="text"
                            errorMessage="Enter Last name"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom02"
                          /> */}
                          <Label htmlFor="validationCustom02">
                            جۆری خاوەندارێتی
                          </Label>

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
                          {/**<AvField
                            name="lastname"
                            placeholder="Last name"
                            type="text"
                            errorMessage="Enter Last name"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom02"
                          /> */}
                          <Label htmlFor="validationCustom02">جۆری موڵک</Label>

                          <Dropdown
                            isOpen={singlebtn4}
                            toggle={() => setSinglebtn4(!singlebtn4)}
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
                      {/** <Col md="3" sm="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom02">Last name</Label>
                          <AvField
                            name="lastname"
                            placeholder="Last name"
                            type="text"
                            errorMessage="Enter Last name"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom02"
                          />
                        </FormGroup>
                      </Col> */}
                    </Row>
                    <Row>
                      <Col md="3" sm="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">
                            پێشەکی مانگانە
                          </Label>
                          <AvField
                            name="peshaki"
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
                          <Label htmlFor="validationCustom02">نرخ</Label>
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
                            ژمارەی خانوو
                          </Label>
                          <AvField
                            name="jmaray xanu"
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
                          <Label htmlFor="validationCustom02">واجهە</Label>
                          <AvField
                            name="wajha"
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
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">
                            ژمارەی نهۆم
                          </Label>
                          <AvField
                            name="jmaray nhom"
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
                          {/**<AvField
                        name="lastname"
                        placeholder="Last name"
                        type="text"
                        errorMessage="Enter Last name"
                        className="form-control"
                        validate={{ required: { value: true } }}
                        id="validationCustom02"
                      /> */}

                          <Label htmlFor="validationCustom02">
                            ناوی خاوەن موڵک
                          </Label>
                          <AvField
                            name="xawan mulk"
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
                            ژمارەی زەوی
                          </Label>
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
                    <Row>
                      <Col md="3" sm="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">وڵات</Label>
                          <Dropdown
                            isOpen={singlebtn5}
                            toggle={() => setSinglebtn5(!singlebtn5)}
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
                          {/**<AvField
                      name="lastname"
                      placeholder="Last name"
                      type="text"
                      errorMessage="Enter Last name"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="validationCustom02"
                    /> */}

                          <Label htmlFor="validationCustom02">
                            ژمارەی حەمام و ئاودەست
                          </Label>
                          <AvField
                            name="jmaray 7amam"
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
                            ژمارەی ژووری نوستن
                          </Label>
                          <AvField
                            name="nustn"
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
                            ژمارەی ژوور
                          </Label>
                          <AvField
                            name="rooms"
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
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">لق</Label>
                          <Dropdown
                            isOpen={singlebtn7}
                            toggle={() => setSinglebtn7(!singlebtn7)}
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
                          {/**<AvField
                    name="lastname"
                    placeholder="Last name"
                    type="text"
                    errorMessage="Enter Last name"
                    className="form-control"
                    validate={{ required: { value: true } }}
                    id="validationCustom02"
                  /> */}

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
                          <Label htmlFor="validationCustom02">قەزا </Label>
                          <Dropdown
                            isOpen={singlebtn9}
                            toggle={() => setSinglebtn9(!singlebtn9)}
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
                          <Label htmlFor="validationCustom02">شار </Label>
                          <Dropdown
                            isOpen={singlebtn}
                            toggle={() => setSinglebtn(!singlebtn)}
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
                    </Row>
                    <Row>
                      <Col md="4" sm="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom03">تێبینی</Label>
                          <AvField
                            name="tebini"
                            type="text"
                            errorMessage=" Please provide a valid city."
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom03"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="2" md="3" sm="4" xs="4">
                        <Button color="success" type="submit">
                          زیادکردن
                        </Button>
                      </Col>
                      <Col lg="2" md="3" sm="4" xs="4">
                        <Button color="info" type="submit">
                          گۆڕین
                        </Button>
                      </Col>
                      <Col lg="2" md="3" sm="4" xs="4">
                        <Button color="danger" type="submit">
                          سڕینەوە
                        </Button>
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
