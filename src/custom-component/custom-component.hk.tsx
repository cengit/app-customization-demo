import { registerCustomComponent, CustomComponentParams } from './registry';
import { View, Text, StyleSheet } from 'react-native';

// 自定义组件
const CustomComponent: React.FC<CustomComponentParams> = ({ navigation, route, data, t }) => {
  // 自定义组件的实现
  // ...

  return (
    <View style={style.con}>
      <Text style={style.text}>HK: This is a customer component</Text>
    </View>
  );
};
const CustomComponent2: React.FC<CustomComponentParams> = ({ navigation, route, data, t }) => {
  return (
    <View style={style.con2}>
      <Text style={style.text2}>HK: This is a customer component2</Text>
    </View>
  );
};

/**
 * { key: value } 形式注册自定义组件.
 */
export function registerAll() {
  // 注册自定义组件, 数量不限制
  registerCustomComponent('CustomComponent', CustomComponent);
  registerCustomComponent('CustomComponent2', CustomComponent2);
  // ...
  // 为易于维护可以用 "Screen Route Name" + Section Name 作为 key, e.g.
  registerCustomComponent(AppRoutes.SALES_ENTRY, CustomComponent);
  registerCustomComponent(`${AppRoutes.SALES_ENTRY}_${'Section_Name'}`, CustomComponent);
}

export enum AppRoutes {
  SALES_ENTRY = 'SalesLandingScreen',
}

const style = StyleSheet.create({
  con: { padding: 10, borderWidth: 1, borderColor: 'red', margin: 20 },
  text: { padding: 4, color: 'red' },
  con2: { padding: 10, borderWidth: 1, borderColor: 'blue', margin: 20 },
  text2: { padding: 4, color: 'blue' },
});
