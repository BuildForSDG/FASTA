/* eslint-disable no-unused-vars */
import React from "react";
import Link from "next/link";
import Report from "./Report";
import { H3 } from "../../Text/Headings";

const Reports = () => {
  return (
    <div>
      {/* fetch Reports from report api */}
      {/* Show only the two latest reports */}
      <H3>Reports in your area</H3>
      <div className="md:grid grid-cols-2 gap-4 mt-4">
        <Report
          title=" Accident"
          description="Along Olu-Obansanjo road. cars are on fire avoid the area, fire fighters are at the scene. Traffic is..."
        />
        <Report
          title="Shoot-out"
          description="Along Olu-Obansanjo road. cars are on fire avoid the area, fire fighters are at the scene. Traffic is..."
        />
      </div>

      <Link href="/report">
        <a>
          <span style={{ color: "#2699fb", fontSize: "12px" }}>See All Reports</span>
        </a>
      </Link>
    </div>
  );
};

export default Reports;
