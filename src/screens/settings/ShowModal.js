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
import {
  ArrowLeftCircle,
  Cross,
  Timer,
  TimerReset,
  XCircle,
} from 'lucide-react-native';
import {convertMmDigit} from '../../utils/MyanmarNum';
import {isUnicode} from 'react-native-mdetect';
import {convertZawgyiToUnicode} from '../../utils/FontConverter';
const ShowModal = ({setModalVisible, modalVisible, data, title, fontSize}) => {
  // console.log('title', title);
  const [count, setCount] = useState(0);
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
            <Text style={{color: '#000', fontWeight: 'bold'}}>
              {isUnicode ? title : convertZawgyiToUnicode(title)}
            </Text>
          </View>

          <ScrollView
            style={{
              paddingVertical: 24,
              paddingHorizontal: 9,
              marginHorizontal: 18,
            }}
            showsVerticalScrollIndicator={false}>
            <Text style={{color: 'black', fontSize: fontSize}}>
              {isUnicode ? data : convertZawgyiToUnicode(data)}
            </Text>
          </ScrollView>

          {/* <=================> */}
          {title == 'ပဌာန်း ဒေသနာတော်' ? (
            <View style={[styles.button, styles.buttonOpen, styles.timerBtn]}>
              <Text
                style={{
                  color: 'blue',
                  fontWeight: 'bold',
                  marginTop: 5,
                }}>
                {convertMmDigit(count)} -{' '}
                {isUnicode ? `ကြိမ်` : convertZawgyiToUnicode(`ကြိမ်`)}
              </Text>
              {count > 0 ? (
                <TimerReset
                  size={34}
                  color="#000"
                  style={{alignSelf: 'center'}}
                  onPress={() => {
                    setCount(0);
                  }}
                />
              ) : (
                <XCircle
                  size={34}
                  color="#000"
                  style={{alignSelf: 'center'}}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                />
              )}

              <Timer
                size={36}
                color="darkblue"
                style={{marginBottom: 5}}
                onPress={() => {
                  setCount(count + 1);
                }}
              />
            </View>
          ) : (
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <ArrowLeftCircle
                size={35}
                color="#fff"
                style={{alignSelf: 'center'}}
              />
            </Pressable>
          )}
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
  timerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    paddingHorizontal: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
