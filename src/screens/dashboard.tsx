/**
 * Screen will be called from router
 * Inside the screen will be complete business logic alongs with screen state management
 * Screen style will be just grid styling, the basic screen style will be done in components
 */
import Header from "../components/Header"
import {  
  useState, 
  useEffect 
} from "react"
import { Context } from "../contexts";
import Filters from "../components/Filters";


export default function Dashboard() {
  const [activeTabName, setActiveTabName] = useState("first_tab");

  useEffect(() => {
    // Do something on component init

    return () => {
      // reset all states or screen store
    }
  }, [])

  function handleTabClick() {}

  const ProviderRegistry = {
    handleTabClick,
    activeTabName,
    setActiveTabName
  }



  return(
    <Context.Provider value={ProviderRegistry}>
      <div className="annie-dashboard">
        <Header />
        <Filters>
          
        </Filters>
        
      </div>  
    </Context.Provider>
  )
}
