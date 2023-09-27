import { StyleSheet } from 'react-native';
import { LBU } from '@env';

// default style
const style = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

// custom style
const customStyle = require(`./section.${LBU}.style`);
// const customStyle = require(`./section.sg.style`);

// combine default-style and custom-style, so we can use both of them
export const styles = StyleSheet.flatten([style, customStyle.style]);
// todo: flatten performance issue
