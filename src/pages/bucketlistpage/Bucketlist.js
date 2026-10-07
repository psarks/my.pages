import React from 'react';
import styled, { keyframes } from 'styled-components';
import Beach from '../../videos/beach.mp4';
import { Container } from '../../globalStyles';
import {
  RiFootballLine,
  RiEBike2Line,
  RiTrophyLine,
  RiRoadMapLine,
  RiQuillPenLine,
} from 'react-icons/ri';
import { GiLion, GiTurtle } from 'react-icons/gi';

// Edit this list to change the page. done: true moves a goal to "Checked off".
const goals = [
  {
    icon: RiFootballLine,
    title: 'World Cup games',
    note: 'Saw matches live in North America during the 2026 World Cup.',
    done: true,
    when: 'Summer 2026',
  },
  {
    icon: RiEBike2Line,
    title: 'Build an e-bike safety app',
    note: 'An app that helps kids and their parents learn to ride e-bikes safely, together.',
    inProgress: true,
  },
  {
    icon: RiTrophyLine,
    title: 'A Champions League night',
    note: 'Watch a Champions League match live in a European stadium.',
  },
  {
    icon: GiLion,
    title: 'Go on a safari',
    note: 'See the animals in their own world, camera in hand.',
  },
  {
    icon: GiTurtle,
    title: 'Swim with sea turtles',
    note: 'Snorkel alongside them in open water.',
  },
  {
    icon: RiRoadMapLine,
    title: 'Cross the country',
    note: 'Coast to coast by car or by train, taking the long way.',
  },
  {
    icon: RiQuillPenLine,
    title: 'Write a book',
    note: 'Working on it, one chapter at a time.',
    inProgress: true,
  },
];

const upcoming = goals.filter((g) => !g.done);
const doneCount = goals.length - upcoming.length;
const inProgressCount = goals.filter((g) => g.inProgress).length;

const Hero = styled.header`
  position: relative;
  height: 46vh;
  min-height: 320px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
`;

const Video = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const Shade = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(180deg, rgba(16, 21, 34, 0.35) 0%, rgba(16, 21, 34, 0.55) 55%, #101522 100%);
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 2;
  padding: 0 20px;
`;

const Eyebrow = styled.p`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #c9d1ff;
  margin-bottom: 14px;
`;

const Title = styled.h1`
  font-size: 64px;
  line-height: 1.05;
  margin-bottom: 0;
  @media screen and (max-width: 768px) {
    font-size: 42px;
  }
`;

const Section = styled.section`
  background: #101522;
  color: #fff;
  padding: 0 0 110px;
`;

const Progress = styled.div`
  max-width: 520px;
  margin: 0 auto 40px;
  text-align: center;
  p {
    color: #a9b3c1;
    margin-bottom: 10px;
    font-size: 16px;
  }
`;

const Bar = styled.div`
  height: 10px;
  background: #1c2237;
  border-radius: 999px;
  overflow: hidden;
  span {
    display: block;
    height: 100%;
    width: ${({ pct }) => pct}%;
    background: linear-gradient(90deg, #4b59f7, #4ade80);
    border-radius: 999px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
`;

const pop = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.18) rotate(-6deg); }
  100% { transform: scale(1); }
`;

const Card = styled.article`
  position: relative;
  background: ${({ done }) => (done ? 'linear-gradient(160deg, #1d2b3a, #18302a)' : '#1c2237')};
  border: 1px solid ${({ done, wip }) => (done ? '#2f6b4f' : wip ? '#7a5d1c' : '#2c3554')};
  border-radius: 14px;
  padding: 28px 26px;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  &:hover {
    transform: translateY(-6px);
    border-color: ${({ done, wip }) => (done ? '#4ade80' : wip ? '#fbbf24' : '#4b59f7')};
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.35);
  }
  &:hover .icon {
    animation: ${pop} 0.5s ease;
  }
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
  color: ${({ done, wip }) => (done ? '#4ade80' : wip ? '#fbbf24' : '#8fa0ff')};
  background: ${({ done, wip }) =>
    done ? 'rgba(74, 222, 128, 0.14)' : wip ? 'rgba(251, 191, 36, 0.14)' : 'rgba(75, 89, 247, 0.16)'};
`;

const Status = styled.span`
  position: absolute;
  top: 22px;
  right: 22px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px 11px;
  border-radius: 999px;
  color: ${({ done, wip }) => (done ? '#0f2a1d' : wip ? '#2a1f05' : '#c9d1ff')};
  background: ${({ done, wip }) => (done ? '#4ade80' : wip ? '#fbbf24' : 'rgba(75, 89, 247, 0.18)')};
`;

const CardTitle = styled.h2`
  font-size: 21px;
  margin-bottom: 8px;
`;

const Note = styled.p`
  font-size: 15px;
  line-height: 1.55;
  color: #b8c0cf;
`;

const When = styled.p`
  margin-top: 14px;
  font-size: 13px;
  font-weight: 700;
  color: #4ade80;
`;

const SignOff = styled.p`
  margin-top: 64px;
  text-align: center;
  color: #6b7489;
  font-size: 15px;
  letter-spacing: 1px;
`;

const Bucketlist = () => {
  const pct = Math.round((doneCount / goals.length) * 100);
  const ordered = [
    ...goals.filter((g) => g.done),
    ...goals.filter((g) => g.inProgress),
    ...upcoming.filter((g) => !g.inProgress),
  ];

  return (
    <>
      <Hero>
        <Video src={Beach} autoPlay loop muted playsInline />
        <Shade />
        <HeroInner>
          <Eyebrow>Life outside the server room</Eyebrow>
          <Title>Bucket List</Title>
        </HeroInner>
      </Hero>

      <Section>
        <Container>
          <Progress>
            <p>
              {doneCount} of {goals.length} checked off
              {inProgressCount > 0 && `, ${inProgressCount} in progress`}
            </p>
            <Bar pct={pct}>
              <span />
            </Bar>
          </Progress>

          <Grid>
            {ordered.map((g) => (
              <Card key={g.title} done={g.done} wip={g.inProgress}>
                <Status done={g.done} wip={g.inProgress}>
                  {g.done ? '✓ Done' : g.inProgress ? '✎ In progress' : 'Someday'}
                </Status>
                <Icon className="icon" done={g.done} wip={g.inProgress}>
                  <g.icon aria-hidden="true" />
                </Icon>
                <CardTitle>{g.title}</CardTitle>
                <Note>{g.note}</Note>
                {g.when && <When>{g.when}</When>}
              </Card>
            ))}
          </Grid>

          <SignOff>May the force be with me ✦</SignOff>
        </Container>
      </Section>
    </>
  );
};

export default Bucketlist;
