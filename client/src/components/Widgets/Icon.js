import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = (props) => {
  return <FontAwesomeIcon icon={props.icon} onClick={props.onClick} />;
};

export default Icon;
