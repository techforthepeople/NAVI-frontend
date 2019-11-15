import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities'

import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';

class ThemeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: 'rgb(255, 255, 255)'
    }
  }

  componentDidMount () {
    const elem = ReactDOM.findDOMNode(this).parentNode.firstChild
    const color = window.getComputedStyle(elem).getPropertyValue('background-color')
    this.setState({
      bgColor: color || this.state.bgColor
    })
  }

  render() {

    return (
      <table className="w-100">
        <tbody>
        <tr>
          <td className="text-muted">HEX:</td>
          <td className="font-weight-bold">{ rgbToHex(this.state.bgColor) }</td>
        </tr>
        <tr>
          <td className="text-muted">RGB:</td>
          <td className="font-weight-bold">{ this.state.bgColor }</td>
        </tr>
        </tbody>
      </table>
    )
  }
}

class ThemeColor extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {

    // const { className, children, ...attributes } = this.props
    const { className, children } = this.props

    const classes = classNames(className, 'theme-color w-75 rounded mb-3')

    return (
      <Col xl="2" md="4" sm="6" xs="12" className="mb-4">
        <div className={classes} style={{paddingTop: '75%'}}></div>
        {children}
        <ThemeView/>
      </Col>
    )
  }
}

class Colors extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-drop"></i> First Responders
          </div>
          <div className="card-body">
                  <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center"><i className="icon-people"></i></th>
                        <th>User</th>
                        <th className="text-center">Location</th>
                        <th>Risk Level</th>
                        <th className="text-center">Alerts</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">
                          <div className="avatar">
                            <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                            <span className="avatar-status badge-secondary"></span>
                          </div>
                        </td>
                        <td>
                          <div>Yiorgos Avraamu</div>
                          <div className="small text-muted">
                            <span>New</span> | Registered: Jan 1, 2015
                      </div>
                        </td>
                        <td className="text-center">
                          Front of Cafe One
                    </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>98%</strong>
                            </div>
                            <div className="float-right">
                              <small className='text-muted'> reach immediately</small>
                            </div>
                          </div>
                          <Progress className="progress-xs" color="danger" value="98" />
                        </td>
                        <td className="text-center">
                          <Row>
                            <Col col="1" className="mb-3 tag-col">
                              <Button color="danger" size="sm" className="btn-pill" style={{ fontSize: .5 + 'em' }}>Unconscious</Button>
                            </Col>
                            <Col col="1" className="mb-3 tag-col">
                              <Button color="danger" size="sm" className="btn-pill" style={{ fontSize: .5 + 'em' }}>Low O2 Sat</Button>
                            </Col>
                          </Row>
                          <Row>
                            <Col col="1" className="mb-3 tag-col">
                              <Button color="danger" size="sm" className="btn-pill" style={{ fontSize: .5 + 'em' }}>Brady</Button>
                            </Col>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="avatar">
                            <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                            <span className="avatar-status badge-secondary"></span>
                          </div>
                        </td>
                        <td>
                          <div>Avram Tarasios</div>
                          <div className="small text-muted">

                            <span>Recurring</span> | Registered: Jan 1, 2015
                      </div>
                        </td>
                        <td className="float-right">
                          Corner of Bodega Negra
                    </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>90%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">reach immediately</small>
                            </div>
                          </div>
                          <Progress className="progress-xs" color="danger" value="91" />
                        </td>
                        <td className="text-center">
                          <Row>
                            <Col col="1" className="mb-3 tag-col">
                              <Button color="danger" size="sm" className="btn-pill" style={{ fontSize: .5 + 'em' }}>Abrasion on the knee</Button>
                            </Col>
                          </Row>
                          <Row>
                            <Col col="1" className="mb-3 tag-col">
                              <Button color="danger" size="sm" className="btn-pill" style={{ fontSize: .5 + 'em' }}>Brady</Button>
                            </Col>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="avatar">
                            <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                            <span className="avatar-status badge-secondary"></span>
                          </div>
                        </td>
                        <td>
                          <div>Quintin Ed</div>
                          <div className="small text-muted">
                            <span>New</span> | Registered: Jan 1, 2015
                      </div>
                        </td>
                        <td className="text-center">
                          Front of Old Campus
                    </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>74%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">need medical attention</small>
                            </div>
                          </div>
                          <Progress className="progress-xs" color="warning" value="74" />
                        </td>
                        <td className="text-center">
                          <Row>
                            <Col col="1" className="mb-3 tag-col">
                              <Button color="warning" size="sm" className="btn-pill" style={{ fontSize: .5 + 'em' }}>Pressure around chest</Button>
                            </Col>
                          </Row>
                          <Row>
                            <Col col="1" className="mb-3 tag-col">
                              <Button color="warning" size="sm" className="btn-pill" style={{ fontSize: .5 + 'em' }}>Unconscious</Button>
                            </Col>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="avatar">
                            <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                            <span className="avatar-status badge-secondary"></span>
                          </div>
                        </td>
                        <td>
                          <div>Enéas Kwadwo</div>
                          <div className="small text-muted">
                            <span>New</span> | Registered: Jan 1, 2015
                      </div>
                        </td>
                        <td className="text-center">
                          St. Nicholas Ave <br />between 145th and 143rd
                    </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>48%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">needs medical attention</small>
                            </div>
                          </div>
                          <Progress className="progress-xs" color="warning" value="72" />
                        </td>
                        <td className="text-center">
                          <Row>
                            <Col col="1" className="mb-3 tag-col">
                              <Button color="warning" size="sm" className="btn-pill" style={{ fontSize: .5 + 'em' }}>Injury around chest</Button>
                            </Col>
                          </Row>
                          <Row>
                            <Col col="1" className="mb-3 tag-col">
                              <Button color="warning" size="sm" className="btn-pill" style={{ fontSize: .5 + 'em' }}>Auto incident</Button>
                            </Col>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="avatar">
                            <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                            <span className="avatar-status badge-success"></span>
                          </div>
                        </td>
                        <td>
                          <div>Agapetus Tadeáš</div>
                          <div className="small text-muted">
                            <span>New</span> | Registered: Jan 1, 2015
                      </div>
                        </td>
                        <td className="text-center">
                          St. Nicholas Ave <br />between 145 and 144th
                    </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>22%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">Sent update on victim at Cafe One</small>
                            </div>
                          </div>
                          <Progress className="progress-xs" color="info" value="22" />
                        </td>
                        <td className="text-center">
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="avatar">
                            <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                            <span className="avatar-status badge-danger"></span>
                          </div>
                        </td>
                        <td>
                          <div>Friderik Dávid</div>
                          <div className="small text-muted">
                            <span>New</span> | Registered: Jan 1, 2015
                      </div>
                        </td>
                        <td className="text-center">
                          Steinman Hall Court
                    </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>23%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted"></small>
                            </div>
                          </div>
                          <Progress className="progress-xs" color="success" value="20" />
                        </td>
                        <td className="text-center">
                          <Row>
                            <Col col="1" className="mb-3 tag-col">
                              <Button color="info" size="sm" className="btn-pill" style={{ fontSize: .5 + 'em' }}>Distress</Button>
                            </Col>
                          </Row>
                          <Row>
                          </Row>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default Colors;
