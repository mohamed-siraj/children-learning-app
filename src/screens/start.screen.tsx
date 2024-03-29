import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useFonts, Poppins_500Medium, Poppins_900Black } from '@expo-google-fonts/poppins';
import { COLORS } from '../../constant';

const StartScreen: React.FunctionComponent = () => {

  /**
   * font load
   */
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_900Black
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
    </View>
  );
};

export default StartScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryColor
  },
  childrenLearningView: {
    width: wp('70%'),
    height: hp('8%'),
    backgroundColor: COLORS.white,
    left: wp('10%'),
    top: hp('10%'),
    borderRadius: 30,
    flexDirection: 'row'
  },
  mortarBoard: {
    width: wp('10%'),
    height: hp('5%'),
    top: hp('1.3%'),
    left: wp('4%'),
  },
  childrenLearningText: {
    top: hp('1.8%'),
    left: wp('7%'),
    fontFamily: 'Poppins_900Black',
    fontSize: hp('2.5%'),
  },
  aNewWayView: {
    flexDirection: 'row',
    top: hp('16%'),
    left: wp('7%')
  },
  aNewWayText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: hp('5%'),
  },
  manView: {
    height : hp('8.5%'),
    width :  wp('30%'),
    left : wp('8%'),
    backgroundColor: COLORS.yellow,
    borderBottomLeftRadius : 30,
    borderTopLeftRadius : 30,
  },
  manImage : {
    width: wp('12%'),
    height: hp('7%'),
    top: hp('1.7%'),
    left : wp('9%'),
  }
});
