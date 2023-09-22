import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {LBU} from '@env';
interface Props {
  children: ReactNode;
  component: React.ComponentType<any>;
  lbu?: string; // LBU
}
// 1. lbu
// 2. lazy load
export const CustomSession: React.FC<Props> = ({
  children,
  component: Component,
  lbu = 'hk', // only return children if not match current LBU
}) => {
  if (Component && LBU === lbu) {
    return <Component />;
  }
  return <>{children}</>;
};
