import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'
import { PrimaryLink } from '../ui'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems,FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIcon, WebsiteRights, SocialIconLink} from './Footer.elements'


const Footer = () => {
    return (
        <>
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                Let's chat!
                </FooterSubHeading>
                <FooterSubText>
                    Questions, ideas, or just want to say hi?
                </FooterSubText>
                <PrimaryLink to='/about'>Get in touch</PrimaryLink>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            Social Media
                        </FooterLinkTitle>
                        <FooterLink href='https://www.facebook.com/pausarquis' target="_blank" rel="noopener noreferrer">Facebook</FooterLink>
                        <FooterLink href='https://www.instagram.com/sarkispau' target="_blank" rel="noopener noreferrer">Instagram</FooterLink>
                        <FooterLink href='https://www.twitter.com/pausers13' target="_blank" rel="noopener noreferrer">Twitter</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper> 
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            Open Source
                        </FooterLinkTitle>
                        <FooterLink href='https://www.github.com/psarks' target="_blank" rel="noopener noreferrer">Github</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>
                        PS
                    </SocialLogo>
                    <WebsiteRights>PS © {new Date().getFullYear()} </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='https://www.facebook.com/pausarquis' target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/sarkispau' target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='https://www.twitter.com/pausers13' target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href='https://www.github.com/psarks' target="_blank" rel="noopener noreferrer" aria-label="Github">
                            <FaGithub/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
            
        </>
    )
}

export default Footer;
