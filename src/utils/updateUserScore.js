import { useDispatch, useSelector } from "react-redux";
import { app } from "../firebase/firebaseConfig";
import {
  child,
  get,
  getDatabase,
  onValue,
  ref,
  update,
} from "firebase/database";

export const setNewScore = async (score, uid) => {
  try {
    const dbRef = ref(getDatabase(app));
    const childRef = child(dbRef, `UserData/${uid}`);
    const userData = (await get(childRef)).val();

    const updatedData = {
      score: userData.score + score,
      totalQuestionSolved: userData.totalQuestionSolved + 10,
      coins: userData.coins + score * 2,
      updatedAt: new Date(Date.now()),
    };

    const updatedUserData = update(childRef, updatedData);

    return { ...userData, ...updatedData };

  } catch (error) {
    throw new Error(error);
  }
};
