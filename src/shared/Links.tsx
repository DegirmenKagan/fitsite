import Link from "@/scenes/navbar/Link";
type Props = {
  _className?: string;
  simple?: boolean;
};

const Links = ({ _className, simple }: Props) => {
  return (
    <div className={`${_className} flex flex-col`}>
      <Link simple={simple} page={"Home"} />
      <Link simple={simple} page={"Benefits"} />
      <Link simple={simple} page={"Classes"} />
      <Link simple={simple} page={"Contact Us"} />
    </div>
  );
};

export default Links;
