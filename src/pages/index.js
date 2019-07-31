import React from "react"
import { graphql } from "gatsby"

const Dinnergenerator = ({ data }) => {
  const restaurants = data.allDataJson.edges.map(edge => edge.node);
  return (
    <div className="Generator">
      <ul>
        {restaurants.map(rest => (
          <li key={index}>{rest}</li>
        ))}
      </ul>
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
