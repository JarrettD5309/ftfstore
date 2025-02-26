"use client";
import ftfLogo from "../../../public/images/FTF_logo1.jpg";

export default function LogoHeader(props: { displayLogo: boolean }) {
  return (
    <header className="margin-top-1_5rem">
      {props.displayLogo && <img className="logo" src={ftfLogo.src} alt="Feel The Four Records logo" />}
      <h1>Feel The Four Records</h1>
    </header>
  );
}