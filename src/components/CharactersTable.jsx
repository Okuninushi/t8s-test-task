import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, status, gender, totalAmountOfEpisodes) {
  return { name, status, gender, totalAmountOfEpisodes };
}

const CharactersTable = ({ data }) => {
  const [input, setInput] = React.useState("");
  const [list, setList] = React.useState(data);
  const handleInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value.toLowerCase());
  };

  
  return (
    <Paper>
      <AutoComplete list={list} handleInput={handleInput} />
      <FilteredList list={list} searchString={input} />
    </Paper>
  );
  
};
export default CharactersTable;
