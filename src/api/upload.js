import { async } from "@firebase/util";
import { uploadBytes, ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../misc/firebaseConfig";

export async function uploadFile(id, file) {
    const path = `blogs/blog_id_${id}/${file.name}/`
    const storageRef = ref(storage, path);
    return await uploadBytes(storageRef, file).then(async (snapshot) => {
        return await getDownloadURL(ref(storage, path))
    });

}
export function uploadFiles(id, files) {
    Array.from(files).forEach(file => {
        const storageRef = ref(storage, `blogs/blog_id_${id}/${file?.name}/`);
        uploadBytes(storageRef, file).then(async (snapshot) => {

        });

    })
}

// Get the Data from the Firebase storage
export async function getPathReference(filePath) {
    const folderRef = ref(storage, `blogs/blog_id_${filePath}`)
    const arr = []
    listAll(folderRef)
        .then(res => {
            const arr = []
            res.items.forEach(item => {
                getDownloadURL(item)
                    .then(url => {
                        arr.push(url)
                        console.log(url)
                    })
            })
        })
    return () => arr;
}
export async function getFolderItemsReference(folderPath) {
    const folderRef = ref(storage, `blogs/blog_id_${folderPath}/`)
    const arr = []
    await listAll(folderRef)
        .then(folder => {
            folder.items.map(item => {
                arr.push(item)
            })
        })
    return arr

}
