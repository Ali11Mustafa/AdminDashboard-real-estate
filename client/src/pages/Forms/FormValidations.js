import React, { useState, useEffect } from "react"
import MetaTags from "react-meta-tags"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

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

//Import actions
import {
  listCountries,
  listCities,
  listDirections,
  listEstateTypes,
  listPropertyTypes,
  createEstate,
} from "../../store/actions"

const initialState = {
  client_cs_name: "mohamed",
  client_cs_phone: "07503203351",
  estate_type_id: 1,
  neighborhood_id: 1,
  property_type_id: 1,
  ownership_type_id: 1,
  direction_id: 1,
  area: 44,
  balconies_space: 44,
  number_of_estate: 4554,
  price: 55,
  moon_introduction: 100,
  date_signed: 2017 - 11 - 5,
  number_of_earth: 5544,
  owner_of_property_id: 1,
  number_of_floor: 2,
  number_of_room: 5,
  number_of_bedrooms: 2,
  number_of_bathrooms: 2,
  number_of_ws: 2,
  city_id: 1,
  kaza_id: 1,
  district_id: 1,
  estate_description: "the new estate",
}

const options = [
  {
    id: "1",
    neighborhood_name: "سوڵتان موزەفەر",
  },
  {
    id: "2",
    neighborhood_name: "هەولێری نوێ",
  },
]

