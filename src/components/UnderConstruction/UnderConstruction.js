import React from 'react';
import { root, textWrapper, text } from './UnderConstruction.module.scss';

const UnderConstruction = () => {
  return (
    <div className={root}>
      <div className={textWrapper}>
        <div className={text}>Work in progress</div>
      </div>
      {/* <div className="Crane">&nbsp;🏗</div> */}
    </div>
  );
};

export default UnderConstruction;
