import Index from "./index";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import { useFonts } from "expo-font";
import Font from "./assets/fonts/avenir_next_lt_w01_regular.ttf"



export default function App() {
  const [fontsLoaded] = useFonts({
    "Avenir": Font,
  });

  if (!fontsLoaded) {
    return ""
  } else {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}
