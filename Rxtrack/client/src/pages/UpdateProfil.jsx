import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateProfil() {
  // const [user, setUser] = useState('')
  // const [pass, setPass] = useState('')
  // const [name, setName] = useState('')
  // const [role, setRole] = useState(false)
  // const [email, setEmail] = useState('')
  // const [tel, setTel] = useState('')
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    user: "",
    pass: "",
    name: "",
    role: "",
    email: "",
    tel: 0,
  });

  const handdleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/datauser/" + id)
      .then((res) => {
        console.log("err");
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleUpdate(event) {
    event.preventDefault();
    Axios.put("http://localhost:3001/update/" + id, user)
    .then((res) => {
      console.log(res);
      navigate("/");
    });
  }

  return (
    <form
      className="m-5 p-5 needs-validation"
      onSubmit={handleUpdate}
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        border: "solid 1px #e8ebed",
      }}
      noValidate
    >
      <div className="row mb-3">
        <label>ชื่อผู้ใช้</label>
        <input
          type="text"
          className={`form-control `}
          placeholder="กรอกชื่อผู้ใช้"
          required
          value={user.user}
          onChange={handdleInputChange}
        />
        <div className="invalid-feedback">กรุณากรอกชื่อผู้ใช้</div>
        <label>รหัสผ่าน</label>
        <input
          type="password"
          className={`form-control `}
          placeholder="กรอกรหัสผ่าน"
          required
          value={user.pass}
          onChange={handdleInputChange}
        />
        <div className="invalid-feedback">กรุณากรอกรหัสผ่าน</div>

        <label>ชื่อจริง</label>
        <input
          type="text"
          className={`form-control `}
          placeholder="กรอกชื่อ-นามสกุล"
          required
          value={user.name}
          onChange={handdleInputChange}
        />
        <div className="invalid-feedback">กรุณากรอกชื่อ-นามสกุล</div>
      </div>

      <label>ตำแหน่ง</label>
      <select
        className="form-control"
        value={user.role}
        onChange={handdleInputChange}
      >
        <option value="none">None</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <div className="row mb-3">
        <label>อีเมล</label>
        <input
          type="email"
          className={`form-control "}`}
          placeholder="email@email.com"
          required
          value={user.email}
          onChange={handdleInputChange}
        />
        <div className="invalid-feedback">กรุณากรอกอีเมล</div>

        <label>เบอร์มือถือ</label>
        <input
          type="text"
          className={`form-control `}
          placeholder="xxx-xxx-xxxx"
          required
          value={user.tel}
          onChange={handdleInputChange}
        />
        <div className="invalid-feedback">กรุณากรอกเบอร์มือถือ</div>
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-3"
        style={{ width: "120px", height: "50px" }}
      >
        อัพเดท
      </button>

      <Link
        to="/"
        type="button"
        className="btn btn-secondary mt-3 mx-3"
        style={{ width: "120px", height: "50px" }}
      >
        ย้อนกลับ
      </Link>
    </form>
  );
}

export default UpdateProfil;
