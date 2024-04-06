
import { Audio } from 'expo-av';

export const pronounsAudio = async (text : string) => {
    const sound = new Audio.Sound()
    await sound.loadAsync({ uri: `http://api.voicerss.org/?key=837864db88494a459b45b3b2fde96a06&hl=en-us&c=MP3&src=${text}` });

    await sound.playAsync();
};

export const animalSounds = async (name : string) => {
    const sound = new Audio.Sound()
    await sound.loadAsync({ uri: `https://www.google.com/logos/fnbx/animal_sounds/${name}.mp3` });

    await sound.playAsync();
};