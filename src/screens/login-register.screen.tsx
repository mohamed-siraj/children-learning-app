import React from 'react';
import { Image, TouchableOpacity, Text, View, Button, TextInput } from 'react-native';
import { useFonts, Poppins_500Medium, Poppins_900Black, Poppins_300Light, Poppins_100Thin } from '@expo-google-fonts/poppins';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { COLORS } from '../../constant';


const LoginRegisterScreen: React.FunctionComponent = () => {

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
          <Text>Sign In</Text>
          <View><TextInput
              placeholder="Email"
            /></View>
    </View>
  );
};

export default LoginRegisterScreen;


const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryColor
  },

});
