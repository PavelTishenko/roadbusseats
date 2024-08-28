import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import { SvgXml } from 'react-native-svg';

import { colors } from '@/constants/styles';
import { speedIcon } from '@/assets/svg';
import { useMapScreen } from './MapScreens.hook';

const MapScreen = () => {
  const { top, height, name, route, speedRate, location } = useMapScreen();
  return (
    <View style={[styles.container, { marginTop: top }]}>
      <View style={[styles.header, { marginTop: top + 30 }]}>
        <View>
          <Text style={styles.headerText}>Location</Text>
        </View>
        <View style={styles.details}>
          <View style={styles.routeDetailsContainer}>
            <Text style={styles.routeName}>{name}</Text>
            <Text style={styles.routeDetails}>{route}</Text>
          </View>
          <View style={styles.speedContainer}>
            <SvgXml xml={speedIcon} style={styles.icon} />
            <Text style={styles.speed}>{speedRate}kmph</Text>
          </View>
        </View>
      </View>
      <View style={{ height: height - top - 250, width: '100%' }}>
        <MapView
          provider={Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}
          region={location}
          followsUserLocation
          style={styles.map}
          loadingEnabled
        />
      </View>
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
  header: {
    flex: 1,
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  details: {
    flexDirection: 'row',
    marginTop: 20,
  },
  routeDetailsContainer: {
    backgroundColor: colors.primary,
    width: 228,
    height: 47,
    borderTopRightRadius: 17,
    borderBottomRightRadius: 17,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 26,
    lineHeight: 26,
    fontWeight: '500',
    color: colors.black,
    marginLeft: 10,
  },
  routeName: {
    marginLeft: 10,
    color: colors.white,
    fontSize: 18,
  },
  routeDetails: {
    marginLeft: 10,
    color: colors.white,
    fontSize: 10,
  },
  speedContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 1,
  },
  speed: {
    marginRight: 20,
    fontSize: 14,
    fontWeight: '400',
    color: colors.black,
  },
  icon: {
    marginRight: 5,
  },
});
