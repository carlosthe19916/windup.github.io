import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import WidowControl from "../components/widow-control";
import Seo from "../components/seo";

const IndexPage = () => {
  const benefits = [
    {
      title: "Automated source code analysis",
      description:
        "You can select which type of transformations you would like to analyze for. You can decide to exclude certain packages and set some advanced options if needed. Windup will start decompiling your application binaries, and analyze the code against your desired migration paths, and create a powerful set of reports.",
      image: (
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      title: "Understand application dependencies and shared code",
      description:
        "When dealing with large application portfolios, it is critical to understand code dependencies, but also code that is shared between multiple applications. Windup automatically detects and visualizes these dependencies for you.",
      image: (
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Seo />

      <section className="bg-slate-700 text-white light overflow-hidden border-b border-base-300 relative before:absolute before:bg-hero-waves before:pointer-events-none before:hidden lg:before:flex before:text-transparent before:w-full before:h-full before:bg-left-bottom before:bg-repeat-x">
        <div className="page-wrapper flex flex-col lg:flex-row gap-8 items-center py-8 md:py-16 lg:pt-24 lg:pb-24">
          <div className="max-w-[55ch] lg:w-2/5">
            <h1 className="font-headings font-bold text-3xl md:text-4xl lg:text-5xl text-base-200">
              <WidowControl text="Modernize and migrate applications" />
            </h1>
            <p className="mb-4 text-lg lg:text-xl text-base-600 lg:leading-relaxed max-w-[50ch] md:max-w-none text-base-200 my-6 lg:my-8">
              Windup is a tool that supports large-scale Java application
              modernization and migration projects across a broad range of
              transformations and use cases. It automates application code
              analysis, supports effort estimation, accelerates code migration,
              and helps you move applications to the cloud and containers.
            </p>
          </div>
          <div className="w-full lg:w-3/5">
            <StaticImage
              src="../images/transformation-path.png"
              alt="Use Windup for migrating and modernizing your applications"
              className="banner"
            />
          </div>
        </div>
      </section>

      <section className="bg-white z-0 py-12 md:pt-10 md:pb-12 lg:pt-10 relative after:z-[-1] after:text-transparent after:bg-wave-pattern after:rotate-180 after:bg-no-repeat after:w-full after:absolute after:h-full after:top-0 after:bg-left-top after:scale-x-[-1]">
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-slate-600 font-semibold tracking-wide uppercase">
                features and benefits
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                An automated scalable migration tool
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-500 text-white">
                        {benefit.image}
                      </div>
                      <p className="ml-16 text-lg font-bold leading-6 text-gray-900">
                        {benefit.title}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {benefit.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-sec relative max-w-screen-xl mx-auto py-12 px-4 sm:px-8">
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
        <div className="relative z-10 gap-5 items-center lg:flex">
          <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
            <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
              Manage projects and upload your{" "}
              <span className="text-indigo-600">application</span>
            </h3>
            <p className="text-gray-500 leading-relaxed mt-3">
              Within the web console, developers and business owners can manage
              multiple projects by either uploading single apps or grouping
              bigger application portfolios with dozens or hundreds of
              applications into projects for analysis. The web console also
              helps developers create and optimize their reports to detail
              challenges and create solutions.
            </p>
          </div>
          <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
            <StaticImage
              src="../images/web-console.png"
              alt="Web Console"
              className="w-full border"
            />
          </div>
        </div>
      </section>
      {/* <section className="cta-sec relative max-w-screen-xl mx-auto py-12 px-4 sm:px-8">
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
        <div className="relative z-10 gap-5 items-center lg:flex">
          <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
            <StaticImage
              src="../images/vscode.png"
              alt="Web Console"
              className="w-full border"
            />
          </div>
          <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
            <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
              Code transformation: support for popular{" "}
              <span className="text-indigo-600">IDEs</span>
            </h3>
            <p className="text-gray-500 leading-relaxed mt-3">
              Once you’re starting the actual transformation, you will want to
              switch to your favorite IDE. We provide a range of IDE plugins
              such as CodeReady Studio / Eclipse, CodeReady Workspace / Eclipse
              Che, and a Visual Studio Code Extension. The plugins come with all
              the reporting capabilities of the Web Console, plus additional
              features such as a task list, support for automatic code changes,
              and a guided rules editor to easily create new rules based on
              newly identified migration challenges, so these can be shared with
              the rest of the team or contributed upstream.
            </p>
          </div>
        </div>
      </section> */}
      <section className="cta-sec relative max-w-screen-xl mx-auto py-12 px-4 sm:px-8">
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
        <div className="relative z-10 gap-5 items-center lg:flex">
          <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
            <StaticImage
              src="../images/custom-rule.png"
              alt="Web Console"
              className="w-full border"
            />
          </div>
          <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
            <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
              Highly <span className="text-indigo-600">extensible</span>
            </h3>
            <p className="text-gray-500 leading-relaxed mt-3">
              Windup is highly extensible by allowing you to create your own
              rule sets and target runtime labels. Custom rules can be developed
              to extend existing rule sets, build new migration paths, or
              enforce certain code standards in your teams. Best of all, it’s
              very easy to write new rules - either as XML or Groovy. Target
              runtime labels assess the technologies discovered within
              applications to determine if they are supported by a specific
              runtime. Wildfly and Tomcat are the 2 shipped target runtime
              labels.
            </p>
          </div>
        </div>
      </section>
      <style jsx="true">{`
        .cta-sec {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </>
  );
};

export default IndexPage;
