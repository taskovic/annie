import { useContext } from "react"
import { Context } from "../contexts"
import { TContext } from "../types";
import { navbarTabs } from "../configs";


export default function Header() {
  const { 
    activeTabName, 
    setActiveTabName 
  } = useContext(Context) as TContext;

  return (
    <div className="annie-header" onClick={() =>setActiveTabName("sadas") }></div>
  )
}