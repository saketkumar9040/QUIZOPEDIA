import "react-native-gesture-handler";
import AuthNavigator from "./src/navigations/AuthNavigator";
import { Provider } from "react-redux";
import Store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={Store}>
      <AuthNavigator />
    </Provider>
  );
}
