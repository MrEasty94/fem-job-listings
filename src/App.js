import React from 'react';
import JobList from './components/JobList';
import SearchBar from './components/SearchBar';
import GlobalStyle from './globalStyles';

function App() {
  let jobTags = [];
  return (
    <>
      <GlobalStyle />
      <header className="main-header">
        <picture>
          <source srcSet="./public/images/bg-header-desktop.svg" />
          <source srcSet="./public/images/bg-header-mobile.svg" />
          <img src="./public/images/bg-header-mobile.svg" alt="" />
        </picture>
      </header>
      {jobTags ? <SearchBar /> : null}
      <main>
        <JobList />
      </main>
    </>
  );
}

export default App;
