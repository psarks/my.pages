import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import { projects } from './Data';

const Section = styled.section`
  background: #101522;
  color: #fff;
  padding: 120px 0 100px;
  min-height: 80vh;
`;

const TopLine = styled.p`
  color: #a9b3c1;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const Heading = styled.h1`
  font-size: 44px;
  line-height: 1.15;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    font-size: 34px;
  }
`;

const Intro = styled.p`
  max-width: 680px;
  font-size: 18px;
  line-height: 1.6;
  color: #d5dbe3;
  margin-bottom: 48px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
`;

const Card = styled.article`
  background: #1c2237;
  border: 1px solid #2c3554;
  border-radius: 10px;
  padding: 28px;
  display: flex;
  flex-direction: column;
`;

const Tag = styled.span`
  align-self: flex-start;
  background: ${({ muted }) => (muted ? '#2c3554' : '#4b59f7')};
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  border-radius: 999px;
  padding: 4px 12px;
  margin-bottom: 16px;
`;

const CardTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 12px;
`;

const CardText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #d5dbe3;
  margin-bottom: 16px;
`;

const Skills = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  margin-bottom: 16px;
  li {
    font-size: 13px;
    color: #a9b3c1;
    border: 1px solid #2c3554;
    border-radius: 6px;
    padding: 3px 8px;
  }
`;

const linkStyle = `
  color: #8fa0ff;
  font-weight: 700;
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;

const CardLink = styled(Link)`${linkStyle}`;
const ExternalLink = styled.a`${linkStyle}`;

const Featured = styled.article`
  grid-column: 1 / -1;
  position: relative;
  margin-top: 70px;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #1c2237 0%, #18213f 60%, #1b2a3f 100%);
  border: 1px solid #2c3554;
  border-radius: 16px;
  padding: 0 40px 40px;
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 1fr;
  gap: 40px;
  align-items: start;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 0 22px 30px;
    gap: 24px;
  }
`;

const Phones = styled.div`
  position: relative;
  height: 380px;
  margin-top: -70px;
  @media screen and (max-width: 480px) {
    height: 300px;
  }
`;

const Phone = styled.img`
  position: absolute;
  bottom: 0;
  width: 37%;
  aspect-ratio: 460 / 850;
  object-fit: cover;
  object-position: top;
  border-radius: 20px;
  border: 3px solid #39425f;
  background: #15171d;
  box-shadow: 0 22px 45px rgba(0, 0, 0, 0.55);
  transition: transform 0.35s ease;
  &.left {
    left: 2%;
    transform: rotate(-7deg) translateY(10px);
    z-index: 1;
  }
  &.center {
    left: 31.5%;
    z-index: 3;
    transform: translateY(-14px);
  }
  &.right {
    right: 2%;
    transform: rotate(7deg) translateY(10px);
    z-index: 2;
  }
  ${Featured}:hover &.left {
    transform: rotate(-10deg) translate(-10px, 4px);
  }
  ${Featured}:hover &.center {
    transform: translateY(-26px);
  }
  ${Featured}:hover &.right {
    transform: rotate(10deg) translate(10px, 4px);
  }
`;

const FeaturedText = styled.div`
  padding-top: 36px;
  @media screen and (max-width: 900px) {
    padding-top: 0;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  margin-bottom: 20px;
  li {
    position: relative;
    padding-left: 22px;
    font-size: 15px;
    line-height: 1.55;
    color: #d5dbe3;
    margin-bottom: 6px;
  }
  li::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 9px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #4b59f7;
  }
`;

const phoneClasses = ['left', 'center', 'right'];

const FeaturedCard = ({ p }) => (
  <Featured>
    <Phones>
      {p.images.map((img, i) => (
        <Phone
          key={img.src}
          className={phoneClasses[i] || 'center'}
          src={process.env.PUBLIC_URL + img.src}
          alt={img.alt}

        />
      ))}
    </Phones>
    <FeaturedText>
      <Tag muted={p.inProgress}>{p.tag}</Tag>
      <CardTitle style={{ fontSize: 26 }}>{p.title}</CardTitle>
      <CardText>{p.summary}</CardText>
      {p.features && (
        <FeatureList>
          {p.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </FeatureList>
      )}
      <Skills style={{ marginTop: 0, marginBottom: 0 }}>
        {p.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </Skills>
    </FeaturedText>
  </Featured>
);

const Projects = () => {
  return (
    <Section>
      <Container>
        <TopLine>Projects</TopLine>
        <Heading>Solving real problems for real users</Heading>
        <Intro>
          A mix of IT, systems, and design work. Each project shows how I
          approach a problem: understand the people affected, fix the root
          cause, and document it so it stays fixed.
        </Intro>
        <Grid>
          {projects.map((p) =>
            p.featured && p.images ? (
              <FeaturedCard key={p.title} p={p} />
            ) : (
            <Card key={p.title}>
              <Tag muted={p.inProgress}>{p.tag}</Tag>
              <CardTitle>{p.title}</CardTitle>
              <CardText>{p.summary}</CardText>
              <Skills>
                {p.skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </Skills>
              {p.internalLink && (
                <CardLink to={p.internalLink}>Read the case study →</CardLink>
              )}
              {p.externalLink && (
                <ExternalLink href={p.externalLink} target="_blank" rel="noreferrer">
                  View the code →
                </ExternalLink>
              )}
            </Card>
            )
          )}
        </Grid>
      </Container>
    </Section>
  );
};

export default Projects;
