import React from "react";
import Rescueship from "./Rescueship";
import { gql, useQuery } from "@apollo/client";

const launchesQuery = gql`
  {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name
        site_name_long
      }
      rocket {
        rocket_name
        second_stage {
          payloads {
            reused
          }
        }
      }
      ships {
        name
        home_port
        image
        weight_kg
      }
    }
  }
`;

const Lowbar = ({ counter, setCounter }) => {
  const { loading, error, data } = useQuery(launchesQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className="container">
      <div className="Lowbar">
        <div className="lowTitle">
          <h1>
            <span>RESCUE SHIPS</span>
          </h1>
        </div>

        <div className="row">
          {data.launchesPast[counter].ships.map((kafelek, index) => (
            <Rescueship
              key={index}
              index={index}
              data={data.launchesPast[0].ships}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lowbar;
