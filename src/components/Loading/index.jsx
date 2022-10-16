import { Flex } from '@chakra-ui/react';
import React from 'react';
import { RotatingTriangles } from 'react-loader-spinner';

const Loading = ({ label, h = 80, w = 80 }) => {
  return (
    <Flex
      position="absolute"
      inset="0"
      zIndex="100"
      justifyContent="center"
      alignItems="center"
      bg="rgba(0,0,0,0.2)"
    >
      <RotatingTriangles
        visible={true}
        height={h}
        width={w}
        ariaLabel="rotating-triangels-loading"
      />
      {label && <p>{label}</p>}
    </Flex>
  );
};

export default Loading;
