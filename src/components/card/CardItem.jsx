import PropTypes from 'prop-types';
import React from 'react';

export const CardItem = React.memo(({personaje}) => {

  return (
    <div className="card">
        <div className="card_img">
            <img src={personaje.image} alt="rick" />
        </div>

        <div className="card_desc">
            <h2>{personaje.name}</h2>
            <p>{personaje.origin.name}</p>
        </div>
    </div>
  )
})


CardItem.propTypes = {
    personaje: PropTypes.object.isRequired
}