import React from "react"
import './index.css';
import { graphql } from "gatsby"

const Dinnergenerator = ({ data }) => {
  const restaurants = data.allDataJson.edges[0].node.restaurants;
  const allrests = restaurants.length;
  const randomrest = restaurants[Math.floor(Math.random()*allrests)];
  return (
    <div className="Generator">
      <div key={randomrest.location}
           className="restlocation">
        {randomrest.location} 
      </div>
      <div className="restinfo">
        <div key={randomrest.sampleitems}
             className="restitems">
          {randomrest.sampleitems} 
        </div>
        <div key={randomrest.notables}
             className="restnotes">
          {randomrest.notables} 
        </div>
      </div>
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
