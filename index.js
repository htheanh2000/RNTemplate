/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from '@/Navigation';
import {name as appName} from './app.json';
import '@/Translations';

AppRegistry.registerComponent(appName, () => App);
