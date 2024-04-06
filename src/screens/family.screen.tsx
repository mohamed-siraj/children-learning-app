import React, { useEffect, useState } from 'react';
import { Image, Text, View, ScrollView } from 'react-native';
import { useFonts, Poppins_900Black } from '@expo-google-fonts/poppins';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '../../constant';
import { useAppDispatch, useAppSelector } from '../store/hooks/storeTypeHook.hooks';
import { getPost } from '../store/slices/post.slice';

/**
 * 
 * type check
 */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TStartScreen } from '../_type/navigate.type';


type Props = NativeStackScreenProps<TStartScreen, 'Start'>;

const FamilyScreen: React.FunctionComponent<any> = ({ navigation }: Props) => {

  /**
   * global acion
   */
  const dispatch = useAppDispatch();

  /**
   * global state
   */
  const { loading, data } = useAppSelector(state => state.post);

  /**
   * local state
   */
  const [post, setPost] = useState<Array<any>>([]);

  /**
   * font load
   */
  let [fontsLoaded] = useFonts({
    Poppins_900Black,
  });

  useEffect(() => {
    dispatch(getPost('animals'));
  }, [])

  useEffect(() => {
    if (data) {
      setPost(data);
    }
  }, [data])

  return (
    <ScrollView style={styles.scrolView}>
      <View style={styles.container}>
        <View style={styles.containerWrap}>
          {
            data.map((doc) => {
              return (<View style={styles.containerRow}>
                <Image style={styles.image} source={{ uri: doc.data().imageUrl }} />
                <Text style={styles.title}>Family</Text>
              </View>)
            })
          }
        </View>
      </View>
    </ScrollView>

  );
};

export default FamilyScreen;


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
