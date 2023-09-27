import { LBU } from '@env';
import { getCustomComponent, CustomComponentParams } from './registry';

/**
 * 根据.env LBU 参数配置，注册当前 LBU 自定义组件
 */
export function registerLBUCustomComponent() {
  const customComponent = require(`./custom-component.${LBU}`);

  customComponent.registerAll();
}

export function renderCustomComponentByName(name: string, payload: CustomComponentParams) {
  // 获取自定义组件
  const MyCustomComponent = getCustomComponent(name);
  // const MyCustomComponent = getCustomComponent('CustomComponent');
  return MyCustomComponent ? <MyCustomComponent {...payload} /> : null;
  // return <MyCustomComponent />;
}
