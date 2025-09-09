import { Link } from "react-router-dom";
import "./loginPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  return (
    <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div className="boxContainer">
        <div className="left-section">
          <div className="logo-section">
            <img src="src/assets/images/RxTrack-logo-white.png" alt="RxTrack" />
          </div>
          <div className="left-detail-section">
            <h1>ระบบบริหารจัดการคลังยา</h1>
            <h4>Medical Inventory Management System</h4>
            {/* <p>Username : admin</p>
          <p>Password : 0000</p> */}
          </div>
        </div>
        <div className="right-section">
          <h1 style={{ fontWeight: "bold", color: "rgb(19, 27, 55)" }}>
            เข้าสู่ระบบ
          </h1>
          <form className="needs-validation input-section w-75">
            <div>
              <h5
                className="form-label"
                style={{ fontSize: "1rem", color: "#131b37a4" }}
              >
                ชื่อผู้ใช้
              </h5>
              <input type="text" className="form-control" required />
            </div>
            <div>
              <h5
                className="form-label"
                style={{ fontSize: "1rem", color: "#131b37a4" }}
              >
                รหัสผ่าน
              </h5>
              <input type="password" className="form-control" required />
            </div>
            <Link to={"/admin/dashboard"}>
              <button
                onClick={() => {}} //! redirect
                className="btn btn-primary"
                style={{
                  backgroundColor: "rgb(19, 27, 55)",
                  border: "none",
                  padding: "15px 50px 15px 50px",
                }}
                type="submit"
              >
                ยืนยัน
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
