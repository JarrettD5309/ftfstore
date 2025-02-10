import Link from 'next/link';

import ftfLogo from "../../public/images/FTF_logo1.jpg";
import ftf001Label from "../../public/images/FTF_001_front-center.jpg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header>
        <img className="logo" src={ftfLogo.src} alt="Feel The Four Records logo" />
        <h1>Feel The Four Records</h1>
      </header>

      <main>

        <section className="main-section">
          <h2>News</h2>
          <p>
            <u>Dec 17, 2024</u>
            <br />
            <br />
            Our very own DJ RETTWINS aka 34 Trolley aka Jarrett D made an all vinyl mix for the HOT MIX on WKDU.
            Classic cuts, 2024 bangers, dollar bin weridness, and of course a few 34 Trolley tracks. Check it out on <a
              href="https://on.soundcloud.com/pkNdpKZEzpYrAuQr5" target="_blank"
              rel="noopener noreferrer">SOUNDCLOUD</a>.
          </p>

          <p className="margin-top-1rem">
            <Link href="/old-news">OLD NEWS</Link>
          </p>
        </section>

        <hr />

        <section className="main-section">
          <h2>Releases</h2>
          <section>
            <img className="release-img" src={ftf001Label.src}
              alt="vinyl label for 34 Trolley - Relaxation EP - FTF-001" />
            <h3>34 Trolley - Relaxtion EP</h3>
            <div className="release-info">
              <p>FTF-001</p>
              <p>Released Oct 2024</p>
              <p>Tracklist: <br />1. Relaxation <br />2. Coming For You? <br />3. Go Ahead <br />4. Dream Freedom</p>
              <p className="margin-top-2rem">ORDER HERE: <a className="link-button"
                href="https://34trolley.bandcamp.com/album/relaxation-ep" target="_blank"
                rel="noopener noreferrer">BANDCAMP</a></p>
            </div>
          </section>

          <p className="margin-top-1rem">
            <Link href="/releases">RELEASE INFO</Link>
          </p>
        </section>

        <hr />

        <section className="main-section">
          <h2>Stores</h2>
          <h3>Illinois</h3>
          <ul className="margin-top-1rem">
            <li>Dumb Records | Springfield</li>
            <li>606 Records | Chicago</li>
            <li>Star Creature/Numero Outlet | Chicago</li>
          </ul>
          <h3 className="margin-top-2rem">Louisiana</h3>
          <ul className="margin-top-1rem">
            <li>Sisters In Christ | New Orleans</li>
          </ul>
          <h3 className="margin-top-2rem">New Jersey</h3>
          <ul className="margin-top-1rem">
            <li>Princeton Record Exchange | Princeton</li>
            <li>Revilla Grooves | Milltown</li>
            <li>Spina Records | New Brunswick</li>
          </ul>
          <h3 className="margin-top-2rem">New York</h3>
          <ul className="margin-top-1rem">
            <li>Human Head | Brooklyn</li>
            <li>690 Woodward Garage | Ridgewood</li>
          </ul>
          <h3 className="margin-top-2rem">N Carolina</h3>
          <ul className="margin-top-1rem">
            <li>Bull City Records | Durham</li>
            <li>Three Count Records | Durham</li>
          </ul>
          <h3 className="margin-top-2rem">Ohio</h3>
          <ul className="margin-top-1rem">
            <li>Feel It Records | Cincinnati</li>
          </ul>
          <h3 className="margin-top-2rem">Oregon</h3>
          <ul className="margin-top-1rem">
            <li>Clinton St Records | Portland</li>
          </ul>
          <h3 className="margin-top-2rem">Pennsylvania</h3>
          <ul className="margin-top-1rem">
            <li>Common Beat | Philadelphia</li>
            <li>Great Circles | Philadelphia</li>
            <li>Impressions | Philadelphia</li>
            <li>Launderette Records | Philadelphia</li>
            <li>Long In The Tooth | Philadelphia</li>
          </ul>
          <h3 className="margin-top-2rem">Virginia</h3>
          <ul className="margin-top-1rem">
            <li>Thanks For Listening | Virginia Beach</li>
            <li>Vinyl Conflict | Richmond</li>
          </ul>
          <h3 className="margin-top-2rem">Washington</h3>
          <ul className="margin-top-1rem">
            <li>Selector Records | Seattle</li>
            <li>Sonic Boom | Seattle</li>
            <li>Zions Gate | Seattle</li>
          </ul>
        </section>

        <hr />

        <section className="main-section">
          <h2>About</h2>
          <p>Feel The Feel Records is a dance music label from Philadelphia, PA started in 2024. Dance music is any music
            you can dance to.</p>
          <p>Contact: feelthefourrecords@gmail.com</p>
          <p className="margin-top-2rem"><a className="link-button" href="https://www.instagram.com/feelthefourrecords"
            target="_blank" rel="noopener noreferrer">INSTAGRAM</a></p>
          <p className="margin-top-2rem"><a className="link-button" href="https://www.youtube.com/@feelthefourrecords"
            target="_blank" rel="noopener noreferrer">YOUTUBE</a></p>
        </section>

      </main>
    </>

  );
}
