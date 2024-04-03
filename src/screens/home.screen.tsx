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
      <Entypo name="menu" size={40} color="black" />
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

});
