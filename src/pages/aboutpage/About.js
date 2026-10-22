import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

const facts = [
  { label: 'Based in', value: 'San Diego, CA' },
  { label: 'Currently', value: 'Network Support Media Technician, San Diego Unified' },
  { label: 'Education', value: 'B.S. Cognitive Science, Interaction Design, UC San Diego' },
  { label: 'Languages', value: 'English, Spanish, French' },
  { label: 'Building', value: 'Dash, an e-bike safety app for kids & parents' },
];

const sections = [
  {
    heading: 'My story',
    text: 'I was born in Tijuana, Mexico, and moved to San Diego as a baby. I am half Lebanese and half Mexican, and a DACA recipient. Before DACA, I was not sure what my future would hold. I am grateful for the opportunity to finish school at UC San Diego and build a career in technology.',
  },
  {
    heading: 'How I got into tech',
    text: 'As a kid, I learned how to upgrade my own computer, and I never stopped taking things apart to see how they work. That curiosity led me to study interaction design at UCSD, build websites as a front-end developer, and eventually keep a whole school connected.',
  },
  {
    heading: 'What I do now',
    text: 'I support the network, devices, and AV systems at DePortola Middle School and train staff on new technology. On my own time I am growing my skills in systems administration and cybersecurity, and building Dash, an app that helps families ride e-bikes more safely.',
  },
];

const Page = styled.section`
  background: #101522;
  color: #fff;
  /* tighter top padding so the intro starts closer to the navbar */
  padding: 72px 0 96px;
  /* keeps the portrait glow from causing sideways scroll */
  overflow: hidden;
  @media screen and (max-width: 900px) {
    padding: 40px 0 72px;
  }
`;

const Intro = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  align-items: center;
  /* was 72px: less empty space between "Live. Learn. Lead." and "My story" */
  margin-bottom: 36px;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 28px;
  }
`;

const TopLine = styled.p`
  color: #a9b3c1;
  font-size: 18px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

const Heading = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 38px;
  }
`;

const Lede = styled.p`
  font-size: 19px;
  line-height: 1.6;
  color: #c9d1dd;
  max-width: 560px;
`;

// slow rotation for the light behind the portrait
const flow = keyframes`
  from { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
  50%  { transform: translate(-50%, -50%) rotate(180deg) scale(1.08); }
  to   { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
`;

const PortraitFrame = styled.figure`
  position: relative;
  isolation: isolate;
  width: 100%;
  /* smaller portrait (was 340px) shortens the intro row */
  max-width: 280px;
  justify-self: center;
  margin: 0 18px 18px 0;
  aspect-ratio: 560 / 756;
  @media screen and (max-width: 900px) {
    max-width: 200px;
    order: -1;
  }

  /* flowing light behind the picture (replaces the old offset outline frame) */
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    width: 130%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: conic-gradient(from 0deg, #4b59f7, #4ade80, #0467fb, #8fa0ff, #4b59f7);
    /* radial mask gives soft edges without a costly blur filter */
    -webkit-mask-image: radial-gradient(circle, #000 25%, transparent 68%);
    mask-image: radial-gradient(circle, #000 25%, transparent 68%);
    opacity: 0.6;
    will-change: transform;
    transform: translate(-50%, -50%);
    animation: ${flow} 16s linear infinite;
    pointer-events: none;
  }
  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 22px;
    box-shadow: 0 24px 50px rgba(0, 0, 0, 0.45);
    transition: opacity 0.6s ease;
  }
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 56px;
  align-items: start;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const Story = styled.div`
  h2 {
    font-size: 22px;
    margin-bottom: 10px;
  }
  p {
    font-size: 17px;
    line-height: 1.7;
    color: #c9d1dd;
    /* was 32px: tighter spacing between story sections */
    margin-bottom: 22px;
  }
`;

const Facts = styled.aside`
  background: #1c2237;
  border: 1px solid #2c3554;
  border-radius: 14px;
  padding: 28px;
  dl div {
    padding: 12px 0;
    border-bottom: 1px solid #2c3554;
  }
  dl div:last-child {
    border-bottom: none;
  }
  dt {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: #8fa0ff;
    margin-bottom: 4px;
  }
  dd {
    font-size: 16px;
    line-height: 1.45;
    color: #e6e9f2;
  }
`;

const Cta = styled(Link)`
  display: block;
  margin-top: 22px;
  text-align: center;
  background: #4b59f7;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  border-radius: 8px;
  padding: 12px 18px;
  &:hover {
    background: #0467fb;
  }
`;

const About = () => (
  <Page>
    <Container>
      <Intro>
        <div>
          <TopLine>About Me</TopLine>
          {/* tagline shown without periods */}
          <Heading>Live Learn Lead</Heading>
          <Lede>
            I'm Paulina Alejandra Sarquis Muñoz, an IT and network support
            specialist with a background in UX and front-end development. I like
            technology that works for the people using it.
          </Lede>
        </div>
        <PortraitFrame>
          {/* original photo only; the black and white hover-swap image was removed */}
          <img src={`${process.env.PUBLIC_URL}/paulina-portrait.jpg`} alt="Portrait of Paulina Sarquis Muñoz, smiling" />
        </PortraitFrame>
      </Intro>

      <Body>
        <Story>
          {sections.map((s) => (
            <div key={s.heading}>
              <h2>{s.heading}</h2>
              <p>{s.text}</p>
            </div>
          ))}
        </Story>

        <Facts>
          <dl>
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          <Cta to="/cv">View my resume</Cta>
        </Facts>
      </Body>
    </Container>
  </Page>
);

export default About;
