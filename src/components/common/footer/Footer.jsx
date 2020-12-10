import React from 'react';

import './Footer.css';

function Footer () {
    return (
        <section className="footer">
           <hr className="footer-seperator"/>
            <section className="footer-top">
            Park Crescent Campus ,Peterborough, Cambridgeshire PE1 4DZ, United Kingdom
            </section>
        <section className="footer-info">
        <section className="footer-info-left">
            Helpful links
          <section className="footer-info__links">
              Why Choose UCP
              <br />
              Courses
              <br />
              Events
          </section>
        </section>


        <section className="footer-info-right">
          <section className="footer-info__social">
            Socials
          </section>
          <section className="footer-info__social-links">
            Facebook
            <br />
            Twitter
            <br />
            Linkedin
          </section>
        </section>
      </section>

        <section className="footer-bottom">
        Copyright © University Centre Peterborough. All rights reserved. Site by i3MEDIA
        </section>

      <hr className="footer-seperator" />
    </section>


    )
}

export default Footer;



