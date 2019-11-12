import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from './UsersData'

class User extends Component {
  
  render() {

    // const user = usersData.find( user => user.authId === this.props.match.params.id)
    // const userDetails = user ? Object.entries(user) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]
    console.log(usersData)
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>User id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                      {
                        usersData.map((item) => {
                          console.log(item)
                          return (
                            <tr>
                              <td>{`${item.firstName} ${item.lastName}:`}</td>
                              <td><strong>{item.email}</strong></td>
                            </tr>
                          )
                        })
                        
                      }
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
