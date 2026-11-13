import React from 'react';
import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Eyebrow, Pill, PrimaryLink } from '../../components/ui';
import { caseStudies } from './Data';

// The Case Studies page: every study is a full-width horizontal BAND,
// stacked newest first. Each band has its own accent color (a stripe on top)
// and the background alternates, so you can see where one story ends.
// To add a study: add it to caseStudies in Data.js (newest at the top).

const Intro = styled.header`
  background: #101522;
  color: #fff;
  padding: 96px 0 56px;
  @media screen and (max-width: 900px) {
    padding: 48px 0 40px;
  }
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
  max-width: 720px;
  font-size: 19px;
  line-height: 1.6;
  color: #c9d1dd;
`;

// One band = one case study. $alt switches the background; $accent colors the stripe.
const Band = styled.section`
  background: ${({ $alt }) => ($alt ? '#161c2e' : '#101522')};
  border-top: 6px solid ${({ $accent }) => $accent};
  color: #fff;
  padding: 72px 0;
  @media screen and (max-width: 900px) {
    padding: 48px 0;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 48px;
  align-items: start;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  line-height: 1.2;
  margin: 14px 0 16px;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const Summary = styled.p`
  font-size: 17px;
  line-height: 1.65;
  color: #b8c0cf;
  margin-bottom: 28px;
`;

// The study's fact cards, shown on the right side of the band
const Facts = styled.dl`
  display: grid;
  gap: 12px;
  div {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid #2c3554;
    border-left: 4px solid ${({ $accent }) => $accent};
    border-radius: 10px;
    padding: 14px 18px;
  }
  dt {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #8fa0ff;
    margin-bottom: 4px;
  }
  dd {
    font-size: 16px;
    line-height: 1.4;
  }
`;

const CaseStudies = () => (
  <>
    <Intro>
      <Container>
        <Eyebrow>Case Studies</Eyebrow>
        <Heading>Problems I've worked through</Heading>
        <Lede>Each case study follows one real problem: what I was trying to solve, how I approached it, and what I learned. Newest first.</Lede>
      </Container>
    </Intro>

    {caseStudies.map((s, i) => (
      <Band key={s.to} $alt={i % 2 === 1} $accent={s.accent}>
        <Container>
          <Row>
            <div>
              <Pill>{s.tag}</Pill>
              <Title>{s.study.title}</Title>
              <Summary>{s.summary}</Summary>
              <PrimaryLink to={s.to}>Read the case study →</PrimaryLink>
            </div>
            <Facts $accent={s.accent}>
              {s.study.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </Facts>
          </Row>
        </Container>
      </Band>
    ))}
  </>
);

export default CaseStudies;
