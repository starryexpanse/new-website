import idx from 'idx';
import React, { Component } from 'react';
import { ScrollConsumer } from './ScrollProvider';
import logo from './logo.svg';
import bgTapestry from './img/bg-tapestry.jpg';
import bgTestimonial from './img/Bedroom2.jpg';
import imgDagger from './img/dagger.png';
import './App.css';
import Measure from 'react-measure';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import StickyNavHeader from './StickyNavHeader';

class App extends Component {
  state = {
    dimensions: null,
  };

  render() {
    const { state } = this;

    const percentages = 190;
    const skew = -0.5;
    const center = (1 - (.5 - skew)) * percentages;
    return (
      <div className="App">
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,700,800,600,300" rel="stylesheet" type="text/css" />
        <StickyNavHeader />
        <ParallaxProvider>
          <Parallax
              className="App__parallax"
              offsetYMax={`${center + percentages / 2}%`}
              offsetYMin={`${center - percentages / 2}%`}
              slowerScrollRate
          >
              <img src={bgTapestry} className="App__parallax-image" />
          </Parallax>
          <div className="App__headline-container">
            <div className="App__headline">
              <Measure
                client
                offset
                onResize={(contentRect) => {
                  this.setState({ dimensions: contentRect.offset })
                }}
              >
                {({ measureRef }) =>
                  <div
                    ref={measureRef}
                  >
                    Riven Remastered
                    <div
                      style={{
                        position: 'absolute',
                        left: idx(state, _ => _.dimensions.left),
                        top: idx(state, _ => _.dimensions.top),
                        width: '30px',
                        height: '30px',
                        backgroundColor: 'red'
                      }}></div>
                    <ScrollConsumer>
                      {scroll => {
                        return <div>{scroll}</div>;
                      }}
                    </ScrollConsumer>
                  </div>
                }
              </Measure>
            </div>
          </div>
          <div className="App__section">
            <div className="App__section-header">About Us</div>
            <div className="App__section-header-divider" />
            <div className="App__section-about-us-body">
              <div className="App__section-about-us-body-column-left">
                <div className="App__section-about-us-body-column-inner">
                  <div className="App__section-about-us-body-column-inner-title">Who We Are</div>
                  <div>
                    We are a group of game developers who share the dream of seeing <i>Riven</i>{' '}
                    released into the modern gaming landscape. <i>The Starry Expanse Project</i> is{' '}
                    our attempt to immortalize Cyan's masterpiece and let players gaze in awe and wonder{' '}
                    at the beauty of <i>Riven</i>'s tropical and deserted landscapes. At the same time,{' '}
                    they will be puzzling as to what exactly they have been brought there to do, just{' '}
                    as did players worldwide upon <i>Riven</i>'s original release in 1997.
                  </div>
                </div>
              </div>
              <div className="App__section-about-us-body-graphic">
                <img src={imgDagger} />
              </div>
              <div className="App__section-about-us-body-column-right">
                <div className="App__section-about-us-body-column-inner">
                  <div className="App__section-about-us-body-column-inner-title">Who We Are</div>
                  <div>
                    We are a group of game developers who share the dream of seeing <i>Riven</i>
                    released into the modern gaming landscape. <i>The Starry Expanse Project</i> is
                    our attempt to immortalize Cyan's masterpiece and let players gaze in awe and wonder
                    at the beauty of <i>Riven</i>'s tropical and deserted landscapes. At the same time,
                    they will be puzzling as to what exactly they have been brought there to do, just
                    as did players worldwide upon <i>Riven</i>'s original release in 1997.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
