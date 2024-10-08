import styled from "styled-components";
import { education } from "../../Data/constants";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeperator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import EducationCard from "./EducationCard/EducationCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;
const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 12px;
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
const TimeLineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
function Education() {
  return (
    <div>
      <Container id="education">
        <Wrapper>
          <Title>Education</Title>
          <Desc>Here are some of my Education</Desc>
          <TimeLineSection>
            <Timeline>
              {education.map((education, index) => (
                <TimelineItem key={education.id}>
                  <TimelineSeperator>
                    <TimelineDot variant="outlined" color="secondary" />
                    {index !== education.length - 1 && <TimelineConnector />}
                  </TimelineSeperator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education1={education}/>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </TimeLineSection>
        </Wrapper>
      </Container>
    </div>
  );
}

export default Education;
