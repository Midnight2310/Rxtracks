import { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";




function CreateProfile() {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const navigate = useNavigate()

    
    function handleSubmit (event) {
      event.preventDefault();
      Axios.post('http://localhost:3001/create', {user, pass, name, role, email, tel})
      .then(res => {
        console.log(res)
        navigate('/')
      })
    }


  return (
    <form
      className="m-5 p-5"
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        border: "solid 1px #e8ebed",
      }}
      
    >
      <div className="row mb-3" style={{ margin:"2px"}}>
        
          <label className="row mb3">ชื่อผู้ใช้</label>
          <input
            type="text"
            className={`form-control `}
            placeholder="กรอกชื่อผู้ใช้"
            required
            onChange={(event) => {
              setUser(event.target.value);
            }}
          />
       
          <label className="row mb3">รหัสผ่าน</label>
          <input
            type="password"
            className={`form-control `}
            placeholder="กรอกรหัสผ่าน"
            required
            onChange={(event) => {
              setPass(event.target.value);
            }}
          />
          


          <label className="row mb3">ชื่อจริง</label>
          <input
            type="text"
            className={`form-control `}
            placeholder="กรอกชื่อ-นามสกุล"
            required
            onChange={(event) => {
              setName(event.target.value);
            }}
          />

      </div>

      <label className="row mb3" style={{ margin:"2px"}}>ตำแหน่ง</label>
          <select className="form-control"
          style={{ margin:"2px"}}
          onChange={(event) => {
            setRole(event.target.value);
          }}>
            <option value="none">None</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

      <div className="row mb-3" style={{ margin:"2px"}}>

          <label className="row mb3">อีเมล</label>
          <input
            type="email"
            className={`form-control "}`}
            placeholder="email@email.com"
            required
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          


          <label className="row mb3">เบอร์มือถือ</label>
          <input
            type="text"
            className={`form-control `}
            placeholder="xxx-xxx-xxxx"
            required
            onChange={(event) => {
              setTel(event.target.value);
            }}
          />
          

      </div>
      
      <div style={{ textAlign: "center" }}>
      <button
        type="submit"
        className="btn btn-primary mt-3 mx3"
        style={{ width: "120px", height: "50px" }}
      >
        ยืนยัน
      </button>
      
      
      <Link to="/"
        type="button"
        className="btn btn-secondary mt-3 mx-3"
        style={{ width: "120px", height: "50px" }}
      >
        ยกเลิก
      </Link>
      </div>
    </form>
  );
}

export default CreateProfile;
