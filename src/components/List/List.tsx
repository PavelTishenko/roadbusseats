import { StyleSheet } from 'react-native';
import React from 'react';
import { FlashList, FlashListProps } from '@shopify/flash-list';

type ListProps<T> = FlashListProps<T>;

const List = <T,>(props: ListProps<T>) => {
  return (
    <FlashList
      contentContainerStyle={{ paddingHorizontal: 0 }}
      estimatedItemSize={250}
      {...props}
    />
  );
};

export default List;

const styles = StyleSheet.create({});
