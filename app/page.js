'use client'

import React, { useState } from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Slider from "../components/Slider";
import Reserve from "../components/Reserve";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import DateInput from "../components/DateInput";
import GuestInput from "../components/GestInput";
import FigureTransitionL from "../components/FigureTransitionL";
import FigureTransitionR from "../components/FigureTransitionR";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [nbAdulte, setnbAdulte] = useState('');
  const [nbEnfant, setnbEnfant] = useState('');

  return (
    <div className={styles.global}>
      <MyNavbar />
      <Header />
      <Body />
      <div className={styles.transition}>
        <FigureTransitionL />
        <FigureTransitionR />
      </div>
      <div className={styles.input}>
        <DateInput
          arrivalDate={arrivalDate}
          departureDate={departureDate}
          setArrivalDate={setArrivalDate}
          setDepartureDate={setDepartureDate}
        />
        <GuestInput
          nbAdulte={nbAdulte}
          nbEnfant={nbEnfant}
          setnbAdulte={setnbAdulte}
          setnbEnfant={setnbEnfant}
        />
      </div>
      <Reserve
        arrivalDate={arrivalDate}
        departureDate={departureDate}
        setArrivalDate={setArrivalDate}
        setDepartureDate={setDepartureDate}
      />
      <Slider />
      <Footer />
    </div>
  );
}
