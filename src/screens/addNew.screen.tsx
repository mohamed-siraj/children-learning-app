import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Pressable, TextInput, Alert, ActivityIndicator, Image, ScrollView } from 'react-native';
import { useFonts, Poppins_900Black } from '@expo-google-fonts/poppins';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '../../constant';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';
import { uploadToFirebase } from '../services/firebaseFileUpload';

/**
 * store
 */
import { useAppDispatch } from '../store/hooks/storeTypeHook.hooks';

/**
 * Schema
 */
import SubmitSchema from '../schema/submit.schema';

/**
 * 
 * type check
 */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TLoginRegister } from '../_type/navigate.type';
import { TSubmit } from '../_type/form.type';


type Props = NativeStackScreenProps<TLoginRegister, "Sign In">;

const AddNewScreen: React.FunctionComponent<any> = ({ navigation }: Props) => {

  /** global action */
  const dispatch = useAppDispatch();
  /**
 * local state
 */
  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");

  /**
 * form initialize
 */
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(SubmitSchema),
  });

  /**
   * image
   */
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      const url : any = await uploadToFirebase(image);
      console.log(url?.downloadUrl);

    }
  };
  /**
 * form submit
 */
  const onSubmit: SubmitHandler<TSubmit> = async (data) => {
    try {
      

    } catch (error: any) {
      Alert.alert(
        `${error.message}`,
      );
      setLoading(false);
    }
  };

  /**
   * font load
   */
  let [fontsLoaded] = useFonts({
    Poppins_900Black
  });

  return (
    <ScrollView style={styles.scrolView}>
      <View style={styles.container}>
        <View style={styles.containerRow} >
          <TouchableOpacity onPress={() => {
            pickImage();
          }}>
            <Image style={styles.image} source={image ? { uri: image } : require('../img/photo.png')} />
          </TouchableOpacity>

        </View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.input}>
              <Picker
                selectedValue={onChange}
                onBlur={onBlur}
                onValueChange={(itemValue, itemIndex) =>
                  onChange(itemValue)
                }>
                <Picker.Item label="Family" value="family" />
                <Picker.Item label="Animals" value="animals" />
                <Picker.Item label="Birds" value="birds" />
                <Picker.Item label="Alphabets" value="alphabets" />
              </Picker>
            </View>

          )}
          name="category"
        />
        {errors.category && <Text style={styles.envalidText}>{errors.category.message}</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter Pronouns"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="pronouns"
        />
        {errors.pronouns && <Text style={styles.envalidText}>{errors.pronouns.message}</Text>}


        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter Sounds"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="sounds"
        />
        {errors.sounds && <Text style={styles.envalidText}>{errors.sounds.message}</Text>}
        <Pressable style={styles.btnLogin} onPress={handleSubmit(onSubmit)}>
          {
            loading ? <ActivityIndicator size="small" color={COLORS.white} /> : <Text style={styles.btnText}>Submit</Text>
          }
        </Pressable>
      </View>

    </ScrollView>

  );
};

export default AddNewScreen;


const styles = ScaledSheet.create({
  scrolView: {
    backgroundColor: COLORS.primaryColor
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryColor
  },
  containerRow: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10@vs',
  },
  image: {
    marginTop: '40@vs',
    width: '100@vs',
    height: '100@s'
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
  envalidText: {
    color: COLORS.red,
    textAlign: 'center'
  }
});
