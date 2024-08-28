import { Screens } from '@/constants/screens';
import { Routes } from '@/utils/simulateFetchUtil';
import { NavigatorScreenParams } from '@react-navigation/native';

export type MainStackParamList = {
  [Screens.RoutesScreens]: undefined;
  [Screens.Tabs]: NavigatorScreenParams<TabsStackParamList>;
  [Screens.Info]: undefined;
};

export type TabsStackParamList = {
  [Screens.SeatsScreen]: { route: Routes };
  [Screens.MapScreen]: { speedRate: number };
};
