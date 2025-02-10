import Link from 'next/link';

export default function OldNews() {
  return (
    <>
      <header>
        <h1>Feel The Four Records</h1>
      </header>

      <main>
        <p><Link href="/">{`< HOME`}</Link></p>
        <section className="main-section">
          <h2>Old News</h2>
          <p><u>Oct 4, 2024</u><br /><br />34 Trolley's "Relaxation EP" is out now!<br /><br />Order the vinyl and stream the record
            at <a href="https://34trolley.bandcamp.com/" target="_blank"
              rel="noopener noreferrer">34trolley.bandcamp.com</a>.
            34 Trolley is the brainchild of Jarrett Dougherty,
            drummer of legendary DIY punk band Screaming Females. "Relaxation EP", Jarrett's first solo release, evokes the
            sound of early 1980s NYC Post Punk Mutant Disco. Think ESG. Think Liquid Liquid. Think Tom Tom Club. The
            recordings feature Brittany Luna (Catbite) on vocals, Marissa Paternoster (Noun/Screaming Females) and John
            Hoffman (Vacation) on guitar, and Victor Vieira-Branco (Bark Culture) on vibraphone, among others.
          </p>
          <br /><br />
          <p><u>Sep 5, 2024</u><br /><br />Announcing our first release! 34 Trolley is the brainchild of Jarrett Dougherty,
            drummer of legendary DIY punk band Screaming Females. "Relaxation EP", Jarrett's first solo release, evokes the
            sound of early 1980s NYC Post Punk Mutant Disco. Think ESG. Think Liquid Liquid. Think Tom Tom Club. The first
            track, "Coming For You?," is streaming now and pre-orders for the 12" vinyl EP (out October 4) are available at
            <a href="https://34trolley.bandcamp.com/" target="_blank" rel="noopener noreferrer">34trolley.bandcamp.com</a>.
            The recordings feature Brittany Luna (Catbite) on vocals, Marissa Paternoster (Noun/Screaming Females) and John
            Hoffman (Vacation) on guitar, and Victor Vieira-Branco (Bark Culture) on vibraphone, among others.
          </p>
        </section>

        <hr />

      </main>
    </>

  );
}
