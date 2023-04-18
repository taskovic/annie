/**
 * Screen will be called from router
 * Inside the screen will be complete business logic alongs with screen state management
 * Screen style will be just grid styling, the basic screen style will be done in components
 */
import Header from "../components/Header";
import React, {  
  useState, 
  useEffect 
} from "react";
import { Context } from "../contexts";
import { navbarTabs } from "../configs";

export default function Dashboard() {
  const [activeTabName, setActiveTabName] = useState(navbarTabs[0]);

  useEffect(() => {
    // Do something on component init

    return () => {
      setActiveTabName(navbarTabs[0]);
    }
  }, []);

  function getComponent(name: string) {
    if (!name) return <h1>No View</h1> // this can be loader

    switch(name) {
      case navbarTabs[0]:
        return () => <h1>View 1</h1> // Change this with proper component which will be called
      case navbarTabs[1]:
        return () => <h1>View 2</h1> // Change this with proper component which will be called
      case navbarTabs[2]:
        return () => <h1>View 3</h1> // Change this with proper component which will be called
      case navbarTabs[3]:
        return () => <h1>View 4</h1> // Change this with proper component which will be called
      default: 
        return () => <h1>No View</h1> // Change this with proper component which will be called
    }
  };

  const Component: React.FunctionComponent = getComponent(activeTabName);

  const ProviderRegistry = {
    activeTabName,
    setActiveTabName
  }

  return(
    <Context.Provider value={ProviderRegistry}>
      <div className="annie-dashboard">
        <Header />
        <Component />
      </div>  
    </Context.Provider>
  )
}
