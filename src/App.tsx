import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Home } from "@/pages/Home";

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>MMG Tour and Travels | Taxi Services in Ooty</title>
        <meta
          name="description"
          content="Explore Ooty with MMG Tour and Travels. Contact us for taxi services, sightseeing travel, local journeys, and outstation taxi enquiries in Ooty, Tamil Nadu."
        />
        <link rel="canonical" href="https://mmgtourandtravels.com/" />
      </Helmet>
      <Home />
    </HelmetProvider>
  );
};

export default App;

