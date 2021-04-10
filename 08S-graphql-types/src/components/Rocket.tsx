import React from "react";
import { RocketData } from "../types/types";

const Rocket = ({ rockets }: any) => {
  return (
    <div>
      {rockets?.map((rocket: RocketData | null) => (
        <div>
          <span style={{ marginRight: "20px" }}>🚀</span> {rocket?.name}{" "}
        </div>
      ))}
    </div>
  );
};

export default Rocket;
