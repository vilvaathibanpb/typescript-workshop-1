import { gql } from "@apollo/client";

export const query = gql`
  query missions {
    missions {
      name
    }
    rockets {
      name
    }
  }
`;
