import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { Row, Col, Carousel, Card, Image } from 'react-bootstrap';
import { FaInstagram } from "react-icons/fa";
import './styles.css';

interface Props {
    rocketBlockInfo: RocketBlockInfo;
    isBlockFirst?: boolean;
}

interface RocketBlockInfo {
    id: number;
    text: string;
    avatar?: string;
    instagram?: string;
    author: string;
}

const RocketBlock = (props: Props): JSX.Element => {
    const imageSources: Array<string> = [];
    for (let i = 1; i <= 3; i++) {
        const imageSource: string = `rocket-blocks-images/${props.rocketBlockInfo.id}_${i}.jpg`;
        imageSources.push(imageSource);
    }
    return (
        <>
            <Row noGutters className={'justify-content-center'}>
                <Col md={6} xs={12} className={"p-1 align-self-center"}>
                    <Slide triggerOnce>
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
                    </Slide>
                </Col>
                <Col md={6} xs={12} className={"p-1 align-self-center"}>
                    <Slide triggerOnce direction={'right'}>
                        <Card>
                            <Card.Body className={'p-2'}>
                                <Card.Title className={'mb-0'}>
                                    <Row className={'justify-content-center'}>
                                        <Col xs={2} md={1}/>
                                        <Col xs={1} md={1} className={'p-4 align-self-center'}>
                                            {props.rocketBlockInfo.instagram && <Card.Link href={props.rocketBlockInfo.instagram} ><FaInstagram size={20} /></Card.Link>}
                                        </Col>
                                        <Col xs={8} md={10} className={'p-4 align-self-center'}>
                                            <div>{props.rocketBlockInfo.author}</div>
                                        </Col>
                                    </Row>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Slide>
                </Col>
            </Row>
        </>
    );
}

export default RocketBlock;
