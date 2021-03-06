import React, { Component } from 'react';
import './StickyNavHeader.css';
import imgRivenSymbol3d from './img/RivenSymbol3D.png';
import { quadInOut } from 'eases';

class SpinningLogo extends Component {
  render() {
    const { props } = this;
    const progress = Math.min(
        Math.max(((props.spinningRange - props.distanceFromTop) / props.spinningRange), 0),
        1
    );

    return (
        <div style={{
            ...props.style,
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute',
                top: -4,
                right: -3,
                left: -4,
                bottom: 0,
                border: '1px solid black',
                borderRadius: '100px'
            }}></div>
            <img
                src={imgRivenSymbol3d}
                style={{
                    transform: `rotate(${
                        0.5 + quadInOut(progress) / 2
                    }turn)`,
                }}
            />
        </div>
    );
  }
}

export default SpinningLogo;
