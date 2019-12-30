import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import "../all.sass";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-mobile">
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id} className="column">
              <div
                className="card"
                style={{ margin: "10px", paddingTop: "1px" }}
              >
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src="https://bulma.io/images/placeholders/1280x960.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">John Smith</p>
                      <p className="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>

                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);

/*
    <article
      className={`blog-list-item tile is-child box notification ${
        post.frontmatter.featuredpost ? "is-featured" : ""
      }`}
    >
      <header>
        {post.frontmatter.featuredimage ? (
          <div className="featured-thumbnail">
            <PreviewCompatibleImage
              imageInfo={{
                image: post.frontmatter.featuredimage,
                alt: `featured image thumbnail for post ${post.title}`
              }}
            />
          </div>
        ) : null}
        <p className="post-meta">
          <Link
            className="title has-text-primary is-size-4"
            to={post.fields.slug}
          >
            {post.frontmatter.title}
          </Link>
          <span> &bull; </span>
          <span className="subtitle is-size-5 is-block">
            {post.frontmatter.date}
          </span>
        </p>
      </header>
      <p>
        {post.excerpt}
        <br />
        <br />
        <Link className="button" to={post.fields.slug}>
          Keep Reading →
        </Link>
      </p>
    </article>
    */