const FormValidations = () => {
  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch()
  const locationsList = useSelector(state => state.locationsList)
  const {
    isLoading,
    loaded,
    cities,
    countries,
    directions,
    estateTypes,
    propertyTypes,
    error,
  } = locationsList
  const history = useHistory()
  useEffect(() => {
    dispatch(listCities())
    dispatch(listCountries())
    dispatch(listDirections())
    dispatch(listEstateTypes())
    dispatch(listPropertyTypes())
  }, [])

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)

    dispatch(createEstate({ ...initialState }))
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
                  <AvForm className="needs-validation" onSubmit={handleSubmit}>
                    <Row>
                      <Col md="3" sm="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom02">گەرەک</Label>
                          <Input
                            type="select"
                            name="neighborhood_id"
                            onChange={handleChange}
                          >
                            {options.map((option, index) => (
                              <option key={index} value={option.id}>
                                {option.neighborhood_name}
                              </option>
                            ))}
                          </Input>
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
                          // validate={{ required: { value: true } }}
                          id="validationCustom02"
                        /> */}
                          <Label htmlFor="validationCustom02">جۆری عەرز</Label>
                          <Input
                            type="select"
                            name="estate_type_id"
                            onChange={handleChange}
                          >
                            {estateTypes.map((estateType, index) => (
                              <option key={index} value={estateType.id}>
                                {estateType.estate_type_name}
                              </option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>

                      <Col md="3" sm="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom02">
                            ژمارەی مۆبایل
                          </Label>
                          <AvField
                            name="phone"
                            type="text"
                            errorMessage="phone"
                            className="form-control"
                            onChange={handleChange}
                            // validate={{ required: { value: true } }}
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
                            // validate={{ required: { value: true } }}
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
                            // validate={{ required: { value: true } }}
                            id="validationCustom01"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="3" sm="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom02">ڕووگە</Label>
                          <Input
                            type="select"
                            name="estate_type_id"
                            onChange={handleChange}
                          >
                            {directions.map((direction, index) => (
                              <option key={index} value={direction.id}>
                                {direction.direction_name}
                              </option>
                            ))}
                          </Input>
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
                            // validate={{ required: { value: true } }}
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
                            // validate={{ required: { value: true } }}
                            id="validationCustom02"
                          /> */}
                          <Label htmlFor="validationCustom02">
                            جۆری خاوەندارێتی
                          </Label>
                          <Input type="select">
                            <option>Default Select</option>
                          </Input>
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
                            // validate={{ required: { value: true } }}
                            id="validationCustom02"
                          /> */}
                          <Label htmlFor="validationCustom02">جۆری موڵک</Label>
                          <Input
                            type="select"
                            name="estate_type_id"
                            onChange={handleChange}
                          >
                            {propertyTypes.map((propertyType, index) => (
                              <option key={index} value={propertyType.id}>
                                {propertyType.property_type_name}
                              </option>
                            ))}
                          </Input>
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
                            // validate={{ required: { value: true } }}
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
                            // validate={{ required: { value: true } }}
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
                            // validate={{ required: { value: true } }}
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
                            // validate={{ required: { value: true } }}
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
                            // validate={{ required: { value: true } }}
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
                            // validate={{ required: { value: true } }}
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
                        // validate={{ required: { value: true } }}
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
                            // validate={{ required: { value: true } }}
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
                            // validate={{ required: { value: true } }}
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
                        {/* <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">وڵات</Label>
                          <Input type="select">
                            <option>Default Select</option>
                          </Input>
                        </FormGroup> */}
                      </Col>
                      <Col md="3" sm="6">
                        <FormGroup className="mb-3">
                          {/**<AvField
                      name="lastname"
                      placeholder="Last name"
                      type="text"
                      errorMessage="Enter Last name"
                      className="form-control"
                      // validate={{ required: { value: true } }}
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
                            // validate={{ required: { value: true } }}
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
                            // validate={{ required: { value: true } }}
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
                            // validate={{ required: { value: true } }}
                            id="validationCustom02"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="3" sm="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">لق</Label>
                          <Input type="select">
                            <option>Default Select</option>
                          </Input>
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
                    // validate={{ required: { value: true } }}
                    id="validationCustom02"
                  /> */}

                          <Label htmlFor="validationCustom02">ناحیە</Label>
                          <Input type="select">
                            <option>Default Select</option>
                          </Input>
                        </FormGroup>
                      </Col>

                      <Col md="3" sm="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom02">قەزا </Label>
                          <Input type="select">
                            <option>Default Select</option>
                          </Input>
                        </FormGroup>
                      </Col>

                      <Col md="3" sm="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom02">شار </Label>
                          <Input
                            type="select"
                            name="estate_type_id"
                            onChange={handleChange}
                          >
                            {cities.map((city, index) => (
                              <option key={index} value={city.id}>
                                {city.city_name}
                              </option>
                            ))}
                          </Input>
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
                            // validate={{ required: { value: true } }}
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

//////////////////////////////////////////////////////////////////////////////////////
// import React, { useState } from "react"
// import MetaTags from "react-meta-tags"

// import {
//   Row,
//   Col,
//   Card,
//   CardBody,
//   FormGroup,
//   Button,
//   CardTitle,
//   CardSubtitle,
//   Label,
//   Input,
//   Container,
//   CustomInput,
//   Dropdown,
//   DropdownMenu,
//   DropdownItem,
//   DropdownToggle,
//   ButtonDropdown,
//   InputGroup,
// } from "reactstrap"
// import { AvForm, AvField } from "availity-reactstrap-validation"
// import Flatpickr from "react-flatpickr"

// //Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"

// const initialState = {
//   neighborhood_id: "1",
//   phone: "",
// }

// const options = [
//   {
//     id: "1",
//     neighborhood_name: "سوڵتان موزەفەر",
//   },
//   {
//     id: "2",
//     neighborhood_name: "هەولێری نوێ",
//   },
// ]

// export default class FormValidations extends React.Component {
//   // const [formData, setFormData] = useState(initialState)

//   // const handleChange = e => {
//   //   setFormData({ ...formData, [e.target.name]: e.target.value })
//   // }

//   // const handleSubmit = e => {
//   //   e.preventDefault()
//   //   console.log(formData)
//   // }

//   constructor() {
//     super()
//     this.state = {
//       formData: {},
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   componentWillMount() {
//     this.setState({
//       formData: {
//         neighborhood_id: "1",
//         phone: "",
//       },
//     })
//   }

//   handleChange(e) {
//     this.setState({
//       ...this.state,
//       formData: { ...this.state.formData, [e.target.name]: e.target.value },
//     })
//   }

//   handleSubmit(e) {
//     e.preventDefault()
//     console.log(this.state.formData)
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <div className="page-content">
//           <Container fluid={true}>
//             <Breadcrumbs title="Form" breadcrumbItem="Form Validation" />
//             <Row>
//               <Col xl="12">
//                 <Card>
//                   <CardBody>
//                     <AvForm
//                       className="needs-validation"
//                       onSubmit={this.handleSubmit}
//                     >
//                       <Row>
//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             <Label htmlFor="validationCustom02">گەرەک</Label>
//                             <Input
//                               type="select"
//                               name="neighborhood_id"
//                               onChange={this.handleChange}
//                             >
//                               {options.map((option, index) => (
//                                 <option key={index} value={option.id}>
//                                   {option.neighborhood_name}
//                                 </option>
//                               ))}
//                             </Input>
//                           </FormGroup>
//                         </Col>
//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             {/**<AvField
//                           name="lastname"
//                           placeholder="Last name"
//                           type="text"
//                           errorMessage="Enter Last name"
//                           className="form-control"
//                           // validate={{ required: { value: true } }}
//                           id="validationCustom02"
//                         /> */}
//                             <Label htmlFor="validationCustom02">
//                               جۆری عەرز
//                             </Label>
//                             <Input type="select">
//                               <option>Default Select</option>
//                             </Input>
//                           </FormGroup>
//                         </Col>

//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             <Label htmlFor="validationCustom02">
//                               ژمارەی مۆبایل
//                             </Label>
//                             <AvField
//                               name="phone"
//                               type="text"
//                               errorMessage="phone"
//                               className="form-control"
//                               onChange={this.handleChange}
//                               // validate={{ required: { value: true } }}
//                               id="validationCustom02"
//                             />
//                           </FormGroup>
//                         </Col>

//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             <Label htmlFor="validationCustom02">
//                               ناوی فرۆشیار
//                             </Label>
//                             <AvField
//                               name="froshyar"
//                               type="text"
//                               errorMessage="Enter Last name"
//                               className="form-control"
//                               // validate={{ required: { value: true } }}
//                               id="validationCustom02"
//                             />
//                           </FormGroup>
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             <Label htmlFor="validationCustom01">ڕووبەر</Label>
//                             <AvField
//                               name="rwabar"
//                               type="text"
//                               errorMessage="Enter First Name"
//                               className="form-control"
//                               // validate={{ required: { value: true } }}
//                               id="validationCustom01"
//                             />
//                           </FormGroup>
//                         </Col>
//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             {/**<AvField
//                         name="lastname"
//                         placeholder="Last name"
//                         type="text"
//                         errorMessage="Enter Last name"
//                         className="form-control"
//                         // validate={{ required: { value: true } }}
//                         id="validationCustom02"
//                       /> */}
//                             <Label htmlFor="validationCustom02">ڕووگە</Label>
//                             <Input type="select">
//                               <option>Default Select</option>
//                             </Input>
//                           </FormGroup>
//                         </Col>

//                         {/** <Col md="3" sm="6">
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="validationCustom02">Last name</Label>
//                           <AvField
//                             name="lastname"
//                             placeholder="Last name"
//                             type="text"
//                             errorMessage="Enter Last name"
//                             className="form-control"
//                             // validate={{ required: { value: true } }}
//                             id="validationCustom02"
//                           />
//                         </FormGroup>
//                       </Col>*/}

//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             {/**<AvField
//                             name="lastname"
//                             placeholder="Last name"
//                             type="text"
//                             errorMessage="Enter Last name"
//                             className="form-control"
//                             // validate={{ required: { value: true } }}
//                             id="validationCustom02"
//                           /> */}
//                             <Label htmlFor="validationCustom02">
//                               جۆری خاوەندارێتی
//                             </Label>
//                             <Input type="select">
//                               <option>Default Select</option>
//                             </Input>
//                           </FormGroup>
//                         </Col>
//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             {/**<AvField
//                             name="lastname"
//                             placeholder="Last name"
//                             type="text"
//                             errorMessage="Enter Last name"
//                             className="form-control"
//                             // validate={{ required: { value: true } }}
//                             id="validationCustom02"
//                           /> */}
//                             <Label htmlFor="validationCustom02">
//                               جۆری موڵک
//                             </Label>

//                             <Input type="select">
//                               <option>Default Select</option>
//                             </Input>
//                           </FormGroup>
//                         </Col>
//                         {/** <Col md="3" sm="6">
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="validationCustom02">Last name</Label>
//                           <AvField
//                             name="lastname"
//                             placeholder="Last name"
//                             type="text"
//                             errorMessage="Enter Last name"
//                             className="form-control"
//                             // validate={{ required: { value: true } }}
//                             id="validationCustom02"
//                           />
//                         </FormGroup>
//                       </Col> */}
//                       </Row>
//                       <Row>
//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             <Label htmlFor="validationCustom01">
//                               پێشەکی مانگانە
//                             </Label>
//                             <AvField
//                               name="peshaki"
//                               type="text"
//                               errorMessage="Enter First Name"
//                               className="form-control"
//                               // validate={{ required: { value: true } }}
//                               id="validationCustom01"
//                             />
//                           </FormGroup>
//                         </Col>
//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             <Label htmlFor="validationCustom02">نرخ</Label>
//                             <AvField
//                               name="nrx"
//                               type="text"
//                               errorMessage="Enter Last name"
//                               className="form-control"
//                               // validate={{ required: { value: true } }}
//                               id="validationCustom02"
//                             />
//                           </FormGroup>
//                         </Col>
//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             <Label htmlFor="validationCustom02">
//                               ژمارەی خانوو
//                             </Label>
//                             <AvField
//                               name="jmaray xanu"
//                               type="text"
//                               errorMessage="Enter Last name"
//                               className="form-control"
//                               // validate={{ required: { value: true } }}
//                               id="validationCustom02"
//                             />
//                           </FormGroup>
//                         </Col>
//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             <Label htmlFor="validationCustom02">واجهە</Label>
//                             <AvField
//                               name="wajha"
//                               type="text"
//                               errorMessage="Enter Last name"
//                               className="form-control"
//                               // validate={{ required: { value: true } }}
//                               id="validationCustom02"
//                             />
//                           </FormGroup>
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             <Label htmlFor="validationCustom01">
//                               ژمارەی نهۆم
//                             </Label>
//                             <AvField
//                               name="jmaray nhom"
//                               type="text"
//                               errorMessage="Enter First Name"
//                               className="form-control"
//                               // validate={{ required: { value: true } }}
//                               id="validationCustom01"
//                             />
//                           </FormGroup>
//                         </Col>
//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             {/**<AvField
//                         name="lastname"
//                         placeholder="Last name"
//                         type="text"
//                         errorMessage="Enter Last name"
//                         className="form-control"
//                         // validate={{ required: { value: true } }}
//                         id="validationCustom02"
//                       /> */}

//                             <Label htmlFor="validationCustom02">
//                               ناوی خاوەن موڵک
//                             </Label>
//                             <AvField
//                               name="xawan mulk"
//                               type="text"
//                               errorMessage="Enter Last name"
//                               className="form-control"
//                               // validate={{ required: { value: true } }}
//                               id="validationCustom02"
//                             />
//                           </FormGroup>
//                         </Col>

//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             <Label htmlFor="validationCustom02">
//                               ژمارەی زەوی
//                             </Label>
//                             <AvField
//                               name="jmaray zawey"
//                               type="text"
//                               errorMessage="Enter Last name"
//                               className="form-control"
//                               // validate={{ required: { value: true } }}
//                               id="validationCustom02"
//                             />
//                           </FormGroup>
//                         </Col>

//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             <Label>بەروار</Label>
//                             <InputGroup>
//                               {/* <DatePicker
//                             selected={startDate}
//                             onChange={date => setStartDate(date)}
//                             dateFormat="MM/yyyy"
//                             showMonthYearPicker
//                           /> */}
//                               <Flatpickr
//                                 className="form-control d-block"
//                                 placeholder="dd M,yyyy"
//                                 options={{
//                                   altInput: true,
//                                   altFormat: "F j, Y",
//                                   dateFormat: "Y-m-d",
//                                 }}
//                               />
//                             </InputGroup>
//                           </FormGroup>
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col md="3" sm="6">
//                           {/* <FormGroup className="mb-3">
//                           <Label htmlFor="validationCustom01">وڵات</Label>
//                           <Input type="select">
//                             <option>Default Select</option>
//                           </Input>
//                         </FormGroup> */}
//                         </Col>
//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             {/**<AvField
//                       name="lastname"
//                       placeholder="Last name"
//                       type="text"
//                       errorMessage="Enter Last name"
//                       className="form-control"
//                       // validate={{ required: { value: true } }}
//                       id="validationCustom02"
//                     /> */}

//                             <Label htmlFor="validationCustom02">
//                               ژمارەی حەمام و ئاودەست
//                             </Label>
//                             <AvField
//                               name="jmaray 7amam"
//                               type="text"
//                               errorMessage="Enter Last name"
//                               className="form-control"
//                               // validate={{ required: { value: true } }}
//                               id="validationCustom02"
//                             />
//                           </FormGroup>
//                         </Col>

//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             <Label htmlFor="validationCustom02">
//                               ژمارەی ژووری نوستن
//                             </Label>
//                             <AvField
//                               name="nustn"
//                               type="text"
//                               errorMessage="Enter Last name"
//                               className="form-control"
//                               // validate={{ required: { value: true } }}
//                               id="validationCustom02"
//                             />
//                           </FormGroup>
//                         </Col>

//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             <Label htmlFor="validationCustom02">
//                               ژمارەی ژوور
//                             </Label>
//                             <AvField
//                               name="rooms"
//                               type="text"
//                               errorMessage="Enter Last name"
//                               className="form-control"
//                               // validate={{ required: { value: true } }}
//                               id="validationCustom02"
//                             />
//                           </FormGroup>
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             <Label htmlFor="validationCustom01">لق</Label>
//                             <Input type="select">
//                               <option>Default Select</option>
//                             </Input>
//                           </FormGroup>
//                         </Col>
//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             {/**<AvField
//                     name="lastname"
//                     placeholder="Last name"
//                     type="text"
//                     errorMessage="Enter Last name"
//                     className="form-control"
//                     // validate={{ required: { value: true } }}
//                     id="validationCustom02"
//                   /> */}

//                             <Label htmlFor="validationCustom02">ناحیە</Label>
//                             <Input type="select">
//                               <option>Default Select</option>
//                             </Input>
//                           </FormGroup>
//                         </Col>

//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             <Label htmlFor="validationCustom02">قەزا </Label>
//                             <Input type="select">
//                               <option>Default Select</option>
//                             </Input>
//                           </FormGroup>
//                         </Col>

//                         <Col md="3" sm="6">
//                           <FormGroup className="mb-3">
//                             <Label htmlFor="validationCustom02">شار </Label>
//                             <Input type="select">
//                               <option>Default Select</option>
//                             </Input>
//                           </FormGroup>
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col md="4" sm="6">
//                           <FormGroup className="mb-3">
//                             <Label htmlFor="validationCustom03">تێبینی</Label>
//                             <AvField
//                               name="tebini"
//                               type="text"
//                               errorMessage=" Please provide a valid city."
//                               className="form-control"
//                               // validate={{ required: { value: true } }}
//                               id="validationCustom03"
//                             />
//                           </FormGroup>
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col lg="2" md="3" sm="4" xs="4">
//                           <Button color="success" type="submit">
//                             زیادکردن
//                           </Button>
//                         </Col>
//                         <Col lg="2" md="3" sm="4" xs="4">
//                           <Button color="info" type="submit">
//                             گۆڕین
//                           </Button>
//                         </Col>
//                         <Col lg="2" md="3" sm="4" xs="4">
//                           <Button color="danger" type="submit">
//                             سڕینەوە
//                           </Button>
//                         </Col>
//                       </Row>
//                     </AvForm>
//                   </CardBody>
//                 </Card>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </React.Fragment>
//     )
//   }
// }
