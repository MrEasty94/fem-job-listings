import React from 'react';
import styled from 'styled-components';

const StyledJobLogo = styled.img`
  border-radius: 50%;
  width: 75px;
  height: 75px;
  background-color: green;
`;

function JobListLogo({ JobLogoSrc }) {
  return (
    <>
      <StyledJobLogo src={JobLogoSrc} />
    </>
  );
}

export default JobListLogo;
