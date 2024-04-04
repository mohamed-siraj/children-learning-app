import React from 'react';
import { TouchableOpacity, Text, View, Pressable, TextInput } from 'react-native';
import { useFonts, Poppins_500Medium, Poppins_900Black, Poppins_300Light, Poppins_100Thin } from '@expo-google-fonts/poppins';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '../../constant';

/**
 * 
 * type check
 */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TLoginRegister } from '../_type/navigate';

type Props = NativeStackScreenProps<TLoginRegister, "Registration">;

const RegisterScreen: React.FunctionComponent<any> = ({ navigation }: Props) => {

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
      <Text style={styles.signInText}>Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Email Address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Confirm Password"
      />
      <Pressable style={styles.btnLogin} >
        <Text style={styles.btnText}>Register</Text>
      </Pressable>
      <TouchableOpacity style={styles.createNewAc} onPress={() => {
        navigation.navigate('Sign In');
      }}>
        <Text>Already you have an account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;


const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryColor
  },
  signInText: {
    textAlign: 'center',
    fontFamily: 'Poppins_900Black',
    fontSize: '25@s',
    color: COLORS.meroon
  },
  btnLogin: {
    textAlign: 'center',
    backgroundColor: COLORS.black,
    marginLeft: '60@s',
    marginRight: '60@s',
    marginBottom: '10@vs',
    marginTop: '10@vs',
    borderRadius: 30,
    height: '60@vs',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: COLORS.white,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  input: {
    height: '60@vs',
    marginLeft: '30@s',
    marginRight: '30@s',
    marginBottom: '10@vs',
    marginTop: '10@vs',
    borderWidth: 2,
    padding: '10@vs',
    paddingLeft: '30@vs',
    borderRadius: 30,
    borderColor: COLORS.meroon
  },
  createNewAc: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});