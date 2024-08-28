import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { SeatsAvailability } from '@/utils/simulateFetchUtil';
import { colors } from '@/constants/styles';

const SeatsItem = ({
  item,
  index,
  onPress,
}: {
  item: string;
  index: number;
  onPress: () => void;
}) => {
  return (
    <Pressable
      style={[
        styles.item,
        styles.seat,
        item === SeatsAvailability.reserved && styles.selectedItem,
      ]}
      onPress={onPress}>
      <Text style={styles.seatText}>{index + 1}</Text>
    </Pressable>
  );
};

export default SeatsItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  selectedItem: {
    backgroundColor: colors.selected,
  },
  seatText: {
    fontWeight: 'bold',
  },
  seat: {
    width: 50,
    height: 50,
    flex: 0,
    marginBottom: 15,
    marginRight: 20,
  },
});
