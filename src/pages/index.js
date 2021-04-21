import React from "react"
import { Link } from "gatsby"
import Hero from '../components/Hero'
import About from '../components/About'
import Mission from '../components/Mission'
import Contact from '../components/contact/index'
import Layout from '../components/layout'
import Timeline from '../components/timeline/Timeline'
import SEO from '../components/seo'

const isBrowser = typeof window !== "undefined"
console.log('-------->',isBrowser);

const IndexPage = () => (
  <Layout>
    <SEO title="HOME" />
    {/* <Hero /> */}
    <About />
    <Timeline />
    <Mission />
    <Contact />
  </Layout>
);

export default IndexPage;
