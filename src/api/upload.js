import { uploadBytes, ref } from "firebase/storage";
import { storage } from "../misc/firebaseConfig";

export function uploadFile(id, file) {
    const storageRef = ref(storage, `blogs/blog_id_${id}/${file.name}/`);
    console.log('file is ', file)
    uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });

}

export function uploadFiles(id, files) {
    console.log(files)
    Array.from(files).forEach(file => {

        const storageRef = ref(storage, `blogs/blog_id_${id}/${file?.name}/`);
        console.log('file is ', file)
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or files!');
        });

    })
}

