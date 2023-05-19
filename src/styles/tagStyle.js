import tw from 'tailwind-styled-components';

const Container = tw.div`
w-[100%-4rem]
flex
flex-wrap
bg-black
mx-8
mt-8
px-7
py-5
border-2
rounded-3xl
border-white
`;
const TagContainer = tw.button`
text-white
px-5
py-3
mx-2
my-1.5
text-xl
border-2
rounded-3xl
`;
const SelectedTag = tw(TagContainer)`
bg-mainColor
items-center
`;
export { Container, TagContainer, SelectedTag };
