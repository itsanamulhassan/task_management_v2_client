import type { FC } from "react";

interface Analytics {
  type: unknown;
}

const Analytic: FC<Analytics> = () => {
  return (
    <>
      <h1>ComponentName</h1>
    </>
  );
};

export default Analytic;
