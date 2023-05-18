import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineAppstore,
  AiOutlineGithub,
} from 'react-icons/ai';
import { SiNotion } from 'react-icons/si';
import {
  RelativeContriner,
  Container,
  Border,
  Profile,
  ProfileBorder,
  Menu,
  MenuElement,
  MenuText,
  CurMenuText,
  MenuBorderContiner,
  MenuBorder,
  Footer,
} from '../styles/navbarStyle';
import '../styles/color.css';
import '../styles/font.css';

export default function Navbar() {
  const profileList = [
    { icon: AiOutlineHome, text: 'Home', path: '/' },
    { icon: AiOutlineSearch, text: 'Search', path: '/search' },
    { icon: AiOutlineAppstore, text: 'Category', path: '/genre' },
  ];

  const sampleLocation = useLocation();
  let curPage = 'Home';
  if (sampleLocation.pathname === '/search') {
    curPage = 'Search';
  } else if (sampleLocation.pathname === '/genre') {
    curPage = 'Category';
  }

  return (
    <RelativeContriner>
      <Container>
        <Border />
        <Profile>
          <ProfileBorder>
            <AiOutlineUser className="icon" size="50" color="white" />
          </ProfileBorder>
        </Profile>
        <Menu>
          {profileList.map(x => {
            return (
              <Link to={x.path}>
                <MenuElement>
                  {x.text === curPage ? (
                    <>
                      <x.icon className="icon" size="50" color="#7aa7ff" />
                      <CurMenuText>{x.text}</CurMenuText>
                    </>
                  ) : (
                    <>
                      <x.icon className="icon" size="50" color="white" />
                      <MenuText>{x.text}</MenuText>
                    </>
                  )}
                </MenuElement>
              </Link>
            );
          })}
          <MenuBorderContiner>
            <MenuBorder />
          </MenuBorderContiner>
          <Footer>
            <a href="https://www.notion.so/6f91a2154dc847f3acb878c656a4e98c?pvs=4">
              <SiNotion className="icon" size="50" color="white" />
            </a>
            <a href="https://github.com/FE-Sprint-Study/Namu-Movie">
              <AiOutlineGithub className="icon" size="50" color="white" />
            </a>
          </Footer>
        </Menu>
      </Container>
    </RelativeContriner>
  );
}
