import { useLazyQuery, useQuery } from "@apollo/client";
import React from "react";
import { query } from "./query.graphql";
import Rocket from "./Rocket";

const GetMissions = () => {
  
  const {data, error, loading} = useQuery(query)

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;
  return (
    <div>
      <h1>Missions</h1>
      {data?.missions?.map((mission) => <li>{mission?.name}</li>)}
      <h1>Rockets</h1>
      {data?.rockets?.map((rocket) => <Rocket rocketName={rocket?.name} />)}
    </div>
  );
};

export default GetMissions;
