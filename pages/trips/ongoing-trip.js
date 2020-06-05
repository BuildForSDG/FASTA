/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";


import Layout from "../../components/Layout";
import MapCard from "../../components/Cards/MapCard";
import { TextSmall } from "../../components/Text/Body";
import Reports from "../../components/Homepage/Reports/Reports";
import NewReport from "../../components/Homepage/NewReport";

const Trip = (props) => {

  return (
    <Layout header="Ongoing Trip" back>
      <div className="absolute top-0 right-0 w-screen pb-10">
        {/* Add google map to MapCard */}
        <MapCard />
        <div className="px-4">
          <Reports />
          <NewReport />
        </div>
      </div>
    </Layout>
  );
};


export default Trip;