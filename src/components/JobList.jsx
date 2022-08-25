import React from 'react';
import styled from 'styled-components';
import JobListItem from './JobListItem';

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 165px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function JobList() {
  return (
    <StyledList>
      <JobListItem />
    </StyledList>
  );
}

export default JobList;
