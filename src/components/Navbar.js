import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import {
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineAppstore,
  AiOutlineGithub,
} from 'react-icons/ai';
import { SiNotion } from 'react-icons/si';
import '../styles/color.css';
import '../styles/font.css';

export default function Navbar() {
  const RelativeContriner = tw.div`
    relative
    w-56
  `;

  const Container = tw.div`
    w-56
    h-screen
    pr-1
    bg-black
    fixed
    top-0
    left-0
  `;
  // Container의 border 역할을 해줄 Border
  const Border = tw.div`
    w-1
    h-full
    bg-mainColor
    absolute
    right-0
  `;

  const Profile = tw.div`
    w-full
    flex
    justify-center
    pt-10
    pb-14
  `;

  const ProfileBorder = tw.div`
    border-4 border-white rounded-full
  `;

  const Menu = tw.div`
    mt-1
    w-full
    flex flex-col items-center
  `;

  const MenuElement = tw.div`
    flex
    mb-5
  `;

  const MenuText = tw.p`
    text-white text-2xl leading-10
    py-1
    w-28
    text-left
    ml-3
  `;

  const CurMenuText = tw.p`
    text-white text-2xl leading-10
    py-1
    w-28
    text-left
    ml-3
    text-mainColor
  `;

  const MenuBorderContiner = tw.div`
    w-full
    px-3
    h-0.5
    mt-6
    mx-3
  `;

  const MenuBorder = tw.div`
    w-full
    h-full
    bg-white
  `;

  const Footer = tw.div`
    w-full
    absolute
    bottom-0
    flex
    justify-evenly
    my-5
  `;

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
