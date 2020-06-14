import React from 'react';

const Loading = () => {
  return(
    <div className="loading d-flex justify-content-center align-items-center" style={{width: '100%'}}>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;