import React from 'react'
import Styles from "./__maincon.module.css";

const Footer = () => {
  return (
    <footer className={Styles.mainFooter}>
      <section className={Styles.subFooter}>
         <article className={Styles.subFooter1}>
            <div className={Styles.subFooterContent1}>
                <ul className={Styles.subFooterItems}>
                  <p>Company</p>
                  <a href='#'><span>About</span></a>
                  <a href='#'><span>Jobs</span></a>
                  <a href='#'><span>For The Record</span></a>
                  
                </ul>
            </div>
            <div className={Styles.subFooterContent2}>
            <ul className={Styles.subFooterItems}>
                  <p>Communities</p>
                  <a href='#'><span>For Artists</span></a>
                  <a href='#'><span>Developers</span></a>
                  <a href='#'><span>Advertising</span></a>
                  <a href='#'><span>Investors</span></a>
                  <a href='#'><span>Vendors</span></a>
                  <a href='#'><span>Spotify for Work</span></a>
                  
                </ul>
            </div>
            <div className={Styles.subFooterContent3}>
                <ul className={Styles.subFooterItems}>
                    <p>Useful links</p>
                    <a href='#'><span>Support</span></a>
                    <a href='#'><span>Free Mobile App</span></a>
                </ul>
            </div>
         </article>
         <article className={Styles.subFooter2}>
             <div className={Styles.subFooter2Content1}>
                <a href="#" className={Styles.insta}>
                  <i class="fa-brands fa-instagram"></i>
                </a>
             </div>
             <div className={Styles.subFooter2Content2}>
                <a href="#" className={Styles.twitter}>
                  <i class="fa-brands fa-twitter"></i>
                </a>
             </div>
             <div className={Styles.subFooter2Content3}>
                <a href="#" className={Styles.facebook}>
                  <i class="fa-brands fa-facebook"></i>
                </a>
             </div>
         </article>
      </section>
      <article className={Styles.subFooter3}>
          <p>© 2023 Spotify AB</p>
        </article>
    </footer>
  )
}

export default Footer