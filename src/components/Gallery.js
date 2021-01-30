import React from 'react'

const Gallery = () => {
    return (
        <section className="gallery">
            <div className="container">
                <div className="row" style={{justifyContent: "center"}}>
                    <div className="gallery__heading">
                        <h2 className="gallery__heading-text">Gallery</h2>
                        <h2 className="gallery__heading-paragraph">Many carefully crafted components to present your business.</h2>
                    </div>
                    <div className="gallery__wrapper">
                        <div className="gallery__landscape" style={{backgroundImage: `url(https://res.cloudinary.com/gopal1996/image/upload/v1612032815/Alphas9/pawel-czerwinski-fpZZEV0uQwA-unsplash-min_sxdyb7.jpg)`, margin: "0.9375rem 0"}}></div>
                        <div className="gallery__potrait" style={{backgroundImage: `url(https://res.cloudinary.com/gopal1996/image/upload/v1612032815/Alphas9/sam-moqadam-Ij2EeFRXBt0-unsplash-min_fpaci7.jpg)`, margin: "0.9375rem 0"}}></div>
                        <div className="gallery__potrait" style={{backgroundImage: `url(https://res.cloudinary.com/gopal1996/image/upload/v1612032815/Alphas9/ospan-ali-LWI4_L5n4U0-unsplash-min_igmrvu.jpg)`, margin: "0.9375rem 0"}}></div>
                        <div className="gallery__potrait" style={{backgroundImage: `url(https://res.cloudinary.com/gopal1996/image/upload/v1612032814/Alphas9/diggity-marketing-SB0WARG16HI-unsplash-min_xmowuu.jpg)`, margin: "0.9375rem 0"}}></div>
                    </div>
                    <div className="gallery__wrapper gallery__wrapper--hide-mobile gallery__wrapper--hide-tablet">
                        <div className="gallery__landscape" style={{backgroundImage: `url(https://res.cloudinary.com/gopal1996/image/upload/v1612032814/Alphas9/myriam-jessier-VHXiGXxwOQ4-unsplash-min_tu0uyb.jpg)`, margin: "0.9375rem 0"}}></div>
                        <div className="gallery__landscape" style={{backgroundImage: `url(https://res.cloudinary.com/gopal1996/image/upload/v1612032814/Alphas9/michael-soledad-D12XjlsIoEM-unsplash-min_yrhv9x.jpg)`, margin: "0.9375rem 0"}}></div>
                        <div className="gallery__potrait" style={{backgroundImage: `url(https://res.cloudinary.com/gopal1996/image/upload/v1612032814/Alphas9/nordwood-themes-yyMJNPgQ-X8-unsplash-min_sutyud.jpg)`, margin: "0.9375rem 0"}}></div>
                        <div className="gallery__potrait" style={{backgroundImage: `url(https://res.cloudinary.com/gopal1996/image/upload/v1612032814/Alphas9/myriam-jessier-VCtI-0qlVgA-unsplash-min_h2v7aq.jpg)`, margin: "0.9375rem 0"}}></div>
                        <div className="gallery__landscape" style={{backgroundImage: `url(https://res.cloudinary.com/gopal1996/image/upload/v1612032814/Alphas9/convertkit-bcDF6nAnszw-unsplash-min_jmqj9p.jpg)`, margin: "0.9375rem 0"}}></div>
                    </div>
                    <div className="gallery__wrapper gallery__wrapper--hide-mobile">
                        <div className="gallery__potrait" style={{backgroundImage: `url(https://res.cloudinary.com/gopal1996/image/upload/v1612032813/Alphas9/balazs-ketyi-FeuEg-8XlA8-unsplash-min_xdwxs3.jpg)`, margin: "0.9375rem 0"}}></div>
                        <div className="gallery__landscape" style={{backgroundImage: `url(https://res.cloudinary.com/gopal1996/image/upload/v1612032813/Alphas9/austin-distel-RX_0vwSPiWs-unsplash-min_snfaer.jpg)`, margin: "0.9375rem 0"}}></div>
                        <div className="gallery__potrait" style={{backgroundImage: `url(https://res.cloudinary.com/gopal1996/image/upload/v1612032813/Alphas9/daniel-korpai-aUmq85-2V7I-unsplash-min_bc4wat.jpg)`, margin: "0.9375rem 0"}}></div>
                        <div className="gallery__potrait" style={{backgroundImage: `url(https://res.cloudinary.com/gopal1996/image/upload/v1612032813/Alphas9/daniel-korpai-wW7XbWYoqK8-unsplash-min_pgs9tj.jpg)`, margin: "0.9375rem 0"}}></div>
                    </div>
                    <button className="gallery__button">View all Pictures</button>
                </div>
            </div>
        </section>
    )
}

export default Gallery
