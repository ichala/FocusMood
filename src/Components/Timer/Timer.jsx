import React, { useContext } from 'react';
import { PreferencesContext } from '../../Context/Preferences';

const Timer = () => {
  const { Config } = useContext(PreferencesContext);
  return (
    <>
      <div className="relative glass w-96 h-96   rounded-full hover:border-none flex justify-center items-center text-center p-5 shadow-xl">
        <h2 className="text-8xl ">
          {Config.timer}
        </h2>
      </div>
    </>
  );
};

export default Timer;
