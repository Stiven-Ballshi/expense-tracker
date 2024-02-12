import EditIcon from "@mui/icons-material/Edit";
import styles from "./UserHeader.module.css";
import { ChangeEvent, useRef, useState } from "react";
import { Typography } from "@mui/material";

function UserHeader() {
  const [image, setImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEditIconClick = () => {
    // Trigger the click on the hidden file input when EditIcon is clicked
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const file = files[0];

      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result as string;
        if (result) setImage(result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <div className={styles.userCircularImage}>
          <label htmlFor="image-input">
            {image ? (
              <img
                className={styles.userImageUpload}
                src={image}
                alt="userProfileImage"
              />
            ) : (
              <Typography sx={{ color: "lightgray" }} variant="h5">
                Upload
              </Typography>
            )}
          </label>

          <input
            accept=".png,.jpg"
            ref={inputRef}
            onChange={handleChange}
            id="image-input"
            type="file"
            hidden
          />
        </div>
        <div
          onClick={handleEditIconClick}
          style={{ background: "#f2ebfd", cursor: "pointer" }}
          className={styles.uploadBg}
        >
          <EditIcon fontSize="small" color="primary" />
        </div>
      </div>

      {/* To be replace with name and email from user login */}
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4">Stiven Ballshi</Typography>
        <Typography sx={{ color: "lightgray" }} variant="h5">
          stiven.ballshi12@gmail.com
        </Typography>
      </div>
    </>
  );
}

export default UserHeader;
