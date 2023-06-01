import tw from 'tailwind-styled-components';

const PosterContainer = tw.div`
h-5/6 
animate-skeleton
`;

const InfoContainer = tw.div`
flex flex-col 
justify-between 
h-1/6 
py-1 px-2 
border-b-2 `;

const Title = tw.div`
h-[20px] 
w-[100px] 
animate-skeleton`;

const InnerContainer = tw.div`
flex flex-row 
justify-between`;

const Date = tw.div`
h-[16px] 
w-[65px] 
animate-skeleton`;

const Vote = tw.div`
flex 
h-[16px] 
w-[35px] 
animate-skeleton`;

export { PosterContainer, InfoContainer, Title, InnerContainer, Date, Vote };
