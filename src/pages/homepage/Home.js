import React from 'react';
import styled from 'styled-components';
import { RiToolsLine, RiFileTextLine, RiMedalLine } from 'react-icons/ri';
import { homeObjOne } from './Data';
import { caseStudy } from '../casestudypage/Data';
import { InfoSection } from '../../components'
import { Container } from '../../globalStyles';
import { Eyebrow, Pill, PrimaryLink, GhostLink } from '../../components/ui';

// Edit these to change the three cards under the hero.
const currentRole = {
  title: 'Network Support Media Technician',
  org: 'San Diego Unified School District, DePortola Middle School',
  note: 'Keeping the school network, devices, and AV/TV running for students and staff.',
  since: 'Aug 2020 – Present',
};

const certifications = {
  title: 'Certifications & training',
  items: [
    'Cybersecurity Architecture',
    'Cyber Incident Response',
    'Threat and Vulnerability',
    'Linux Essentials',
  ],
};

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
`;

const Section = styled.section`
  background: #101522;
  color: #fff;
  padding: 0 0 110px;
`;

const Heading = styled.h2`
  font-size: 32px;
  margin-bottom: 28px;
  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 22px;
`;

const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #1c2237;
  border: 1px solid #2c3554;
  border-radius: 14px;
  padding: 28px 26px;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  &:hover {
    transform: translateY(-6px);
    border-color: #4b59f7;
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.35);
  }
`;

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

const CardTitle = styled.h3`
  font-size: 21px;
  margin-bottom: 8px;
`;

const Org = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #8fa0ff;
  margin-bottom: 10px;
`;

const Note = styled.p`
  font-size: 15px;
  line-height: 1.55;
  color: #b8c0cf;
`;

const Clamp = styled(Note)`
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const When = styled.p`
  margin-top: 14px;
  font-size: 13px;
  font-weight: 700;
  color: #4ade80;
`;

const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
  li {
    font-size: 13px;
    color: #c9d1ff;
    padding: 5px 12px;
    border-radius: 999px;
    border: 1px solid #2c3554;
  }
`;

const CardLink = styled(GhostLink)`
  margin-top: auto;
  align-self: flex-start;
  padding: 8px 18px;
  font-size: 14px;
`;

const Spacer = styled.div`
  flex: 1;
  min-height: 18px;
`;

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne}>
                <Actions>
                    <PrimaryLink to="/projects">See my projects</PrimaryLink>
                    <GhostLink to="/casestudy">Read the case study</GhostLink>
                </Actions>
            </InfoSection>

            <Section>
                <Container>
                    <Eyebrow>At a glance</Eyebrow>
                    <Heading>What I'm up to</Heading>
                    <Grid>
                        <Card>
                            <Badge><Pill tone="done">Current</Pill></Badge>
                            <Icon aria-hidden="true"><RiToolsLine /></Icon>
                            <CardTitle>{currentRole.title}</CardTitle>
                            <Org>{currentRole.org}</Org>
                            <Note>{currentRole.note}</Note>
                            <When>{currentRole.since}</When>
                        </Card>

                        <Card>
                            <Badge><Pill>Case study</Pill></Badge>
                            <Icon aria-hidden="true"><RiFileTextLine /></Icon>
                            <CardTitle>{caseStudy.title}</CardTitle>
                            <Clamp>{caseStudy.lede}</Clamp>
                            <Spacer />
                            <CardLink to="/casestudy">Read the case study →</CardLink>
                        </Card>

                        <Card>
                            <Badge><Pill tone="wip">Learning</Pill></Badge>
                            <Icon aria-hidden="true"><RiMedalLine /></Icon>
                            <CardTitle>{certifications.title}</CardTitle>
                            <Tags>
                                {certifications.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </Tags>
                            <Spacer />
                            <CardLink to="/cv">See full CV →</CardLink>
                        </Card>
                    </Grid>
                </Container>
            </Section>
        </>
    )
}

export default Home;
