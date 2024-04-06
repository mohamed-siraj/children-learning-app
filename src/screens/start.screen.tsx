import React from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import { useFonts, Poppins_500Medium, Poppins_900Black, Poppins_300Light, Poppins_100Thin } from '@expo-google-fonts/poppins';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { COLORS } from '../../constant';

/**
 * 
 * type check
 */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TStartScreen } from '../_type/navigate.type';

type Props = NativeStackScreenProps<TStartScreen, 'Start'>;

const StartScreen: React.FunctionComponent<any> = ({ navigation }: Props) => {

  /**
   * font load
   */
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_900Black,
    Poppins_300Light,
    Poppins_100Thin
  });

  return (
    <View style={styles.container}>
      <View style={styles.childrenLearningView}>
        <Image style={styles.mortarBoard} source={require('../img/mortarboard.png')} />
        <Text style={styles.childrenLearningText}>Childern Learning</Text>
      </View>
      <View style={styles.aNewWayView}>
        <Text style={styles.aNewWayText}> A New Way</Text>
        <View style={styles.manView}>
          <Image style={styles.manImage} source={require('../img/male-student.png')} />
        </View>
      </View>
      <View style={styles.learningView}>
        <Image style={styles.girlImage} source={require('../img/school.png')} />
        <Text style={styles.learningOfText}> Of</Text>
        <Text style={styles.learningText}> Learning</Text>
      </View>
      <View style={styles.manyThinkView}>
        <Text style={styles.manyText}> Many Things</Text>
      </View>
      <View style={styles.practicallyView}>
        <Text style={styles.practicallyText}> -- Practically</Text>
      </View>
      <View style={styles.finalView}>
        <View style={styles.finalMeroonView}>
          <Text style={{
            fontSize: scale(30),
            fontFamily: 'Poppins_500Medium',
            marginTop: 20,
            color: COLORS.white
          }}>20K+</Text>
          <Text style={{
            fontSize: scale(20),
            fontFamily: 'Poppins_100Thin',
            color: COLORS.white
          }}>Children</Text>
          <Text style={{
            fontSize: scale(20),
            fontFamily: 'Poppins_100Thin',
            color: COLORS.white
          }}>Registered</Text>
        </View>
        <View style={styles.finalWhiteView}>
          <TouchableOpacity style={styles.button} onPress={() => {
            navigation.navigate('Home');
          }}>
            <Text style={{
              color: COLORS.white,
              fontFamily: 'Poppins_900Black',
              fontSize: scale(10),
              textAlign: 'center'
            }}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          flex: 1
        }}></View>
      </View>
    </View>
  );
};

export default StartScreen;


const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.primaryColor
  },
  childrenLearningView: {
    flexDirection: 'row',
    height: '70@vs',
    backgroundColor: COLORS.white,
    top: '55@vs',
    marginLeft: '30@s',
    marginRight: '30@s',
    borderRadius: 30,
  },
  mortarBoard: {
    width: '40@s',
    height: '40@vs',
    top: '15@vs',
    left: '15@s',
  },
  childrenLearningText: {
    top: '21@vs',
    left: '30@s',
    fontFamily: 'Poppins_900Black',
    fontSize: '18@s',
  },
  aNewWayView: {
    flexDirection: 'row',
    top: '100@vs',
    marginLeft: '30@s',
  },
  aNewWayText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: '30@s',
    top: '15@s',
    textAlign: 'center',
  },
  manView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    left: '30@s',
    backgroundColor: COLORS.yellow,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    height: '80@vs',
  },
  manImage: {
    width: '60@s',
    height: '60@vs',
  },
  learningView: {
    flexDirection: 'row',
    top: '130@vs',
    marginLeft: '30@s',
  },
  girlImage: {
    width: '60@s',
    height: '60@vs',
  },
  learningOfText: {
    fontFamily: 'Poppins_300Light',
    fontSize: '40@s',
    textAlign: 'center'
  },
  learningText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: '40@s',
    textAlign: 'center',
    color: COLORS.meroon,
  },
  manyThinkView: {
    flexDirection: 'column',
    top: '140@vs',
    alignItems: 'center',
    justifyContent: 'center',
  },
  manyText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: '45@s',
  },
  practicallyView: {
    flexDirection: 'column',
    top: '140@vs',
    alignItems: 'center',
    justifyContent: 'center',
  },
  practicallyText: {
    fontFamily: 'Poppins_900Black',
    fontSize: '45@s',
  },
  finalView: {
    top: '150@vs',
    height: '100%',
    flexDirection: 'row'
  },
  finalMeroonView: {
    flex: 3,
    alignItems: 'center',
    flexDirection: 'column',
    borderTopRightRadius: 120,
    borderTopLeftRadius: 120,
    backgroundColor: COLORS.meroon
  },
  finalWhiteView: {
    flex: 2.5,
    marginTop: '50@vs',
    flexDirection: 'column',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: COLORS.white
  },
  button: {
    backgroundColor: COLORS.black,
    padding: '30@s',
    margin: '17@s',
    borderRadius: 160
  }
});
