import React, {type PropsWithChildren} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {styles} from '../style-demo/section.style';

export const Override = () => {
  return (
    <View style={{padding: 10, borderWidth: 1, margin: 20}}>
      <Text style={styles.sectionTitle}>test override component</Text>
      <Text style={{padding: 4}}>
        test component will override the default one
      </Text>
    </View>
  );
};
