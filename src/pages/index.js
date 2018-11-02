import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <main className={'main'}>
      <section className={'main__left'}>
        <h1 className={'title'}>Stephen Fox</h1>
        <h2 className={'subtitle'}>Designer</h2>
        <h2 className={'subtitle'}>Developer</h2>
      </section>
      <section className={'main__right'}>
        <a className={'link'} target={'_blank'} href="https://www.linkedin.com/in/stephenfoxdev">
          <i className="fab fa-linkedin"></i>
        </a>
        <a className={'link'} target={'_blank'} href="https://twitter.com/manifoldkaizen">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a className={'link'} target={'_blank'} href="http://stephenfoxdev.com">
          <i className="fas fa-external-link-square-alt"></i>
        </a>
      </section>
    </main>
  </Layout>
)

export default IndexPage
