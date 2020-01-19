import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from './UsersData'

const userData = {
  authId: '',
  email: 'fire@gmail.com',
  firstName: 'Jenna',
  lastName: 'Thompson',
  sensorId: 1,
  pressure: 80.5,
  humidity: 80,
  temperature: 90,
  latitude: 40.6643,
  longitude: -73.9385
}

class User extends Component {
  
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>User id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardImg top width="50%" src="https://i.imgur.com/beYjElh.png" alt="Card image cap" />
              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                      <tr>
                        <td>{`Name:`}</td>
                        <td><strong>{`${userData.firstName} ${userData.lastName}`}</strong></td>
                      </tr>
                      <tr>
                        <td>{`Email:`}</td>
                        <td><strong>{userData.email}</strong></td>
                      </tr>
                      <tr>
                        <td>{`Sensor Id:`}</td>
                        <td><strong>{userData.sensorId}</strong></td>
                      </tr>
                      <tr>
                        <td>{`Pressure`}</td>
                        <td><strong>{userData.pressure}</strong></td>
                      </tr>
                      <tr>
                        <td>{`Temperature`}</td>
                        <td><strong>{userData.temperature}</strong></td>
                      </tr>
                      <tr>
                        <td>{`Humidity`}</td>
                        <td><strong>{userData.humidity}</strong></td>
                      </tr>
                      <tr>
                        <td>{`Latitude`}</td>
                        <td><strong>{userData.latitude}</strong></td>
                      </tr>
                      <tr>
                        <td>{`Longitude`}</td>
                        <td><strong>{userData.longitude}</strong></td>
                      </tr>
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default User;
