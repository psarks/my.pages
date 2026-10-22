import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'
import { PrimaryAnchor } from '../ui'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems,FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIcon, WebsiteRights, SocialIconLink} from './Footer.elements'


// Single source for the social URLs; both the text links and the icon row render from this
const socials = [
    { label: 'Facebook', href: 'https://www.facebook.com/pausarquis', Icon: FaFacebook },
    { label: 'Instagram', href: 'https://www.instagram.com/sarkispau', Icon: FaInstagram },
    { label: 'Twitter', href: 'https://twitter.com/pausers13', Icon: FaTwitter },
];
const github = { label: 'Github', href: 'https://github.com/psarks', Icon: FaGithub };

// "Get in touch" target: opens the visitor's mail app addressed to Paulina
const CONTACT_HREF = 'mailto:paulinaalesarquis@gmail.com';

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
                {/* mailto: link, so no target=_blank (it opens the mail app, not a new tab) */}
                <PrimaryAnchor href={CONTACT_HREF}>Get in touch</PrimaryAnchor>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            Social Media
                        </FooterLinkTitle>
                        {/* Plain <a> tags: these are external URLs, so they must not go through the router; rel blocks window.opener access */}
                        {socials.map(({ label, href }) => (
                            <FooterLink key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</FooterLink>
                        ))}
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper> 
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            Open Source
                        </FooterLinkTitle>
                        <FooterLink href={github.href} target="_blank" rel="noopener noreferrer">{github.label}</FooterLink>
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
                        {/* Icon row: same list as above, with rel added alongside target=_blank */}
                        {[...socials, github].map(({ label, href, Icon }) => (
                            <SocialIconLink key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                                <Icon/>
                            </SocialIconLink>
                        ))}
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
            
        </>
    )
}

export default Footer;
