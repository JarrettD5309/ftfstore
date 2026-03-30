"use client";
import Link from 'next/link';
import LogoHeader from '../components/logo-header';
import CartNav from '../components/cart-nav';
import AddToCartButtonWDropdown from '../components/add-to-cart-w-dropdown';

import gonerFestFlyer from "../../../public/images/feelitgonerflyerBW.jpg";
import godsFlyer from "../../../public/images/sep-5-flyer-new-info-2.jpg";
import trolleyShirtFull from "../../../public/images/34_trolley_shirt_full.jpg";

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
            <u>Jan 01, 2026</u>
            <br />
            <br />
            <img className="news-img" src={trolleyShirtFull.src}
              alt="flyer for 34 Trolley debut live performance at God's Autobody" />
            <br />
            Limited number of 34 Trolley t-shirts are now available. Until now these shirts were sold exclusively at live events. Only size L and XL. Shirt sizes run a little small. Union made in the USA.
            <br />
            <br />
            L - armpit to armpit: 22in, length: 30in
            <br />
            XL - armpit to armpit: 23in, length: 32in
          </p>
          <AddToCartButtonWDropdown itemID='34trolleyt001' options={['l', 'xl']} />
          <br /><br />
          <p>
            <u>Aug 05, 2025</u>
            <br />
            <br />
            <img className="news-img" src={godsFlyer.src}
              alt="flyer for 34 Trolley debut live performance at God's Autobody" />
            <br />
            Hey Punk… Do You Freak Funk???
            <br /><br />
            You are invited to an evening of eclectic sounds and grooves to celebrate the debut live performance of 34 Trolley. Music done by 10 so get there early!
            <br /><br />
            Fri Sep 5
            <br />
            34 Trolley
            <br />
            Cult Objects
            <br />
            Ring Sour
            <br />
            Koof Ibi
            <br />
            Shawn Ryan & Ryan Todd (Patience In Exile DJ set)
            <br /><br />
            @ God's Autobody
            <br />
            5522 Baltimore Ave
            <br />
            West Philly
            <br />
            7:00
            <br />
            $10
          </p>
          <br /><br />
          <p>
            <u>Jul 23, 2025</u>
            <br />
            <br />
            <img className="news-img" src={gonerFestFlyer.src}
              alt="flyer for Feel It Presents... A Gonerfest After Party" />
            <br />
            Grab your SEPTA card and get ready to board. 34 Trolley is playing a gig! Jarrett explains “34 Trolley was never meant to be a live band but when I got asked about this gig I couldn't pass it up.”
            <br /><br />
            Feel It Records is one of our favorite labels for underground punk/post punk/hardcore records and have been a huge supporter of Feel The Four via their brick and mortar shop in Cincinnati. Goner Records is an absolutely iconic garage punk label and their Gonerfest is a thing of legend!
            <br /><br />
            For this live incarnation, 34 Trolley will consist of:
            <br />
            Jarrett Dougherty - Percussion
            <br />
            Cristian Adams - Bass
            <br />
            Maryn Jones - Vocals
            <br />
            Tony Richards - Drums
            <br />
            Zachary Fairbrother - Guitar
            <br />
            Victor Vieira-Branco - Vibraphone
          </p>
          <br /><br />
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
