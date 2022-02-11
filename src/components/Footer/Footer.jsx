import React from "react";
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  RightWrapper,
  Citations,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">NeuroHack</SocialLogo>
            <RightWrapper>
              <WebsiteRights>
                NeuroHack Systems © {new Date().getFullYear()} All Rights
                Reserved
              </WebsiteRights>
              <Citations to="/citations">Citations</Citations>
            </RightWrapper>

            <SocialIcons>
              <SocialIconLink target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink target="_blank" aria-label="Discord">
                <FaDiscord />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
