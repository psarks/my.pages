import React from "react";
import styled from "styled-components";
import { RiBriefcase4Line, RiMedalLine, RiToolsLine, RiBook2Line, RiGlobalLine } from "react-icons/ri";
import { Container } from "../../globalStyles";
import { Eyebrow, Pill, PrimaryAnchor, GhostLink } from "../../components/ui";

const pdfUrl = `${process.env.PUBLIC_URL}/Paulina-Sarquis-Resume.pdf`;

const experience = [
  {
    role: "Network Support Media Technician",
    org: "San Diego Unified School District, DePortola Middle School",
    dates: "Aug 2020 – Present",
    points: [
      "Help coordinate the implementation and maintenance of a complex local area network (LAN) at a school site.",
      "Troubleshoot and isolate issues with computers, printers, and microphones, determining whether the cause is hardware, software, or connection.",
      "Provide training and technical assistance to staff.",
      "Provide audiovisual and television (AV/TV) support services.",
      "Follow up on maintenance and service requests for network changes and additions.",
      "Maintain the site's technology inventory.",
    ],
  },
  {
    role: "Front-End Developer",
    org: "Paohaus, San Diego",
    dates: "Jan 2018 – Sep 2022",
    points: [
      "Turned Figma design mockups into working web pages.",
      "Built styled, clickable, functional user interfaces with a focus on UX.",
      "Worked primarily in JavaScript, HTML, and CSS.",
    ],
  },
];

const skills = {
  Technical: ["LAN support", "Hardware & software troubleshooting", "AV/TV systems", "Windows", "Linux", "JavaScript", "HTML & CSS", "Python", "C / C++", "Figma"],
  Professional: ["Communication", "Customer service", "Staff training", "Problem-solving", "Adaptability"],
};

const coursework = [
  "Windows Operating System",
  "Basic Network Configuration",
  "Linux Essentials",
  "Programming with Python I & II",
  "Cybersecurity Architecture",
  "Cyber Incident Response",
  "Threat and Vulnerability",
];

// Dark page like the rest of the site (the CV used to be a white "paper" sheet)
const Page = styled.section`
  background: #101522;
  color: #fff;
  padding: 96px 0 110px;
  min-height: calc(100vh - 80px);
  @media screen and (max-width: 900px) {
    padding: 48px 0 80px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 48px;
`;

const Name = styled.h1`
  font-size: 56px;
  line-height: 1.1;
  margin-bottom: 12px;
  @media screen and (max-width: 768px) {
    font-size: 38px;
  }
`;

const Title = styled.p`
  font-size: 19px;
  color: #c9d1dd;
`;

const Meta = styled.p`
  font-size: 15px;
  color: #8a94a8;
  margin-top: 8px;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 22px;
  align-items: start;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Stack = styled.div`
  display: grid;
  gap: 22px;
`;

// Dark rounded card with the same hover lift as the Bucket List cards
const Card = styled.section`
  position: relative;
  background: #1c2237;
  border: 1px solid #2c3554;
  border-radius: 14px;
  padding: 28px 26px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
  &:hover {
    border-color: #4b59f7;
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.35);
  }
`;

// Icon badge + section title row at the top of each card
const CardHead = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #8fa0ff;
  background: rgba(75, 89, 247, 0.16);
`;

const H2 = styled.h2`
  font-size: 22px;
`;

const Job = styled.div`
  padding-top: 22px;
  margin-top: 22px;
  border-top: 1px solid #2c3554;
  &:first-of-type {
    padding-top: 0;
    margin-top: 0;
    border-top: none;
  }
`;

const JobTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  flex-wrap: wrap;
`;

const Role = styled.h3`
  font-size: 19px;
`;

const Org = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #8fa0ff;
  margin: 4px 0 12px;
`;

const Points = styled.ul`
  list-style: none;
  li {
    position: relative;
    padding-left: 22px;
    font-size: 16px;
    line-height: 1.6;
    color: #b8c0cf;
    margin-bottom: 8px;
  }
  /* small blue dot in place of the default bullet */
  li::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 0.65em;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #4b59f7;
  }
`;

const Chips = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
  li {
    font-size: 13px;
    color: #c9d1ff;
    padding: 5px 12px;
    border-radius: 999px;
    border: 1px solid #2c3554;
  }
`;

const SubHead = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #c9d1ff;
  margin-bottom: 10px;
`;

const Plain = styled.ul`
  list-style: none;
  li {
    font-size: 15px;
    line-height: 1.5;
    color: #b8c0cf;
    margin-bottom: 8px;
  }
`;

const P = styled.p`
  font-size: 15px;
  line-height: 1.65;
  color: #b8c0cf;
`;

const CV = () => (
  <Page>
    <Container>
      <Header>
        <div>
          <Eyebrow>Curriculum vitae</Eyebrow>
          <Name>Paulina Alejandra Sarquis Muñoz</Name>
          <Title>IT & Network Support · UX / Front-End</Title>
          <Meta>San Diego, CA · English, Spanish, French</Meta>
        </div>
        <Actions>
          {/* plain anchor: this is the PDF file, not a router page */}
          <PrimaryAnchor href={pdfUrl} target="_blank" rel="noreferrer">
            Download PDF
          </PrimaryAnchor>
          <GhostLink to="/casestudy">Read the case study</GhostLink>
        </Actions>
      </Header>

      <Columns>
        <Stack>
          <Card>
            <CardHead>
              <Icon aria-hidden="true"><RiBriefcase4Line /></Icon>
              <H2>Experience</H2>
            </CardHead>
            {experience.map((job, i) => (
              <Job key={job.role}>
                <JobTop>
                  <Role>{job.role}</Role>
                  <Pill tone={i === 0 ? 'done' : undefined}>{job.dates}</Pill>
                </JobTop>
                <Org>{job.org}</Org>
                <Points>
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </Points>
              </Job>
            ))}
          </Card>

          <Card>
            <CardHead>
              <Icon aria-hidden="true"><RiMedalLine /></Icon>
              <H2>Education</H2>
            </CardHead>
            <JobTop>
              <Role>B.S. Cognitive Science, Interaction Design</Role>
              <Pill>Sep 2016 – Dec 2018</Pill>
            </JobTop>
            <Org>University of California San Diego</Org>
            <P>
              Focused on human-computer interaction, web design, mobile app
              development, UX design, product design, and usability research.
            </P>
          </Card>
        </Stack>

        <Stack>
          <Card>
            <CardHead>
              <Icon aria-hidden="true"><RiToolsLine /></Icon>
              <H2>Skills</H2>
            </CardHead>
            {Object.entries(skills).map(([group, list]) => (
              <div key={group}>
                <SubHead>{group}</SubHead>
                <Chips>
                  {list.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </Chips>
              </div>
            ))}
          </Card>

          <Card>
            <CardHead>
              <Icon aria-hidden="true"><RiBook2Line /></Icon>
              <H2>Coursework</H2>
            </CardHead>
            <Plain>
              {coursework.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </Plain>
          </Card>

          <Card>
            <CardHead>
              <Icon aria-hidden="true"><RiGlobalLine /></Icon>
              <H2>Languages</H2>
            </CardHead>
            <Plain>
              <li>English</li>
              <li>Spanish</li>
              <li>French</li>
            </Plain>
          </Card>
        </Stack>
      </Columns>
    </Container>
  </Page>
);

export default CV;
