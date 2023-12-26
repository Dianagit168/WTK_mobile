import React from 'react';

//import Icon from 'react-native-vector-icons/FontAwesome';
import { LucideProps, UserPlus, icons } from 'lucide-react';
// import { Icon } from 'lucide-react-native';

interface IconComponentProps {
  icon: React.FC<LucideProps>;
  size?: number;
  color?: string;
}

// const Icon: React.FC<IconComponentProps> = (props) => {
//   // const LucideIcon = icons[name]  ;

//   return <Icon icon={props.icon}/>;
// };

const Icon = ({ name, color, size }: {
  name: string,
  color: string,
  size: number
}) => {
  const LucideIcon = icons["Home"];

  return <LucideIcon color={color} size={size} />;
};

export default Icon;