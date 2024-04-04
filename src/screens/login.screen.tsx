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

type Props = NativeStackScreenProps<TLoginRegister, "Sign In">;

const LoginScreen: React.FunctionComponent<any> = ({ navigation }: Props) => {

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
      <Text style={styles.signInText}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Email Address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
      />
      <Pressable style={styles.btnLogin} >
        <Text style={styles.btnText}>Login</Text>
      </Pressable>
      <TouchableOpacity style={styles.createNewAc} onPress={() => {
        navigation.navigate('Registration');
      }}>
        <Text>Create New Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;


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
    fontSize: 28,
    color: COLORS.meroon
  },
  btnLogin: {
    textAlign: 'center',
    backgroundColor: COLORS.black,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 30,
    height: 60,
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
    height: 60,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 2,
    padding: 10,
    paddingLeft: 30,
    borderRadius: 30,
    borderColor: COLORS.meroon
  },
  createNewAc: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
