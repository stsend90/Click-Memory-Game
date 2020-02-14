import React from 'react';

const style = {
  logoIcon: {
    width: 150,
    heigth: 100,
    borderRadius: 400/ 2,
    backgroundColor: "white",
  }
}

const IconCard = props => (
  <section id={props.id} className="tc pa3 hvr-float-shadow animated zoomInUp" value={props.id} onClick={() =>
  props.clickedPlayer(props.id)
  }>
    <article className="w4 pa2">
      <img style={style.logoIcon} src={props.image} className="db" alt="game-character" />
    </article>
  </section>
)

export default IconCard;