import React from 'react';
import styled from 'styled-components';
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
  padding: 120px 0 110px;
  @media screen and (max-width: 900px) {
    padding: 60px 0 80px;
  }
`;

const Intro = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 56px;
  align-items: center;
  margin-bottom: 72px;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-bottom: 48px;
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

const PortraitFrame = styled.figure`
  position: relative;
  width: 100%;
  max-width: 340px;
  justify-self: center;
  margin: 0 18px 18px 0;
  aspect-ratio: 560 / 756;
  @media screen and (max-width: 900px) {
    max-width: 240px;
    order: -1;
  }

  /* offset outline frame behind the picture */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid #d5dbe3;
    border-radius: 22px;
    transform: translate(18px, 18px) rotate(3deg);
    transition: transform 0.5s ease;
    z-index: 0;
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
  img.photo {
    z-index: 1;
  }
  img.cartoon {
    z-index: 2;
  }

  &:hover img.cartoon {
    opacity: 0;
  }
  &:hover::before {
    transform: translate(10px, 10px) rotate(0deg);
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
    margin-bottom: 32px;
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
          <Heading>Live. Learn. Lead.</Heading>
          <Lede>
            I'm Paulina Alejandra Sarquis Muñoz, an IT and network support
            specialist with a background in UX and front-end development. I like
            technology that works for the people using it.
          </Lede>
        </div>
        <PortraitFrame>
          <img className="photo" src={`${process.env.PUBLIC_URL}/paulina-portrait.jpg`} alt="" aria-hidden="true" />
          <img className="cartoon" src={`${process.env.PUBLIC_URL}/paulina-bw-navy.jpg`} alt="Black and white portrait of Paulina Sarquis Muñoz, smiling" />
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
