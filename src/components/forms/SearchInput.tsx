import { Paper, InputBase, IconButton, InputBaseProps } from "@mui/material";
import Loop from "components/icons/Loop/Loop";

interface Props extends InputBaseProps {
  handleSearch?: Function;
}

export default function SearchInput({ handleSearch, ...rest }: Props) {
  return (
    <Paper component="form" className="search-input">
      <InputBase className="search-input-base" {...rest} />
      <IconButton
        type="button"
        className="search-button"
        onClick={() => {
          handleSearch && handleSearch();
        }}
      >
        <Loop />
      </IconButton>
    </Paper>
  );
}
