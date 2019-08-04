import React from "react"
import PropTypes from "prop-types"

const RestaurantCard = ({ location, sampleItems, notables }) => {
  return (
    <div className="Generator">
      <div className="restlocation">{location}</div>
      <div className="restinfo">
        <div className="restitems">{sampleItems}</div>
        <div className="restnotes">{notables}</div>
      </div>
    </div>
  )
}

RestaurantCard.propTypes = {
  location: PropTypes.string.isRequired,
  sampleItems: PropTypes.string.isRequired,
  notables: PropTypes.string.isRequired,
}

export default RestaurantCard
