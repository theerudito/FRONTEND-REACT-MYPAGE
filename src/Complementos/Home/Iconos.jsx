import React from "react";
import {
  Facebook,
  GitHub,
  Gmail,
  Instagram,
  Linkedin,
  Twitter,
} from "./styles/Styles";

export const IconosApp = () => {
  return (
    <>
      <a id="gm" href="mailto:erudito.tv@gmail.com">
        <Gmail className="bi bi-envelope"></Gmail>
      </a>
      <a id="fb" href="https://www.facebook.com/theerudito1/" target="blank">
        <Facebook className="bi bi-facebook"></Facebook>
      </a>
      <a id="tw" href="https://twitter.com/theerudito" target="blank">
        <Twitter className="bi bi-twitter"></Twitter>
      </a>

      <a id="in" href="https://www.instagram.com/theerudito/" target="blank">
        <Instagram className="bi bi-instagram"></Instagram>
      </a>
      <a id="lk" href="https://www.linkedin.com/in/theerudito" target="blank">
        <Linkedin className="bi bi-linkedin"></Linkedin>
      </a>
      <a id="gh" href="https://github.com/theerudito" target="blank">
        <GitHub className="bi bi-github"></GitHub>
      </a>
    </>
  );
};
