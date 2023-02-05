import React, { useState, useContext } from 'react';
import { PreferencesContext } from '../../Context/Preferences';

const Settings = () => {
  const { Config, setConfig, ThemeList } = useContext(PreferencesContext);
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
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Disable Alarm ?</span>
          <input
            type="checkbox"
            className="toggle"
            checked={Config.disable_alarm}
            onChange={
            () => {
              setConfig({ ...Config, disable_alarm: !Config.disable_alarm });
            }
          }
          />
        </label>
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

      <div className="flex flex-col gap-2 m-5">
        {
            ThemeList.map((theme) => (
              <button
                key={theme}
                type="button"
                onClick={
                  () => {
                    setConfig({ ...Config, theme });
                  }
                }
              >
                <div data-theme={theme} className="bg-base-100  text-base-content w-full cursor-pointer font-sans">
                  <div className="grid grid-cols-5 grid-rows-3">
                    <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                      <div className="flex-grow text-sm font-bold">{theme}</div>
                      <div className="flex flex-shrink-0 flex-wrap gap-1">
                        <div className="bg-primary w-1 rounded" />
                        <div className="bg-secondary w-1 rounded" />
                        <div className="bg-accent w-1 rounded" />
                        <div className="bg-neutral w-1 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))
          }
      </div>
    </div>
  );
};
export default Settings;
