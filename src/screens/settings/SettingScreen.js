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
import {
  convertUnicodeToZawgyi,
  convertZawgyiToUnicode,
} from '../../utils/FontConverter';

// isUnicode().then(value => {
//   console.log('is Unicode device ?? ' + value);
// });
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
  // console.log('title is', title);
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
          {/* {isUnicode
            ? `ပဌာန်း ဒေသနာဆိုင်ရာ သိမှတ်ဖွယ်ရာများ`
            : `ပဌာန္း ေဒသနာဆိုင္ရာ သိမွတ္ဖြယ္ရာမ်ား`} */}
          {!isUnicode
            ? `ပဌာန္း ေဒသနာဆိုင္ရာ သိမွတ္ဖြယ္ရာမ်ား`
            : convertZawgyiToUnicode('ပဌာန္း ေဒသနာဆိုင္ရာ သိမွတ္ဖြယ္ရာမ်ား')}
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
              setTitle(!isUnicode ? `ပဌာန္း ေဒသနာေတာ္` : `ပဌာန်း ဒေသနာတော်`);
              // setTitle('ပဌာန်း ဒေသနာတော်');
            }}>
            <Text style={{color: 'white'}}>
              {/* {isUnicode ? `ပဌာန်း ဒေသနာတော်` : `ပဌာန္း ေဒသနာေတာ္`} */}
              {!isUnicode
                ? `ပဌာန္း ေဒသနာေတာ္`
                : convertZawgyiToUnicode('ပဌာန္း ေဒသနာေတာ္')}
            </Text>
          </TouchableOpacity>
        </View>
        {/* <==========================> */}
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleImgVisible();
              // setTitle('ပဌာန်း အလွယ် ကျက်မှတ်နည်း');
            }}>
            <Text style={{color: 'white'}}>
              {!isUnicode
                ? `ပဌာန္း အလြယ္ က်က္မွတ္နည္း`
                : convertZawgyiToUnicode('ပဌာန္း အလြယ္ က်က္မွတ္နည္း')}
            </Text>
          </TouchableOpacity>
        </View>

        {/* <==========================> */}
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setTitle(
                !isUnicode
                  ? 'စံခ်ိန္ကိုက္ ပ႒ာန္းပူေဇာ္နည္း'
                  : 'စံချိန်ကိုက် ပဋ္ဌာန်းပူဇော်နည်း',
              );
              setData(txt3);
            }}>
            <Text style={{color: 'white'}}>
              {/* {isUnicode
                ? `စံချိန်ကိုက် ပဋ္ဌာန်းပူဇော်နည်း`
                : 'စံခ်ိန္ကိုက္ ပ႒ာန္းပူေဇာ္နည္း'} */}
              {!isUnicode
                ? `စံခ်ိန္ကိုက္ ပ႒ာန္းပူေဇာ္နည္း`
                : convertZawgyiToUnicode('စံခ်ိန္ကိုက္ ပ႒ာန္းပူေဇာ္နည္း')}
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
              setTitle(
                !isUnicode ? 'ပဌာန္း အက်ိဳး-သာဓက' : 'ပဌာန်း အကျိုး-သာဓက',
              );
            }}>
            <Text style={{color: 'white'}}>
              {/* {isUnicode ? `ပဌာန်း အကျိုး-သာဓက` : `ပဌာန္း အက်ိဳး-သာဓက`} */}
              {!isUnicode
                ? `ပဌာန္း အက်ိဳး-သာဓက`
                : convertZawgyiToUnicode('ပဌာန္း အက်ိဳး-သာဓက')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.txtContainer}
            onPress={() => {
              toggleVisible();
              setData(txt2);
              setTitle(
                !isUnicode
                  ? 'ပဌာန္း ရြတ္ဆိုရျခင္းအက်ိဳး'
                  : 'ပဌာန်း ရွတ်ဆိုရခြင်းအကျိုး',
              );
            }}>
            <Text style={{color: 'white'}}>
              {/* {isUnicode
                ? `ပဌာန်း ရွတ်ဆိုရခြင်းအကျိုး`
                : `ပဌာန္း ရြတ္ဆိုရျခင္းအက်ိဳး`} */}
              {!isUnicode
                ? `ပဌာန္း ရြတ္ဆိုရျခင္းအက်ိဳး`
                : convertZawgyiToUnicode('ပဌာန္း ရြတ္ဆိုရျခင္းအက်ိဳး')}
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
