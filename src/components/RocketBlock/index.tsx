import { Fade } from 'react-awesome-reveal';
import { Row, Col, Carousel } from 'react-bootstrap';
import { FaInstagram } from "react-icons/fa";
import './styles.css';

interface Props {
    rocketBlockInfo: RocketBlockInfo;
    isBlockFirst?: boolean;
}

interface RocketBlockInfo {
    id: number;
    text?: string;
    avatar?: string;
    instagram?: string;
    author: string;
}

const RocketBlock = (props: Props) => {
    const imageSources: Array<string> = [];
    for (let i = 1; i <= 3; i++) {
        const imageSource: string = `rocket-blocks-images/${props.rocketBlockInfo.id}_${i}.jpg`;
        imageSources.push(imageSource);
    }

    return (
        <div className="container-fluid">
            <Row className="justify-content-center g-0">
                <Col md={8} lg={6} xs={12} className="p-2">
                    <Fade triggerOnce>
                        <Carousel className="h-100" interval={null} touch fade>
                            {
                                imageSources.map((imgSource, key) => (
                                    <Carousel.Item key={key}>
                                        <img
                                            className="d-block w-100"
                                            src={imgSource}
                                            alt={`${props.rocketBlockInfo.author} - Image ${key + 1}`}
                                        />
                                        {key === 0 && (
                                            <Carousel.Caption className="rocket-carousel-caption">
                                                <div className="d-flex align-items-center justify-content-center align-self-center gap-2">
                                                    <span>{props.rocketBlockInfo.author}</span>
                                                    {props.rocketBlockInfo.instagram && (
                                                        <a
                                                            href={props.rocketBlockInfo.instagram}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-decoration-none text-white"
                                                            style={{fontSize: '1.2em'}}
                                                        >
                                                            <FaInstagram/>
                                                        </a>
                                                    )}
                                                </div>
                                            </Carousel.Caption>
                                        )}
                                    </Carousel.Item>))
                            }
                        </Carousel>
                    </Fade>
                </Col>
            </Row>
        </div>
    );
}

export default RocketBlock;
