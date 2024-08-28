import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import { TabsStackParamList } from '@/navigation/types/navigation';
import { Screens } from '@/constants/screens';

const useSeatsScreen = () => {
  const {
    params: {
      route: { route, name, firstFlorSeats, secondFlorSeats, speedRate },
    },
  } = useRoute<RouteProp<TabsStackParamList, Screens.SeatsScreen>>();
  const navigation =
    useNavigation<NavigationProp<TabsStackParamList, Screens.MapScreen>>();
  const handleSeatsItemPress = () => {
    navigation.navigate(Screens.MapScreen, { speedRate: speedRate });
  };

  return {
    tripRoutes: route,
    name,
    firstFlorSeats,
    secondFlorSeats,
    speedRate,
    handleSeatsItemPress,
  };
};

export default useSeatsScreen;
