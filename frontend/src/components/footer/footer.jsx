import React from "react";
import './footer.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Represents Footer Code
 */
const Footer=()=>{
    return(
        <footer className="main__footer">
            <div className="app__footer">
                <div className="footer__support">
                <p>support@dcs.com</p>
                </div>
                <div className="app__navigations">
                   <Link to="/RichTextEditor">Test Rich Text Editor</Link>
                </div>
                <div className="footer__privacy__terms">
                    <a href="/privacypolicy">Privacy Policy | </a>
                    <a href="termsandconditions">Terms and Conditions</a>
                </div>
                <div className="app__contact">
                    <p>080-69169760</p>
                </div>
            </div>
            <div className="app__copyright"><p>Copyright 2024 by DCS.com. All Rights Reserved</p></div>
        </footer>
    )

}

export default Footer;