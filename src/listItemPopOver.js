import React from 'react';
import './listItemPopOver.css';

export default ({data}) => (
  <React.Fragment>
    <h5>
      <span className="title">Street</span>
      <span className="detail">{data.street}</span>
    </h5>
    <h5>
      <span className="title">Suite</span>
      <span className="detail">{data.suite}</span>
    </h5>
    <h5>
      <span className="title">City</span>
      <span className="detail">{data.city}</span>
    </h5>
    <h5>
      <span className="title">Zip</span>
      <span className="detail">{data.zipcode}</span>
    </h5>
  </React.Fragment>
)