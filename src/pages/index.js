import React from "react"
import { graphql } from "gatsby"
import Restaurantcard from '../templates/RestaurantCard.js' 
import Header from '../layouts/Header.js'
import Footer from '../layouts/Footer.js'
import styled from 'styled-components'

const DinnerGenerator = ({ data }) => {
  const restaurants = data.allDataJson.edges[0].node.restaurants;
  const allrests = restaurants.length;
  const randomrest = restaurants[Math.floor(Math.random()*allrests)];
  return (
    <DinnerGenerator.Container>
      <Header />
      <Restaurantcard 
        location={randomrest.location}
        sampleItems={randomrest.sampleitems}
        notables={randomrest.notables} />
      <Footer />
    </DinnerGenerator.Container>
  )
}

DinnerGenerator.Container = styled.div`
  position: absolute; 
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const query = graphql`
  query GetRestaurantQuery {
    allDataJson {
      edges {
        node {
         restaurants {
           location
           sampleitems
           notables
         }
       }
     }
   }
 }
`

export default DinnerGenerator
