import type { FC } from "react";

interface User {
  type: unknown;
}

const User: FC<User> = () => {
  return (
    <>
      <h1>User</h1>
    </>
  );
};

export default User;
