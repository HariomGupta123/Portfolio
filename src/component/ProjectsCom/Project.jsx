import { useState } from 'react';
import styled from 'styled-components';
import { projects } from '../../Data/constants';
import ProjectCard from './ProjectsCard/ProjectCard';
const Container = styled.div`
backgound:linear-gradient(
  343.07deg,
  rgba(132,59,206,0.06) 5.71%,
  rgba(132,59,206,0) 64.83%
);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;

  clip-path:polygon(0 0, 100% 0,100% 100%,100% 98%,0 100%);
`;
const Wrapper = styled.div`
  max-width: 1350px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
  padding:10px 0px;
`;
const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-siz: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;

  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};

  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 6px;

  ${({ active }) =>
    active &&
    `
backgound-color: ${({ theme }) => theme.primary + 20};`}

  &:hover {
    backgound-color: ${({ theme }) => theme.primary + 8};
  }
  @media (max-width:768px){
    padding:6px 8px;
    border-radius:4px;
  }
`;
const Divider = styled.div`
  width: 1.5px;
  background-color: ${({ theme }) => theme.primary};
`;
const CardContainer = styled.div`
  width: 800px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  gap: 28px;
  @media (max-width: 500px) {
    width:350px;
    display: grid;
    grid-template-columns: repeat(1, 2fr);
    
    margin-top: 28px;
   
    justify-items:center;
    gap: 28px;
  }
`;
export default function Project() {
    const [toggle,setToggle]=useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of Project . Here are some of my
          Projects
        </Desc>
        <ToggleGroup>
          {toggle === "all" ? (
            <ToggleButton active="true" value="all">
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all">All</ToggleButton>
          )}

          <Divider />
          {toggle === "web app" ? (
            <ToggleButton
              active
              value="web app"
              onClick={() => setToggle("web app")}
            >
              web app
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("web app")}>
              web apps
            </ToggleButton>
          )}

          <Divider />
          <ToggleButton>andriod apps</ToggleButton>
          <Divider />
          <ToggleButton>machine learning</ToggleButton>
        </ToggleGroup>
      </Wrapper>
      <CardContainer>
        {toggle === "all" &&
          projects.map((Project, index1) => (
            <ProjectCard
              key={index1}
              Project={Project}
              proImage={Project.image}
            />
          ))}
        {projects
          .filter((item) => item.category === toggle)
          .map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
      </CardContainer>
    </Container>
  );
}
