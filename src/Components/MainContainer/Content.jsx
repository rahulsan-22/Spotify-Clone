import React, { Component } from "react";
import Styles from "./__maincon.module.css";
import JSON from "./focus.json";
import JSON2 from "./spotifyPlaylists.json"
import JSON3 from "./SoundsOfIndia.json"
import Footer from "./Footer";

class Content extends Component {
  state = { JSON };
  state2 = { JSON2 };
  state3 = { JSON3 };
  render() {
    return (
      <>
      <article className={Styles.focusContainer}>
        <aside className={Styles.focusBlock}>
          <div>
            <h2>Focus</h2>
          </div>
          <div>
            <a href="#">Show all</a>
          </div>
        </aside>
        <main>
          {this.state.JSON.map(ele => {
            let { image, title, desc } = ele;
            return (
              <aside className={Styles.focusBox}>
                <img src={image} alt="img1" />
                <h4>{title}</h4>
                <p>{desc}</p>
                <button>
                  <i class="fa-solid fa-play"></i>
                </button>
              </aside>
            );
          })}
        </main>
        
      </article>

      <article className={Styles.focusContainer}>
        <aside className={Styles.focusBlock}>
          <div>
            <h2>Spotify Playlists</h2>
          </div>
          <div>
            <a href="#">Show all</a>
          </div>
        </aside>
        <main>
          {this.state2.JSON2.map(ele => {
            let { image, title, desc } = ele;
            return (
              <aside className={Styles.focusBox}>
                <img src={image} alt="img1" />
                <h4>{title}</h4>
                <p>{desc}</p>
                <button>
                  <i class="fa-solid fa-play"></i>
                </button>
              </aside>
            );
          })}
        </main>
        
      </article>

      <article className={Styles.focusContainer}>
        <aside className={Styles.focusBlock}>
          <div>
            <h2>Sound of India</h2>
          </div>
          <div>
            <a href="#">Show all</a>
          </div>
        </aside>
        <main>
          {this.state3.JSON3.map(ele => {
            let { image, title, desc } = ele;
            return (
              <aside className={Styles.focusBox}>
                <img src={image} alt="img1" />
                <h4>{title}</h4>
                <p>{desc}</p>
                <button>
                  <i class="fa-solid fa-play"></i>
                </button>
              </aside>
            );
          })}
        </main>
        
      </article>

      <Footer/>

      </>
    );
  }
}



export default Content;
