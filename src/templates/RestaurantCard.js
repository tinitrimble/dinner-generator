import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

const RestaurantCard = ({ location, sampleItems, notables }) => {
  return (
    <RestaurantCard.Container>
      <RestaurantCard.Card>
        <RestaurantCard.Location>{location}</RestaurantCard.Location>
        <RestaurantCard.Restinfo>
          <RestaurantCard.Restitems>What to eat: {sampleItems}</RestaurantCard.Restitems>
          <RestaurantCard.Restnotes>Notes: {notables}</RestaurantCard.Restnotes>
        </RestaurantCard.Restinfo>
      </RestaurantCard.Card>
    </RestaurantCard.Container>
  )
}

RestaurantCard.Container = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

RestaurantCard.Card = styled.div`
  max-width: 400px;
  width: 100%;
`;

RestaurantCard.Location = styled.div`
  font-size: 48px;
`;

RestaurantCard.Restinfo = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  color: #698587;
`;

RestaurantCard.Restitems = styled.div`
  padding: 10px;
`;

RestaurantCard.Restnotes = styled.div`
  padding: 10px;
`;

RestaurantCard.propTypes = {
  location: PropTypes.string.isRequired,
  sampleItems: PropTypes.string.isRequired,
  notables: PropTypes.string.isRequired,
}

export default RestaurantCard