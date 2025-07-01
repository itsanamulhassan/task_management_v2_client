import { useEffect, type FC } from "react";

interface IHelmet {
  title: string;
}

const Helmet: FC<IHelmet> = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};
export default Helmet;
