import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Resume = ({ data, location }) => {
  return (
    <Layout
      location={location}
      titleLeft={"< Molly Zhou"}
      linkLeft="/"
      titleRight={"Hobby Projects >"}
      linkRight="/projects"
    >
      <Seo title="Resume" />

      <section>
        <h1>About Me</h1>
        <p>
          As an accomplished software engineer, I am deeply committed to
          delivering outstanding results with a keen focus on customer needs. My
          expertise spans across web development, particularly in frontend and
          backend-as-frontend (BFF) applications, where I have worked on
          numerous projects. This experience has honed my skills in creating
          seamless and efficient user experiences. Recently, I have expanded my
          skill set into the data engineering domain, specializing in functional
          programming with Scala and leveraging Apache Flink for sophisticated
          data processing. Known for my rapid learning capabilities and diligent
          work ethic, I am intensely self-motivated, constantly seeking new
          challenges and opportunities to grow. Alongside a strong commitment to
          team collaboration, I consistently strive to blend technical acumen
          with practical applications to drive business value.
        </p>
      </section>

      <section>
        <h2>Professional Experience</h2>
        <div>
          <h3>👩🏻‍💻 Senior Developer at REA Group / realestate.com.au</h3>
          <p>
            <strong>01 Jan 2021 - Now</strong>
          </p>
          <p>
            REA Group (ASX:REA) is a digital advertising company that operates
            Australia's leading property websites and real estate websites in
            Europe, Asia and the US.
          </p>
          <h4>Recent Project: User Onboarding to Personalization Stack</h4>
          <p>
            Led the integration of users into the personalization stack to
            enhance user experience and marketing precision. Utilized Scala,
            Flink, and key marketing technologies like Tealium and Braze to
            transform and transmit customer data to vendors.
          </p>
          <h5>Key Contributions:</h5>
          <ul>
            <li>Co-led a team of developers on the Slice E2E initiative.</li>
            <li>
              Orchestrated all phases of the project from planning to delivery.
            </li>
            <li>
              Designed robust error handling strategies and comprehensive schema
              management procedures.
            </li>
            <li>
              Developed and optimized an event-driven architecture using Scala
              and Flink.
            </li>
            <li>
              Ensured efficient data processing and implemented scalable
              solutions in collaboration with a cross-functional team.
            </li>
          </ul>
          <h4>Previous Projects:</h4>
          <ul>
            <li>
              <a href="https://www.realestate.com.au/buy/inspection-times-1">
                Inspection Search Result Page
              </a>
            </li>
            <li>
              <a href="https://www.realestate.com.au/buy/map-1">
                Map Search Result Page
              </a>
            </li>
            <li>
              <a href="https://www.realestate.com.au/">
                Suggested Properties on homepage
              </a>
            </li>
            <li>
              <a href="https://www.realestate.com.au/planner/">
                Inspection Planner
              </a>
            </li>
          </ul>
          <h4>Role Responsibilities:</h4>
          <ul>
            <li>
              Spearheaded the design, coding, testing, and deployment of new
              software products using React and Scala/Node.js.
            </li>
            <li>Led the maintenance of existing software.</li>
            <li>
              Actively supported production systems, ensuring high availability
              and performance.
            </li>
            <li>Focused on building high-quality, user-centric solutions.</li>
            <li>
              Provided technical mentoring and guidance to junior team members.
            </li>
          </ul>

          <h4>Additional Achievements:</h4>
          <ul>
            <li>
              Earned the “Real Deal” award for the REAio38 hackday project –
              Shippy Puzzle Game.
            </li>
            <li>
              Developed an NFT minting site for the REAio40 hackday project.
            </li>
            <li>
              Contributed to REA University by running a module in “Intro to
              Scala” course.
            </li>
            <li>Actively involved in the recruitment process.</li>
          </ul>

          <h4>Skills and Technologies:</h4>
          <ul>
            <li>Languages: Typescript, Scala, Python</li>
            <li>
              Architecture Paradigm: Event-driven architecture, Functional
              Programming
            </li>
            <li>Framework: React, Wordpress, Flink</li>
            <li>API: GraphQL, RESTful</li>
            <li>Styling/UI Libs: Styled-component</li>
            <li>Testing: Jest, React testing library, Cypress, Spec2</li>
            <li>CI/CD: Buildkite</li>
            <li>Monitoring: Splunk, New Relic</li>
            <li>Infrastructure: AWS</li>
            <li>Build tools: Webpack, Yarn, sbt</li>
            <li>Development methodologies: Agile</li>
            <li>Version control: Git</li>
          </ul>
        </div>
        <div>
          <h3>👩🏻‍💻 Developer at REA Group / realestate.com.au</h3>
          <p>
            <strong>22 Nov 2017 - 31 Dec 2020</strong>
          </p>
          <h4>Projects:</h4>
          <ul>
            <li>
              <a href="https://www.realestate.com.au/news">
                Maintain news/lifestyle pages
              </a>
            </li>
            <li>
              <a href="https://www.realestate.com.au/lifestyle">
                Categories and more
              </a>
            </li>
            <li>
              <a href="https://flatmates.com.au/share-to-buy/">
                Building Flatmates Share-to-buy minisite
              </a>{" "}
              (retired)
            </li>
            <li>
              <a href="https://www.realestate.com.au/australian-property-market/">
                Building Australian property reports page
              </a>{" "}
              (retired)
            </li>
          </ul>
          <h4>Highlights:</h4>
          <ul>
            <li>
              Reimagined the flow of agents onboarding, which resulted in a huge
              increase in the number of users.
            </li>
            <li>
              Took leadership of the Braze integration and hosted IPR for it,
              launching the first Braze in-app notification within REA.
            </li>
            <li>
              Heavily involved in ignite federation rotation, rotated to several
              other teams, shared federation knowledge, and facilitated them
              building their features on top of the Ignite platform.
            </li>
          </ul>
          <h4>Skills and Technologies:</h4>
          <ul>
            <li>Languages: Javascript, Typescript, PHP</li>
            <li>Framework: React, Wordpress</li>
            <li>Server side: Node.js</li>
            <li>Styling/UI Libs: SASS, Styled-component</li>
            <li>Testing: Jest, Enzyme, React testing library, Cypress</li>
            <li>CI/CD: Buildkite</li>
            <li>Monitoring: Splunk, New Relic</li>
            <li>Infrastructure: AWS</li>
            <li>Build tools: Webpack, Yarn</li>
            <li>Development methodologies: Agile</li>
            <li>Version control: Git</li>
          </ul>
        </div>
        <div>
          <h3>👩🏻‍💻 Cofounder and Frontend Engineering Lead</h3>
          <p>
            <strong>Aug 2018 - Nov 2020</strong>
          </p>
          <p>
            Quokka Parking was an innovative shared parking web app aimed at
            optimizing parking space usage in Melbourne. It was discontinued due
            to the challenges brought on by the COVID-19 pandemic, but the
            experience taught me valuable lessons about resilience and
            adaptability.
          </p>
          <h4>Personal Contribution:</h4>
          <p>Building Quokka Parking frontend system</p>
          <h4>Skills and Technologies:</h4>
          <p>Frontend: React</p>
          <p>API: GraphQL</p>
          <p>Backend: Python</p>
          <p>Database: Postgres</p>
        </div>
        <div>
          <h3>Front End Developer at Airwallex</h3>
          <p>
            <strong>12 July 2016 – 17 Nov 2017</strong>
          </p>
          <p>
            Airwallex is a Melbourne-based financial technology startup
            specializing in integrated solutions for both personal and business
            cross-border transactions.
          </p>
          <h4>Project Description:</h4>
          <p>
            Airwallex’s payment platform comprises 3 web applications (“landing
            page” site, main web application, and internal back office), a
            number of microservices on the backend (java8-based), backed by
            Cassandra database, and a few middleware components such as Rabbit
            MQ and Zookeeper. The entire application is distributed across 3
            data centers (China, Hong Kong, and Australia).
          </p>
          <h4>Personal Contribution:</h4>
          <ul>
            <li>
              Designed and built the aforementioned internal back office from
              scratch.
            </li>
            <li>
              Participated in the development of the main web application.
            </li>
            <li>
              Learned frameworks and technologies required for the project in a
              very short timeframe.
            </li>
            <li>
              Made changes to backend code related to the internal back office
              application.
            </li>
          </ul>
          <h4>Role Responsibilities:</h4>
          <ul>
            <li>
              Writing simple/maintainable code to satisfy complex requirements.
            </li>
            <li>
              Developing and maintaining the code of a customer-facing web
              application and internal back office.
            </li>
            <li>Structuring UI into composable and unit tested components.</li>
            <li>Integrating with RESTful APIs.</li>
            <li>
              Collaborating closely with product designers, backend developers,
              and QA.
            </li>
            <li>
              Making minor changes in the backend side in java application.
            </li>
            <li>Creating and testing emails template.</li>
            <li>Maintaining the template of company blog.</li>
          </ul>
          <h4>Skills and Technologies:</h4>
          <ul>
            <li>Web: HTML5, CSS3</li>
            <li>Languages: Javascript (including ES6), TypeScript</li>
            <li>Framework: AngularJS/Angular2, React, Redux, RxJS, Ember.js</li>
            <li>Styling/UI Libs: SASS, Bootstrap, Radium, Material UI</li>
            <li>Testing: Nightmare, Nightwatch, Mocha</li>
            <li>Build tools: Webpack, Yarn</li>
            <li>Development methodologies: Agile (Kanban method)</li>
            <li>Version control: Git (Following Git Flow)</li>
          </ul>
        </div>
        <div>
          <h3>👩🏻‍💻 Casual time full-stack developer for OF COURSE (remote)</h3>
          <p>
            <strong>May 2017 - Aug 2017</strong>
          </p>
          <p>
            OF COURSE is a creative coding program for making stunning projects,
            running since 2014 in NYC and Shanghai.
          </p>
          <h4>Project Description:</h4>
          <p>
            A CMS platform built for OF COURSE to publish blogs, job positions,
            events, and course information. Participated as a technical
            support/web developer/system administrator alongside the design
            team.
          </p>
          <h4>Role Responsibilities:</h4>
          <ul>
            <li>
              Setting up cloud service on Aliyun, and configuring Ghost runtime.
            </li>
            <li>Configuring Ghost DB (MySQL, Docker).</li>
            <li>DNS management.</li>
            <li>Creating a bespoke Ghost theme according to designs.</li>
            <li>Integrating with Ghost API to display posts.</li>
            <li>Customizing Ghost to support full-text search.</li>
            <li>Configuring Nginx (reverse proxy and m4v video streaming).</li>
            <li>
              Embedding interactive animation and video streaming into pages.
            </li>
          </ul>
          <h4>Skills and Technologies:</h4>
          <ul>
          <li>Web: HTML5, CSS3, Javascript (Node.js), video.js, p5.js, JQuery</li>
          <li>Platform: Ghost</li>
          <li>Build tools: Webpack, Yarn</li>
          <li>Database: MySQL</li>
          <li>Web servers: Nginx</li>
          <li>OS: Linux (Ubuntu 16.04)</li>
          </ul>
        </div>
        <div>
          <h3>👩🏻‍💻 Interactive Designer Intern at OF COURSE (Shanghai)</h3>
          <p>
            <strong>July 2014– Aug 2014</strong>
          </p>
          <p>
            During my intern period, my team (group of three) designed and built
            an interactive device using Arduino to demonstrate some products for
            a florist shop, displayed at an international marketing event in the
            CBD area.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default Resume
