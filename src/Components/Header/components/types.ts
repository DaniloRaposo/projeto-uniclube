export type TStore = {
  image: string;
  label: string;
};

export type TDepartment = {
  name: string;
  subdepartments: string[];
  lastItemType: "see-more" | "all-departments";
};
