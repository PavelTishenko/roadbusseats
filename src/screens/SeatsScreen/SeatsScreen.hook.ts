import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import { TabsStackParamList } from '@/navigation/types/navigation';
import { Screens } from '@/constants/screens';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SeatsAvailability } from '@/utils/simulateFetchUtil';

const useSeatsScreen = () => {
  const {
    params: {
      route: { route, name, firstFlorSeats, secondFlorSeats, speedRate },
    },
  } = useRoute<RouteProp<TabsStackParamList, Screens.SeatsScreen>>();
  const navigation =
    useNavigation<NavigationProp<TabsStackParamList, Screens.MapScreen>>();
  const { top } = useSafeAreaInsets();
  const handleSeatsItemPress = (available: string) => {
    if (available !== SeatsAvailability.free) return;

    navigation.navigate(Screens.MapScreen, { route, name, speedRate });
  };

  return {
    tripRoutes: route,
    name,
    firstFlorSeats,
    secondFlorSeats,
    speedRate,
    top,
    handleSeatsItemPress,
  };
};

export default useSeatsScreen;
