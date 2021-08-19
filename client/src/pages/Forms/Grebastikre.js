import React, { useState } from "react"
import MetaTags from "react-meta-tags"

import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Label,
  FormGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  ButtonDropdown,
  InputGroup,
} from "reactstrap"

import classnames from "classnames"
import { Link } from "react-router-dom"
import Flatpickr from "react-flatpickr"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const FormWizard = () => {
  const [activeTab, setactiveTab] = useState(1)
  const [activeTabProgress, setactiveTabProgress] = useState(1)
  const [progressValue, setprogressValue] = useState(25)
  const [activeTabVartical, setoggleTabVertical] = useState(1)
  const [singlebtn1, setSinglebtn1] = useState(false)

  function toggleTab(tab) {
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab)
      }
    }
  }

  function toggleTabVertical(tab) {
    if (activeTabVartical !== tab) {
      if (tab >= 1 && tab <= 4) {
        setoggleTabVertical(tab)
      }
    }
  }

  function toggleTabProgress(tab) {
    if (activeTabProgress !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTabProgress(tab)

        if (tab === 1) {
          setprogressValue(25)
        }
        if (tab === 2) {
          setprogressValue(50)
        }
        if (tab === 3) {
          setprogressValue(75)
        }
        if (tab === 4) {
          setprogressValue(100)
        }
      }
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Form Wizard | Veltrix - Responsive Bootstrap 5 Admin Dashboard
          </title>
        </MetaTags>
        <Container fluid={true} style={{ direction: "rtl" }}>
          <Breadcrumbs
            maintitle="Veltrix"
            title="Forms"
            breadcrumbItem="Form Wizard"
          />

          <Row>
            <Col sm="12">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Basic Wizard</h4>
                  <div className="form-horizontal form-wizard-wrapper wizard clearfix">
                    <div className="steps clearfix">
                      <ul>
                        <NavItem
                          className={classnames({ current: activeTab === 1 })}
                        >
                          <NavLink
                            className={classnames({ current: activeTab === 1 })}
                            onClick={() => {
                              setactiveTab(1)
                            }}
                          >
                            <span className="number">1</span>
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 2 })}
                        >
                          <NavLink
                            className={classnames({ active: activeTab === 2 })}
                            onClick={() => {
                              setactiveTab(2)
                            }}
                          >
                            <span className="number">2</span>
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 3 })}
                        >
                          <NavLink
                            className={classnames({ active: activeTab === 3 })}
                            onClick={() => {
                              setactiveTab(3)
                            }}
                          >
                            <span className="number">3</span>
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 4 })}
                        >
                          <NavLink
                            className={classnames({ active: activeTab === 4 })}
                            onClick={() => {
                              setactiveTab(4)
                            }}
                          >
                            <span className="number">4</span>
                            پەسەندکردن
                          </NavLink>
                        </NavItem>
                      </ul>
                    </div>
                    <div className="content clearfix">
                      <TabContent activeTab={activeTab} className="body">
                        <TabPane tabId={1}>
                          <Form>
                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      ناوی خاوەن موڵک
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
                              <Col md={6}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      ناوی کڕیار
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
                            </Row>

                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      ژمارەی تەلەفۆنی خاوەن موڵک
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
                              <Col md={6}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      ژمارەی تەلەفۆنی کڕیار
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
                            </Row>

                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      ناونیشانی خاوەن موڵک
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
                              <Col md={6}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      ناونیشانی کڕیار
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
                            </Row>

                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      ناسنامە/شوێن
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
                              <Col md={6}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      ناسنامە/شوێن
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
                            </Row>
                          </Form>
                        </TabPane>
                        <TabPane tabId={2}>
                          <Form>
                            <Row className="mt-3 mb-3">
                              <Col lg={12}>
                                <p style={{ textAlign: "center" }}>
                                  هەردولا ڕیککەتوون لەسەر ئەم خاڵانە
                                </p>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={4}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      ئەم گرێبەستە بە هاوبەشی
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
                              <Col md={4}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      لەگەڵ
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
                              <Col md={2}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtFirstNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      بڕی
                                    </label>
                                    <Input
                                      id="txtFirstNameBilling"
                                      name="txtFirstNameBilling"
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Row>
                              </Col>
                              <Col md={2}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="ddlCreditCardType"
                                      className="col-lg-11 col-form-label"
                                    >
                                      وەرگیرا
                                    </label>
                                    <Input
                                      type="select"
                                      id="ddlCreditCardType"
                                      name="ddlCreditCardType"
                                      className="form-select"
                                    >
                                      <option value="MC">دۆلار</option>
                                      <option value="DI">دینار</option>
                                    </Input>
                                  </div>
                                </Row>
                              </Col>
                            </Row>

                            <Row className="mt-3 mb-3">
                              <Col md={3}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="ddlCreditCardType"
                                      className="col-lg-11 col-form-label"
                                    >
                                      من لایەنی یەکەم خاوەنی
                                    </label>
                                    <Input
                                      type="select"
                                      id="ddlCreditCardType"
                                      name="ddlCreditCardType"
                                      className="form-select"
                                    >
                                      <option>خانوو</option>
                                      <option>زەوی</option>
                                      <option>کۆگا</option>
                                      <option>دوکان</option>
                                      <option>ڤێلا</option>
                                      <option>موساتەحە</option>
                                      <option>شوقە</option>
                                      <option>شوشتنگەی ئۆتۆمبێل</option>
                                      <option>هۆتێل</option>
                                      <option>زەوی کشتوكاڵی</option>
                                      <option>زەوی نیشتەجێبوون</option>
                                      <option>زەوی بازرگانی</option>
                                      <option>باڵاخانە</option>
                                      <option>ئۆفیس</option>
                                      <option>پێشانگا</option>
                                      <option>گەراجی ئۆتۆمبێل</option>
                                    </Input>
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
                                      ژمارەی موڵک
                                    </label>
                                    <Input
                                      type="text"
                                      id="ddlCreditCardType"
                                      name="ddlCreditCardType"
                                    ></Input>
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
                                      ناو-شوێن-گەڕەک
                                    </label>
                                    <Input
                                      type="select"
                                      id="ddlCreditCardType"
                                      name="ddlCreditCardType"
                                      className="form-select"
                                    >
                                      <option>هەڤاڵان</option>
                                      <option>کەسنەزان</option>
                                      <option>باداوە</option>
                                    </Input>
                                  </div>
                                </Row>
                              </Col>
                              <Col md={3}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <p></p>
                                    <br />
                                    <p>بە کرێمدا بە لایەنی دووەم</p>
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                            <Row className="mt-3 mb-3">
                              <Col md={3}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      لە بەرواری
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
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      بۆ بەرواری
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
                                    <p></p>
                                    <br />
                                    هەردولا پابەند دەبن بەم گرێبەستە
                                  </div>
                                </Row>
                              </Col>
                              <Col md={3}></Col>
                            </Row>
                            <Row className="mt-3 mb-3">
                              <Col md={3}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      بە کرێی مانگانەی
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
                                      جۆری دراو
                                    </label>
                                    <Input
                                      type="select"
                                      id="ddlCreditCardType"
                                      name="ddlCreditCardType"
                                      className="form-select"
                                    >
                                      <option value="MC">دۆلار</option>
                                      <option value="DI">دینار</option>
                                    </Input>
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
                                      بڕی پارەی وەرگیراو
                                    </label>
                                    <Input
                                      id="txtLastNameBilling"
                                      name="txtLastNameBilling"
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Row>{" "}
                              </Col>
                              <Col md={3}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      جۆری دراو
                                    </label>
                                    <Input
                                      type="select"
                                      id="ddlCreditCardType"
                                      name="ddlCreditCardType"
                                      className="form-select"
                                    >
                                      <option value="MC">دۆلار</option>
                                      <option value="DI">دینار</option>
                                    </Input>
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                            <Row className="mt-3 mb-3">
                              <Col md={3}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <p></p>
                                    <br></br>
                                    بە کرێ دەدریت هەر
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
                                      مانگ{" "}
                                    </label>
                                    <Input
                                      type="select"
                                      id="ddlCreditCardType"
                                      name="ddlCreditCardType"
                                      className="form-select"
                                    >
                                      <option value="MC">1</option>
                                      <option value="DI">2</option>
                                      <option value="MC">3</option>
                                      <option value="DI">4</option>
                                    </Input>
                                  </div>
                                </Row>
                              </Col>
                              <Col md={3}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <p></p>
                                    <br></br>
                                    جارێک پێشەکی
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                            <Row className="mt-3 mb-3">
                              {" "}
                              <Col md={3}>
                                <Row className="mb-3">
                                  <div className="col-lg-12">
                                    <p></p>
                                    <br />
                                    لایەنی دووەم ئەم موڵکەم
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
                                      ناوی موڵک
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
                                  <div className="col-lg-12">
                                    <p></p>
                                    <br />
                                    بە کرێ وەرگرت لە لایەنی یەکەم بۆ مەبەستی
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
                                      <p></p>
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
                            </Row>
                            <Row>
                              <Col md={2}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      بە کرێی مانگانەی
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
                              <Col md={2}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      جۆری دراو
                                    </label>
                                    <Input
                                      type="select"
                                      id="ddlCreditCardType"
                                      name="ddlCreditCardType"
                                      className="form-select"
                                    >
                                      <option value="MC">دۆلار</option>
                                      <option value="DI">دینار</option>
                                    </Input>
                                  </div>
                                </Row>
                              </Col>
                              <Col md={2}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      بۆ ماوەی
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
                              <Col md={2}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      بە بڕی
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
                              <Col md={2}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      <p></p>
                                      <br />
                                      بۆ هەر مانگێک
                                    </label>
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                            <Row className="mt-3 mb-3">
                              <Col md={3}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      پارەی ماوە
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
                              <Col md={2}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      <p></p>
                                    </label>
                                    <br />
                                    دەدرێت لە بەرواری
                                  </div>
                                </Row>
                              </Col>
                              <Col md={2}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      <p></p>
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
                            </Row>
                            <Row className="mt-3 mb-3">
                              <Col md={3}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      بڕی
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
                                      جۆری دراو
                                    </label>
                                    <Input
                                      type="select"
                                      id="ddlCreditCardType"
                                      name="ddlCreditCardType"
                                      className="form-select"
                                    >
                                      <option value="MC">دۆلار</option>
                                      <option value="DI">دینار</option>
                                    </Input>
                                  </div>
                                </Row>
                              </Col>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      <p></p>
                                    </label>
                                    وەردەگیرێت وەک دڵنیایی لە لای کۆمپانیا
                                    دەمێنێت تا کۆتای هاتنی گریبەستەکە
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                            <Row className="mt-3 mb-3">
                              <Col md={4}>
                                <Row className="mb-3">
                                  <div className="col-lg-12">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-12 col-form-label"
                                    >
                                      {" "}
                                      <p></p>
                                    </label>
                                    دوای کۆتایی هاتنی ئەو ماوەیە لایەنی دووەم
                                    پابەند دەبێت بە چۆڵكردنی
                                  </div>
                                </Row>
                              </Col>
                              <Col md={2}>
                                <Row className="mb-3">
                                  <div className="col-lg-12">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      ناوی موڵک
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
                              <Col md={2}>
                                <Row className="mb-3">
                                  <div className="col-lg-12">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      <p></p>
                                    </label>
                                    ئەگەر دواکەوت دەبێت بە بڕی ڕۆژانەی
                                  </div>
                                </Row>
                              </Col>
                              <Col md={2}>
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
                              <Col md={2}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      جۆری دراو
                                    </label>
                                    <Input
                                      type="select"
                                      id="ddlCreditCardType"
                                      name="ddlCreditCardType"
                                      className="form-select"
                                    >
                                      <option value="MC">دۆلار</option>
                                      <option value="DI">دینار</option>
                                    </Input>
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                            <Row className="mt-3 mb-3">
                              <Col md={4}>
                                <Row className="mb-3">
                                  <div className="col-lg-12">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-12 col-form-label"
                                    >
                                      {" "}
                                      <p></p>
                                    </label>
                                    دوای کۆتایی هاتنی ئەو ماوەیە لایەنی دووەم
                                    پابەند دەبێت بە چۆڵكردنی
                                  </div>
                                </Row>
                              </Col>
                              <Col md={2}>
                                <Row className="mb-3">
                                  <div className="col-lg-12">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      ناوی موڵک
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
                              <Col md={2}>
                                <Row className="mb-3">
                                  <div className="col-lg-12">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      <p></p>
                                    </label>
                                    ئەگەر دواکەوت دەبێت بە بڕی ڕۆژانەی
                                  </div>
                                </Row>
                              </Col>
                              <Col md={2}>
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
                              <Col md={2}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      جۆری دراو
                                    </label>
                                    <Input
                                      type="select"
                                      id="ddlCreditCardType"
                                      name="ddlCreditCardType"
                                      className="form-select"
                                    >
                                      <option value="MC">دۆلار</option>
                                      <option value="DI">دینار</option>
                                    </Input>
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <p>
                                  بدات بە لایەنی یەکەم وە دەکرێت ڕیکبکەونەوە لە
                                  ڕێگای کۆمپانیای عقارات بۆ هەر گۆڕانکارییەکی
                                  نوێ بە گڕێبەستێکی نوێ
                                </p>
                              </Col>
                            </Row>
                            <Row className="mt-3 mb-3">
                              <Col md={5}>
                                <Row className="mb-3">
                                  <div className="col-lg-12">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-12 col-form-label"
                                    >
                                      {" "}
                                      <p></p>
                                    </label>
                                    هەر پەشیمان بوونەوەیەک لە گرێبەستەکە دوای
                                    واژووکردن ئەوا دەبێت بڕی
                                  </div>
                                </Row>
                              </Col>

                              <Col md={2}>
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
                              <Col md={2}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      جۆری دراو
                                    </label>
                                    <Input
                                      type="select"
                                      id="ddlCreditCardType"
                                      name="ddlCreditCardType"
                                      className="form-select"
                                    >
                                      <option value="MC">دۆلار</option>
                                      <option value="DI">دینار</option>
                                    </Input>
                                  </div>
                                </Row>
                              </Col>
                              <Col md={3}>
                                <Row className="mb-3">
                                  <div className="col-lg-12">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      <p></p>
                                    </label>
                                    بدات و مافی کۆمپانیای عەقاراتی هەردولا بدات
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                          </Form>
                        </TabPane>

                        <TabPane tabId={3}>
                          <Form>
                            <Row>
                              <Col md={4}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtFirstNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      ڕیکخەری ڕێکەوتنامە
                                    </label>
                                    <Input
                                      id="txtFirstNameBilling"
                                      name="txtFirstNameBilling"
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Row>
                              </Col>

                              <Col md={4}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      شایەتی یەکەم
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
                              <Col md={4}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      شایەتی دووەم
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
                            </Row>

                            <Row>
                              <Col md={4}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      ژ.مۆبایلی شایەتی یەکەم
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
                              <Col md={4}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      ژ.مۆبایلی شایەتی دووەم
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
                              <Col md={4}></Col>
                            </Row>

                            <Row>
                              <Col md={4}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      لایەنی یەکەم
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
                              <Col md={4}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      لایەنی دووەم
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
                              <Col md={4}></Col>
                            </Row>

                            <Row>
                              <Col md={4}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      وەکیلی یەکەم
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
                              <Col md={4}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      وەکیلی دووەم
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
                              <Col md={4}></Col>
                            </Row>
                            <Row>
                              {" "}
                              <Col md={4}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      ژمارە
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
                              <Col md={4}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      ژمارە
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
                              <Col md={4}></Col>
                            </Row>
                            <Row>
                              <Col md={4}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      ناوی تەواو
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
                              <Col md={4}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      ناوی تەواو
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
                              <Col md={4}></Col>
                            </Row>

                            <Row>
                              <Col md={8}>
                                <Row className="mb-3">
                                  <div className="col-lg-9">
                                    <label
                                      htmlFor="txtLastNameBilling"
                                      className="col-lg-11 col-form-label"
                                    >
                                      تێبینی
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
                            </Row>
                          </Form>
                        </TabPane>
                        <TabPane tabId={4}>
                          <div className="row justify-content-center">
                            <Col lg="6">
                              <div className="text-center">
                                <div className="mb-4">
                                  <i className="mdi mdi-check-circle-outline text-success display-4" />
                                </div>
                                <div>
                                  <h5>بە سەرکەوتوویی پەسەندکرا</h5>
                                </div>
                              </div>
                            </Col>
                          </div>
                        </TabPane>
                      </TabContent>
                    </div>
                    <div className="actions clearfix">
                      <ul>
                        <li
                          className={
                            activeTab === 1 ? "previous disabled" : "previous"
                          }
                        >
                          <Link
                            to="#"
                            className="btn btn-primary"
                            onClick={() => {
                              toggleTab(activeTab - 1)
                            }}
                          >
                            Previous
                          </Link>
                        </li>
                        <li
                          className={activeTab === 4 ? "next disabled" : "next"}
                        >
                          <Link
                            to="#"
                            className="btn btn-primary"
                            onClick={() => {
                              toggleTab(activeTab + 1)
                            }}
                          >
                            Next
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default FormWizard
