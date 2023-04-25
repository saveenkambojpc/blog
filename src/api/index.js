import { ref, set } from "firebase/database";
import { database } from "../misc/firebaseConfig";
import { onValue } from "firebase/database";

export function writeData(collection, id, obj) {
    set(ref(database, `${collection}/` + id), obj);
}

export function dbCollectionRef(collection) {
    return ref(database, `${collection}/`)
}



export async function readData(collection) {
    const dbCollectionRef = ref(database, `${collection}/`);

    onValue(dbCollectionRef, (snapshot) => {
        const data = snapshot.val();
        return data;

    });


}