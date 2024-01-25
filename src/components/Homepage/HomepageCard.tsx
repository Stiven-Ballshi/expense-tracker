import "../../App.css";
import CardComponent from "../Card/CardComponent";

function HomepageCard() {
  return (
    <CardComponent
      gradient="linear-gradient(to right top, #8736f6, #cc00cd, #ef00a3, #fe007c, #ff355c, #fc613e, #ee8527, #daa323, #b7c246, #91da7c, #6dedb9, #5ffbf1)"
      isCardsPage={false}
      balanceName="Total Balance"
    />
  );
}

export default HomepageCard;
