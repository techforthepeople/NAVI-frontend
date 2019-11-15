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
                <strong>Register</strong> 
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="7">
                      <Label htmlFor="exampleInputName2" className="pr-1">First Name</Label>
                      <Input type="text" id="exampleInputName2" placeholder="Jane" required />
            
                      <Label htmlFor="exampleInputName2" className="pr-1">Last Name</Label>
                      <Input type="text" id="exampleInputName2" placeholder="Doe" required />
                    </Col>
                  </FormGroup>
                 
                  <FormGroup row>
                    <Col md='6'> 
                      <Label htmlFor='DOB'>Date of Birth</Label>
                      <Input type='dob' id='dob-input' name='dob-input' placeholder='mm/dd/yyyy'></Input>
                      <FormText>Enter Date of Birth</FormText>

                      <Label>Sex</Label>
                      <Input type='sex-gender' id='sex-input' name='sex-input' placeholder='M / F / Prefer not to say'/>
                    </Col>
                    <Col>

                    </Col>
                  </FormGroup>
                  
                  <FormGroup row>
                    <Col md='10'> 
                      <Label>Street</Label>
                      <Input type='street-address' id='street-input' name='street-input'>
                      </Input>
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

                    <Col>

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
          </Col>

        </Row>
       </div>
    );
  }
}

export default Forms;

