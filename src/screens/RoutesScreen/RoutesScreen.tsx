import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import List from '@/components/List';

type Routes = {
  name: string;
  route: string;
};

const RoutesScreen = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'red' }}>
      <List
        data={[
          { name: 'First one', route: 'Milan-Rome' },
          { name: 'First one', route: 'Milan-Rome' },
          { name: 'First one', route: 'Milan-Rome' },
          { name: 'First one', route: 'Milan-Rome' },
          { name: 'First one', route: 'Milan-Rome' },
          { name: 'First one', route: 'Milan-Rome' },
          { name: 'First one', route: 'Milan-Rome' },
          { name: 'First one', route: 'Milan-Rome' },
          { name: 'First one', route: 'Milan-Rome' },
          { name: 'First one', route: 'Milan-Rome' },
          { name: 'First one', route: 'Milan-Rome' },
          { name: 'First one', route: 'Milan-Rome' },
          { name: 'First one', route: 'Milan-Rome' },
        ]}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default RoutesScreen;

const styles = StyleSheet.create({});
