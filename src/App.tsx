import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import Classes from "@/scenes/classes";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(window.scrollY === 0); // Check if user is at top of page (on page load)
      setSelectedPage(SelectedPage.Home); // Set selected page to home
    };

    window.addEventListener("scroll", handleScroll); // Add event listener to window

    return () => window.removeEventListener("scroll", handleScroll); // Remove event listener from window
  }, [selectedPage]);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Classes setSelectedPage={setSelectedPage} />
      {/* 3:01:41 */}
    </div>
  );
}

export default App;
