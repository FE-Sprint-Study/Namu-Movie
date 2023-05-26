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

import { PATH, NAVBAR_TITLE } from '../constants/constants';

export default function Navbar() {
  const profileList = [
    {
      id: 1,
      icon: AiOutlineHome,
      text: NAVBAR_TITLE.HOME,
      path: PATH.MAIN_PAGE,
    },
    {
      id: 2,
      icon: AiOutlineSearch,
      text: NAVBAR_TITLE.SEARCH,
      path: PATH.SEARCH_PAGE,
    },
    {
      id: 3,
      icon: AiOutlineAppstore,
      text: NAVBAR_TITLE.CATEGORY,
      path: PATH.GENRE_PAGE,
    },
  ];

  const sampleLocation = useLocation();
  let curPage = NAVBAR_TITLE.HOME;
  if (sampleLocation.pathname === PATH.SEARCH_PAGE) {
    curPage = NAVBAR_TITLE.SEARCH;
  } else if (sampleLocation.pathname === PATH.GENRE_PAGE) {
    curPage = NAVBAR_TITLE.CATEGORY;
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
              <Link to={x.path} key={x.id}>
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
