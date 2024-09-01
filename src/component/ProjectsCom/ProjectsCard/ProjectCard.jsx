import React from 'react'
import styled from 'styled-components'
import { projects } from '../../../Data/constants';
const Card = styled.div`
  width: "400px";
  height: "500px";
  display: flex;
  flex-direction: column;
  gap: 14px;
  backgound-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  padding: 26px 20px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;
const Image = styled.img`
width:100%;
height:180px;
backgound-color:${({ theme }) => theme.white};
border-radius:10px;
object-fit:cover;
box-shadow:0 0 16px 2px rgba(0,0,0,0.3);
`;
const Title = styled.div`
font-size:20px;
font-weight:600;
color:${({ theme }) => theme.text_secondary};
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
max-width:100%;
-webkit-line-clap:2;
-webkit-box-orient:vertical;
`;
const Date = styled.div`
font-size:12px;
font-weight:400;
margin-left:2px;
color:{({theme})=>theme.text_secondary+80};
@media (max-width:768px){
  font-size:10px;
}
`;
const Description = styled.div`
font-weight:400;
color:${({ theme }) => theme.text_secondary + 99};
overflow:hidden;
text-overflow:ellipsis;
-webkit-line-clamp:3;
-webkit-box-orient:verticle;
display:-webkit-box;
margin-top:8px;
max-width:100%;
`
const Tags = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
gap:8px;
margin-top:4px;
align-items:center;
`;
const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  backgound-color: ${({ theme }) => theme.primary + 15};
padding:2px 8px;
boder-radius:10px;
`;
const Detials = styled.div`
width:100%;
display:flex;
flex-direction:column;

gap:0px;
padding:0px 2px;
`;
const Members = styled.div`
display:flex;
align-items:center;
padding-left:10px;
`;

const Avatar = styled.img`
width:38px;
height:3px;
border-radius:50%;
margin-left:-10px;
backgound-color:${({ theme }) => theme.white};
box-shadow:0 0 10px rgba(0,0,0,0.2);
border:3px solid ${({ theme }) => theme.card};
`

export default function ProjectCard({ Project }) {
  return (
    <>

      <Card>
        <Image src={Project.image} alt='image' />
        <Tags>{Project.tags.map((tag, index) => (<Tag key={index} >{tag}</Tag>))}</Tags>
        <Detials>
          <Title>{Project.title}</Title>
          <Date>{Project.date}</Date>
          <Description>{Project.description}</Description>
        </Detials>
        <Members></Members>

      </Card>
    </>
  );
}
