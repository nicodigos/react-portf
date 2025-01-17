import { Link } from "react-router-dom";
import "./ButtonsList.css";

type Props = {
  labels: string[][];
  style: string;
  hover_style?: string;
};

function ButtonsList({ labels, style, hover_style }: Props) {
  let buttons_list = [];

  for (let l of labels) {
    buttons_list.push(
      <Link
        key={`${l}`}
        to={
          l[0] != "Dashboard" || window.innerWidth < 890
            ? l[1]
            : "https://nicodigos-dashboard.streamlit.app/"
        }
      >
        <li>{l[0]}</li>
      </Link>
    );
  }
  return (
    <ul className={`unordered-list ${style} ${hover_style}`}>{buttons_list}</ul>
  );
}

export default ButtonsList;
