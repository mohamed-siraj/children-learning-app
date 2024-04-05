import React from 'react';
import { Image, TouchableOpacity, Text, View, ScrollView } from 'react-native';
import { useFonts, Poppins_900Black } from '@expo-google-fonts/poppins';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '../../constant';

/**
 * 
 * type check
 */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TStartScreen } from '../_type/navigate.type';

type Props = NativeStackScreenProps<TStartScreen, 'Start'>;

const AnimalsScreen: React.FunctionComponent<any> = ({ navigation }: Props) => {

  /**
   * font load
   */
  let [fontsLoaded] = useFonts({
    Poppins_900Black,
  });

  return (
    <ScrollView style={styles.scrolView}>
      <View style={styles.container}>
        <View style={styles.containerWrap}>
          <View style={styles.containerRow}>
            <Image style={styles.image} source={require('../img/family.png')} />
            <Text style={styles.title}>Family</Text>
          </View>
          <View style={styles.containerRow}>
            <Image style={styles.image} source={require('../img/lion.png')} />
            <Text style={styles.title}>Animals</Text>
          </View>
          <View style={styles.containerRow}>
            <Image style={styles.image} source={require('../img/bird.png')} />
            <Text style={styles.title}>Birds</Text>
          </View>
          <View style={styles.containerRow}>
            <Image style={styles.image} source={require('../img/tamil.png')} />
            <Text style={styles.title}>Alphabets</Text>
          </View>
          <View style={styles.containerRow}>
            <Image style={styles.image} source={require('../img/bird.png')} />
            <Text style={styles.title}>Birds</Text>
          </View>
          <View style={styles.containerRow}>
            <Image style={styles.image} source={require('../img/tamil.png')} />
            <Text style={styles.title}>Alphabets</Text>
          </View>
          <View style={styles.containerRow}>
            <Image style={styles.image} source={require('../img/bird.png')} />
            <Text style={styles.title}>Birds</Text>
          </View>
          <View style={styles.containerRow}>
            <Image style={styles.image} source={require('../img/tamil.png')} />
            <Text style={styles.title}>Alphabets</Text>
          </View>
        </View>
      </View>
    </ScrollView>

  );
};

export default AnimalsScreen;


const styles = ScaledSheet.create({
  scrolView: {
    backgroundColor: COLORS.primaryColor
  },
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
    marginTop: '40@vs'
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
