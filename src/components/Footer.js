import React from 'react'

import {FaTwitter, FaFacebookF, FaInstagram} from 'react-icons/fa'

const Footer = ({social}) => {
    return (
        <footer className="footer">
            <div className="footer__logo">Alphas9</div>
            {/* <ul className="footer__list">
                <li className="footer__item"><a href="https://facebook.com" className="footer__link">faq</a></li>
                <li className="footer__item"><a href="https://facebook.com" className="footer__link">privacy</a></li>
                <li className="footer__item"><a href="https://facebook.com" className="footer__link">terms & condition</a></li>
                <li className="footer__item"><a href="https://facebook.com" className="footer__link">contact</a></li>
            </ul> */}
            <p className="footer__link">copyright@2021</p>
            <ul className="footer__social">
                <li className="footer__social-list">
                    <a href={social?.value?.twitter[0]} className="footer__social-link">
                        <FaTwitter />
                    </a>
                </li>
                <li className="footer__social-list">
                    <a href={social?.value?.facebook[0]} className="footer__social-link">
                        <FaFacebookF />
                    </a>
                </li>
                <li className="footer__social-list">
                    <a href={social?.value?.instagram[0]} className="footer__social-link">
                        <FaInstagram />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
