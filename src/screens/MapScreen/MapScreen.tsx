import React, { useCallback, useEffect, useState } from 'react';
import {
  Alert,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';

const MapScreen = () => {
  const initLocation = {
    latitude: 37.771707,
    longitude: 37.771707,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0721,
  }
  const [location, setLocation] = useState<{latitude: number; longitude: number; latitudeDelta: number; longitudeDelta: number}>(initLocation);
  const getUsersCurrentLocation = useCallback(() => {
    Geolocation.getCurrentPosition(position => {
      setLocation({
        latitude:position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0721,
      });
    }, () => {}, {enableHighAccuracy: true});
  }, []);

  const requestLocationPermission = useCallback(async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('granted');
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

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        region={location}
        showsUserLocation
        followsUserLocation
        style={styles.map}
        loadingEnabled
      />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
