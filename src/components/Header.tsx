import { useContext } from "react"
import { Context } from "../contexts"
import { TContext } from "../types";
import { navbarTabs } from "../configs";
import Logo from "./Logo";
import {Grid, TextField, styled } from "@mui/material"
import CustomizedInputBase from "./CustomizedInputBase";


export default function Header() {
  const { 
    activeTabName, 
    setActiveTabName 
  } = useContext(Context) as TContext;

  const CssTextField = styled(TextField)({
    '.search-input': {
      width: "100%",
    },
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  });

  return (
    <Grid className="annie-header" onClick={() =>setActiveTabName("sadas") }>
      <Logo />
      <Grid className="search-section">
        <CustomizedInputBase />
      </Grid>
      
    </Grid>
  )
}