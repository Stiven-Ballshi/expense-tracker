import IconUpOrDownComponent from "./IconUpOrDownComponent";
import "../../App.css";

function HomepageCard() {
  return (
    <div className="homepageCard">
      <p className="balanceTitle">Total Balance</p>
      <p className="balanceNumber">$3,257.00</p>

      <div className="outcomeCalculation">
        <IconUpOrDownComponent isIncome category="Income" />
        <IconUpOrDownComponent isExpense category="Expense" />
      </div>
    </div>
  );
}

export default HomepageCard;
