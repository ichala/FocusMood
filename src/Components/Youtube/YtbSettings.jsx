import React, { useContext, useState } from 'react';
import { PreferencesContext } from '../../Context/Preferences';

const YtbSettings = () => {
  const { setVideo, Config, setConfig } = useContext(PreferencesContext);
  const [Link, setLink] = useState('');
  return (
    <div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">
            Paste a
            <b> Youtube </b>
            link
          </span>
        </label>
        <input
          type="text"
          onChange={
            (e) => setLink(e.target.value)
          }
          placeholder="www.youtube.com/watch?v=..."
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="flex justify-center items-center mt-3 w-full">
        <button
          onClick={
            () => {
              setVideo(Link);
              setConfig({ ...Config, history: [...Config.history, Link] });
            }
          }
          type="button"
          className="btn btn-primary btn-sm"
        >
          Play
        </button>
      </div>

    </div>
  );
};

export default YtbSettings;
