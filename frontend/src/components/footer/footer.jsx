import React from "react";
import './footer.css';
import PropTypes from 'prop-types';

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
                <div className="footer__privacy__terms">
                    <a href="/privacypolicy">Privacy Policy | </a>
                    <a href="termsandconditions">Terms and Conditions</a>
                </div>
                <div className="app__contact">
                    <p>080-69169760</p>
                </div>
            </div>
            <hr />
            <div className="app__copyright"><p>Copyright 2024 by DCS.com. All Rights Reserved</p></div>
        </footer>
    )

}

export default Footer;