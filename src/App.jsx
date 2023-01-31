import React, { useContext } from 'react';
import { HiMusicNote } from 'react-icons/hi';
import { BsClockHistory, BsYoutube } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import Settings from './Components/Settings/Settings';
import Timer from './Components/Timer/Timer';
import SoundEffects from './Components/SoundEffects/SoundEffects';
import YtbSettings from './Components/Youtube/YtbSettings';
import Player from './Components/Youtube/Player';
import WatchHistory from './Components/Youtube/WatchHistory';
import { PreferencesContext } from './Context/Preferences';

function App() {
  const { Config } = useContext(PreferencesContext);
  const { theme: Theme } = Config;
  return (
    <>
      <div data-theme={Theme}>
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <div
                  className="min-h-screen bg-gradient-to-b from-base-100 to-base-300"
                >
                  <div className="flex justify-center items-center min-h-screen">
                    <Player />
                    <Timer />
                    <div className="absolute  z-50 rounded-lg top-0 flex ">
                      <div className="dropdown dropdown-hover ">
                        <label tabIndex={0} className="btn m-1 glass">
                          <HiMusicNote size={30} />
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                          <SoundEffects />
                        </ul>
                      </div>
                      <label htmlFor="my-drawer-4" className="btn m-1 glass">
                        <IoMdSettings size={30} />
                      </label>
                      <label htmlFor="my-drawer" className="btn m-1 glass">
                        <BsYoutube size={30} />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay" />
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                  <YtbSettings />
                  <h3 className="flex gap-2 justify-start items-center my-2">
                    <BsClockHistory />
                    {' '}
                    Your History
                  </h3>
                  <WatchHistory />
                </ul>
              </div>
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay" />
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              <Settings />
            </ul>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
