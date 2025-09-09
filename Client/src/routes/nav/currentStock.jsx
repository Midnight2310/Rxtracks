/* eslint-disable react-hooks/exhaustive-deps */
import Topic from "../../components/Topic";
import MyTable from "../../components/myTable";

const statusSelector = (row) => row.status;

const columns = [
  {
    name: "รหัสยา",
    selector: (row) => row.med_id,
    sortable: true,
    noEdit: true,
  },
  {
    name: "ชื่อ",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "สถานะ",
    selector: (row) => (
      <span
        className={`badge ${
          row.status === "ปกติ"
            ? "bg-success"
            : row.status === "ใกล้หมดอายุ"
            ? "bg-secondary"
            : row.status === "ใกล้หมด"
            ? "bg-warning"
            : "bg-danger"
        }`}
      >
        {row.status}
      </span>
    ),
    sortable: true,
    noEdit: true,
    detailSelector: statusSelector, // Use the new statusSelector for rendering details
    inputSelector: statusSelector,// Use the new statusSelector for rendering input fields
  },
  {
    name: "จำนวน",
    selector: (row) => row.medQuantity,
    sortable: true,
    noEdit: true,
  },
  {
    name: "หน่วย",
    selector: (row) => row.medUnit,
    sortable: true,
    noEdit: true,
  },
  {
    name: "ประเภท",
    selector: (row) => row.medType,
    sortable: true,
    noEdit: true,
  },
  {
    name: "ตำแหน่ง",
    selector: (row) => row.location_name,
    sortable: true,
    choices: ["A", "B", "C"],
  },
];

const CurrentStock = () => {
  return (
    <div>
      <Topic
        topicTitle={"ยอดยาคงคลัง"}
        description={"ดูจำนวนยาภายในคลัง, จัดการยา"}
        // path={"/admin/addStock"}
      ></Topic>

      <MyTable
        columns={columns}
        table={"medicine"}
        pk={"med_id"}
        deleteDisable={true}
      />
    </div>
  );
};

export default CurrentStock;
