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
  FlatList,
  Animated,
} from 'react-native';
import React, {useState} from 'react';
import {ArrowLeftCircle} from 'lucide-react-native';
import AssetSource from '../../utils/AssetSource';
const ImgModal = ({setImgVisible, imgVisible}) => {
  const myImages = [
    AssetSource.p0,
    AssetSource.p1,
    AssetSource.p2,
    AssetSource.p3,
    AssetSource.p4,
    AssetSource.p5,
    AssetSource.p6,
    AssetSource.p7,
    AssetSource.p8,
    AssetSource.p9,
    AssetSource.p10,
    AssetSource.p11,
    AssetSource.p12,
  ];

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          // flex: 1,
          alignItems: 'center',
        }}>
        <Image
          source={item}
          style={{
            width: '100%',
            height: 500,
          }}
          resizeMode="cover"
        />
      </View>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={imgVisible}
      onRequestClose={() => {
        setImgVisible(!imgVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <FlatList
            data={myImages}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            numColumns={0} // Adjust the number of columns as per your requirements
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
          />

          {/* <=================> */}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              setImgVisible(!imgVisible);
            }}>
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

export default ImgModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    flex: 1,
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
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 1,
  },
});
