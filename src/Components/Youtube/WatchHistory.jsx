import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import { AiFillPlayCircle } from 'react-icons/ai';
import { IoIosCloseCircle } from 'react-icons/io';
import { PreferencesContext } from '../../Context/Preferences';

const WatchHistory = () => {
  const {
    Config, setConfig, setVideo, setVideoControls, VideoControls,
  } = useContext(PreferencesContext);
  const { history } = Config;
  return (
    <>
      <div className="flex flex-col gap-6">
        {
            history.length < 1 && <p className="text-center italic text-xs">Nothing yet</p>
        }
        {history.map((video) => (
          <div
            key={video}
          >
            <div className="card max-w-sm h-[100px] shadow-xl image-full">
              <figure>
                <ReactPlayer url={video} />
              </figure>
              <div className="card-body">
                <button
                  type="button"
                  onClick={
                    () => setConfig({
                      ...Config,
                      history: history.filter(
                        (item) => item !== video,
                      ),
                    })
                }
                  className="absolute right-1 top-1 text-primary cursor-pointer hover:text-error"
                >
                  <IoIosCloseCircle size={20} />
                </button>
                <div className="card-actions justify-center">
                  <button
                    onClick={
            () => {
              setVideo(video);
              setVideoControls({ ...VideoControls, playing: true });
            }
          }
                    type="button"
                    className="btn btn-primary"
                  >
                    <AiFillPlayCircle size={40} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WatchHistory;
