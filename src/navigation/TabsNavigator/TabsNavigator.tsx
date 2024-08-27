import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { TabsStackParamList } from '../types/navigation';

import { Screens } from '@/constants/screens';
import SeatsScreen from '@/screens/SeatsScreen';
import MapScreen from '@/screens/MapScreen';

const Tab = createBottomTabNavigator<TabsStackParamList>();

const TabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Screens.SeatsScreen} component={SeatsScreen} />
      <Tab.Screen name={Screens.MapScreen} component={MapScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
