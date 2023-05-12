import { ref, remove, set, update } from "firebase/database";
import { database } from "../misc/firebaseConfig";
import { onValue } from "firebase/database";
import { toggleAlert } from "../misc/helper";
import { updateProfile } from "firebase/auth";




export function updateData(collection, id, data, callback) {
    update(ref(database, `${collection}/` + id), data)
        .then(res => {
            console.log('successfully updated')
            callback()
        })
}

export function deleteData(collection, id, callback) {
    remove(ref(database, `${collection}/` + id))
        .then(res => {
            callback()
            console.log('successfully deleted')
        })
}



export function writeData(collection, id, obj, callback) {
    set(ref(database, `${collection}/` + id), obj)
        .then(res => {
            toggleAlert('success', "Added Successfully")
            callback()
        })
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

export async function updateUserProfile(user, data) {
    console.log('user is ', user)
    // updateProfile(user, { 'displayName': "Saveen Kk" )
    updateProfile(user, data)

}