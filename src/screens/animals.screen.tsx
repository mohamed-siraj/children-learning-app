import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, Text, View, ScrollView } from 'react-native';
import { useFonts, Poppins_900Black } from '@expo-google-fonts/poppins';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '../../constant';
import { useAppDispatch, useAppSelector } from '../store/hooks/storeTypeHook.hooks';
import { getPost, removePost } from '../store/slices/post.slice';
import { animalSounds, pronounsAudio } from '../services/audio.service'
/**
 * 
 * type check
 */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TStartScreen } from '../_type/navigate.type';

type Props = NativeStackScreenProps<TStartScreen, 'Start'>;

const AnimalsScreen: React.FunctionComponent<any> = ({ navigation }: Props) => {

  /**
 * global acion
 */
  const dispatch = useAppDispatch();

  /**
   * global state
   */
  const { deleteItem, loading, data } = useAppSelector(state => state.post);
  const { isAuth } = useAppSelector(state => state.auth);

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
    if (deleteItem) {
      dispatch(getPost('animals'));
    }
  }, [data, deleteItem]);

  const playPronouns = async (pronouns: string) => {
    await pronounsAudio(pronouns);
  }

  const playSounds = async (sound: string) => {
    await animalSounds(sound);
  }

  return (
    <ScrollView style={styles.scrolView}>
      <View style={styles.container}>
        <View style={styles.containerWrap}>
          {
            data.length !== 0 ? data.map((doc) => {
              return (<View key={doc.id} style={styles.containerRow}>
                <Image style={styles.image} source={{ uri: doc.data().imageUrl }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                  <Text style={styles.title}>Pronouns</Text>
                  <TouchableOpacity onPress={() => {
                    playPronouns(doc.data().pronouns);
                  }}>
                    <Image style={styles.imageSound} source={require('../img/sound.png')} />
                  </TouchableOpacity>

                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                  <Text style={styles.title}>Sound</Text>
                  <TouchableOpacity onPress={() => {
                    playSounds(doc.data().sounds);
                  }}>
                    <Image style={styles.imageSound} source={require('../img/sound.png')} />
                  </TouchableOpacity>
                </View>
                {
                  isAuth && <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={styles.title}>Delete</Text>
                    <TouchableOpacity onPress={() => {
                          dispatch(removePost(doc.id));
                    }}>
                      <Image style={styles.imageSound} source={require('../img/remove.png')} />
                    </TouchableOpacity>

                  </View>
                }
              </View>)
            }) : <View style={styles.containeNoData}><Text style={styles.title}>No data available</Text></View>
          }
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
  containeNoData: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100@vs',
    height: '100@s',
  },
  imageSound: {
    marginTop: '5@vs',
    width: '30@vs',
    height: '30@s',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Poppins_900Black',
    marginTop: '10@s'
  }

});
