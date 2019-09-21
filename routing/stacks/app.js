import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import DashboardScene from '../../scenes/dashboard';
import ArtistsScene from '../../scenes/artists';

//stack
const AppStackNavigator = createBottomTabNavigator ({
  Dashboard: DashboardScene,
  Artists: ArtistsScene,
});
export default AppStackNavigator;
