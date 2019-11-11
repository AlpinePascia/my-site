import React from 'react';
import './Main.scss';


const Main = () => {
  return (
    <main className="Main">
      <div className="UnderConstruction">
        <div className="UnderConstructionTextWrapper"><div className="UnderConstructionText">Under construction</div></div>
        <div className="Crane">&nbsp;🏗</div>
        {/* <Crane>&nbsp;🏗</Crane> */}
      </div>
    </main>
  );
};

export default Main;
