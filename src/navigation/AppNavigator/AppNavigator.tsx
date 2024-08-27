import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainStackParamList } from '../types/navigation';
import { Screens } from '@/constants/screens';
import RoutesScreen from '@/screens/RoutesScreen';
import TabsNavigator from '../TabsNavigator/TabsNavigator';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const AppNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName={Screens.RoutesScreens}>
      <MainStack.Screen name={Screens.RoutesScreens} component={RoutesScreen} />
      <MainStack.Screen name={Screens.Tabs} component={TabsNavigator} />
    </MainStack.Navigator>
  );
};

export default AppNavigator;
