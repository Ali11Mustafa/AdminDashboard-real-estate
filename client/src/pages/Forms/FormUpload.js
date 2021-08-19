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
                  <div className="table-responsive">
                    <Table className="table mb-0">
                      <thead>
                        <tr>
                          <th>دەستکاری</th>
                          <th>گرێبەست</th>
                          <th>زیاتر</th>
                          <th>سڕینەوە</th>
                          <th>جۆری موڵک</th>
                          <th>خاوەندارێتی</th>
                          <th>ڕووگە</th>
                          <th>نرخ</th>
                          <th>ناونیشان</th>
                          <th>ڕووبەر</th>
                          <th>فرۆشیار</th>
                          <th>واجهە</th>
                          <th>لق</th>
                          <th>جۆری عەرز</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Button color="info">دەستکاری</Button>
                          </td>
                          <td>
                            <Button color="success">گرێبەست</Button>
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
                          <td>٣٠</td>
                          <td>هەولێر</td>
                          <td>فرۆشتن</td>
                        </tr>
                        <tr>
                          <td>
                            <Button color="info">دەستکاری</Button>
                          </td>
                          <td>
                            <Button color="success">گرێبەست</Button>
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
                          <td>٣٠</td>
                          <td>هەولێر</td>
                          <td>فرۆشتن</td>
                        </tr>
                        <tr>
                          <td>
                            <Button color="info">دەستکاری</Button>
                          </td>
                          <td>
                            <Button color="success">گرێبەست</Button>
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
                          <td>٣٠</td>
                          <td>هەولێر</td>
                          <td>فرۆشتن</td>
                        </tr>
                        <tr>
                          <td>
                            <Button color="info">دەستکاری</Button>
                          </td>
                          <td>
                            <Button color="success">گرێبەست</Button>
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
                          <td>٣٠</td>
                          <td>هەولێر</td>
                          <td>فرۆشتن</td>
                        </tr>
                        <tr>
                          <td>
                            <Button color="info">دەستکاری</Button>
                          </td>
                          <td>
                            <Button color="success">گرێبەست</Button>
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
                          <td>٣٠</td>
                          <td>هەولێر</td>
                          <td>فرۆشتن</td>
                        </tr>
                        <tr>
                          <td>
                            <Button color="info">دەستکاری</Button>
                          </td>
                          <td>
                            <Button color="success">گرێبەست</Button>
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
                          <td>٣٠</td>
                          <td>هەولێر</td>
                          <td>فرۆشتن</td>
                        </tr>
                        <tr>
                          <td>
                            <Button color="info">دەستکاری</Button>
                          </td>
                          <td>
                            <Button color="success">گرێبەست</Button>
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
                          <td>٣٠</td>
                          <td>هەولێر</td>
                          <td>فرۆشتن</td>
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
