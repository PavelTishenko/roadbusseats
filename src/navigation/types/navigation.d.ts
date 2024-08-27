import { Screens } from '@/constants/screens';
import { NavigatorScreenParams } from '@react-navigation/native';

export type MainStackParamList = {
  [Screens.RoutesScreens]: undefined;
  [Screens.Tabs]: NavigatorScreenParams<TabsStackParamList>;
};

export type TabsStackParamList = {
  [Screens.SeatsScreen]: undefined;
  [Screens.MapScreen]: undefined;
};
