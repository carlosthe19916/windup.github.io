import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Seo from "../components/seo";
import ShareButtons from "../components/sharebuttons";
import WidowControl from "../components/widow-control";
import PostCard from "../components/postcard";

export default function Page({ children, ...props }) {
  const {
    frontmatter: { title, description, banner, share_image },
  } = props.pageContext;
  const url = props.location.href;
  const bannerPath = `${props.path}${banner}`.slice(1);
  let bannerImg;

  // FIXME: There is a horrible hack in the Seo element. Banner images sent to Seo
  // from blog posts work, but not when sent from an mdx page. Why? Unknown.
  // Instead share_image points to a static image.

  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allMdx(
            sort: { order: DESC, fields: frontmatter___date }
            filter: { frontmatter: { featured: { eq: true } } }
            limit: 6
          ) {
            nodes {
              id
              slug
              excerpt
              frontmatter {
                title
                description
              }
            }
          }
          allFile {
            nodes {
              relativePath
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  aspectRatio: 2.22
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="page-wrapper !max-w-screen-lg">
          <Seo
            title={title}
            description={description}
            meta={[
              {
                property: `og:image`,
                content: `${data.site.siteMetadata.siteUrl}${share_image}`,
              },
            ]}
          />

          {(bannerImg = data.allFile.nodes.find(
            (n) => n.relativePath === bannerPath
          )?.childImageSharp?.gatsbyImageData) && <></>}
          <div>
            <GatsbyImage
              className="mt-6 rounded-md before:text-transparent before:absolute before:pointer-events-none before:z-[1] before:w-full before:h-full before:shadow-image before:rounded-md relative"
              image={bannerImg}
              alt="Banner"
            />
          </div>
          <h1 className="mt-6 font-medium text-3xl md:text-4xl font-headings !leading-snug">
            <WidowControl text={title} />
          </h1>
          <div className="border-b border-base-300 mb-4 py-4 text-base-500">
            <ShareButtons title={title} url={url} twitterHandle="konveyor_io" />
          </div>
          <div className="flex flex-col md:flex-row md:gap-4">{children}</div>
          <h2 className="mt-8 md:mt-16 font-medium text-3xl md:text-4xl font-headings !leading-snug">
            <WidowControl text="What to read next" />
          </h2>
          <div className="mt-6 mb-8 md:mb-16 grid gird-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.allMdx.nodes.map((post) => (
              <PostCard key={post.id} post={post} condensed="true" />
            ))}
          </div>
        </div>
      )}
    />
  );
}
