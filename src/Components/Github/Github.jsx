import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';

const Github = () => (
  <div className="absolute glass bottom-4 right-4  bg-primary text-primary-content rounded-md p-1 font-semibold">
    <a href="https://github.com/ichala/FocusMood" target="_blank" rel="noreferrer">
      <div className="flex gap-1 items-center">
        <FaGithubSquare size={30} />
        Source Code
      </div>
    </a>
  </div>
);

export default Github;
