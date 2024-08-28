import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import List from '@/components/List';
import RoutesCardItem from './RoutesCardItem';
import { colors } from '@/constants/styles';
import { useRouteScreen } from './useRouteScreen.hook';
import { Routes } from '@/utils/simulateFetchUtil';

const RoutesScreen = () => {
  const { routesData, isLoading, handleCardPress } = useRouteScreen();

  const renderItem = ({ item, index }: { item: Routes; index: number }) => (
    <RoutesCardItem item={item} index={index} onPress={handleCardPress} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.titleHolder}>
        <Text style={styles.title}>Select your route</Text>
      </View>
      {isLoading && <ActivityIndicator color={colors.primary} />}
      <View style={styles.listHolder}>
        <List
          data={routesData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
        />
      </View>
    </View>
  );
};

export default RoutesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleHolder: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  title: {
    color: colors.black,
    fontSize: 26,
    fontWeight: '500',
    lineHeight: 33,
  },
  listHolder: {
    flex: 1,
    marginTop: 40,
  },
  listSeparator: {
    height: 30,
  },
});
