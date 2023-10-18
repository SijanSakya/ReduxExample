import Login from "@/components/login";
import { useAppSelector } from "@/redux/hook";
// import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Home() {
  const username = useAppSelector((state) => state.authReducer.value.username);

  return (
    <div>
        <Login />
       <h1>Username:{username}</h1>
      
    </div>
  );
}
