import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import { caseStudy } from './Data';

const Section = styled.section`
  background: #fff;
  color: #101522;
  padding: 120px 0 100px;
`;

const Narrow = styled.div`
  max-width: 760px;
`;

const TopLine = styled.p`
  color: #4b59f7;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const Heading = styled.h1`
  font-size: 42px;
  line-height: 1.15;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

const Lede = styled.p`
  font-size: 19px;
  line-height: 1.6;
  color: #3a4256;
  margin-bottom: 40px;
`;

const Facts = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
  margin-bottom: 48px;
  div {
    background: #f3f5fb;
    border-radius: 8px;
    padding: 16px;
  }
  dt {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    color: #6b7489;
    margin-bottom: 4px;
  }
  dd {
    font-size: 16px;
  }
`;

const H2 = styled.h2`
  font-size: 26px;
  margin: 40px 0 12px;
`;

const P = styled.p`
  font-size: 17px;
  line-height: 1.7;
  color: #2b3245;
  margin-bottom: 12px;
`;

const List = styled.ul`
  padding-left: 22px;
  li {
    font-size: 17px;
    line-height: 1.7;
    color: #2b3245;
    margin-bottom: 8px;
  }
`;

const Back = styled(Link)`
  display: inline-block;
  margin-top: 48px;
  color: #4b59f7;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CaseStudy = () => {
  const c = caseStudy;
  return (
    <Section>
      <Container>
        <Narrow>
          <TopLine>Case Study</TopLine>
          <Heading>{c.title}</Heading>
          <Lede>{c.lede}</Lede>
          <Facts>
            {c.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </Facts>
          {c.sections.map((s) => (
            <div key={s.heading}>
              <H2>{s.heading}</H2>
              {s.text && <P>{s.text}</P>}
              {s.points && (
                <List>
                  {s.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </List>
              )}
            </div>
          ))}
          <Back to="/projects">← Back to projects</Back>
        </Narrow>
      </Container>
    </Section>
  );
};

export default CaseStudy;
