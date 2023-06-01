import React from 'react';
import {
  PosterContainer,
  InfoContainer,
  Title,
  InnerContainer,
  Date,
  Vote,
} from '../styles/skeletonStyle';

export default function Skeleton() {
  return (
    <>
      <PosterContainer />
      <InfoContainer>
        <Title />
        <InnerContainer>
          <Date />
          <Vote />
        </InnerContainer>
      </InfoContainer>
    </>
  );
}
