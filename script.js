
let student_obj = {
  1: ["Nidhi Bangera", "D15A", "17-09-2001"],
  2: ["Elena Gilbert", "D15A", "8-01-2001"],
  3: ["Anusha Shetty", "D15A", "10-10-2001"],
  4: ["Bhavika Bulani", "D15A", "20-05-2001"]
}
txt = document.getElementById('details');
h = document.getElementById('header');

function add() {
  h.innerHTML = " ";
  txt.innerHTML = " ";
  s_name = document.getElementById('S_name').value;
  s_rn = document.getElementById('s_rn').value;
  s_c = document.getElementById('s_class').value;
  s_d = document.getElementById('s_dob').value;
  student_obj[s_rn] = [s_name, s_c, s_d];
}
function print() {
  for (var property in student_obj) {
    h.innerHTML = "Roll no" + "    &nbsp" + "Name" + " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp " + "Class" + " &nbsp &nbsp &nbsp" + "DOB";
    txt.innerHTML += '&nbsp &nbsp' + property + '&nbsp &nbsp &nbsp &nbsp' + student_obj[property].toString().replaceAll(',', '   :  ') + '<br>';
  }
}
