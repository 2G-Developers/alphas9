import React from 'react'

import ReactPlayer from 'react-player/lazy'

const Videos = ({data}) => {
    return (
        <section className="videos">
            <div className="container">
                <div className="row" style={{justifyContent: "center"}}>
                    <div className="videos__heading">
                        <h2 className="videos__heading-text">{data?.value?.header}</h2>
                    </div>
                    <div className="videos__wrapper">
                        <ReactPlayer light={true} playing={true} onError={(err) => console.log(err)} url={data?.value?.videos[0]} className="videos__youtube" controls={true} width="100%" />
                    </div>

                    <a href="https://youtube.com" className="videos__button">Watch on Youtube</a>
                </div>
            </div>
        </section>
    )
}

export default Videos
