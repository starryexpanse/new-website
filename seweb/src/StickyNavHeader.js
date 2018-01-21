import React, { Component } from 'react';
import './StickyNavHeader.css';

class StickyNavHeader extends Component {
  render() {
    return (
      <header className="StickyNavHeader">
        <div className="StickyNavHeader-section-left">
            <div>About</div>
            <div>Gallery</div>
            <div>Team</div>
        </div>
        <div className="StickyNavHeader-logo-outlet">
        </div>
        <div className="StickyNavHeader-section-right">
            <div>About</div>
            <div>Gallery</div>
            <div>Team</div>
        </div>
      </header>
    );
  }
}

export default StickyNavHeader;
