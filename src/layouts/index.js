import React from "react";
import ReactDOMServer from "react-dom/server";
import { graphql, useStaticQuery } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import he from "he";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import CopyCodeButton from "../components/copycodebutton";

const components = {
  wrapper: ({ children }) => <article>{children}</article>,
  h2: (props) => (
    <h2
      className="mt-10 mb-4 font-medium text-base-700 text-2xl md:text-3xl pb-4 border-b border-base-400"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-9 mb-4 text-base-700 font-medium text-xl md:text-2xl"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="mt-8 mb-3 text-base-700 font-medium text-lg md:text-xl"
      {...props}
    />
  ),
  h5: (props) => (
    <h5
      className="mt-7 mb-2 text-base-700 font-medium text-base md:text-lg"
      {...props}
    />
  ),
  h6: (props) => (
    <h6
      className="mt-6 mb-2 text-base-700 font-medium text-base md:text-base"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mb-4 text-base text-base-700 leading-loose" {...props} />
  ),
  img: (props) => <img className="my-12" alt="" {...props} />,
  hr: (props) => <ol className="mt-3 mb-6 border-base-400 border" {...props} />,
  // code: props => <Code {...props} />, can use react components to map to mdx
  ul: (props) => <ul className="mb-4 list-disc ml-4" {...props} />,
  //   <UnorderedList {...props}>
  //     <ListItem {...props} />
  //   </UnorderedList>
  // ),
  ol: (props) => (
    <ol className="mb-4 list-decimal list-inside leading-loose" {...props} />
  ),
  li: (props) => <li className="mb-4 leading-loose" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-2 mb-2 border-l-2 border-base-400 pl-4 italic"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="underline text-primary-700 visited:text-primary-900 focus:ring-2 focus:ring-primary-600 hover:text-warning-700"
      {...props}
    />
  ),
  //code: (props) => <code className="bg-base-300" {...props} />,
  pre: (props) => (
    <div className="relative my-6">
      <CopyCodeButton
        content={he.decode(
          ReactDOMServer.renderToString(props.children.props.children).replace(
            /(<(span|pre|code|div) class=.+?">)|(<\/(span|pre|code|div)>)/g,
            ""
          )
        )}
      />
      <pre {...props} />
    </div>
  ),
};

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div>
        <div id="top" tabIndex="-1"></div>
        <a className="light skip-to-content" href="#main">
          skip to main content
        </a>
        <div className="flex flex-col min-h-screen">
          <Header siteTitle={data.site.siteMetadata.title || `Title`} />
          <MDXProvider components={components}>
            <main id="main" className="flex-grow">
              {children}
            </main>
          </MDXProvider>
          <Footer />
        </div>
      </div>
    </>
  );
}
