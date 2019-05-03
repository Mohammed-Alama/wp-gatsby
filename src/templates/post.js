import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"


class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <React.Fragment>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }}/>
        <div dangerouslySetInnerHTML={{ __html: post.content }}/>
      </React.Fragment>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`