import React from 'react';
import Header from './components/Header';
import VideoPlayer from './components/Video';
import FormPage from './components/Form';
import TeamPage from './components/Team';
import ConfigurationPage from './components/Configurations';
function App() {
  return (
    <div>
      <Header></Header>
      <VideoPlayer/>
      <TeamPage/>
      <ConfigurationPage/>
    </div>
  );
}

export default App;