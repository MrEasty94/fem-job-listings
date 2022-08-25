import React from 'react';
import styled from 'styled-components';

const StyledInfoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledCompanyName = styled.p`
  color: #5ca5a5;
  font-size: 18px;
  line-height: 16px;
`;

const StyledFeatured = styled.div`
  padding: 5px;
  color: white;
  background-color: ${(props) =>
    props.featured ? '#2B3939' : null || props.new ? '#5ca5a5' : null};
  border-radius: 5px;
`;

const StyledJobPosition = styled.p`
  font-weight: bold;
  font-size: 22px;
  line-height: 24px;
  color: #2b3939;
`;

function JobListInfo({
  companyName,
  isNew,
  isFeatured,
  jobPosition,
  postedAt,
  contract,
  location,
}) {
  return (
    <>
      <StyledInfoDiv>
        <StyledCompanyName>{companyName}</StyledCompanyName>
        {isNew ? <StyledFeatured new={true}>New</StyledFeatured> : null}
        {isFeatured ? (
          <StyledFeatured featured={true}>Featured</StyledFeatured>
        ) : null}
      </StyledInfoDiv>
      <StyledInfoDiv>
        <StyledJobPosition>{jobPosition}</StyledJobPosition>
      </StyledInfoDiv>
    </>
  );
}

export default JobListInfo;
