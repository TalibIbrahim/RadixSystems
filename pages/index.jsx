import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Aurora = dynamic(() => import('../components/Aurora/Aurora'), { ssr: false })

export default function Home({ projects }) {
  const [quoteEmail, setQuoteEmail] = useState('');

  return (
    <>
      <Head>
        <title>Radix Systems — Next‑Gen Software Agency</title>
        <meta name="description" content="Radix Systems builds web apps, AI automations, and cloud solutions. Contact us for a free quote." />
        <meta property="og:title" content="Radix Systems — Next‑Gen Software Agency" />
        <meta property="og:description" content="Radix Systems builds web apps, AI automations, and cloud solutions. Contact us for a free quote." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="/" />
      </Head>

      <div className="app">
        <div className="aurora-bg">
          <Aurora colorStops={["#6e67ff", "#B497CF", "#bb51f0"]} blend={0.49} amplitude={0.4} speed={0.4} />
        </div>

        <div className="content">
          <Navbar />
          <Hero quoteEmail={quoteEmail} setQuoteEmail={setQuoteEmail} />
          <Services />
          <Projects />
          <Contact quoteEmail={quoteEmail} setQuoteEmail={setQuoteEmail} />
          <Footer />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const projects = (await import('../data/projects')).default

  return {
    props: { projects },
  }
}
