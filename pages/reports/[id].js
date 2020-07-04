/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";


import Layout from "../../components/Layout";
import ReportCard from "../../components/Cards/ReportCard";

const Report = ({getReports, reports, setReports}) => {

  const [report, setReport] = useState(null);

  const router = useRouter();
  const {id} = router.query;

  useEffect(() => {
    // effect
    setReports(reports);
  const report = reports.filter(x => x["_id"] === id);
  setReport(report[0]);
    console.log(report, getReports);
    return () => {
      // cleanup
    };
  }, []);

  return (
    <Layout header="Report" back>
<<<<<<< HEAD
      {report ?
       <ReportCard 
        type={report.type}
        location={report.location}
        timestamp={report.date}
        description={report.description}
      />:<div></div>}
=======
      <div className="container mx-auto relative">
        <ReportCard 
          type={props.type}
          location={props.location}
          timestamp={props.date}
          description={props.description}
        />
      </div>
>>>>>>> 751217755cc50e894b89c3cff489f226d4edbe8e
    </Layout>
  );
};

<<<<<<< HEAD
export default Report;
=======
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
>>>>>>> 751217755cc50e894b89c3cff489f226d4edbe8e
