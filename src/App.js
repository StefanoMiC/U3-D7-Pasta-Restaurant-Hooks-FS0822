import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import CustomNav from "./components/CustomNav";
import Home from "./components/Home";
import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationList";

function App() {
  return (
    <>
      <CustomNav claim="Best pasta in town!" />
      <ReservationList />
      <ReservationForm />
      <Home />
    </>
  );
}

export default App;
