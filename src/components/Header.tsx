import Logo from "./Logo";
import {Grid, TextField, styled } from "@mui/material"
import SearchInput from "./SearchInput";


export default function Header() {

  return (
    <Grid className="annie-header">
      <Logo />
      <Grid className="search-section">
        <SearchInput placeholder="Search"/>
      </Grid>
      
    </Grid>
  )
}