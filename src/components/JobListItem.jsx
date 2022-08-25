import React from 'react';
import styled from 'styled-components';
import jobData from '../data.json';
import JobListLogo from './JobListLogo';
import JobListInfo from './JobListInfo';

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  border: 1px solid black;
  padding: 40px;
  width: 100%;
`;

const StyledJobContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledJobInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledJobInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-start;
`;

const StyledCompanyName = styled.p`
  color: #5ca5a5;
`;

const StyledFeaturedInfo = styled.p`
  padding: 5px;
  border-radius: 0.5rem;
  background-color: #2b3939;
  color: white;
`;

const StyledNewInfo = styled.p`
  padding: 5px;
  border-radius: 0.5rem;
  background-color: #5ca5a5;
  color: white;
`;

const StyledPosition = styled.p`
  font-weight: bold;
`;

const StyledContractInfo = styled.p`
  &:after {
    content: '.';
  }
  &:before {
    content: '.';
  }
`;

function JobListItem() {
  const jobInfo = jobData;

  return (
    <>
      {jobInfo.map((item, i) => (
        <ListItem key={i}>
          <StyledJobContainer>
            <JobListLogo JobLogoSrc={item.logo} />
            <StyledJobInfoContainer>
              <JobListInfo
                companyName={item.company}
                isFeatured={item.featured}
                isNew={item.new}
                jobPosition={item.position}
              />
              <StyledJobInfo>
                <p>{item.postedAt}</p>
                <StyledContractInfo>{item.contract}</StyledContractInfo>
                <p>{item.location}</p>
              </StyledJobInfo>
            </StyledJobInfoContainer>
          </StyledJobContainer>
          <StyledJobContainer></StyledJobContainer>
        </ListItem>
      ))}
    </>
  );
}

export default JobListItem;
