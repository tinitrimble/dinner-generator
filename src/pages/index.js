import React from "react"
import { graphql } from "gatsby"
import Restaurantcard from '../templates/RestaurantCard.js' 
import './index.css';
import Header from '../layouts/Header.js';
import Footer from '../layouts/Footer.js';

const Dinnergenerator = ({ data }) => {
  const restaurants = data.allDataJson.edges[0].node.restaurants;
  const allrests = restaurants.length;
  const randomrest = restaurants[Math.floor(Math.random()*allrests)];
  return (
    <div>
      <Header />
      <Restaurantcard 
        location={randomrest.location}
        sampleItems={randomrest.sampleitems}
        notables={randomrest.notables} />
      <Footer />
    </div>
  )
}

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

export default Dinnergenerator
