import CardComponent from "../../components/Card/CardComponent";
import { isSafari } from "../../utility";

function MyCardsPage() {
  return (
    <div
      style={{
        padding: "20px",
        fontSize: "2.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: isSafari ? "calc(100vh - 28vh)" : "calc(100vh - 20vh)",
        rowGap: "20px",
        overflowY: "auto",
      }}
    >
      <CardComponent
        cardholder="Stiven Ballshi"
        isCardsPage
        balanceName="Current Balance"
        cardNumber="4575 4343 1232 1235"
        gradient="linear-gradient(to right top, #8736f6, #cc00cd, #ef00a3, #fe007c, #ff355c, #fc613e, #ee8527, #daa323, #b7c246, #91da7c, #6dedb9, #5ffbf1)"
      />
      <CardComponent
        cardholder="Giuliano Ballshi"
        isCardsPage
        balanceName="Current Balance"
        cardNumber="9722 4343 4233 1235"
        gradient="linear-gradient(to left bottom, #d87b2f, #ef7061, #f07191, #dd7fbc, #bb92da, #ae93e2, #9e95e9, #8b97ef, #9a86ef, #af72e9, #c756db, #de29c5)"
      />
      <CardComponent
        cardholder="Adela Luku"
        isCardsPage
        balanceName="Current Balance"
        cardNumber="4575 4343 4888 0093"
        gradient="linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)"
      />
    </div>
  );
}

export default MyCardsPage;
