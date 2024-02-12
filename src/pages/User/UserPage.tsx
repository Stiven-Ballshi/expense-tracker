import UserHeader from "../../components/UserHeader/UserHeader";
import UserMenu from "../../components/User/UserMenu";

function UserPage() {
  return (
    <div
      style={{
        fontSize: "2.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "50vh",
        rowGap: "20px",
        padding: "20px",
      }}
    >
      <UserHeader />
      <UserMenu />
    </div>
  );
}

export default UserPage;
