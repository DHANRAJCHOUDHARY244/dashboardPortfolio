import React from 'react';
import Typed from 'react-typed';
// for blinking cursor
import 'react-typed/dist/animatedCursor.css';

export default function Code(props) {
  return (
    <div className='art-lg-text art-code mb-25'>
      &lt;<i>code</i>&gt;{' '}
      <Typed
        loop
        typeSpeed={100}
        backSpeed={25}
        strings={props.typed}
        smartBackspace
        shuffle={false}
        backDelay={1}
        fadeOut={false}
        fadeOutDelay={100}
        loopCount={0}
        showCursor
        cursorChar='|'
      />{' '}
      &lt;/<i>code</i>&gt;
    </div>
  );
}
