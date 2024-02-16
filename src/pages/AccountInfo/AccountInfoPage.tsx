import InputField from "../../components/InputField/InputField";
import { useFormFields } from "../../components/hooks/useForm";

function AccountInfoPage() {
  const initialFields = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const { handleChange, fields } = useFormFields(initialFields);

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
      <InputField
        handleChange={handleChange}
        value={fields.firstName}
        name="firstName"
        title="First Name"
        type="text"
      />
      <InputField
        handleChange={handleChange}
        value={fields.lastName}
        name="lastName"
        title="Last Name"
        type="text"
      />
      <InputField
        handleChange={handleChange}
        value={fields.email}
        name="email"
        title="Email"
        type="email"
      />
      <InputField
        handleChange={handleChange}
        value={fields.phone}
        name="phone"
        title="Phone Number"
        type="numeric"
      />
    </div>
  );
}

export default AccountInfoPage;
