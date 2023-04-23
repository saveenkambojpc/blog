import { ref, set } from "firebase/database";
import { database } from "../misc/firebaseConfig";

export function writeData(collection, id, obj) {
    set(ref(database, `${collection}/` + id), obj);
}