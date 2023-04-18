import { useContext } from "react"
import { Context } from "../contexts"


export default function Header() {
  // const navbarTabs: string[] = [
  //   "Home Dashboard",
  //   "Identify High Risk Patients",
  //   "Refer New Patient",
  //   "Track Reffered Patients"
  // ]

  type TContext = {
    activeTabName: string,
    setActiveTabName: Function,
    handleTabClick: Function
  }

  const { 
    activeTabName, 
    setActiveTabName 
  } = useContext(Context) as TContext;


  return <h1 onClick={() => setActiveTabName("new HEADER VALUE")}>Header { activeTabName }</h1>
}