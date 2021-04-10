import { useLazyQuery, useQuery } from "@apollo/client";
import React from "react";
import { useMissionsQuery } from "../generated/graphql";
import { Data, Mission } from "../types/types";
import { query } from "./query.graphql";
import Rocket from "./Rocket";

const GetMissions = () => {
  
  const {data, error, loading} = useMissionsQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;
  return (
    <div>
      <h1>Missions</h1>
      {data?.missions?.map((mission) => <li>{mission?.name}</li>)}
      <h1>Rockets</h1>
      <Rocket rockets={data?.rockets} />
    </div>
  );
};

export default GetMissions;
