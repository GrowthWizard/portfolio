"use client"

import React from "react";

// https://github.com/mattboldt/typed.js
import Typed from 'typed.js';

const words = ['Web-Development', 'SEO-Beratung', 'Gastbeiträge', 'Webdesign'];

/*
* We need to use a Class Component because By default, you may not use the ref attribute 
* on function components because they don’t have instances.
* https://reactjs.org/docs/refs-and-the-dom.html
*/

class Typing extends React.Component {
    componentDidMount() {
      const options = {
        strings: words,
        typeSpeed: 75,
        backSpeed: 35,
        loop: true,
        cursorChar: "|",
      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }
  componentWillUnmount() {
      // Please don't forget to cleanup animation layer
      this.typed.destroy();
    }
    
    render() {
      return (
          <span
            className="whitespace-pre"
            ref={(el) => {
              this.el = el;
            }}
          />
      );
    }
  }

  export default Typing;