import { ReactNode } from "react";
// TODO: No use

type Props = {
  children: ReactNode;
};

const Button = (props: Props) => {
  return (
    <button className="inline-block bg-cyan-500 hover:bg-cyan-600 rounded-full text-white px-3 py-1">
      {props.children}
    </button>
  );
};

export default Button;
