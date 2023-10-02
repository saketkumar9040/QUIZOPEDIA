import { useDispatch, useSelector } from "react-redux";
import {app} from "../firebase/firebaseConfig";
import { child, getDatabase, ref, update } from "firebase/database";
import { updateUserData } from "../redux/authSlice";
const userData = useSelector(state=>state.auth.userData);
const dispatch = useDispatch();

export const setNewScore = async (score) => {
    try {
      const updatedData = {
        score:userData.score + score,
        totalQuestionSolved:userData.totalQuestionSolved + 10,
        coins:userData.coins + score*2,
        updatedAat:new Date(Date.now())
      };
      const dbRef = ref(getDatabase(app));
      const childRef = child(dbRef,`UserData/${userData.uid}`);
      const updatedUserData = update(updatedData);
      dispatch(updateUserData({
        ...userData,
        ...updatedData
      }));
      return true;
    } catch (error) {
        throw new Error(error)
    };
};