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
            <i className="icon-drop"></i> Theme colors
          </div>
          <div className="card-body">
            <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
              <thead className="thead-light">
                <tr>
                  <th className="text-center"><i className="icon-people"></i></th>
                  <th>User</th>
                  <th className="text-center">Country</th>
                  <th>Usage</th>
                  <th className="text-center">Payment Method</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      <span className="avatar-status badge-success"></span>
                    </div>
                  </td>
                  <td>
                    <div>Yiorgos Avraamu</div>
                    <div className="small text-muted">
                      <span>New</span> | Registered: Jan 1, 2015
                      </div>
                  </td>
                  <td className="text-center">
                    <i className="flag-icon flag-icon-us h4 mb-0" title="us" id="us"></i>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>50%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="success" value="50" />
                  </td>
                  <td className="text-center">
                    <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }}></i>
                  </td>
                  <td>
                    <div className="small text-muted">Last login</div>
                    <strong>10 sec ago</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      <span className="avatar-status badge-danger"></span>
                    </div>
                  </td>
                  <td>
                    <div>Avram Tarasios</div>
                    <div className="small text-muted">

                      <span>Recurring</span> | Registered: Jan 1, 2015
                      </div>
                  </td>
                  <td className="text-center">
                    <i className="flag-icon flag-icon-br h4 mb-0" title="br" id="br"></i>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>10%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="info" value="10" />
                  </td>
                  <td className="text-center">
                    <i className="fa fa-cc-visa" style={{ fontSize: 24 + 'px' }}></i>
                  </td>
                  <td>
                    <div className="small text-muted">Last login</div>
                    <strong>5 minutes ago</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      <span className="avatar-status badge-warning"></span>
                    </div>
                  </td>
                  <td>
                    <div>Quintin Ed</div>
                    <div className="small text-muted">
                      <span>New</span> | Registered: Jan 1, 2015
                      </div>
                  </td>
                  <td className="text-center">
                    <i className="flag-icon flag-icon-in h4 mb-0" title="in" id="in"></i>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>74%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="warning" value="74" />
                  </td>
                  <td className="text-center">
                    <i className="fa fa-cc-stripe" style={{ fontSize: 24 + 'px' }}></i>
                  </td>
                  <td>
                    <div className="small text-muted">Last login</div>
                    <strong>1 hour ago</strong>
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
                    <i className="flag-icon flag-icon-fr h4 mb-0" title="fr" id="fr"></i>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>98%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="danger" value="98" />
                  </td>
                  <td className="text-center">
                    <i className="fa fa-paypal" style={{ fontSize: 24 + 'px' }}></i>
                  </td>
                  <td>
                    <div className="small text-muted">Last login</div>
                    <strong>Last month</strong>
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
                    <i className="flag-icon flag-icon-es h4 mb-0" title="es" id="es"></i>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>22%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="info" value="22" />
                  </td>
                  <td className="text-center">
                    <i className="fa fa-google-wallet" style={{ fontSize: 24 + 'px' }}></i>
                  </td>
                  <td>
                    <div className="small text-muted">Last login</div>
                    <strong>Last week</strong>
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
                    <i className="flag-icon flag-icon-pl h4 mb-0" title="pl" id="pl"></i>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>43%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="success" value="43" />
                  </td>
                  <td className="text-center">
                    <i className="fa fa-cc-amex" style={{ fontSize: 24 + 'px' }}></i>
                  </td>
                  <td>
                    <div className="small text-muted">Last login</div>
                    <strong>Yesterday</strong>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <i className="icon-drop"></i> Grays
          </div>
          <div className="card-body">
            <Row className="mb-3">
              <ThemeColor className="bg-gray-100">
                <h6>Gray 100 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-200">
                <h6>Gray 200 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-300">
                <h6>Gray 300 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-400">
                <h6>Gray 400 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-500">
                <h6>Gray 500 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-600">
                <h6>Gray 600 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-700">
                <h6>Gray 700 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-800">
                <h6>Gray 800 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-900">
                <h6>Gray 900 Color</h6>
              </ThemeColor>
            </Row>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <i className="icon-drop"></i> Additional colors
          </div>
          <div className="card-body">
            <Row>
              <ThemeColor className="bg-blue">
                <h6>Blue Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-light-blue">
                <h6>Light Blue Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-indigo">
                <h6>Indigo Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-purple">
                <h6>Purple Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-pink">
                <h6>Pink Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-red">
                <h6>Red Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-orange">
                <h6>Orange Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-yellow">
                <h6>Yellow Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-green">
                <h6>Green Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-teal">
                <h6>Teal Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-cyan">
                <h6>Cyan Color</h6>
              </ThemeColor>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Colors;
