import { useCallback, useEffect, useState } from 'react';
import {
  Alert,
  PermissionsAndroid,
  Platform,
  useWindowDimensions,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TabsStackParamList } from '@/navigation/types/navigation';
import { Screens } from '@/constants/screens';

export const useMapScreen = () => {
  const { top } = useSafeAreaInsets();
  const { height } = useWindowDimensions();
  const {
    params: { name, route, speedRate },
  } = useRoute<RouteProp<TabsStackParamList, Screens.MapScreen>>();
  const initLocation = {
    latitude: 37.771707,
    longitude: 37.771707,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0721,
  };
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }>(initLocation);
  const getUsersCurrentLocation = useCallback(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0721,
        });
      },
      () => {},
      { enableHighAccuracy: true },
    );
  }, []);

  const requestLocationPermission = useCallback(async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getUsersCurrentLocation();
        } else {
          Alert.alert('Permission Denied', 'Location permission is required');
        }
      } catch (error) {
        console.warn(error);
      }
    }
  }, [getUsersCurrentLocation]);

  useEffect(() => {
    requestLocationPermission();
  }, [requestLocationPermission]);

  return {
    top,
    height,
    name,
    route,
    speedRate,
    location,
  };
};
