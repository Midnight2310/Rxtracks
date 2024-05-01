import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const itemsPerPage = 7;

function Profile() {
  const [user, setUser] = useState([]);
  const [curPage, setCurPage] = useState(0);
  const [numPages, setNumPages] = useState(0);

  //กำหนดนห้าเเละจำนวนต่อpages

  useEffect(() => {
    setNumPages(Math.ceil(user.length / itemsPerPage));
  }, [user]); 

  useEffect(() => {
    if (numPages === 0) {
      setCurPage(0);
    } else {
      if (curPage === 0) {
        setCurPage(1);
      } else if (curPage > numPages) {
        setCurPage(numPages);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numPages]);

  


  //.thenใช้ในการส่งข้อมูล ...มช้ในการเพิ่มข้อมูลตัวใหม่เเละเก็บข้อมูลตัวเก่าไว้เพื่อไม่ให้ข้อมูลตัวเก่าถูกลบ

  useEffect(() => {
    Axios.get("http://localhost:3001/datausers")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
   Axios.delete('http://localhost:3001/delete/'+id).then(() => {
    setUser(
      user.filter((data) => {
        return data.id !== id;
      })
    )
   })
  };

  

  return (
    <div>
      <div className=" bg-white ">
        <div style={{ textAlign: "right", padding: "1rem" }}>
          <Link to="/create" className="btn btn-lg btn-primary">
            add
          </Link>
        </div>

        <table className="table">
          <thead>
            <tr className="table-dark" style={{ textAlign: "left" }}>
              <th>ID</th>
              <th>User</th>
              <th>Pass</th>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Tel</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "left" }}>
            {user.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.user}</td>
                <td>{data.pass}</td>
                <td>{data.name}</td>
                <td>{data.role}</td>
                <td>{data.email}</td>
                <td>{data.tel}</td>
                <td>
                <Link to={`update/${data.id}`} className="btn btn-primary">
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(data.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <form 
       className="button-spacings" style={{textAlign: "right" }}>
      <button
        className="btn btn-outline-primary button-spacing"
        onClick={() => {
          if (curPage > 1) setCurPage((p) => p - 1);
        }}
        disabled={curPage === 1}
      >
        <i className="bi bi-arrow-left-short" ></i>
      </button>
      <span className="badge">
      {curPage} / {numPages}
      </span>
      <button
        className="btn btn-outline-primary button-spacing"
        onClick={() => {
          if (curPage < numPages) setCurPage((p) => p + 1);
        }}
        disabled={curPage === numPages}
      >
        <i className="bi bi-arrow-right"></i>
      </button>
      </form>
      </div>
    </div>
  );
}

export default Profile;
