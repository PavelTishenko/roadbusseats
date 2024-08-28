import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import List from '@/components/List';
import { colors } from '@/constants/styles';

import useSeatsScreen from './SeatsScreen.hook';
import SeatsItem from './SeatsItem';

const SeatsScreen = () => {
  const {
    tripRoutes,
    name,
    firstFlorSeats,
    secondFlorSeats,
    handleSeatsItemPress,
  } = useSeatsScreen();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Seat availability</Text>
      </View>
      <View style={styles.routeContainer}>
        <View style={styles.routeDetailsContainer}>
          <Text style={styles.routeName}>{name}</Text>
          <Text style={styles.routeDetails}>{tripRoutes}</Text>
        </View>
        <View style={styles.statusContainer}>
          <View style={styles.statusRow}>
            <Text>Reserved</Text>
            <View style={[styles.item, styles.reservedItem]} />
          </View>
          <View style={styles.statusRow}>
            <Text>Available</Text>
            <View style={styles.item} />
          </View>
        </View>
      </View>
      <View style={styles.seatsContainer}>
        <List
          data={firstFlorSeats}
          renderItem={({ item, index }) => (
            <SeatsItem
              item={item}
              index={index}
              onPress={handleSeatsItemPress}
            />
          )}
          estimatedItemSize={50}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
        <List
          data={secondFlorSeats}
          renderItem={({ item, index }) => (
            <SeatsItem
              item={item}
              index={index}
              onPress={handleSeatsItemPress}
            />
          )}
          estimatedItemSize={50}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
};

export default SeatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 30,
  },
  headerText: {
    fontSize: 26,
    lineHeight: 26,
    fontWeight: '500',
    color: colors.black,
  },
  routeContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  routeDetailsContainer: {
    backgroundColor: colors.primary,
    width: 228,
    height: 47,
    borderTopRightRadius: 17,
    borderBottomRightRadius: 17,
    justifyContent: 'center',
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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
  statusContainer: {
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 15,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seatsContainer: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    marginTop: 25,
  },
  // seat: {
  //   width: 50,
  //   height: 50,
  //   flex: 0,
  //   marginBottom: 15,
  //   marginRight: 20,
  // },
  reservedItem: {
    backgroundColor: '#ABCBFF',
    flex: 0,
  },
  // seatText: {
  //   fontWeight: 'bold',
  // },
  listContainer: {
    padding: 25,
  },
});
