import React, { useContext, useState } from 'react';
import { AiFillYoutube, AiFillFacebook } from 'react-icons/ai';
import {
  BsTwitch, BsRainbow, BsFillPlayFill, BsFillPauseFill,
  BsFillVolumeMuteFill, BsFillVolumeUpFill, BsVolumeDownFill,
} from 'react-icons/bs';
import { ImLoop2, ImSoundcloud2 } from 'react-icons/im';

import { FaVimeo } from 'react-icons/fa';
import { SiMixcloud, SiWistia, SiDailymotion } from 'react-icons/si';
import { PreferencesContext } from '../../Context/Preferences';

const supportedWebsites = [
  {
    name: 'Youtube',
    url: 'http://youtube.com',
    icon: <AiFillYoutube className="text-red-500" size={20} />,
  },
  {
    name: 'Twitch',
    url: 'http://twitch.com',
    icon: <BsTwitch className="text-purple-600" size={20} />,
  },
  {
    name: 'Facebook',
    url: 'http://facebook.com',
    icon: <AiFillFacebook className="text-blue-500" size={20} />,
  },
  {
    name: 'SoundCloud',
    url: 'http://soundcloud.com',
    icon: <ImSoundcloud2 className="text-orange-500" size={20} />,
  },
  {
    name: 'Vimeo',
    url: 'http://vimeo.com',
    icon: <FaVimeo className="text-black-500" size={20} />,
  },
  {
    name: 'Mixcloud',
    url: 'http://mixcloud.com',
    icon: <SiMixcloud className="text-white" size={20} />,
  },
  {
    name: 'Wistia',
    url: 'http://wistia.com',
    icon: <SiWistia className="text-blue-500" size={20} />,
  },
  {
    name: 'DailyMotion',
    url: 'http://dailymotion.com',
    icon: <SiDailymotion className="text-gray-900" size={20} />,
  },
  {
    name: 'Kaltura',
    url: 'http://kaltura.com',
    icon: <BsRainbow className="text-yellow-500" size={20} />,
  },
];

const YtbSettings = () => {
  const {
    setVideo, Config, setConfig, VideoControls, setVideoControls,
  } = useContext(PreferencesContext);
  const [Link, setLink] = useState('');
  return (
    <div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">
            Paste a
            <b> supported </b>
            video link
          </span>
        </label>
        <div className="flex gap-2 m-1 items-center justify-start">
          {supportedWebsites.map((website) => (
            <a key={website.url} href={website.url} target="_blank" rel="noopener noreferrer">
              {website.icon}
            </a>
          ))}

        </div>
        <input
          type="text"
          onChange={
            (e) => setLink(e.target.value)
          }
          placeholder="www.youtube.com/watch?v=..."
          className="input input-bordered w-full max-w-xs mt-2"
        />
      </div>
      <div className="flex justify-center gap-2 items-center mt-3 w-full">
        {VideoControls.playing ? (
          <button
            onClick={
              () => setVideoControls({ ...VideoControls, playing: false })
            }
            type="button"
            className="btn btn-ghost btn-xs uppercase gap-1"
          >
            <BsFillPauseFill />
            Pause
          </button>
        ) : (
          <button
            onClick={
            () => {
              if (Link !== '') {
                setVideo(Link);
                if (!Config.history.includes(Link)) {
                  setConfig({ ...Config, history: [...Config.history, Link] });
                }
                setVideoControls({ ...VideoControls, playing: true });
              }
            }
          }
            type="button"
            className="btn btn-primary btn-xs uppercase gap-1"
          >
            <BsFillPlayFill />
            Play
          </button>
        )}
        {
          !VideoControls.loop ? (
            <button
              onClick={
                () => setVideoControls({ ...VideoControls, loop: true })
              }
              type="button"
              className="btn btn-ghost btn-xs"
            >
              <ImLoop2 />
              Loop
            </button>
          ) : (
            <button
              onClick={
                () => setVideoControls({ ...VideoControls, loop: false })
              }
              type="button"
              className="btn btn-primary btn-xs uppercase gap-1"
            >
              <ImLoop2 />
              Loop
            </button>
          )
        }

        {
        Number(VideoControls.volume) === 0 ? (<BsFillVolumeMuteFill size={30} className="text-error" />) : (Number(VideoControls.volume) > 0.5 ? <BsFillVolumeUpFill size={30} /> : <BsVolumeDownFill size={30} />)
        }
        <input
          type="range"
          onChange={
        (e) => {
          setVideoControls({ ...VideoControls, volume: e.target.value });
        }
      }
          defaultValue={VideoControls.volume}
          min={0}
          max={1}
          step={0.01}
          className="range range-xs"
        />

      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Video Opacity</span>
        </label>
        <input
          type="range"
          onChange={
        (e) => {
          setVideoControls({ ...VideoControls, opacity: e.target.value });
        }
      }
          defaultValue={VideoControls.volume}
          min={0}
          max={1}
          step={0.01}
          className="range range-xs"
        />
      </div>

    </div>
  );
};

export default YtbSettings;
