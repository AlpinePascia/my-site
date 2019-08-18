import React from 'react';
import './LanguageSwitch.scss';


const LanguageSwitch = () => {
    return (
        <div className="LanguageSwitch">
            <div className="LanguageLink active">Eng</div>
            <div className="Divider">|</div>
            <div className="LanguageLink">Ru</div>
        </div>
    );
};

export default LanguageSwitch;
