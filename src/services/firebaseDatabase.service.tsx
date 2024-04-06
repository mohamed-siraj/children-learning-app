
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase.service";

export const writePostData = async (category: string, pronouns: string, imageUrl: string, sounds?: string) => {

    await addDoc(collection(db, "posts"), {
        category: category,
        pronouns: pronouns,
        imageUrl: imageUrl,
        sounds: sounds ? sounds : ''
    });
};
