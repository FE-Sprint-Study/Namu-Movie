import React from 'react';
import tw from 'tailwind-styled-components';

export default function Skeleton({ width, height }) {
  const Container = tw.div`w-full h-full animate-skeleton`;
  const containerStyle = {
    width: width || null,
    height: height || null,
  };
  return <Container style={containerStyle} />;
}
