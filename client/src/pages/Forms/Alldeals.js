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
} from "reactstrap"

//Import Breadcrumb
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
                    <Col md={4}>
                      <Row className="mb-3">
                        <div className="col-lg-2">
                          <label
                            htmlFor="txtLastNameBilling"
                            className="col-lg-11 col-form-label"
                          >
                            <p></p>
                          </label>
                          گەڕان
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
                            خاوەن موڵک
                          </label>
                          <Input
                            type="select"
                            id="ddlCreditCardType"
                            name="ddlCreditCardType"
                            className="form-select"
                          >
                            <option>ئەحمەد</option>
                            <option>محمد</option>
                          </Input>
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
                            جۆری موڵک
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
                  </Row>
                  <div className="table-responsive">
                    <Table className="table mb-0">
                      <thead>
                        <tr>
                          <th>پسوولە</th>
                          <th>زیاتر</th>
                          <th>سڕینەوە</th>
                          <th>ژمارەی گەڕەک</th>
                          <th>خاوەن موڵک</th>
                          <th>کڕیار</th>
                          <th>ژمارەی موڵک</th>
                          <th>بڕ</th>
                          <th>جۆری موڵک</th>
                          <th>بەروار</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Button color="info">پسوولە</Button>
                          </td>

                          <td>
                            <Button color="dark">زیاتر</Button>
                          </td>
                          <td>
                            <Button color="danger">سڕینەوە</Button>
                          </td>
                          <td>زەوی</td>
                          <td>کارت</td>
                          <td>باشور</td>
                          <td>٢٠٠٠</td>
                          <td>کۆیە</td>
                          <td>٤٠٠</td>
                          <td>ئەحمەد</td>
                        </tr>
                        <tr>
                          <td>
                            <Button color="info">پسوولە</Button>
                          </td>

                          <td>
                            <Button color="dark">زیاتر</Button>
                          </td>
                          <td>
                            <Button color="danger">سڕینەوە</Button>
                          </td>
                          <td>زەوی</td>
                          <td>کارت</td>
                          <td>باشور</td>
                          <td>٢٠٠٠</td>
                          <td>کۆیە</td>
                          <td>٤٠٠</td>
                          <td>ئەحمەد</td>
                        </tr>
                        <tr>
                          <td>
                            <Button color="info">پسوولە</Button>
                          </td>

                          <td>
                            <Button color="dark">زیاتر</Button>
                          </td>
                          <td>
                            <Button color="danger">سڕینەوە</Button>
                          </td>
                          <td>زەوی</td>
                          <td>کارت</td>
                          <td>باشور</td>
                          <td>٢٠٠٠</td>
                          <td>کۆیە</td>
                          <td>٤٠٠</td>
                          <td>ئەحمەد</td>
                        </tr>
                        <tr>
                          <td>
                            <Button color="info">پسوولە</Button>
                          </td>
                          <td>
                            <Button color="dark">زیاتر</Button>
                          </td>
                          <td>
                            <Button color="danger">سڕینەوە</Button>
                          </td>
                          <td>زەوی</td>
                          <td>کارت</td>
                          <td>باشور</td>
                          <td>٢٠٠٠</td>
                          <td>کۆیە</td>
                          <td>٤٠٠</td>
                          <td>ئەحمەد</td>
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
