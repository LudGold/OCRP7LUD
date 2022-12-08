import React from 'react'

import '../../styles/footer.css'

export default function Footer() {
    return (
       <div className="footer">
          <div className="footer_logo">
             <img src="footer-logo.png" alt="logo de Kasa"></img>
          </div>
          <p className="footer_text">© 2020 Kasa. All rights reserved</p>
       </div>
    );
 }
