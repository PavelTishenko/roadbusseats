import React from 'react';
import { FlashList, FlashListProps } from '@shopify/flash-list';

type ListProps<T> = FlashListProps<T>;

const List = <T,>(props: ListProps<T>) => {
  return <FlashList estimatedItemSize={250} {...props} />;
};

export default List;
