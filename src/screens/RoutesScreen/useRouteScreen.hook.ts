import { useCallback, useEffect, useState } from 'react';

import { Routes, simulateFetch } from '@/utils/simulateFetchUtil';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '@/navigation/types/navigation';
import { Screens } from '@/constants/screens';

export const useRouteScreen = () => {
  const [routesData, setRoutesData] = useState<Routes[] | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const navigation =
    useNavigation<NavigationProp<MainStackParamList, Screens.Tabs>>();
  const handleCardPress = (route: Routes) => {
    navigation.navigate(Screens.Tabs, {
      screen: Screens.SeatsScreen,
      params: {
        route,
      },
    });
  };
  const getRoutesData = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await simulateFetch();
      if (data) {
        setRoutesData(data as Routes[]);
        setIsLoading(false);
      }
    } catch (error) {
      console.log('error:', error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getRoutesData();
  }, [getRoutesData]);

  return {
    routesData,
    isLoading,
    handleCardPress,
  };
};
