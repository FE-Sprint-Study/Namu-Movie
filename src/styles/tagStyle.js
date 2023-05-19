import tw from 'tailwind-styled-components';

const Container = tw.div`
w-[100%]
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
${tag =>
  tag.isSelected
    ? tw`bg-mainColor text-white`
    : tw`bg-black text-white hover:bg-gray-800`}
`;
const SelectedTag = tw(TagContainer)`
bg-mainColor
flex
items-center
`;
export { Container, TagContainer, SelectedTag };
