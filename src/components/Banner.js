import React from 'react';

const style = {
  logoIcon: {
    width: 450,
    heigth: 400
  },
  bgDark: {
    backgroundColor: `rgb(1,0,1)`
  }
}

const Banner = props => (
  <article style={style.bgDark} className="mw7 center ph3 ph5-ns tc br2 pv3 bg-black-90 mb5 animated fadeIn">
    <img style={style.logoIcon} className='logoIcon' src="./img/tenor.gif" alt="naruto"/>
    <h4 className="fw2 f4 lh-copy mt0 mb3 white animated fadeIn slower">
    Click on an image to earn points, but don't click on any more than once!
    </h4>
  </article>
);

export default Banner;