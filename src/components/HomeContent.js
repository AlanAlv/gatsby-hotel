import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

const HomeContent = () => {
    
    const info = useStaticQuery(graphql`
        query {
            allDatoCmsPage(filter: {slug: { eq: "Home"}}){
                nodes {
                    title
                     content
                     image {
                         fluid {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `);

    console.log(info);

    return ( 
        <>
            <h2>Title</h2>
        </>
     );
}
 
export default HomeContent;