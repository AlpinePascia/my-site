import React from 'react';
import './Content.scss';

const Content = () => {
  return (
    <main className="Content">
      <div className="UnderConstruction">
        <div className="UnderConstructionTextWrapper">Under construction</div>
        <div className="Crane">&nbsp;🏗</div>
        {/* <Crane>&nbsp;🏗</Crane> */}
      </div>
    </main>
  );
};

export default Content;
