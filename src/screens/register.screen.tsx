import React from 'react';
import { TouchableOpacity, Text, View, Pressable, TextInput } from 'react-native';
import { useFonts, Poppins_900Black } from '@expo-google-fonts/poppins';
import { ScaledSheet } from 'react-native-size-matters';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { COLORS } from '../../constant';

/**
 * schema
 */
import RegisterSchema from '../shema/register.shema';

/**
 * 
 * type check
 */
import { TLoginRegister } from '../_type/navigate.type';
import { TRegister } from '../_type/form.type';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<TLoginRegister, "Registration">;

const RegisterScreen: React.FunctionComponent<any> = ({ navigation }: Props) => {
  /**
   * form initialize
   */
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  /**
   * form submit
   */
  const onSubmit : SubmitHandler<TRegister> = data => console.log(data);

  /**
   * font load
   */
  let [fontsLoaded] = useFonts({
    Poppins_900Black,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.signInText}>Registration</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter Email Address"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && <Text style={styles.envalidText}>{errors.email.message}</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry={true}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.envalidText}>{errors.password.message}</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter Confirm Password"
            secureTextEntry={true}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="confirmPassword"
      />
      {errors.confirmPassword && <Text style={styles.envalidText}>{errors.confirmPassword.message}</Text>}

      <Pressable style={styles.btnLogin} onPress={handleSubmit(onSubmit)}>
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
  },
  envalidText: {
    color: COLORS.red,
    textAlign: 'center'
  }
});