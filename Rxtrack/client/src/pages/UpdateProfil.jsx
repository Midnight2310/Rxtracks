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
          name="user"
          value={user.user}
          onChange={handdleInputChange}
        />
        
        <label>รหัสผ่าน</label>
        <input
          type="password"
          className={`form-control `}
          placeholder="กรอกรหัสผ่าน"
          required
          name="pass"
          value={user.pass}
          onChange={handdleInputChange}
        />
       

        <label>ชื่อจริง</label>
        <input
          type="text"
          className={`form-control `}
          placeholder="กรอกชื่อ-นามสกุล"
          required
          name="name"
          value={user.name}
          onChange={handdleInputChange}
        />
        
      </div>

      <label>ตำแหน่ง</label>
      <select
        className="form-control"
        name="role"
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
          name= "email"
          value={user.email}
          onChange={handdleInputChange}
        />
        

        <label>เบอร์มือถือ</label>
        <input
          type="text"
          className={`form-control `}
          placeholder="xxx-xxx-xxxx"
          required
          name = "tel"
          value={user.tel}
          onChange={handdleInputChange}
        />
       
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
