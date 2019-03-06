import React from 'react';
import Loading from './loading';

export default ({ title, dataLoaded, loadingMessage }) => (
  <React.Fragment>
    <h1>
      {title}
      {!dataLoaded && <Loading msg={loadingMessage} />}
    </h1>
  </React.Fragment>
);
