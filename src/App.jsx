import axios from "axios";
import { useQuery } from "react-query";
import CharactersTable from "./components/CharactersTable";

async function fetchCharacters() {
  const data = await axios.get("https://rickandmortyapi.com/api/character");
  return data.data.results;
}

const App = () => {
  const { data, isLoading, error } = useQuery("characters", fetchCharacters);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error has occured: {error.message}</h1>;
  }
  if (!data) {
    return <h1>No data available</h1>;
  }

  return (
    <div>
      <CharactersTable data={data} />
    </div>
  );
};

export default App;
