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
  const rows = [].sort((a, b) => (a.name < b.name ? -1 : 1));

  for (let i = 0; i < data.length; i++) {
    rows.push(createData(data[i].name, data[i].status, data[i].gender, data[i].episode.length));
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Total amount of episodes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.status}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.gender}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.totalAmountOfEpisodes}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default CharactersTable;
