import classes from "./Button.module.css";
import Link from "next/Link";
const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <div className={classes.btn}>{props.children}</div>
      </Link>
    );
  }
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {" "}
      {props.children}
    </button>
  );
};
export default Button;
