import React from "react"
import './index.css';
import { graphql } from "gatsby"
import Header from '../layouts/Header.js';
import Footer from '../layouts/Footer.js';

const Dinnergenerator = ({ data }) => {
  const restaurants = data.allDataJson.edges[0].node.restaurants;
  const allrests = restaurants.length;
  const randomrest = restaurants[Math.floor(Math.random()*allrests)];
  return (
    <div>
      <Header />
      <div className="Generator">
        <div className="restlocation">
          {randomrest.location} 
        </div>
        <div className="restinfo">
          <div className="restitems">
            {randomrest.sampleitems} 
          </div>
          <div className="restnotes">
            {randomrest.notables} 
          </div>
        </div>
      </div>
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
