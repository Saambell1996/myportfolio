import React, { Component } from "react";
import { ScrollTo } from "react-scroll-to";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
library.add(faArrowUp)







export default class Arrow extends Component {
  render() {
    return (
      <React.Fragment>
        <ScrollTo>
          {({ scrollTo }) => (
              <ScrollAnimation animateIn="fadeIn" initiallyVisible="true">
        
           
              
            <div
            
              className="scroll" 
              onClick={() => scrollTo({ ref: this.myRef, y: 0, smooth: true })}
              href="#" 
              
            
  
 
            > 
            <div className="up-arrow">
              <FontAwesomeIcon icon="arrow-up" size="lg" />
              </div>
            </div>
            </ScrollAnimation>
            
          )}
        </ScrollTo>
      </React.Fragment>
    );
  }
}
