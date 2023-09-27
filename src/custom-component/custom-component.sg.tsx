import { registerCustomComponent, CustomComponentParams } from './registry';
import { View, Text, StyleSheet } from 'react-native';

// 自定义组件
const CustomComponent: React.FC<CustomComponentParams> = ({ navigation, route, data, t }) => {
  // 自定义组件的实现
  // ...

  return (
    <View style={style.con}>
      <Text style={style.text}>SG: This is a customer component</Text>
    </View>
  );
};
export function registerAll() {
  // 注册自定义组件
  registerCustomComponent('CustomComponent', CustomComponent);
}

const style = StyleSheet.create({
  con: { padding: 10, borderWidth: 1, borderColor: 'green', margin: 20 },
  text: { color: 'green', fontWeight: '700' },
});
