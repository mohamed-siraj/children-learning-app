
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../services/firebase.service';

export const uploadToFirebase = async (uri : string) => {
  const fetchResponse = await fetch(uri);
  const theBlob = await fetchResponse.blob();
  const filename = uri.substring(uri.lastIndexOf('/')+1);

  const imageRef = ref(storage, `images/${filename}`);

  const uploadTask = uploadBytesResumable(imageRef, theBlob);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot : any) => {
        const progress =(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress)
      },
      (error : any) => {
        // Handle unsuccessful uploads
        console.log(error);
        reject(error);
      },
      async () => {
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        resolve({
          downloadUrl,
          metadata: uploadTask.snapshot.metadata,
        });
      }
    );
  });
};
