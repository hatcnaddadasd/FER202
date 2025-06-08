import React from "react";
import CarouselComponent from "./components/CarouselComponent";
import CardComponent from "./components/CardComponent";
import ReservationForm from "./components/ReservationForm";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div className="bg-dark-subtle">
      <NavbarComponent/>
      <CarouselComponent />
      <CardComponent />
      <ReservationForm />
    </div>
  );
}

export default App;
