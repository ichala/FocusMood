import React, { useState } from 'react';
import {
  BsFillCloudRainFill, BsFillVolumeMuteFill, BsFillVolumeUpFill, BsVolumeDownFill,
} from 'react-icons/bs';
import { RiThunderstormsFill } from 'react-icons/ri';
import { BiWater } from 'react-icons/bi';
import { GiCoffeeCup } from 'react-icons/gi';
import SoundButton from './SoundButton';

const Sounds = [
  {
    link: '/sounds/rain.wav',
    icon: <BsFillCloudRainFill size={20} />,
  },
  {
    link: '/sounds/thunder.mp3',
    icon: <RiThunderstormsFill size={20} />,
  },
  {
    link: '/sounds/waves.mp3',
    icon: <BiWater size={20} />,
  },
  {
    link: '/sounds/coffe.mp3',
    icon: <GiCoffeeCup size={20} />,
  },

];

const SoundEffects = () => {
  const [Volume, setVolume] = useState(1);

  return (
    <>
      <div className="flex flex-wrap gap-1 justify-start items-start">
        {Sounds.map((sound) => (
          <SoundButton key={sound.link} link={sound.link} icon={sound.icon} volume={Volume} />
        ))}

      </div>
      <div className="flex gap-2 items-center p-2 mt-2">
        {
        Number(Volume) === 0 ? (<BsFillVolumeMuteFill size={20} className="text-error" />) : (Number(Volume) > 0.5 ? <BsFillVolumeUpFill size={20} /> : <BsVolumeDownFill size={20} />)
        }
        <input
          type="range"
          onChange={
        (e) => {
          setVolume(e.target.value);
        }
      }
          defaultValue={Volume}
          min={0}
          max={1}
          step={0.05}
          className="range range-xs"
        />
      </div>
    </>
  );
};

export default SoundEffects;
