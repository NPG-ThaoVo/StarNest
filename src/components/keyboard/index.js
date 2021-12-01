import React from 'react';
import Header from './header';
import Translation from './translation';
import Fonts from './fonts';
import Footer from './footer';
import Decorate from './decorate';
// import Ribbon from './ribbon';
import Download from './download';

const Keyboard = () => {
  return (
    <div style={{ fontFamily: 'Helvetica' }}>
      {/* <Ribbon></Ribbon> */}
      <Header></Header>
      <Decorate></Decorate>
      <Translation></Translation>
      <Fonts></Fonts>
      <Download></Download>
      <Footer></Footer>
    </div>
  );
};

export default Keyboard;
