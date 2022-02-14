import React from 'react';
import { AttentionSeeker } from 'react-awesome-reveal';

import './styles.css';

const BackgroundVideo = (): JSX.Element => {
    const videoSource = "opening.mp4"
    return (
        <AttentionSeeker triggerOnce effect={'pulse'}>
            <div className={'Container Overlay'} >
                <video autoPlay loop muted className={'Video'} >
                    <source src={videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
            </video>

                <div className={'Content'}>
                    <div className={'SubContent'} >
                        <h1>РАКЕТА</h1>
                    </div>
                </div>
            </div>
        </AttentionSeeker>

    )
}

export default BackgroundVideo