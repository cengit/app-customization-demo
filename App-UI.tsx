/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Component, type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Section} from './src/style-demo/section.component';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {CustomSession} from './src/ui-demo/custom-section';
import {Override} from './src/ui-demo/override.component.hk';
import MyComponent from './src/ui-demo/my';

const MarkdownPreview = React.lazy(
  () => import('./src/ui-demo/override.component.hk'),
);
const App = () => {
  // const importedModule = require('./src/ui-demo/override.component');
  // console.log('importedModule v=====:', importedModule);
  // return null;
  // return (
  //   <MyComponent componentPath={'./src/ui-demo/override.component'}>
  //     <Text>Hello, world!</Text>
  //   </MyComponent>
  // );
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <CustomSession component={Override} lbu="hk">
            <Section title="Step One">
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
          </CustomSession>

          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
export const styles = StyleSheet.create({
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
