import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const ShortScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Text>ShortScreen</Text>
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default ShortScreen;

const styles = StyleSheet.create({});
