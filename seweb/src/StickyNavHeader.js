import React, { Component } from 'react';
import imgRivenSymbol3d from './img/RivenSymbol3D.png';
import './StickyNavHeader.css';

class StickyNavHeader extends Component {
  render() {
    const { props } = this;

    const backgroundTuple = [81, 49, 49];
    const alpha = props.opacity * 0.9;
    const backgroundColor = `rgba(${backgroundTuple[0]}, ${backgroundTuple[1]}, ${backgroundTuple[2]}, ${alpha})`;

    return (
      <header className="StickyNavHeader" style={{ backgroundColor }}>
        <div className="StickyNavHeader-section-left" style={{opacity: props.opacity}}>
            <div>About</div>
            <div>Gallery</div>
            <div>Team</div>
        </div>
        <div className="StickyNavHeader-logo-outlet" style={props.isLogoVisible ? {} : {visibility: 'hidden'}}>
          <div className="StickyNavHeader-logo-outline" />
          <img className="StickyNavHeader-logo" src={imgRivenSymbol3d} style={{ height: props.logoHeight, transition: 'height 0.07s' }} />
          <div className="StickyNavHeader-logo-backdrop" />
        </div>
        <div className="StickyNavHeader-section-right"  style={{opacity: props.opacity}}>
            <div>We're Hiring</div>
            <div>Contact</div>
        </div>
      </header>
    );
  }
}

export default StickyNavHeader;
