import React from "react";

const Rescueship = ({ data, index }) => {
  return (
    <div className="col-xl-4 col-md-6 col-sm-12">
      <div className="rescueShip1">
        <div className="shipPhoto">
          <img src={data[index].image} alt="zdjecie1" />
        </div>
        <div className="shipInfo">
          <div className="shipInfoTitle">{data[index].name}</div>
          <div className="shipInfoInfos">
            <div className="infosTitle">HOME PORT</div>
            <div className="infosFulfill">{data[index].home_port}</div>
            <div className="containerClearFloat"></div>
            <div className="infosTitle">WEIGHT [KG]</div>
            <div className="infosFulfill">{data[index].weight_kg}</div>
            <div className="containerClearFloat"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rescueship;
