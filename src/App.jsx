import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import './global.css'
import Maincon from './Components/MainContainer/Maincon'


const App = () => {
  return (
    <>
      <section id="fullBlock">
          <Sidebar />
          <Maincon />
          <footer className='lastFooter'>
             <section className='footerBar'>
               <article className='preview'>
                <p>Preview to Spotify</p>
                <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
               </article>
               <article className='btn-footer'>
                <button>
                <span>Sign up free</span>
                </button>
               </article>
             </section>
          </footer>
      </section>
      
      </>
  )
}

export default App