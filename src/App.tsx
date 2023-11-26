import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import Classes from "@/scenes/classes";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import PageContext from "@/shared/pageContext";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true); // Check if user is at top of page (on page load)
        setSelectedPage(SelectedPage.Home); // Set selected page to home
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll); // Add event listener to window

    return () => window.removeEventListener("scroll", handleScroll); // Remove event listener from window
  }, [selectedPage]);

  return (
    <div className="app bg-gray-20">
      <PageContext.Provider value={{ selectedPage, setSelectedPage }}>
        <Navbar isTopOfPage={isTopOfPage} />
        <Home />
        <Benefits />
        <Classes />
        <ContactUs />
        <Footer />
      </PageContext.Provider>
    </div>
  );
}

export default App;
