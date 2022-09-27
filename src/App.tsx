//********** Imports **********//
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppFooter from "./4-layouts/AppFooter";
import AppHeader from "./4-layouts/AppHeader";
import AddFormPage from "./5-pages/AddFormPage";
import EditFormPage from "./5-pages/EditFormPage";
import { store } from "./redux/store";

//********** App **********//
const App = () => (
  <Provider store={store}>
    <AppHeader />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddFormPage />} />
        <Route path="/edit" element={<EditFormPage />} />
      </Routes>
    </BrowserRouter>
    <AppFooter />
  </Provider>
);
export default App;
