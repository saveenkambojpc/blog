import { ref, set } from "firebase/database";
import { database } from "../misc/firebaseConfig";
import { onValue } from "firebase/database";
import { async } from "@firebase/util";

export function writeData(collection, id, obj) {
    set(ref(database, `${collection}/` + id), obj);
}





export async function readData(collection) {
    const starCountRef = ref(database, `${collection}/`);
    let d = []
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        d = data


    });
    return d




}