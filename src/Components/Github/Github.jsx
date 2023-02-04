import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';

const Github = () => (
  <>
    <div className="absolute  bottom-4 right-4   text-primary-content  p-1 font-semibold">
      <a href="https://github.com/ichala/FocusMood" target="_blank" rel="noreferrer">
        <div className="flex gap-1 items-center">
          <FaGithubSquare size={30} />
          Source Code
        </div>
      </a>
    </div>
    <div className="absolute  bottom-4 left-4   p-1 font-semibold">
      <div className="flex gap-1 items-center">
        FocusMood.
      </div>
    </div>
  </>
);

export default Github;
