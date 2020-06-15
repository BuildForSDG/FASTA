/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import fetch from "node-fetch";


import Layout from "../../components/Layout";
import ReportCard from "../../components/Cards/ReportCard";

// const Report = ({ report }) => {
//   return (
//     <Layout header="Report" back>
//       <ReportCard 
//         type={report.type}
//         location={report.location}
//         timestamp={report.timestamp}
//         details={report.details}
//       />
//     </Layout>
//   )
// };

const Report = (props) => {
  return (
    <Layout header="Report" back>
       <ReportCard 
        type={props.type}
        location={props.location}
        timestamp={props.date}
        description={props.description}
      />
    </Layout>
  );
};

// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch(`https://.../reports`)
//   const reports = await res.json()

//   // Get the paths we want to pre-render based on report
//   const paths = reports.map(report => `/report/${report.id}`)

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch(`https://.../${params.id}`)
//   const report = await res.json()

//   return {
//     props: {
//       report
//     }
//   }
// };

export default Report;