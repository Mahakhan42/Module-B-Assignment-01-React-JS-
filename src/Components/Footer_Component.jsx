import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer_Component = () => {
    return <>
    <center>
        <div style={{background: '#F0F0F0'}}>
        <br /><br /><br />
  <div class="center">
    <div class="row">
      <div class="col-md-6">
       <ul>
        <a href="">About-  </a>&nbsp;
        <a href="">Contact-  </a>&nbsp;
        <a href="">Terms of Use- </a>&nbsp;
        <a href="">Privacy Police</a>&nbsp;
        <p>©your website 2023 All Right Reseved</p>
       </ul>
      </div>
      <div class="col-md-6">
      <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} size="1x" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} size="1x" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} size="1x" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  </div>
  <br /><br /></div></center>
   </>
}
export {Footer_Component};