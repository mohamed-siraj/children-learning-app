import React from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import { useFonts, Poppins_900Black } from '@expo-google-fonts/poppins';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '../../constant';

/**
 * 
 * type check
 */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { THomeScreen } from '../_type/navigate.type';

type Props = NativeStackScreenProps<THomeScreen, 'Home'>;

const HomeScreen: React.FunctionComponent<any> = ({ navigation }: Props) => {

  /**
   * font load
   */
  let [fontsLoaded] = useFonts({
    Poppins_900Black,
  });

  return (
    <View style={styles.container}>
      <View style={styles.containerWrap}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Familiy');
        }}>
          <View style={styles.containerRow}>
            <Image style={styles.image} source={require('../img/family.png')} />
            <Text style={styles.title}>Family</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate('Animals');
        }}>

          <View style={styles.containerRow}>
            <Image style={styles.image} source={require('../img/lion.png')} />
            <Text style={styles.title}>Animals</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate('Birds');
        }}>
          <View style={styles.containerRow}>
            <Image style={styles.image} source={require('../img/bird.png')} />
            <Text style={styles.title}>Birds</Text>
          </View>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate('Alphabets');
        }}>
          <View style={styles.containerRow}>
            <Image style={styles.image} source={require('../img/tamil.png')} />
            <Text style={styles.title}>Alphabets</Text>
          </View>

        </TouchableOpacity>

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
    marginTop: '120@vs'
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
  title: {
    textAlign: 'center',
    fontFamily: 'Poppins_900Black',
    marginTop: '10@s'
  }

});
