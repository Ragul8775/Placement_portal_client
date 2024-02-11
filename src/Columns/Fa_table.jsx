export const Fa_column = () => [
  {
    name: "S.No",
    selector: (_, index) => index + 1, // Add 1 because index starts from 0
    sortable: true,
    width: "75px", // Optional: if you want to set a specific width for this column
  },
  {
    name: "Faculty Advisor",
    selector: (row) => row.fa_name,
    sortable: true,
    width: "150px",
  },
  {
    name: "Section",
    selector: (row) => row.section,
    sortable: true,
  },
  {
    name: "Placed",
    selector: (row) => row.num_placed,
    sortable: true,
  },
  {
    name: "Internship",
    selector: (row) => row.num_intern,
    sortable: true,
  },
  {
    name: "Higher Studies",
    selector: (row) => row.num_higher_studies,
    sortable: true,
  },
  {
    name: "Unplaced",
    selector: (row) => row.num_unplaced,
    sortable: true,
  },
  {
    name: "Total",
    selector: (row) => row.total_students,
    sortable: true,
  },
];
