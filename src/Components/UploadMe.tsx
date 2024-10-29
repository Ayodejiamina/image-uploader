import { ChangeEvent, useState } from "react";
import "./UploadMe.css";

function UploadMe() {
  const [uploadProfile, setUploadprofile] = useState<string | null>(null);
  const [uploadCover, setUploadcover] = useState<string | null>(null);
  const [chosenOne, setChosenOne] = useState<string | null>(null);
  const [overlay, setOverlay] = useState<boolean>(false);

  function handleCoverPhoto(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const coverFile = e.target.files?.[0];
    if (coverFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadcover(reader.result as string);
      };
      reader.readAsDataURL(coverFile);
    }
  }

  const changeBacgroundCover = {
    backgroundColor: uploadCover ? "transparent" : "rgba(128, 128, 128, 0.405)",
    backgroundImage: uploadCover ? `url(${uploadCover})` : "none",
    width: "100%",
    backgroundSize: "100% 100%",
    marginTop: "10px",
    padding: "50px",
    borderRadius: "2px",
    objectFit: "cover" as const,
  };

  const changeBacgroundProfile = {
    backgroundColor: uploadProfile ? "transparent" : "blueviolet",
    backgroundImage: uploadProfile ? `url(${uploadProfile})` : "none",
    width: "70px",
    display: "flex",
    justifySelf: "center",
    height: "70px",
    borderRadius: "50%",
    position: "relative" as const,
    backgroundSize: "100% 100%",
  };

  // Uploading Profile image
  function targetInput() {
    const profileInput: HTMLElement | null = document.getElementById("profile");
    profileInput?.click();
  }

  function profileInput(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const profile = e.target.files?.[0];
    if (profile) {
      const readProfile = new FileReader();
      readProfile.onloadend = () => {
        setUploadprofile(readProfile.result as string);
      };
      readProfile.readAsDataURL(profile);
    }
  }

  function handleCoverOverlay() {
    if (uploadCover) {
      setChosenOne(uploadCover);
      setOverlay(true);
    }
  }

  function handleProfileOverlay(e: React.MouseEvent) {
    e.stopPropagation();
    if (uploadProfile) {
      setChosenOne(uploadProfile);
      setOverlay(true);
    }
  }

  function closeOverlay() {
    setOverlay(false);
    setChosenOne(null);
  }

  return (
    <>
      <div className={`container`}>
        <div className="subCont">
          <h2 className="logo">Image Uploader </h2>
          <div
            className="cont1"
            style={changeBacgroundCover}
            onClick={handleCoverOverlay}
          >
            <div className="svg1">
              <label htmlFor="cover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="m11.5 6l-.313.406L10 8H3v18h26V8h-7l-1.188-1.594L20.5 6zm1 2h7l1.188 1.594L21 10h6v14H5V10h6l.313-.406zM8 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m8 0c-3.302 0-6 2.698-6 6s2.698 6 6 6s6-2.698 6-6s-2.698-6-6-6m0 2c2.22 0 4 1.78 4 4s-1.78 4-4 4s-4-1.78-4-4s1.78-4 4-4"
                  />
                </svg>
              </label>
              <input
                type="file"
                id="cover"
                accept="image/*"
                onChange={handleCoverPhoto}
              />
            </div>

            <div
              className="svg2"
              style={changeBacgroundProfile}
              onClick={handleProfileOverlay}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
                onClick={targetInput}
              >
                <path
                  fill="currentColor"
                  d="m11.5 6l-.313.406L10 8H3v18h26V8h-7l-1.188-1.594L20.5 6zm1 2h7l1.188 1.594L21 10h6v14H5V10h6l.313-.406zM8 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m8 0c-3.302 0-6 2.698-6 6s2.698 6 6 6s6-2.698 6-6s-2.698-6-6-6m0 2c2.22 0 4 1.78 4 4s-1.78 4-4 4s-4-1.78-4-4s1.78-4 4-4"
                />
              </svg>

              <input
                type="file"
                name=""
                id="profile"
                accept="image/*"
                onChange={profileInput}
              />
            </div>
          </div>

          <form action="">
            <div className="put1">
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div className="put1">
              <label htmlFor="">Link</label>
              <div className="url">
                <input type="url" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M1 9.5A1.5 1.5 0 0 0 2.5 11H4v-1H2.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V4H5.5A1.5 1.5 0 0 0 4 5.5v7A1.5 1.5 0 0 0 5.5 14h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 4H11V2.5A1.5 1.5 0 0 0 9.5 1h-7A1.5 1.5 0 0 0 1 2.5zm4-4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="saveBtn">
              <button>Save</button>
            </div>
          </form>
        </div>
      </div>

      <div
        className={`overlay ${overlay ? "" : "hidden"}`}
        onClick={closeOverlay}
      >
        <div className="overlay-text animate__animated animate__backInDown">
          <img
            src={chosenOne as string}
            alt="My profile Photo"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    </>
  );
}

export default UploadMe;
