import React from "react";
import preval from 'preval.macro';
import './Footer.scss';

const updated = preval`module.exports = new Date();`;

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="FooterSection Links">
        <div className="FooterSectionLabel"> Links: </div>
        <a href="https://github.com/alpinepascia">Github</a>
        {/* <div className="Divider"> / </div>
        <a href="https://hh.ru">Head Hunter</a> */}
      </div>
      <div className="FooterSection LastUpdated">
        <div className="FooterSectionLabel">Last updated: </div>
        {new Date(updated).toLocaleDateString()}
      </div>
    </footer>
  );
};

export default Footer;
