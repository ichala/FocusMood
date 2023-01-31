import React, { useState, useContext } from 'react';
import { PreferencesContext } from '../../Context/Preferences';

const Settings = () => {
  const { Config, setConfig } = useContext(PreferencesContext);
  const [Timer, setTimer] = useState(Config.timer);
  return (
    <div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Customize your timer (min)</span>
        </label>
        <input
          type="number"
          defaultValue={Timer}
          onChange={
            (e) => setTimer(e.target.value)
            }
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="flex justify-center items-center mt-3 w-full">
        <button
          type="button"
          onClick={
            () => {
              setConfig({ ...Config, timer: Timer });
            }
        }
          className="btn btn-primary btn-sm"
        >
          Save

        </button>
      </div>
    </div>
  );
};
export default Settings;
