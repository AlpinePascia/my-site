import React from 'react';
import './Content.scss';

const Content = () => {
  return (
    <main className="Content">
      <div className="UnderConstruction">
        <div className="UnderConstructionTextWrapper"><div className="UnderConstructionText">Under construction</div></div>
        <div className="Crane">&nbsp;🏗</div>
        {/* <Crane>&nbsp;🏗</Crane> */}
      </div>
    </main>
  );
};

export default Content;
