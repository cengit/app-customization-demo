import React, { ReactNode } from 'react';

import { NavigationScreenProp, NavigationRoute } from 'react-navigation';

// 定义自定义组件参数类型
export interface CustomComponentParams {
  navigation: NavigationScreenProp<any, any>;
  route: NavigationRoute<any>;
  data: any;
  t: any;
}

// 定义自定义组件注册表的类型
export interface CustomComponentRegistry {
  [name: string]: React.ComponentType<CustomComponentParams>;
}

// 创建一个全局的自定义组件注册表
const customComponentRegistry: CustomComponentRegistry = {};

export function registerCustomComponent(name: string, component: React.ComponentType<CustomComponentParams>) {
  // 注册自定义组件
  customComponentRegistry[name] = component;
}

export function getCustomComponent(name: string): React.ComponentType<CustomComponentParams> | undefined {
  // 获取自定义组件
  return customComponentRegistry[name];
}
