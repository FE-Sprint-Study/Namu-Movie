import tw from 'tailwind-styled-components';

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

export {
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
};
