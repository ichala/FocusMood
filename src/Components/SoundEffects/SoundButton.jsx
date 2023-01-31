import React, { useEffect, useState } from 'react';

const SoundButton = ({ link, icon, volume }) => {
  const [audio] = useState(new Audio(link));
  audio.volume = volume;
  const [isPlaying, setisPlaying] = useState(false);
  audio.addEventListener('ended', () => {
    audio.play();
  }, false);
  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  },
  [isPlaying]);
  return (
    <button
      onClick={
        () => {
          setisPlaying(!isPlaying);
        }
    }
      type="button"
      className={`btn ${!isPlaying ? 'btn-ghost' : 'btn-primary'} btn-sm`}
    >
      {icon}
    </button>
  );
};

export default SoundButton;
