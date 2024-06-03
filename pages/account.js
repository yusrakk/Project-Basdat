// pages/edit-profile.js
import { useState } from "react";
import { FaUser } from "react-icons/fa";

const EditProfile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [addressDetails, setAddressDetails] = useState("");
  const [bio, setBio] = useState("");

  const handleImageChange = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSaveChanges = () => {
    // Implementasikan logika untuk menyimpan perubahan
    alert("Perubahan disimpan!");
  };

  return (
    <div className="container">
      <h1>Edit Profile</h1>
      <form>
        <div className="profile-section">
          <input
            type="file"
            id="profileImage"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          {profileImage ? (
            <img
              src={profileImage}
              alt="Pratinjau Profil"
              className="profile-preview"
            />
          ) : (
            <div className="empty-profile-preview">
              <FaUser className="empty-profile-icon" />
            </div>
          )}
          <div className="profile-info">
            <p className="username">{username}</p>
            <button
              type="button"
              className="change-photo-button"
              onClick={() => document.getElementById("profileImage").click()}
            >
              Ganti Foto Profil
            </button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="username">Nama Pengguna</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="text-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">No HP</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="text-field"
          />
        </div>
        <div className="form-group address-group">
          <label>Alamat</label>
          <div className="sub-field">
            <label htmlFor="province" className="sub-field-label">
              Provinsi
            </label>
            <input
              type="text"
              id="province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className="sub-text-field"
            />
          </div>
          <div className="sub-field">
            <label htmlFor="city" className="sub-field-label">
              Kabupaten/Kota
            </label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="sub-text-field"
            />
          </div>
          <div className="sub-field">
            <label htmlFor="district" className="sub-field-label">
              Kecamatan
            </label>
            <input
              type="text"
              id="district"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="sub-text-field"
            />
          </div>
          <div className="sub-field">
            <label htmlFor="postalCode" className="sub-field-label">
              Kode Pos
            </label>
            <input
              type="text"
              id="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="sub-text-field"
            />
          </div>
          <div className="sub-field">
            <label htmlFor="addressDetails" className="sub-field-label">
              Keterangan
            </label>
            <textarea
              id="addressDetails"
              value={addressDetails}
              onChange={(e) => setAddressDetails(e.target.value)}
              className="sub-text-field"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="text-field"
          />
        </div>
        <button
          type="button"
          onClick={handleSaveChanges}
          className="save-button"
        >
          Simpan Perubahan
        </button>
      </form>

      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          font-size: 2em;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .profile-section {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .profile-preview {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-right: 20px;
        }
        .profile-info {
          display: flex;
          flex-direction: column;
        }
        .username {
          font-size: 1.5em;
          font-weight: bold;
          margin: 0;
        }
        .change-photo-button {
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
          text-align: left;
          padding: 0;
        }
        .change-photo-button:hover {
          text-decoration: underline;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group label {
          display: block;
          margin-bottom: 5px;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 8px;
          margin-bottom: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          box-sizing: border-box;
        }
        .address-group {
          border: 1px solid #ccc;
          padding: 10px;
          border-radius: 8px;
        }
        .sub-field {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        .sub-field-label {
          flex: 1;
          font-size: 0.9em;
        }
        .sub-text-field {
          flex: 2;
          padding: 6px;
          margin-left: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          box-sizing: border-box;
        }
        .save-button {
          background-color: #000;
          color: #fff;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          border-radius: 12px;
        }

        .save-button:hover {
          background-color: #333;
        }

        .empty-profile-preview {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: #ccc; /* Warna latar belakang untuk profil kosong */
          margin-right: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .empty-profile-icon {
          font-size: 90px; /* Ukuran ikon */
          color: #888; /* Warna abu-abu untuk ikon */
        }
      `}</style>
    </div>
  );
};

export default EditProfile;
