import { Link } from "react-router-dom";
import "./btn.css";

function BTN(props) {
  const type = props.type;
  return (
    <>
      {type === "outline" ? (
        <Link to={props.URL} className="Btn outline">
          {props.text}
        </Link>
      ) : (
        <Link to={props.URL} className="Btn defult">
          {props.text}
        </Link>
      )}
    </>
  );
}

export default BTN;
