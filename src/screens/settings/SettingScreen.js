import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import ShowModal from './ShowModal';
import {txt, txt1, txt2, txt3} from '../../utils/TxtData';
import ImgModal from './ImgModal';
import AssetSource from '../../utils/AssetSource';
import {isUnicode} from 'react-native-mdetect';
import {convertZawgyiToUnicode} from '../../utils/FontConverter';
const SettingScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(null);
  const [title, setTitle] = useState(null);
  const [imgVisible, setImgVisible] = useState(false);

  const toggleVisible = () => {
    setModalVisible(true);
  };
  const toggleImgVisible = () => {
    setImgVisible(true);
  };

  return (
    <View style={styles.centeredView}>
      <ShowModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        title={title}
        data={data}
        fontSize={20}
      />
      <ImgModal
        setImgVisible={setImgVisible}
        imgVisible={imgVisible}
        title={title}
        data={data}
        fontSize={20}
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
          {isUnicode
            ? `ပဌာန်း ဒေသနာဆိုင်ရာ သိမှတ်ဖွယ်ရာများ`
            : convertZawgyiToUnicode('ပဌာန်း ဒေသနာဆိုင်ရာ သိမှတ်ဖွယ်ရာများ')}
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
              setTitle('ပဌာန်း ဒေသနာတော်');
            }}>
            <Text style={{color: 'white'}}>
              {isUnicode
                ? `ပဌာန်း ဒေသနာတော်`
                : convertZawgyiToUnicode('ပဌာန်း ဒေသနာတော်')}
            </Text>
          </TouchableOpacity>
        </View>
        {/* <==========================> */}
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleImgVisible();
              setTitle('ပဌာန်း အလွယ် ကျက်မှတ်နည်း');
            }}>
            <Text style={{color: 'white'}}>
              {isUnicode
                ? `ပဌာန်း အလွယ် ကျက်မှတ်နည်း`
                : convertZawgyiToUnicode('ပဌာန်း အလွယ် ကျက်မှတ်နည်း')}
            </Text>
          </TouchableOpacity>
        </View>

        {/* <==========================> */}
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setTitle('စံချိန်ကိုက် ပဋ္ဌာန်းပူဇော်နည်း');
              setData(txt3);
            }}>
            <Text style={{color: 'white'}}>
              {isUnicode
                ? `စံချိန်ကိုက် ပဋ္ဌာန်းပူဇော်နည်း`
                : convertZawgyiToUnicode('စံချိန်ကိုက် ပဋ္ဌာန်းပူဇော်နည်း')}
            </Text>
          </TouchableOpacity>
        </View>

        {/* <==========================> */}
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setData(txt1);
              setTitle('ပဌာန်း အကျိုး-သာဓက');
            }}>
            <Text style={{color: 'white'}}>
              {isUnicode
                ? `ပဌာန်း အကျိုး-သာဓက`
                : convertZawgyiToUnicode('ပဌာန်း အကျိုး-သာဓက')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setData(txt2);
              setTitle('ပဌာန်း မှန်မှန်ရွတ်ဆိုရခြင်းအကျိုး');
            }}>
            <Text style={{color: 'white'}}>
              {isUnicode
                ? `ပဌာန်း မှန်မှန်ရွတ်ဆိုရခြင်းအကျိုး`
                : convertZawgyiToUnicode('ပဌာန်း မှန်မှန်ရွတ်ဆိုရခြင်းအကျိုး')}
            </Text>
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
