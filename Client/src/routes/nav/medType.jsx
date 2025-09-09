import Topic from "../../components/Topic";
import MyTable from "../../components/myTable";

const MedType = () => {
  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleString(); // This will include both date and time
  };
  const columns = [
    {
      name: "รหัสหมวดหมู่",
      selector: (row) => row.type_id,
      sortable: true,
      noEdit: true
    },
    {
      name: "ชื่อ",
      selector: (row) => row.medType,
      sortable: true,
    },
    {
      name: "รายละเอียด",
      selector: (row) => row.medTypeDetail,
      sortable: true,
    },
    {
      name: "วันที่สร้าง",
      selector: (row) => formatDateTime(row.Date),
      sortable: true,
    },
  ];
  return (
    <div>
      <Topic topicTitle="หมวดหมู่" description="สร้างหมวดหมู่ของยา" path="/admin/addMedType"/>
      <MyTable columns={columns} table={"medtype"} />
    </div>
  );
};

export default MedType;
