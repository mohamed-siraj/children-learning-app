import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useFonts, Poppins_500Medium, Poppins_900Black, Poppins_300Light } from '@expo-google-fonts/poppins';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '../../constant';

const StartScreen: React.FunctionComponent = () => {

  /**
   * font load
   */
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_900Black,
    Poppins_300Light
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
    marginLeft : '30@s',
    marginRight : '30@s',
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
    marginLeft : '30@s',
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
    left : '30@s',
    backgroundColor: COLORS.yellow,
    borderBottomLeftRadius : 30,
    borderTopLeftRadius : 30,
    height: '80@vs',
  },
  manImage : {
    width: '60@s',
    height: '60@vs',
  },
  learningView: {
    flexDirection: 'row',
    top: '130@vs',
    marginLeft : '30@s',
  },
  girlImage : {
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
    color : COLORS.meroon,
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
});
