import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import ShowModal from './ShowModal';
import {txt, txt1} from '../../utils/TxtData';
const SettingScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(null);
  const [title, setTitle] = useState(null);

  const toggleVisible = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.centeredView}>
      <ShowModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        data={data}
        title={title}
      />
      {/* <========modal end=======> */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'darkred',
          paddingVertical: 10,
        }}>
        <Text style={{color: 'white'}}>
          ပဌာန်း ဒေသနာဆိုင်ရာ သိမှတ်ဖွယ်ရာများ
        </Text>
      </View>
      <ScrollView
        style={{
          flex: 1,
          marginVertical: 10,
          marginHorizontal: 10,
          borderRadius: 30,
        }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setData(txt);
              setTitle('ပဌာန်း အလွယ် ကျက်မှတ်နည်း');
            }}>
            <Text style={{color: 'white'}}>ပဌာန်း အလွယ် ကျက်မှတ်နည်း</Text>
          </TouchableOpacity>
        </View>
        {/* <==========================> */}
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setData(txt1);
              setTitle('ပဌာန်း အကျိုး');
            }}>
            <Text style={{color: 'white'}}>ပဌာန်း အကျိုး</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
    paddingVertical: 9,
    paddingHorizontal: 9,
  },

  txtContainer: {
    flex: 1,
    backgroundColor: 'blue',
    borderRadius: 5,
    justifyContent: 'center',
    padding: 12,
  },
});
