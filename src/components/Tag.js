import React from 'react';
import '../styles/color.css';
import '../styles/font.css';
import { Container, TagContainer, SelectedTag } from '../styles/tagStyle';
import TMDBTagList from '../constants/TMDBTagList';

export default function Tag(props) {
  const { tagList, setTag } = props;

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
      {TMDBTagList.TMDBTagList.map(x => {
        const isSelected = tagList.findIndex(tag => tag.id === x.id) !== -1;
        return isSelected ? (
          <SelectedTag key={x.id} onClick={() => clickTag(x)}>
            <p>{x.name}</p>
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
