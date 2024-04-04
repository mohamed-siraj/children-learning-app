import React from 'react';
import { Image, TouchableOpacity, Text, View, Button } from 'react-native';
import { useFonts, Poppins_500Medium, Poppins_900Black, Poppins_300Light, Poppins_100Thin } from '@expo-google-fonts/poppins';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { COLORS } from '../../constant';
import { Entypo } from '@expo/vector-icons';

/**
 * 
 * type check
 */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TStartScreen } from '../_type/navigate';

type Props = NativeStackScreenProps<TStartScreen, 'Start'>;

const HomeScreen: React.FunctionComponent<any> = ({ navigation }: Props) => {

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
      <View style={styles.containerWrap}>
        <View style={styles.containerRow}><Image style={styles.image} source={require('../img/family.png')} /></View>
        <View style={styles.containerRow}><Image style={styles.image} source={require('../img/family.png')} /></View>
        <View style={styles.containerRow}><Image style={styles.image} source={require('../img/family.png')} /></View>
        <View style={styles.containerRow}><Image style={styles.image} source={require('../img/family.png')} /></View>
      </View>
    </View>
  );
};

export default HomeScreen;


const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.primaryColor
  },
  containerWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '150@vs'
  },
  containerRow: {
    backgroundColor: COLORS.white,
    padding: '20@s',
    borderRadius: 30,
    margin: '10@s',
  },
  image: {
    width: '100@vs',
    height: '100@s',
  },

});
