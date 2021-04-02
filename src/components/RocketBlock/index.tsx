import React from 'react';
import { Row, Col, Carousel, Card, Image } from 'react-bootstrap';
import { FaInstagram } from "react-icons/fa";
import './styles.css';

interface Props {
    id: number;
    text: string;
    avatar: string;
    instagram: string;
    author: string;
    isBlockFirst?: boolean;
}

const RocketBlock = (props: Props): JSX.Element => {
    const imageSources: Array<string> = [];
    for (let i = 1; i <= 3; i++) {
        const imageSource: string = `rocket-blocks-images/${props.id}_${i}.jpg`;
        imageSources.push(imageSource);
    }
    return (
        <>
            <Row noGutters>
                <Col md={6} xs={12} className={"p-1"}>
                    <Carousel>
                        {
                            imageSources.map((imgSource, key) => (
                                <Carousel.Item key={key}>
                                    <img
                                        className="d-block w-100"
                                        src={imgSource}
                                        alt=""
                                    />
                                </Carousel.Item>))
                        }
                    </Carousel>
                </Col>
                <Col md={6} xs={12} className={"p-1"}>
                    <Card>
                        <Card.Body className={'p-2'}>
                            <Card.Title className={'mb-0'}>
                                <Row className={'justify-content-center'}>
                                    <Col xs={8} md={9} className={'p-4 align-self-center'}>
                                        <div>{props.author}</div>
                                        <Card.Link href={props.instagram} ><FaInstagram size={20} /></Card.Link>
                                    </Col>
                                    <Col xs={4} md={3}>
                                        <Image src={props.avatar} roundedCircle fluid />
                                    </Col>
                                </Row>
                            </Card.Title>
                            <Card.Text className={props.isBlockFirst ? "p-2 rocket-first-block-text" :"p-2 rocket-text"}>
                                {props.text}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default RocketBlock;