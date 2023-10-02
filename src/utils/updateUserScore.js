import { app, auth } from "../firebase/firebaseConfig";
import {
  child,
  get,
  getDatabase,
  ref,
  update,
} from "firebase/database";

export const setNewScore = async (score) => {
  try {
    const {uid} = auth.currentUser;
    const dbRef = ref(getDatabase(app));
    const childRef = child(dbRef, `UserData/${uid}`);
    const userData = (await get(childRef)).val();

    const updatedData = {
      score: userData.score + score,
      totalQuestionSolved: userData.totalQuestionSolved + 10,
      coins: userData.coins + score * 2,
      updatedAt: new Date().toDateString(),
    };

    const updatedUserData = update(childRef, updatedData)
    return { ...userData, ...updatedData };

  } catch (error) {
    throw new Error(error);
  }
};
