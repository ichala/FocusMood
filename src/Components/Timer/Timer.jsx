import React, { useContext, useEffect, useState } from 'react';
import { BsFillPlayFill, BsFillStopFill } from 'react-icons/bs';
import { PreferencesContext } from '../../Context/Preferences';

const START_DURATION = 10;

const Timer = () => {
  const { Config, setAlarm, Alarm } = useContext(PreferencesContext);
  const [audio] = useState(new Audio('/sounds/alarm.mp3'));
  audio.loop = true;
  const [currentMinutes, setMinutes] = useState(Config.timer < 10 ? `0${Config.timer}` : Config.timer);
  const [currentSeconds, setSeconds] = useState('00');
  const [isStop, setIsStop] = useState(false);
  const [duration, setDuration] = useState(Config.timer);
  const [isRunning, setIsRunning] = useState(false);

  const getPercentage = () => {
    const percentage = ((duration - (parseInt(currentMinutes, 10) * 60
    + parseInt(currentSeconds, 10))) / duration) * 100;
    return 100 - percentage;
  };

  const startHandler = () => {
    setAlarm(false);
    setDuration(parseInt(0, 10) + 60 * parseInt(Config.timer, 10));
    setIsRunning(true);
  };

  const resetHandler = () => {
    setMinutes(Config.timer < 10 ? `0${Config.timer}` : Config.timer);
    setSeconds('00');
    setIsRunning(false);
    setIsStop(false);
    setDuration(START_DURATION);
  };

  const resumeHandler = () => {
    const newDuration = parseInt(currentMinutes, 10) * 60 + parseInt(currentSeconds, 10);
    setDuration(newDuration);

    setIsRunning(true);
    setIsStop(false);
  };

  useEffect(() => {
    if (Alarm && !Config.disable_alarm) {
      audio.play();
    } else {
      audio.pause();
    }
    if (isRunning === true) {
      let timer = duration;
      let minutes; let
        seconds;
      const interval = setInterval(() => {
        if (--timer <= 0) {
          setAlarm(true);
          resetHandler();
        } else {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);
          minutes = minutes < 10 ? `0${minutes}` : minutes;
          seconds = seconds < 10 ? `0${seconds}` : seconds;
          setMinutes(minutes);
          setSeconds(seconds);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
    setMinutes(Config.timer < 10 ? `0${Config.timer}` : Config.timer);
    setSeconds('00');
  }, [isRunning, Config.timer]);

  return (
    <>
      <div
        className={`${Alarm && 'animate-pulse'} relative flex-col glass w-96 h-96   rounded-full hover:border-none flex justify-center items-center text-center p-5 shadow-xl`}
      >
        <div className="absolute z-2 text-secondary duration-700 ease-in-out  radial-progress" style={{ '--value': getPercentage(), '--size': '24rem', '--thickness': '4px' }} />
        <div className="z-50 ">

          <div className="text-8xl">
            {currentMinutes}
            <span className="mx-3">:</span>
            {currentSeconds}
          </div>
          <div className="flex justify-center items-center ">

            {!isRunning && !isStop && (
            <button
              type="button"
              onClick={startHandler}
              className="btn btn-primary btn-xs inline m-3"
            >
              <BsFillPlayFill size={22} />
            </button>
            )}

            {isStop && (
            <button
              type="button"
              onClick={resumeHandler}
              className="btn btn-success btn-xs inline m-3"
            >
              <BsFillPlayFill size={22} />
            </button>
            )}

            <button
              type="button"
              onClick={resetHandler}
              className="btn btn-error btn-xs inline m-3"
              disabled={!isRunning && !isStop}
            >
              <BsFillStopFill size={22} />
            </button>

            {
            Alarm && (
              <button
                type="button"
                onClick={
                  () => {
                    setAlarm(false);
                    audio.pause();
                    resetHandler();
                  }
                }
                className="btn btn-error btn-xs inline m-3"
              >
                Stop Alarm
              </button>
            )
          }
          </div>
        </div>

      </div>

    </>
  );
};

export default Timer;
