import React from "react"
import MetaTags from "react-meta-tags"

import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Input,
  InputGroup,
} from "reactstrap"
import Flatpickr from "react-flatpickr"
import Breadcrumbs from "../../components/Common/Breadcrumb"

const BasicTable = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Basic Tables | Veltrix - Responsive Bootstrap 5 Admin Dashboard
          </title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs
            maintitle="Veltrix"
            title="Tables"
            breadcrumbItem="Basic Tables"
          />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <Row>
                    <Col md={3}>
                      <Row className="mb-3">
                        <div className="col-lg-9">
                          <label
                            htmlFor="txtLastNameBilling"
                            className="col-lg-11 col-form-label"
                          >
                            جۆری خەرجی
                          </label>
                          <Input
                            id="txtLastNameBilling"
                            name="txtLastNameBilling"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </Row>
                    </Col>
                    <Col md={3}>
                      <Row className="mb-3">
                        <div className="col-lg-9">
                          <label
                            htmlFor="txtLastNameBilling"
                            className="col-lg-11 col-form-label"
                          >
                            بڕی پارە
                          </label>
                          <Input
                            id="txtLastNameBilling"
                            name="txtLastNameBilling"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </Row>
                    </Col>
                    <Col md={3}>
                      <Row className="mb-3">
                        <div className="col-lg-9">
                          <label
                            htmlFor="txtFirstNameBilling"
                            className="col-lg-11 col-form-label"
                          >
                            بەرواری خەرجی
                          </label>
                          <InputGroup>
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
                        </div>
                      </Row>
                    </Col>
                    <Col md={3}>
                      <Row className="mb-3">
                        <div className="col-lg-9">
                          <label
                            htmlFor="ddlCreditCardType"
                            className="col-lg-11 col-form-label"
                          >
                            ناوی بەکاربەر
                          </label>
                          <Input
                            type="select"
                            id="ddlCreditCardType"
                            name="ddlCreditCardType"
                            className="form-select"
                          >
                            <option value="MC">ئەحمەد</option>
                            <option value="DI">محمد</option>
                          </Input>
                        </div>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mt-3 mb-3">
                    <Col md={3}>
                      <Row className="mb-3">
                        <div className="col-lg-9">
                          <Button color="success">زیادکرن</Button>
                        </div>
                      </Row>
                    </Col>
                    <Col md={3}>
                      <Row className="mb-3">
                        <div className="col-lg-9">
                          <Button color="danger">سڕینەوە</Button>
                        </div>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}>
                      <Row className="mb-3">
                        <div className="col-lg-9">
                          <label
                            htmlFor="ddlCreditCardType"
                            className="col-lg-11 col-form-label"
                          >
                            <p></p>
                          </label>
                          گەڕان بۆ خەرجیەکان
                        </div>
                      </Row>
                    </Col>
                    <Col md={3}>
                      <Row className="mb-3">
                        <div className="col-lg-9">
                          <label
                            htmlFor="txtFirstNameBilling"
                            className="col-lg-9 col-form-label"
                          >
                            لە
                          </label>
                          <InputGroup>
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
                        </div>
                      </Row>
                    </Col>
                    <Col md={3}>
                      <Row className="mb-3">
                        <div className="col-lg-9">
                          <label
                            htmlFor="txtFirstNameBilling"
                            className="col-lg-11 col-form-label"
                          >
                            بۆ
                          </label>
                          <InputGroup>
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
                        </div>{" "}
                      </Row>
                    </Col>
                  </Row>

                  <div className="table-responsive">
                    <Table className="table mb-0">
                      <thead>
                        <tr>
                          <th>جۆری خەرجی</th>
                          <th>بڕی پارە</th>
                          <th>بەرواری</th>
                          <th>بەکاربەر</th>
                          <th>ژمارە</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>زەوی</td>
                          <td>کارت</td>
                          <td>باشور</td>
                          <td>٢٠٠٠</td>
                          <td>کۆیە</td>
                        </tr>
                        <tr>
                          <td>زەوی</td>
                          <td>کارت</td>
                          <td>باشور</td>
                          <td>٢٠٠٠</td>
                          <td>کۆیە</td>
                        </tr>
                        <tr>
                          <td>زەوی</td>
                          <td>کارت</td>
                          <td>باشور</td>
                          <td>٢٠٠٠</td>
                          <td>کۆیە</td>
                        </tr>
                        <tr>
                          <td>زەوی</td>
                          <td>کارت</td>
                          <td>باشور</td>
                          <td>٢٠٠٠</td>
                          <td>کۆیە</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BasicTable
