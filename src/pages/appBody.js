import React from 'react';
import '../assets/css/appBody.css';
import { Row, Col, Container,Form, Accordion, Card,ListGroup, ButtonGroup, Badge, Button,Pagination, Media } from 'react-bootstrap';
import Product1 from "../assets/img/appleTV.png"
import Product2 from "../assets/img/watch.png"
import Product3 from "../assets/img/Zendure-4-Port.png"
import Product4 from "../assets/img/device.png"
import Product5 from "../assets/img/JBL.png"
import Product6 from "../assets/img/bestSaleProduct-1.png"
import Product7 from "../assets/img/bestSaleProduct-2.png"
import Product8 from "../assets/img/bestSaleProduct-3.png"
import Product9 from "../assets/img/bestSaleProduct-4.png"
import { RiArrowRightSLine } from "react-icons/ri";
// import CustomerImg from "../assets/img/customer.png"

function AppBody() {
  return (
    <div className="appBodyUi">      
      <Container>
        <Row>
          <Col sm="12" className="appBodyUiFilter">
            <div className="appBodyUiFilterSort">
              <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="5">
                  Sort By:
                  </Form.Label>
                  <Col className="pl-0">
                    <Form.Control as="select">
                      <option> Best Match </option>
                      <option> item </option>
                      <option> item </option>
                      <option> item </option>
                      <option> item </option>
                    </Form.Control>
                  </Col>
                </Form.Group>
              </Form>
            </div>

            <div className="appBodyUiFilterInput">
              <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2"  className=" text-right">
                  Keywords
                  </Form.Label>
                  <Col sm="2"  className="px-0">
                    <Form.Control type="text" placeholder="Tablet" />
                  </Col>

                  <Form.Label column sm="1"  className="pr-0">
                  Price
                  </Form.Label>
                  <Col sm="1"  className="pl-0">
                    <Form.Control type="text" placeholder="10" />
                  </Col>
                  <Col sm="1"  className="pl-0">
                    <Form.Control type="text" placeholder="1000" />
                  </Col>

                  <Col sm="2">
                    <Form.Check type="checkbox" label="Free Shipping" className="pl-0" />
                  </Col>
                  
                  <Form.Label column sm="1" className="px-0 shipingLabel" >
                  Ship to:
                  </Form.Label>
                  <Col sm="2" className="pl-0 shipingSelect">
                    <Form.Control as="select">
                      <option> USA </option>
                      <option> UAE </option>
                      <option> India </option>
                      <option> pakistan </option>                      
                    </Form.Control>
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </Col>
          {/* filter box End*/}

          <Col sm="3" className="pl-0 shoppngCategories">
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                Top Sales <RiArrowRightSLine />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item> Audio </ListGroup.Item>
                      <ListGroup.Item>Video Games</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Brand Focus <RiArrowRightSLine />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>
                    <ListGroup>
                      <ListGroup.Item >Cell Phones </ListGroup.Item>
                      <ListGroup.Item> Cameras</ListGroup.Item>
                      <ListGroup.Item> Computers Tv </ListGroup.Item>
                      <ListGroup.Item> Audio </ListGroup.Item>
                      <ListGroup.Item>Video Games</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  Hi-Tech <RiArrowRightSLine />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <Card.Body>
                    <ListGroup>
                      <ListGroup.Item >Cell Phones </ListGroup.Item>
                      <ListGroup.Item> Cameras</ListGroup.Item>
                      <ListGroup.Item> Computers Tv </ListGroup.Item>
                      <ListGroup.Item> Audio </ListGroup.Item>
                      <ListGroup.Item>Video Games</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  Home <RiArrowRightSLine />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <Card.Body>
                    <ListGroup>
                      <ListGroup.Item >Cell Phones </ListGroup.Item>
                      <ListGroup.Item> Cameras</ListGroup.Item>
                      <ListGroup.Item> Computers Tv </ListGroup.Item>
                      <ListGroup.Item> Audio </ListGroup.Item>
                      <ListGroup.Item>Video Games</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  Sale <RiArrowRightSLine />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <Card.Body>
                    <ListGroup>
                      <ListGroup.Item >Cell Phones </ListGroup.Item>
                      <ListGroup.Item> Cameras</ListGroup.Item>
                      <ListGroup.Item> Computers Tv </ListGroup.Item>
                      <ListGroup.Item> Audio </ListGroup.Item>
                      <ListGroup.Item>Video Games</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

            </Accordion>
          
            <div className="availableFilterOption">
              <Card>
                <Card.Header>Available</Card.Header>
                <Card.Body>  
                  <Form>
                    <Form.Group id="formGridCheckbox">
                      <Form.Check type="radio" label="In Storage " />
                      <Form.Text>
                        45
                      </Form.Text>
                    </Form.Group>
                    <Form.Group id="formGridCheckbox">
                      <Form.Check type="radio" label="In Online-Shop" />
                      <Form.Text>
                        12
                      </Form.Text>
                    </Form.Group>
                  </Form>    
                </Card.Body>
              </Card>
              <Card>
                <Card.Header> Brands  <Card.Link href="#">All</Card.Link></Card.Header>
                <Card.Body>                  
                <Form>
                    <Form.Group id="formGridCheckbox">
                      <Form.Check type="Checkbox" label="Apple" />
                      <Form.Text>
                        45
                      </Form.Text>
                    </Form.Group>

                    <Form.Group id="formGridCheckbox">
                      <Form.Check type="Checkbox" label="JBL Bose Nest" />
                      <Form.Text>
                        32
                      </Form.Text>
                    </Form.Group>

                    <Form.Group id="formGridCheckbox">
                      <Form.Check type="Checkbox" label="Bose" />
                      <Form.Text>
                        3
                      </Form.Text>
                    </Form.Group>

                    <Form.Group id="formGridCheckbox">
                      <Form.Check type="Checkbox" label="Nest" />
                      <Form.Text>
                        5
                      </Form.Text>
                    </Form.Group>

                  </Form> 
                </Card.Body>
              </Card>
            </div>

          </Col>
          <Col sm="9" className="productBox">

            <Card>
              <Card.Img variant="top" src={Product1} />
              <Card.Body>
                <Card.Title> Apple TV 32GB</Card.Title>
                <Card.Subtitle className="mb-2"> Black </Card.Subtitle>
                <Card.Text>
                  $49.99
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src={Product2} />
              <Card.Body>
                <Card.Title> Pebble Time</Card.Title>
                <Card.Subtitle className="mb-2"> Red </Card.Subtitle>
                <Card.Text>
                  $49.99
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src={Product3} />
              <Card.Body>
                <Card.Title> Zendure 4-Port USB</Card.Title>
                <Card.Subtitle className="mb-2"> White </Card.Subtitle>
                <Card.Text>
                  $49.99
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src={Product4} />
              <Card.Body>
                <Card.Title> Withings Smart Body  Analyzer ws-50</Card.Title>
                <Card.Subtitle className="mb-2"> Black </Card.Subtitle>
                <Card.Text>
                  $49.99
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Badge variant="secondary">$49.99</Badge>
              <Card.Img variant="top" src={Product5} />
              <Card.Body>
                <Card.Title> JBL Charge 2+ </Card.Title>
                <Card.Subtitle className="mb-2"> Black </Card.Subtitle>
              </Card.Body>
              <ButtonGroup>
                <Button> 16 GB </Button> 
                <Button> BUY NOW </Button>                
              </ButtonGroup>
            </Card>

          </Col>
          <Col sm="12 pl-0">
            <Pagination>
              <Pagination.Prev className="ml-0 mr-auto" />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item active>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Item>{6}</Pagination.Item>
              <Pagination.Item>{7}</Pagination.Item>
              <Pagination.Item>{8}</Pagination.Item>
              <Pagination.Item>{9}</Pagination.Item>
              <Pagination.Next className="mr-0 ml-auto" />
            </Pagination>
          </Col>

          <Col sm="12" className="bestSellerBox pl-0">
            <Card>
              <Card.Header>Best Sellers</Card.Header>
              <Card.Body className="productBox">
                <Card>
                  <Card.Img variant="top" src={Product6} />
                  <Card.Body>
                    <Card.Title> Beanie</Card.Title>
                    <Card.Subtitle className="mb-2"> Dark Green </Card.Subtitle>
                    <Card.Text>
                      $49.99
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Img variant="top" src={Product7} />
                  <Card.Body>
                    <Card.Title> T-Shirt With a Print</Card.Title>
                    <Card.Subtitle className="mb-2"> Dark Blue </Card.Subtitle>
                    <Card.Text>
                      $49.99
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Img variant="top" src={Product8} />
                  <Card.Body>
                    <Card.Title> Pile-Lined Hooded Jacket </Card.Title>
                    <Card.Subtitle className="mb-2"> Dark Blue </Card.Subtitle>
                    <Card.Text>
                      $49.99
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Img variant="top" src={Product9} />
                  <Card.Body>
                    <Card.Title> Trainers </Card.Title>
                    <Card.Subtitle className="mb-2"> Space Grey </Card.Subtitle>
                    <Card.Text>
                      $49.99
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> 
      
      <Col sm="12" className="pl-0 testimonial">
        <Container> 
          <h2> What Our Customers Have to Say </h2>
          <h4>Couple of Words About This Stories Section</h4>
          <Media>
            <img
              width={64}
              height={64}
              className="mr-3 rounded-circle"
              src="https://www.vhv.rs/dpng/d/473-4739617_transparent-face-profile-png-round-profile-picture-png.png"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5> Celia Fields </h5>
              <p>
                UX Expert
              </p>
            </Media.Body>
            <p>
            This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.
            </p>
          </Media>

          <Media>
            <img
              width={64}
              height={64}
              className="mr-3 rounded-circle"
              src="https://www.vhv.rs/dpng/d/473-4739617_transparent-face-profile-png-round-profile-picture-png.png"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5> Celia Fields </h5>
              <p>
                UX Expert
              </p>
            </Media.Body>
            <p>
            This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.
            </p>
          </Media>

          <Media>
            <img
              width={64}
              height={64}
              className="mr-3 rounded-circle"
              src="https://www.vhv.rs/dpng/d/473-4739617_transparent-face-profile-png-round-profile-picture-png.png"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5> Celia Fields </h5>
              <p>
                UX Expert
              </p>
            </Media.Body>
            <p>
            This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.
            </p>
          </Media>

        </Container> 
      </Col>

    </div>
  );
}

export default AppBody;
