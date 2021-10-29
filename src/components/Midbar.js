import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Modal, Button } from "react-bootstrap";

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
      launch_success
      links {
        wikipedia
      }
    }
  }
`;

const Midbar = ({ counter, setCounter, popup, setPopup }) => {
  const { loading, error, data } = useQuery(launchesQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const handlerPopupOpen = () => {
    setPopup((popup = true));
  };

  const handlerPopupClose = () => {
    setPopup((popup = false));
  };

  let dtFormat = new Intl.DateTimeFormat("pl-PL", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  let date = new Date(data.launchesPast[counter].launch_date_local);

  return (
    <div className="container">
      <div className="Midbar">
        <Modal show={popup}>
          <Modal.Header>
            <h1>{data.launchesPast[counter].mission_name}</h1>
          </Modal.Header>
          <Modal.Body>
            <h4>
              Mission name: <br></br>
            </h4>
            <p>{data.launchesPast[counter].mission_name}</p>
            <h5>
              Launch site: <br></br>
            </h5>
            <p> {data.launchesPast[counter].launch_site.site_name_long}</p>
            <h5>For more info visit:</h5>
            <p>
              <a
                href={data.launchesPast[counter].links.wikipedia}
                target="-blank"
              >
                {data.launchesPast[counter].links.wikipedia}
              </a>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handlerPopupClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        <div className="row">
          <div className="col-xl-12 col-md-12 col-sm-12 col-12">
            <div className="midContainerLeft">
              <div className="missionName">
                <h1>
                  <span>MISSION</span>
                </h1>
                <p> {data.launchesPast[counter].mission_name}</p>
              </div>
              <div className="rocketName">
                <h1>
                  <span>ROCKET</span>
                </h1>
                {data.launchesPast[counter].rocket.rocket_name}
                <span
                  className={
                    data.launchesPast[counter].rocket.second_stage.payloads
                      .reused === true
                      ? "isRecovered"
                      : " isUnrecovered"
                  }
                >
                  {data.launchesPast[counter].rocket.second_stage.payloads
                    .reused === true
                    ? "RECOVERED"
                    : " UNRECOVERED"}
                </span>
              </div>
              <div className="Button" onClick={handlerPopupOpen}>
                LEARN MORE
              </div>
            </div>
            <div className="midContainerRight">
              <div className="launchDate">
                <h1>
                  <span>LAUNCH DATE</span>
                </h1>
                {dtFormat.format(date)}
              </div>
              <div className="launchSite">
                <h1>
                  <span>LAUNCH SITE</span>
                </h1>
                <p
                  data-title={
                    data.launchesPast[counter].launch_site.site_name_long
                  }
                >
                  {data.launchesPast[counter].launch_site.site_name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Midbar;
