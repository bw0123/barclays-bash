import React from 'react';
import Fade from 'reacr-reveal/Fade';

const Footer=()=>{
    return(
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">
                Barclays Center Concerts
                </div>
                <div className="footer_copyright">
                Barclays Center Events. All rights reserved.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;