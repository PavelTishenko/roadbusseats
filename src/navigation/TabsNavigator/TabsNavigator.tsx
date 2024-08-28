import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { TabsStackParamList } from '../types/navigation';

import { Screens } from '@/constants/screens';
import SeatsScreen from '@/screens/SeatsScreen';
import MapScreen from '@/screens/MapScreen';
import { SvgXml } from 'react-native-svg';
import { infoIcon, mapIcon, trainIcon } from '@/assets/svg';
import { RouteProp } from '@react-navigation/native';

const Tab = createBottomTabNavigator<TabsStackParamList>();

const screenOptions = (props: {
  route: RouteProp<TabsStackParamList, keyof TabsStackParamList>;
  navigation: any;
}) => ({
  tabBarStyle: { height: 81 },
  tabBarIcon: () => {
    if (props.route.name === Screens.SeatsScreen) {
      return <SvgXml xml={trainIcon} fill={'red'} />;
    }

    if (props.route.name === Screens.MapScreen) {
      return <SvgXml xml={mapIcon} />;
    }

    if (props.route.name === Screens.Info) {
      return <SvgXml xml={infoIcon} />;
    }
  },
  tabBarShowLabel: false,
});

const TabsNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={Screens.SeatsScreen}
        component={SeatsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={Screens.MapScreen}
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name={Screens.Info} component={MapScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
