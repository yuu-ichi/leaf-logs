import { Link } from "@remix-run/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  to: string;
};

const LinkButton = (props: Props) => {
  return (
    <Link
      to={props.to}
      className="inline-block text-sm md:text-base bg-cyan-500 hover:bg-cyan-600 rounded-full text-white px-3 py-1"
    >
      {props.children}
    </Link>
  );
};

export default LinkButton;
