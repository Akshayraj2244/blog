import React from 'react';
import styled from 'styled-components';

function Header() {
    return(
        <>
            <HeaderMain className = "wrapper">
                <Wrapper>
                    <LeftSection>
                        <LogoContainer>
                            <LogoLink>
                                <LogoImage src = {require('../../assets/images/moke..png')} />
                            </LogoLink>
                        </LogoContainer>
                    </LeftSection>
                    <RightContianer>
                        <NavContainer>
                            <NavCover>
                                <NavList>
                                    <NavLink>Get Signal</NavLink>
                                </NavList>
                                <NavList>
                                    <NavLink>Support</NavLink>
                                </NavList>
                                <NavList>
                                    <NavLink>Blog</NavLink>
                                </NavList>
                                <NavList>
                                    <NavLink>Developers</NavLink>
                                </NavList>
                                <NavList>
                                    <NavLink>Careers</NavLink>
                                </NavList>
                                <NavList>
                                    <NavLink>Donate</NavLink>
                                </NavList>
                            </NavCover>
                        </NavContainer>
                        <IconContainer>
                            <IconLink>
                                <IconImage src = {require('../../assets/images/twitter.png')} />
                            </IconLink>
                            <IconLink>
                                <IconImage src = {require('../../assets/images/instagram.png')} />
                            </IconLink>
                        </IconContainer>
                    </RightContianer>
                </Wrapper>
            </HeaderMain>
        </>
    )
}

export default Header;

const HeaderMain = styled.header`
    height: 100px;
    
`
const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`
const LeftSection = styled.div`
    width: 20%;
`
const LogoContainer = styled.h1`
    width: 50%;
`
const LogoLink = styled.a`
    width: 100%;
    display: inline-block;
`
const LogoImage = styled.img`
    display: block;
    width: 100%;
`
const RightContianer = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const NavContainer = styled.nav`
`
const NavCover = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
`
const NavList = styled.li`
    margin-right: 20px;
`
const NavLink = styled.a`
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
`
const IconContainer = styled.div`
    display: flex;
`
const IconLink = styled.a`
    display: inline-block;
    margin-right: 20px;
    &:last-child {
        margin-right:0;
    }
`
const IconImage = styled.img`
width: 100%;
display: block;
    
`