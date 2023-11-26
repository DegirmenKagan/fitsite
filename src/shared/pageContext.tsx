import { createContext } from "react";
import { SelectedPage } from "@/shared/types";

type PageContextType = {
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
};

const PageContextValues: PageContextType = {
  selectedPage: SelectedPage.Home,
  setSelectedPage: () => {},
};
export default createContext(PageContextValues);
