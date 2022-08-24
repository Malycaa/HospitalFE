export const truncate = (str, n) => {
  return str.length > n ? str.slice(0, n - 1) + ".." : str;
};

export const today = (dates) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var x = dates !== null ? (dates ?? "").substring(0, 10) : null;
  var x2 = replaceAll(x ?? "", "-", "/") ?? null;
  return x2 !== "" ? x2 : yyyy + "/" + mm + "/" + dd;
};

export const replaceAll = (str, find, replace) => {
  return str.replace(new RegExp(find, "g"), replace);
};

export const genderSelect = [
  {key: 0, label : 'Select Gender'},
  {key: 1, label : 'Male'},
  {key: 2, label : 'Female'},
];
