export const student_column = () => [
  {
    name: "S.No",
    selector: (_, index) => index + 1, // Add 1 because index starts from 0
    sortable: true,
    width: "75px", // Optional: if you want to set a specific width for this column
  },
  {
    name: "Reg.No",
    selector: (row) => row.reg_no,
    sortable: true,
    width: "150px",
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },

  {
    name: "Full Name",
    selector: (row) => row.full_name,
    sortable: true,
  },

  {
    name: "Section",
    selector: (row) => row.section,
    sortable: true,
  },
  {
    name: "Mail",
    selector: (row) => row.personal_mail,
    sortable: true,
  },
  {
    name: "SRM.Mail",
    selector: (row) => row.srm_mail,
    sortable: true,
  },
  {
    name: "Specialization",
    selector: (row) => row.specialization,
    sortable: true,
  },

  {
    name: "D.O.B",
    selector: (row) => row.dob,
    sortable: true,
  },
  {
    name: "Placement",
    selector: (row) => row.placement,
    sortable: true,
  },
  {
    name: "Mobile-No",
    selector: (row) => row.mobile_no,
    sortable: true,
  },
  {
    name: "FA",
    selector: (row) => row.fa,
    sortable: true,
  },
];
