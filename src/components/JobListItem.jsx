import React from 'react';
import styled from 'styled-components';

function JobListItem() {
  const ListItem = styled.li`
    display: flex;
    height: 150px;
    border: 1px solid black;
    padding: 10px;
    width: 100%;
  `;
  return <ListItem>Hello World</ListItem>;
}

export default JobListItem;
