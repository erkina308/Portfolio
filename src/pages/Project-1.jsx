import { Link } from "react-router-dom";
import Header from "../components/Header";
import { IoChevronBackCircleSharp } from "react-icons/io5";

export default function Project1() {
  return (
    <div>
      <Link to={"/"}>
        <div>
          <IoChevronBackCircleSharp />
        </div>
      </Link>
      <Header text={"Project 1"} />
    </div>
  );
}
