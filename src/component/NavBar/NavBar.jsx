import { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import {DiCssdeck} from 'react-icons/di'
import { MenuRounded } from "@mui/icons-material";
import { Bio } from '../../Data/constants'
const Nav = styled.div`
background-color:${({ theme }) => theme.card_light};
height:80px;
display:flex;
justify-content:center;
align-items:center;
font-size:1rem;
position:sticky;
top:0;
z-index:10;
@media screen and (max-width:960px){
    transition:0.8s all ease;
}
`
const NavContainer = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-between;
  z-index:1;
  width:100%;
  padding:0 24px;
  max-width:1200px;
`;
const NavLogo = styled.div`
  display: flex;
  color:${({ theme }) => theme.primary};
  height: 60px;
  justify-self: flex-start;
  cursor:pointer;
  text-decoration:none;
  align-items:center;
  width: 80%;
  @media screen and (max-width:640px){
    padding:0 0px
  }
`;
const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 640px) {
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%,50%);
    font-size:1.8rem;
    cursor:pointer;
    color:${({ theme }) => theme.text_primary}
  }
`;
const NavItems = styled.ul`
    width:100%;
    display:flex;
    justify-contaent:center;
    align-items:center;
    gap:32px;
    list-style:none;
    @media screen and (max-width:768px){
        display:none;
    }
`
const NavLink = styled.a`
color:${({ theme }) => theme.text_primary};
font-weight:500;
cursor:pointer;
text-decoration:none;
transition:all 0.2s essein-out;
&:hover{
    color:${({ theme }) => theme.primary}
}
`;
const ButtonContainer = styled.div`
display:flex;
align-items:center;
justify-content:end;
width:80%;
height:100%;
padding:0 6px;
@media screen and (max-width:640px){
    display:none;
}
`;
const GithubButton = styled.a`
  background-color: transparent;
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-items: center;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;
export const Span=styled.div`
padding:0 4px;
font-weight:bold;
font-size:18px;
`;
const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX" : "translateX(100%)")};
  border-radius: 0 0 20 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ open }) => (open ? "1" : "1")};
`;
const MobileMenuLinks=styled.a`
color:${({theme})=> theme.text_primary};
font-weight:500;
cursor:pointer;
text-decoration:none;
transition:all 0.2s ease-in-out;
&:hover{
  color:{({theme}=>theme.primary)}
}
`
function NavBar() {
  const [open,setOpen]=useState(false)
  const theme=useTheme()
    return (
      <Nav>
        <NavContainer>
          <NavLogo to="/">
            <a
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                marginBottom: "20",
                cursor: "pointer",
              }}
            >
              <DiCssdeck size="3rem" />
              <span style={{ fontWeight: "bold" }}>Hari Om</span>
            </a>
          </NavLogo>
          <MobileIcon onClick={() => setOpen(!open)}>
            <MenuRounded style={{ color: "inherit" }} />
          </MobileIcon>
          <NavItems>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">skills</NavLink>
            <NavLink href="#experience">experience</NavLink>
            <NavLink href="#projects">project</NavLink>
            <NavLink href="#education">Education</NavLink>
          </NavItems>
          <ButtonContainer>
            <GithubButton
              href={Bio.github}
              target="_Blank"
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
            >

              Github profile
            </GithubButton>
          </ButtonContainer>
        </NavContainer>
        {open && (
          <MobileMenu open={open}>
            <MobileMenuLinks
              href="#about"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {" "}
              About
            </MobileMenuLinks>
            <MobileMenuLinks
              href="#skills"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {" "}
              skills
            </MobileMenuLinks>
            <MobileMenuLinks
              href="#experience"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {" "}
              experience
            </MobileMenuLinks>
            <MobileMenuLinks
              href="#projects"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {" "}
              Projects
            </MobileMenuLinks>
            <MobileMenuLinks
              href="#education"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Education
            </MobileMenuLinks>
          </MobileMenu>
        )}
      </Nav>
    );
}

export default NavBar
