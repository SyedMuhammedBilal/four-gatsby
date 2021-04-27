import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import '../success.css'

const PinkBG = styled.div`
    background: #e34e8b;
    padding: 60px;
    color: #fff;
    margin-top: 10vh;
    margin-bottom: 5vh;
    opacity: 0.9;
`

const Description = styled.p `
    font-size: 16px;
    margin-top: 2vh;
`;

const Blog = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
          allMediumPost {
            edges {
              node {
                id
                title
                virtuals {
                  subtitle
                  totalClapCount
                  previewImage {
                    imageId
                    originalHeight
                    originalWidth
                  }
                  topics {
                    name
                    description
                    image {
                      id
                    }
                    createdAt(formatString: "DD MM YYYY")
                  }
                }
                createdAt(formatString: "DD MM YYYY")
                author {
                  bio
                  name
                  imageId
                }
              }
            }
          }
        }
    `)
    return (
        <PinkBG>
            {data.allMediumPost.edges.map(({node}) => {
                return (
                    <React.Fragment>
                        <h1> {node.title} </h1>
                        {/* <Description> {node.virtuals.subtitle} </Description> */}
                        <a style={{color: 'yellow', fontWeight: 500}} href="https://medium.com/@fourpercnt" target="_blank"> Read from our latest posts... </a>
                    </React.Fragment>
                )
            })}
        </PinkBG>
    )
}

export default Blog;