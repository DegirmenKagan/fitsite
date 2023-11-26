import { SelectedPage } from "@/shared/types";
import { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import PageContext from "@/shared/pageContext";
type Props = {
  page: string;
};

const Link = ({ page }: Props) => {
  const { selectedPage, setSelectedPage } = useContext(PageContext);

  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage; // replace removes spaces
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
