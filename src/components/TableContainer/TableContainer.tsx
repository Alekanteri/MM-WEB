import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

type ProductCharsType = { [key: string]: number | string };

function createData(char: string, prop: number | string) {
  return { char, prop };
}

interface BasicTableProps {
  description: ProductCharsType;
}

export const BasicTable: React.FC<BasicTableProps> = ({ description }) => {
  const rows: Array<ProductCharsType> = [];
  Object.entries(description).forEach(([key, value]) => {
    rows.push(createData(key, value));
  });

  console.log(rows);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Характеристики</TableCell>
            <TableCell align="right">Свойства</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.char}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.char}
              </TableCell>
              <TableCell align="right">{row.prop}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
