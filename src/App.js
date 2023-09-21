import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/homePage";
import Navigation from "./components/navigation/navigation.component";
import WorkPage from "./pages/Work/Work";
import PricePage from "./pages/Prices/Prices";
import ContactPage from "./pages/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/work' element={<WorkPage/>}/>
          <Route path='/prices' element={<PricePage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;