import "./App.css";
import { WeatherProvider } from "./context/WeatherContext";
import SelectCity from "./components/SelectCity";

function App() {
  return (
    <WeatherProvider>
      <SelectCity />
    </WeatherProvider>
  );
}

export default App;
