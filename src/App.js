import { useAuthUser } from "./context/auth-context";
import AuthApp from "./AuthApp";
import UnAuthApp from "./UnAuthApp";

export default function App() {
  const authUser = useAuthUser();
  console.log("Biff");
  console.log(authUser);

  if (authUser) {
    return <AuthApp />;
  } else {
    console.log("Biff1");
    return <UnAuthApp />;
  }
}
