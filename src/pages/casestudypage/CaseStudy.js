import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  RiErrorWarningLine,
  RiToolsLine,
  RiGroupLine,
  RiLightbulbLine,
  RiCheckboxCircleLine,
} from 'react-icons/ri';
import { Container } from '../../globalStyles';
import { Eyebrow, Pill, PrimaryLink, PrimaryAnchor, GhostLink } from '../../components/ui';
import { caseStudy } from './Data';

// One icon per section, in the same order as caseStudy.sections in Data.js
const sectionIcons = [RiErrorWarningLine, RiToolsLine, RiGroupLine, RiLightbulbLine];

// Dark page like the rest of the site (was a white page)
const Section = styled.section`
  background: #101522;
  color: #fff;
  padding: 96px 0 110px;
  @media screen and (max-width: 900px) {
    padding: 48px 0 80px;
  }
`;

const Hero = styled.header`
  max-width: 780px;
  margin-bottom: 48px;
`;

const Heading = styled.h1`
  font-size: 56px;
  line-height: 1.1;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

const Lede = styled.p`
  font-size: 19px;
  line-height: 1.6;
  color: #c9d1dd;
`;

// Fact cards: label + value, lifting on hover like the Bucket List cards
const Facts = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 18px;
  margin-bottom: 56px;
`;

const Fact = styled.div`
  background: #1c2237;
  border: 1px solid #2c3554;
  border-radius: 14px;
  padding: 20px 22px;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  &:hover {
    transform: translateY(-4px);
    border-color: #4b59f7;
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.35);
  }
  dt {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #8fa0ff;
    margin-bottom: 6px;
  }
  dd {
    font-size: 17px;
    line-height: 1.4;
    color: #fff;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 22px;
`;

const Card = styled.article`
  position: relative;
  background: #1c2237;
  border: 1px solid #2c3554;
  border-radius: 14px;
  padding: 28px 26px;
  /* the approach card has a list, so it spans the full row */
  grid-column: ${({ $wide }) => ($wide ? '1 / -1' : 'auto')};
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  &:hover {
    transform: translateY(-6px);
    border-color: #4b59f7;
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.35);
  }
`;

// Step number as a pill, top right of each card
const Badge = styled.div`
  position: absolute;
  top: 22px;
  right: 22px;
`;

const Icon = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  font-size: 30px;
  color: #8fa0ff;
  background: rgba(75, 89, 247, 0.16);
`;

const CardTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.65;
  color: #b8c0cf;
`;

const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 14px 28px;
  margin-top: 6px;
  li {
    display: flex;
    gap: 12px;
    font-size: 16px;
    line-height: 1.6;
    color: #b8c0cf;
  }
  svg {
    flex: none;
    margin-top: 4px;
    font-size: 20px;
    color: #4ade80;
  }
`;

// Live demo frame (used by case studies that have an "embed", like Prospector)
const Demo = styled.figure`
  margin: 0 0 56px;
  background: #0b1630;
  border: 1px solid #2c3554;
  border-radius: 14px;
  overflow: hidden;
  iframe {
    display: block;
    width: 100%;
    border: 0;
    background: #0b1630;
  }
  figcaption {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 16px 22px;
    border-top: 1px solid #2c3554;
    font-size: 15px;
    color: #b8c0cf;
  }
`;

// The embedded page reports its own height, so the frame never needs a scrollbar
const LiveEmbed = ({ src, title }) => {
  const [height, setHeight] = useState(900);
  useEffect(() => {
    const onMessage = (e) => {
      if (e.data && typeof e.data.stadiumHeight === 'number') setHeight(Math.ceil(e.data.stadiumHeight));
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);
  return <iframe src={src} title={title} style={{ height }} loading="lazy" />;
};

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 56px;
`;

// One page design for every case study: pass a different "study" from Data.js
const CaseStudy = ({ study = caseStudy }) => {
  const c = study;
  return (
    <Section>
      <Container>
        <Hero>
          <Eyebrow>Case Study</Eyebrow>
          <Heading>{c.title}</Heading>
          <Lede>{c.lede}</Lede>
        </Hero>

        <Facts>
          {c.facts.map((f) => (
            <Fact key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </Fact>
          ))}
        </Facts>

        {c.embed && (
          <Demo>
            <LiveEmbed src={`${process.env.PUBLIC_URL}/${c.embed.file}?embed=1`} title={c.embed.title} />
            <figcaption>
              <span>{c.embed.caption}</span>
              <PrimaryAnchor href={`${process.env.PUBLIC_URL}/${c.embed.file}`} target="_blank" rel="noreferrer">
                Open full screen
              </PrimaryAnchor>
            </figcaption>
          </Demo>
        )}

        <Grid>
          {c.sections.map((s, i) => {
            const SectionIcon = sectionIcons[i % sectionIcons.length];
            return (
              <Card key={s.heading} $wide={!!s.points}>
                <Badge><Pill>Step {i + 1}</Pill></Badge>
                <Icon aria-hidden="true"><SectionIcon /></Icon>
                <CardTitle>{s.heading}</CardTitle>
                {s.text && <Text>{s.text}</Text>}
                {s.points && (
                  <List>
                    {s.points.map((pt) => (
                      <li key={pt}>
                        <RiCheckboxCircleLine aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </List>
                )}
              </Card>
            );
          })}
        </Grid>

        <Actions>
          <PrimaryLink to="/cv">View CV</PrimaryLink>
          <GhostLink to="/casestudies">← All case studies</GhostLink>
        </Actions>
      </Container>
    </Section>
  );
};

export default CaseStudy;
