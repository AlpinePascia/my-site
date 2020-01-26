import React from 'react';
import { animated, useTransition } from 'react-spring';


const FadeInOut = ({ toggle, children, ...otherProps }) => {
  const transitions = useTransition(toggle, null, {
    from: { opacity: 0.1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config:	{ mass: 0.6, tension: 210, friction: 20 },
  });

  return (
    <>
    {transitions.map(({ item, key, props }) => item &&
      <animated.div key={key} {...otherProps} style={props}>
        {children}
      </animated.div>
    )}
    </>
  );
};

export default FadeInOut;
