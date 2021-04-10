import React from "react";
import { RocketData } from "../types/types";

interface RocketProps {
    rockets?: RocketData[]
}
const Rocket = ({ rockets }: RocketProps) => {
  return (
    <div>
      {rockets?.map((rocket: RocketData) => (
        <div>
          <span style={{ marginRight: "20px" }}>🚀</span> {rocket?.name}{" "}
        </div>
      ))}
    </div>
  );
};

export default Rocket;
