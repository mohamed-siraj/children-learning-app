import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { primaryColor, white } from '../../constant';


const StartScreen : React.FunctionComponent = () => {
    return (
        <View style={styles.container}>
          <View style={styles.childrenLearning}>
            <Image src={require('')}/>
            <Text>Open up App.tsx to start working on your apwerwp gffghfgh dfgsdfsdfsd!</Text>
          </View>
          <Text>Open up App.tsx to start working on your app gffghfgh dfgsdsdfsdfdsfsdfsd!</Text>
          <StatusBar style="auto" />
        </View>
    );
};

export default StartScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor
  },
  childrenLearning : {
    width: wp('35%'),
    height: hp('10%'),
    backgroundColor: white,
  }
});
