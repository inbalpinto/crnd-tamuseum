import React, { Component } from 'react';

var rightsText =
    "All rights reserved. All content (texts, trademarks, illustrations, photos, graphics, files, designs, arrangements, etc). In this catalogue are protected by " +
    "copyright and other protective laws, and are owned or controlled by or licensed to the Tel Aviv Museum of Art or the party listed as the provider of the " +
    "content. The content of this catalogue is to be used only in accordance with copyright and other protective laws. Unauthorized copying, reproduction, " +
    "republishing, transmitting or duplicating of any of the material is prohibited.";

class Footer extends Component {
  render() {
    return (
        <div className="footer-container">
          <div className="footer-text">{rightsText}</div>
        </div>
    );
  }
}

export default Footer;
