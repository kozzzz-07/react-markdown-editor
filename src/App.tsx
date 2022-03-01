import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import { AppRoutes } from "./router/AppRoutes";

const App = () => (
  <BrowserRouter>
    <RecoilRoot>
      <AppRoutes />
    </RecoilRoot>
  </BrowserRouter>
);

export default App;
