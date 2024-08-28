import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { buspic } from '@/assets/svg';
import { colors } from '@/constants/styles';
import { Routes } from '@/utils/simulateFetchUtil';

interface RoutesCardItemProps {
  item: Routes;
  index?: number | string;
  onPress: (route: Routes) => void;
}

const RoutesCardItem: React.FC<RoutesCardItemProps> = ({ item, onPress }) => {
  return (
    <Pressable style={styles.card} onPress={() => onPress(item)}>
      <View style={styles.textContainer}>
        <Text style={[styles.name, styles.text]}>{item.name}</Text>
        <Text style={styles.text}>{item.route}</Text>
      </View>
      <View style={styles.iconContainer}>
        <SvgXml xml={buspic} width={259} height={290} style={styles.icon} />
      </View>
    </Pressable>
  );
};

export default RoutesCardItem;

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    width: 271,
    height: 340,
    borderRadius: 20,
    backgroundColor: 'white',
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  textContainer: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
    paddingTop: 20,
  },
  text: {
    color: colors.white,
  },
  name: {
    fontWeight: '500',
    fontSize: 25,
    lineHeight: 37,
  },
  route: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
  },
  iconContainer: {
    flex: 1,
  },
  icon: {
    marginTop: 20,
    alignSelf: 'flex-end',
  },
});
