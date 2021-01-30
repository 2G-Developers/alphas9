import React from 'react'

import ReactPlayer from 'react-player/lazy'

const Videos = () => {
    return (
        <section className="videos">
            <div className="container">
                <div className="row" style={{justifyContent: "center"}}>
                    <div className="videos__heading">
                        <h2 className="videos__heading-text">We’ve created the product that will help your startup look better</h2>
                    </div>
                    <div className="videos__wrapper">
                        <ReactPlayer light={true} playing={true} onError={(err) => console.log(err)} url="https://www.youtube.com/watch?v=WN-9SzRtANc" className="videos__youtube" controls={true} width="100%" />
                    </div>

                    <a href="https://youtube.com" className="videos__button">Watch on Youtube</a>
                </div>
            </div>
        </section>
    )
}

export default Videos
