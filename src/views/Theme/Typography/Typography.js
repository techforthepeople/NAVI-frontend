import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import { isLVal } from '@babel/types';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Basic Form</strong> Elements
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="exampleInputName2" className="pr-1">First Name</Label>
                      <Input type="text" id="exampleInputName2" placeholder="Jane" required />
            
                      <Label htmlFor="exampleInputName2" className="pr-1">Last Name</Label>
                      <Input type="text" id="exampleInputName2" placeholder="Doe" required />
                    </Col>
                  </FormGroup>
                 
                  <FormGroup row>
                    <Col md='3'> 
                      <Label htmlFor='DOB'>Date of Birth</Label>
                    </Col>
                    <Col>
                      <Input type='dob' id='dob-input' name='dob-input' placeholder='mm/dd/yyyy'></Input>
                      <FormText>Enter Date of Birth</FormText>
                    </Col>
                  </FormGroup>
                  
                  <FormGroup row>
                    <Col md='3'>
                      <Label>Sex</Label>
                    </Col>
                    <Col>
                      <Input type='sex-gender' id='sex-input' name='sex-input' placeholder='M / F / Prefer not to say'/>
                    </Col>
                  </FormGroup>
                  
                  <FormGroup row>
                    <Col md='3'> 
                      <Label>Street</Label>
                    </Col>
                    <Col>
                      <Input type='street-address' id='street-input' name='street-input'>
                      </Input>
                    </Col>

                    <Col>
                      <Label>City</Label>
                      <Input type='city-address' id='city-input' name='city-input'>
                      </Input>
                      <Label>State</Label>
                      <Input type='state-address' id='state-input' name='state-input'>
                      </Input>
                      <Label>Postal</Label>
                      <Input type='postal-address' id='postal-input' name='postal-input'>
                      </Input>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Description</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                        placeholder="..." />
                    </Col>
                  </FormGroup>
                 
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <strong>Inline</strong> Form
              </CardHeader>
              <CardBody>
                <Form action="" method="post" inline>
                  <FormGroup className="pr-1">
                    <Label htmlFor="exampleInputName2" className="pr-1">Name</Label>
                    <Input type="text" id="exampleInputName2" placeholder="Jane Doe" required />
                  </FormGroup>
                  <FormGroup className="pr-1">
                    <Label htmlFor="exampleInputEmail2" className="pr-1">Email</Label>
                    <Input type="email" id="exampleInputEmail2" placeholder="jane.doe@example.com" required />
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Horizontal</strong> Form
              </CardHeader>
              <CardBody>
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-email">Email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="hf-email" name="hf-email" placeholder="Enter Email..." autoComplete="email" />
                      <FormText className="help-block">Please enter your email</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-password">Password</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="password" id="hf-password" name="hf-password" placeholder="Enter Password..." autoComplete="current-password" />
                      <FormText className="help-block">Please enter your password</FormText>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
  
          </Col>
        </Row>
       </div>
    );
  }
}

export default Forms;

