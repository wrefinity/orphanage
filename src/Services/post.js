import {db} from '../firebase'
import {collection, getDocs,getDoc, addDoc, updateDoc, deleteDoc, doc} from "firebase/firestore"


const tableName = "Posts";
const postCollection = collection(db, tableName)
class PostService{
    
    addPost = (post)=>{
        return addDoc(postCollection, post)
    }
    updatePost = (id, updatedPost)=>{
        const postDoc = doc(db, tableName, id);
        return updateDoc(postDoc, updatedPost);
    }

    deletePost =(id)=>{
        const delPost = doc(db, tableName, id)
        return deleteDoc(delPost)
    }

    getAllPost = ()=>{
        return getDocs(postCollection)
    }

    getPost = (id)=>{
        const postDoc = doc(db, tableName, id);
        return getDoc(postDoc)
    }
}

export default new PostService();