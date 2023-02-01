import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import { PreferencesContext } from '../../Context/Preferences';

const Player = () => {
  const { Video, VideoControls } = useContext(PreferencesContext);

  return (
    <>
      <ReactPlayer volume={VideoControls.volume} playing={VideoControls.playing} loop={VideoControls.loop} className="absolute  left-0 min-w-full min-h-screen" url={Video} />
      <div className="absolute bg-base-300/70 left-0 min-w-full min-h-screen" />
    </>
  );
};

export default Player;
