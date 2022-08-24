import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'
import { Button } from '../../globalStyles'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems,FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIcon, WebsiteRights, SocialIconLink} from './Footer.elements'


const Footer = () => {
    return (
        <>
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                Lets Chat!
                </FooterSubHeading>
                <FooterSubText>
                    Or just hit Like!
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email"/>
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            Social Media
                        </FooterLinkTitle>
                        <FooterLink to='https://www.facebook.com/pausarquis'>Facebook</FooterLink>
                        <FooterLink to='https://www.instagram.com/sarkispau'>Instagram</FooterLink>
                        <FooterLink to='https://www.twitter.com/pausers13'>Twitter</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper> 
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            Open Source
                        </FooterLinkTitle>
                        <FooterLink to='https://www.github.com/psarks'>Github</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>
                        PS
                    </SocialLogo>
                    <WebsiteRights>PS © 2020 </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='https://www.facebook.com/pausarquis' target="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/sarkispau' target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='https://www.twitter.com/pausers13' target="_blank" aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href='https://www.github.com/psarks' target="_blank" aria-label="Github">
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
