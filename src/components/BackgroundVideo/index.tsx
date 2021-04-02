import React from 'react';

import './styles.css';

const BackgroundVideo = (): JSX.Element => {
    const videoSource = "opening.mp4"
    return (
        <div className={'Container'} >
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
    )
}

export default BackgroundVideo