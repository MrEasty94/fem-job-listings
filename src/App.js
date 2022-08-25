import React from 'react';
import JobList from './components/JobList';
import SearchBar from './components/SearchBar';
import GlobalStyle from './globalStyles';

function App() {
  let jobTags = [];
  return (
    <>
      <GlobalStyle />
      <header className="main-header"></header>
      {jobTags ? <SearchBar /> : null}

      <JobList />
    </>
  );
}

export default App;
