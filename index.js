import 'react-native-gesture-handler';
//import 'react-native-reanimated/src/reanimated2/js-reanimated';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
