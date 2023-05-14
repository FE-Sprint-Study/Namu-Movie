import React from 'react';
import tw from 'tailwind-styled-components';
import '../styles/color.css';
import '../styles/font.css';
import { AiOutlineClose } from 'react-icons/ai';

export default function Tag(props) {
  const { tagList, setTag } = props;
  const Container = tw.div`
    w-[100%]
    flex
    flex-wrap
    bg-[#D9D9D9]
    mx-8
    mt-8
    px-7
    py-5
  `;
  const TagContainer = tw.button`
    bg-black
    text-white
    px-5
    py-3
    mx-2
    my-1.5
    text-xl
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

  const clickTag = x => {
    const tagIndex = tagList.findIndex(tag => tag.id === x.id);
    if (tagIndex === -1) {
      setTag(tagList.concat(x));
    } else {
      setTag(tagList.filter(tag => tag.id !== x.id));
    }
  };

  return (
    <Container>
      {TMDBTagList.map(x => {
        const isSelected = tagList.findIndex(tag => tag.id === x.id) !== -1;
        return isSelected ? (
          <SelectedTag key={x.id} onClick={() => clickTag(x)}>
            <p>{x.name}</p>
            <AiOutlineClose />
          </SelectedTag>
        ) : (
          <TagContainer key={x.id} onClick={() => clickTag(x)}>
            <p>{x.name}</p>
          </TagContainer>
        );
      })}
    </Container>
  );
}

const TMDBTagList = [
  {
    id: 28,
    name: '액션',
  },
  {
    id: 12,
    name: '모험',
  },
  {
    id: 16,
    name: '애니메이션',
  },
  {
    id: 35,
    name: '코미디',
  },
  {
    id: 80,
    name: '범죄',
  },
  {
    id: 99,
    name: '다큐멘터리',
  },
  {
    id: 18,
    name: '드라마',
  },
  {
    id: 10751,
    name: '가족',
  },
  {
    id: 14,
    name: '판타지',
  },
  {
    id: 36,
    name: '역사',
  },
  {
    id: 27,
    name: '공포',
  },
  {
    id: 10402,
    name: '음악',
  },
  {
    id: 9648,
    name: '미스터리',
  },
  {
    id: 10749,
    name: '로맨스',
  },
  {
    id: 878,
    name: 'SF',
  },
  {
    id: 10770,
    name: 'TV 영화',
  },
  {
    id: 53,
    name: '스릴러',
  },
  {
    id: 10752,
    name: '전쟁',
  },
  {
    id: 37,
    name: '서부',
  },
];
