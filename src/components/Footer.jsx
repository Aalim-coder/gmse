import React from 'react';
import IMAGE from '../assets/uni_logo.png';

function Footer(){
    return (
        <div>
            <footer>
            <div className="footer-text">
                <div className="footer-text-heading">Made By : </div>
                <div>Amaan Haider Khan</div>
                <div>Gazi Siddique</div>
                <div>Aalim Hussain</div>
            </div>
            <div className="footer-uni">
                <img src={IMAGE} alt="University Logo"></img>
            </div>
                <div className="footer-text-bottom">ⓒ 2023 - 2024</div>
            </footer>
        </div>
    );
}

export default Footer;