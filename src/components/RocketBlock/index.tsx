import React from 'react';
import { Row, Col, Carousel, Card, Image } from 'react-bootstrap';
import { FaInstagram } from "react-icons/fa";

interface Props {
    text: string;
    avatar: string;
    instagram: string;
    author: string;
}

const RocketBlock = (props: Props): JSX.Element => {
    return(
        <>
            <Row noGutters>
                <Col md={6} xs={12} className={"p-4"}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.zastavki.com/pictures/640x480/2015Backgrounds_Just_a_gray_background_095362_29.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.zastavki.com/pictures/640x480/2015Backgrounds_Just_a_gray_background_095362_29.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.zastavki.com/pictures/640x480/2015Backgrounds_Just_a_gray_background_095362_29.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col md={6} xs={12} className={"p-4"}>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <Row className={'justify-content-around'}>
                                    <Col xs={8} md={9} className={'align-self-center'}>
                                        {props.author}
                                    </Col>
                                    <Col xs={4} md={3}>
                                        <Image src={props.avatar} roundedCircle fluid/>
                                    </Col>
                                </Row>
                            </Card.Title>
                            <Card.Text>
                                {props.text}
                            </Card.Text>
                            <Card.Link href={props.instagram} ><FaInstagram size={30}/></Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default RocketBlock;