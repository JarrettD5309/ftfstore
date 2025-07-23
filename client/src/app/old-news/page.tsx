"use client";
import Link from 'next/link';
import LogoHeader from '../components/logo-header';
import CartNav from '../components/cart-nav';

export default function OldNews() {
  return (
    <>
      <CartNav />
      <LogoHeader displayLogo={false} />

      <main>
        <p className="padding-left-1_3rem"><Link href="/">{`< HOME`}</Link></p>
        <section className="main-section">
          <h2>Old News</h2>
          <p>
            <u>May 02, 2025</u>
            <br />
            <br />
            Our very own Jarrett D aka 34 Trolley aka DJ RETTWINS recently took a trip to the UK and came home with a ton of vinyl. Check his Mixcloud for a new all vinyl mix of some acid, jacking house, techno, and all sorts of UK rave bangers. <a href="https://www.mixcloud.com/RETTWINS/sounds-from-a-uk-recording-shopping-trip/" target="_blank" rel="noopener noreferrer">https://www.mixcloud.com/RETTWINS</a>
          </p>
          <br /><br />
          <p>
            <u>Apr 28, 2025</u>
            <br />
            <br />
            We are officially SOLD OUT of 34 Trolley vinyl! We are excited to announce we now have UK/EU/Australia distribution! Check below for some of the stores carrying our records. 
          </p>
          <br /><br />
          <p>
            <u>Dec 17, 2024</u>
            <br />
            <br />
            Our very own DJ RETTWINS aka 34 Trolley aka Jarrett D made an all vinyl mix for the HOT MIX on WKDU.
            Classic cuts, 2024 bangers, dollar bin weridness, and of course a few 34 Trolley tracks. Check it out on <a
              href="https://on.soundcloud.com/pkNdpKZEzpYrAuQr5" target="_blank"
              rel="noopener noreferrer">SOUNDCLOUD</a>.
          </p>
          <br /><br />
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
