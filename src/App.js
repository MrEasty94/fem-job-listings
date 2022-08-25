import React from 'react';
import JobList from './components/JobList';
import SearchBar from './components/SearchBar';

function App() {
  let jobTags = [];
  return (
    <>
      <header className="main-header"></header>
      {jobTags ? <SearchBar /> : null}

      <JobList />
    </>
  );
}

export default App;
