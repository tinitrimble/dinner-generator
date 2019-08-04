import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

const RestaurantCard = ({ location, sampleItems, notables }) => {
  return (
    <RestaurantCard.Container>
      <div className="restlocation">{location}</div>
      <div className="restinfo">
        <div className="restitems">{sampleItems}</div>
        <div className="restnotes">{notables}</div>
      </div>
    </RestaurantCard.Container>
  )
}

RestaurantCard.Container = styled.div`
  background-color: purple;
`;

RestaurantCard.propTypes = {
  location: PropTypes.string.isRequired,
  sampleItems: PropTypes.string.isRequired,
  notables: PropTypes.string.isRequired,
}

export default RestaurantCard
