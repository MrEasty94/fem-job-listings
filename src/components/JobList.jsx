import React from 'react';
import styled from 'styled-components';
import JobListItem from './JobListItem';

function JobList() {
  const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 165px;
    width: 100%;
  `;

  return (
    <StyledList>
      <JobListItem />
    </StyledList>
  );
}

export default JobList;
