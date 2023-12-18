import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

interface IconComponentProps {
  name: string;
  size: number;
  color: string;
}

const MyComponent = ({name, size, color}: IconComponentProps) => {
  return <Icon name={name} size={30} color="#900" />;
};

export default MyComponent;
