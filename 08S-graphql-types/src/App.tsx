import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import GetMissions from './components/GetMissions';

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
})

function App() {
  
  return (
   <ApolloProvider client={client}>
     <GetMissions />
   </ApolloProvider>
  );
}

export default App;
