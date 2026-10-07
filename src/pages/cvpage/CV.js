import React from "react";
import styled from "styled-components";
import { Container } from "../../globalStyles";

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

const Page = styled.section`
  background: #101522;
  padding: 60px 0 100px;
  min-height: calc(100vh - 80px);
`;

const Paper = styled.article`
  background: #fff;
  color: #1c2237;
  max-width: 960px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 56px 64px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
  @media screen and (max-width: 768px) {
    padding: 32px 22px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  flex-wrap: wrap;
  padding-bottom: 28px;
  border-bottom: 3px solid #4b59f7;
  margin-bottom: 36px;
`;

const Name = styled.h1`
  font-size: 38px;
  line-height: 1.1;
  margin-bottom: 8px;
`;

const Title = styled.p`
  font-size: 18px;
  color: #4b59f7;
  font-weight: 700;
`;

const Meta = styled.p`
  font-size: 15px;
  color: #5b6378;
  margin-top: 8px;
`;

const Download = styled.a`
  background: #4b59f7;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  border-radius: 6px;
  padding: 12px 22px;
  white-space: nowrap;
  &:hover {
    background: #0467fb;
  }
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 48px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

const H2 = styled.h2`
  font-size: 14px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: #5b6378;
  margin-bottom: 16px;
`;

const Block = styled.div`
  margin-bottom: 36px;
`;

const Job = styled.div`
  margin-bottom: 28px;
`;

const JobTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

const Role = styled.h3`
  font-size: 19px;
`;

const Dates = styled.span`
  font-size: 15px;
  color: #5b6378;
  white-space: nowrap;
`;

const Org = styled.p`
  font-size: 15px;
  color: #3a4256;
  margin: 2px 0 10px;
`;

const Points = styled.ul`
  padding-left: 20px;
  li {
    font-size: 16px;
    line-height: 1.55;
    margin-bottom: 6px;
  }
`;

const Chips = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
  li {
    background: #eef0fe;
    color: #2b3245;
    border-radius: 6px;
    padding: 5px 10px;
    font-size: 14px;
  }
`;

const SubHead = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Plain = styled.ul`
  list-style: none;
  li {
    font-size: 15px;
    line-height: 1.5;
    margin-bottom: 6px;
  }
`;

const P = styled.p`
  font-size: 15px;
  line-height: 1.55;
  color: #3a4256;
`;

const CV = () => (
  <Page>
    <Container>
      <Paper>
        <Header>
          <div>
            <Name>Paulina Alejandra Sarquis Muñoz</Name>
            <Title>IT & Network Support · UX / Front-End</Title>
            <Meta>San Diego, CA · English, Spanish, French</Meta>
          </div>
          <Download href={pdfUrl} target="_blank" rel="noreferrer">
            Download PDF
          </Download>
        </Header>

        <Columns>
          <div>
            <Block>
              <H2>Experience</H2>
              {experience.map((job) => (
                <Job key={job.role}>
                  <JobTop>
                    <Role>{job.role}</Role>
                    <Dates>{job.dates}</Dates>
                  </JobTop>
                  <Org>{job.org}</Org>
                  <Points>
                    {job.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </Points>
                </Job>
              ))}
            </Block>

            <Block>
              <H2>Education</H2>
              <JobTop>
                <Role>B.S. Cognitive Science, Interaction Design</Role>
                <Dates>Sep 2016 – Dec 2018</Dates>
              </JobTop>
              <Org>University of California San Diego</Org>
              <P>
                Focused on human-computer interaction, web design, mobile app
                development, UX design, product design, and usability research.
              </P>
            </Block>
          </div>

          <aside>
            <Block>
              <H2>Skills</H2>
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
            </Block>

            <Block>
              <H2>Coursework</H2>
              <Plain>
                {coursework.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </Plain>
            </Block>

            <Block>
              <H2>Languages</H2>
              <Plain>
                <li>English</li>
                <li>Spanish</li>
                <li>French</li>
              </Plain>
            </Block>
          </aside>
        </Columns>
      </Paper>
    </Container>
  </Page>
);

export default CV;
