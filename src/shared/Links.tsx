import Link from "@/scenes/navbar/Link";
type Props = {
  _className?: string;
};

const Links = ({ _className }: Props) => {
  return (
    <div className={`${_className} flex flex-col`}>
      <Link page={"Home"} />
      <Link page={"Benefits"} />
      <Link page={"Classes"} />
      <Link page={"Contact Us"} />
    </div>
  );
};

export default Links;
