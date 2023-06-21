import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import {ArrowLeftCircle} from 'lucide-react-native';
const ShowModal = ({setModalVisible, modalVisible, data, title}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={{
              backgroundColor: 'pink',
              alignItems: 'center',
              padding: 12,
            }}>
            <Text>{title}</Text>
          </View>
          <ScrollView
            style={{
              paddingVertical: 24,
              paddingHorizontal: 9,
              marginHorizontal: 18,
            }}
            showsVerticalScrollIndicator={false}>
            <Text style={{color: 'blue', fontSize: 18, letterSpacing: 1}}>
              {data}
            </Text>
          </ScrollView>
          {/* <=================> */}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <ArrowLeftCircle
              size={35}
              color="#fff"
              style={{alignSelf: 'center'}}
            />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ShowModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    flex: 1,
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    // padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
