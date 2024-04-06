
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase.service";

export const writePostData = async (category: string, pronouns: string, imageUrl: string, sounds?: string) => {

    await addDoc(collection(db, "posts"), {
        category: category,
        pronouns: pronouns,
        imageUrl: imageUrl,
        sounds: sounds ? sounds : ''
    });
};

export const readPostData = async (category: string) => {

    const q = query(collection(db, "posts"), where('category', '==', category))

    const posts = await getDocs(q);

    return posts;
};
