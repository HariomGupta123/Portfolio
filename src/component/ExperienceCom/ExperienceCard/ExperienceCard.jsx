import styled from 'styled-components';


 const Document = styled.img`
   display: none;
   height: 70px;
   width: fit-content;
   background-color: #ddcaca;
   border-radius: 10px;
   &:hover {
     cursor: pointer;
     opacity?: 0.8;
   }
 `;
const Card=styled.div`
width:650px;
border-radius:10px;
bos-shadow:0px 0px 10px rgba(0,0,0,0.1);
padding:12px 16px;
justify-content:space-between;
position:relative;
overflow:hidden;
display:flex;
flex-direction:column;
gap:12px;
transition:all 0.3s ease-in-out;
&:hover{
    bax-shadow:0px 0px 20px rgba(0,0,0,0.2);
    transform:translateY(-5px);
}
&:hover ${Document}{
  display:flex;
}
@media (max-width:768px){
    padding:10px;
    gap:8px;
    width:300px;
}
border:0.1px solid #306ee8;
box-shadow:rgba(23,92,230,0.15) 0px 4px 24px;
`;
 const Top=styled.div`
 display:flex;
 gap:12px;
 width:100%;
 `;
 const Logo=styled.img`
 height:50px;
 width:50px;
 background-color:#000000;
 border-radius:50px;
 margin-top:4px;
 @media(max-width:768px){
    height:40px;
 }
 `;
 const Body=styled.div`
 display:flex;
 flex-direction:column;
 width:100%;
 `;

 const Role=styled.div`
 font-size:18px
 font-weight:600;
 color:${({theme})=>theme.text_primary + 99};
 @media (max-width:768px){
    font-size:14px;
 }
 `;
 const Company=styled.div`
 font-size:14px;
 font-weight:500;
 color:${({theme})=>theme.text_secondary+99};
 @media (max-width:768px){
    font-size:12px;
 }
 `;
 const Duration=styled.div`
 font-size:12px;
 font-weight:400px;
 color:${({theme})=>theme.text_primary+80};
 @media (max-width:768px){
    font-size:10px;
 }
 `;
 const Description=styled.div`
 width:100%;
 font-size:15px;
 font-weight:400;
color:${({theme})=>theme.text_primary+99};
margin-bottom:10px;
 @media (max-width:768px){
    font-size:12px;
 }
 `;

 const Skills=styled.div`
 width:100%;
 display:flex;
 gap:12px;
 margin-top:10px;
 `;
 const ItemWrapper=styled.div`
 display:flex;
 flex-wrap:wrap;
 
 gap:8px;
 `;
 const Skill=styled.div`
 font-size:15px;
 font-weight:400;
 color:${({theme})=>theme.text_primary+99};
 @media (max-width:768px){
  font-size:12px;
 }
 `;


export default function ExperienceCard({ image,role,company,date,desc,skills,doc }) {
  return (
    <Card>
      <Top>
        <Logo src={image} />
        <Body>
          <Role>{role}</Role>
          <Company>{company}</Company>
          <Duration>{date}</Duration>
        </Body>
      </Top>
      <Description>
        {desc}
        {skills && (
          <>
            <br />
            <Skills>
              <b>Skills: </b>
              <ItemWrapper>
                {skills.map((skill, index) => (<Skill key={index}>{skill}</Skill> ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
      {doc && (
        <a href={doc} target="new">
          {" "}
          <Document src={doc} />
        </a>
      )}
    </Card>
  );
}
