import React from 'react'
import Styles from './__maincon.module.css'
import Navbar from './Navbar'
import Content from './Content'



const Maincon = () => {
  return (
    <article className={Styles.maincontainer}>
      <Navbar />
      <Content />
    </article>
  )
}

export default Maincon