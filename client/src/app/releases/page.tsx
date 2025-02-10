import Link from 'next/link';
import ftf001Label from "../../../public/images/FTF_001_front-center.jpg";

export default function Releases() {
  return (
    <>
      <header>
        <h1>Feel The Four Records</h1>
      </header>

      <main>
        <p><Link href="/">{`< HOME`}</Link></p>
        <section className="main-section">
          <h2>Releases</h2>
          <section>
            <img className="release-img" src={ftf001Label.src}
              alt="vinyl label for 34 Trolley - Relaxation EP - FTF-001" />
            <h3>FTF-001</h3>
            <div className="release-info">
              <p>Artist: 34 Trolley</p>
              <p>Title: Relaxation EP</p>
              <p>Released Oct 2024</p>
              <p>Tracklist: <br />1. Relaxation <br />2. Coming For You? <br />3. Go Ahead <br />4. Dream Freedom</p>
              <br />
              <p>
                Credits:<br />
                Drums/Percussion/Synth: Jarrett Dougherty<br />
                Bass: Cristian Adams<br />
                Vocals: Brittany Luna<br />
                Vibraphone: Victor Vieira-Branco<br />
                <br />
                Guitar on Relaxation: Marissa Paternoster<br />
                <br />
                Tenor Saxophone on Coming For You: Bryan Rogers<br />
                Trombone on Coming For You: Frank Rein<br />
                Trumpet on Coming For You: Koof Ibi<br />
                Claps on Coming For You: Jarrett Dougherty, Brittany Luna, Tim Hildebrand<br />
                <br />
                Guitar on Go Ahead: John Hoffman<br />
                <br />
                Recorded and Mixed: John Hoffman<br />
                Mastered: Ed Brooks<br />
                Lacquer Cut: Carl Rowatti<br />
                Art: Perry Shall
              </p>
              <p className="margin-top-2rem">ORDER HERE: <a className="link-button"
                href="https://34trolley.bandcamp.com/album/relaxation-ep" target="_blank"
                rel="noopener noreferrer">BANDCAMP</a></p>
            </div>
          </section>
        </section>

        <hr />

      </main>
    </>

  );
}
