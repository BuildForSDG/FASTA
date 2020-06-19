/* eslint-disable prettier/prettier */
import Layout from "../../components/Layout";
import MapCard from "../../components/Cards/MapCard";
import Reports from "../../components/Homepage/Reports/Reports";
import NewReport from "../../components/Homepage/NewReport";
import Map from "../../components/Map";

const Trip = (props) => {

  return (
    <Layout header="Ongoing Trip" back>
      <div className="absolute top-20 right-0 w-screen pb-10">
        {/* Add google map to MapCard */}
        <Map lat={props.location &&props.location.lat} lng={props.location && props.location.lng} />
        {/* <MapCard /> */}
        <div className="px-4">
          <Reports reports={props.reports} />
          <NewReport />
        </div>
      </div>
    </Layout>
  );
};


export default Trip;