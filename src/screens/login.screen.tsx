import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Pressable, TextInput, Alert, ActivityIndicator} from 'react-native';
import { useFonts, Poppins_900Black } from '@expo-google-fonts/poppins';
import { ScaledSheet } from 'react-native-size-matters';
import { auth } from '../services/firebase.service';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { COLORS } from '../../constant';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

/**
 * store
 */
import { useAppDispatch } from '../store/hooks/storeTypeHook.hooks';
import { setToken } from '../store/slices/auth.slice';
/**
 * Schema
 */
import LoginSchema from '../schema/login.schema';

/**
 * 
 * type check
 */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TLoginRegisterScreen } from '../_type/navigate.type';
import { TLogin } from '../_type/form.type';

type Props = NativeStackScreenProps<TLoginRegisterScreen, "Sign In">;

const LoginScreen: React.FunctionComponent<any> = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  /**
 * local state
 */
  const [loading, setLoading] = useState<boolean>(false);


  /**
 * form initialize
 */
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  /**
 * form submit
 */
  const onSubmit: SubmitHandler<TLogin> = async (data) => {

    if (!loading) {
      setLoading(true);
      try {
        const result = await signInWithEmailAndPassword(auth, data.email, data.password);
        const stringResult = JSON.stringify(result);
        dispatch(setToken(stringResult));
        setLoading(false);
        navigation.navigate('Home');

      } catch (error: any) {
        Alert.alert(
          `${error.message}`,
        );
        setLoading(false);
      }

    }
  };

  /**
   * font load
   */
  let [fontsLoaded] = useFonts({
    Poppins_900Black
  });

  return (
    <View style={styles.container}>
      <Text style={styles.signInText}>Sign In</Text>
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
      <Pressable style={styles.btnLogin} onPress={handleSubmit(onSubmit)}>
        {
          loading ? <ActivityIndicator size="small" color={COLORS.white} /> : <Text style={styles.btnText}>Login</Text>
        }
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
