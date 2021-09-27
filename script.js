
let student_obj = {
  1: ["Nidhi Bangera", "D15A", "17-09-2001"],
  2: ["Sanjana Bhardwaj", "D15A", "18-04-2001"],
  3: ["Anusha Shetty", "D15A", "13-12-2001"],
  4: ["Bhavika Bulani", "D15A", "03-01-2001"],
  5: ["Shilpa Tholar", "D15A", "03-01-2001"],
  6: ["Aditi Singh", "D15A", "16-01-2001"]
}
txt = document.getElementById('details');
h = document.getElementById('header');



function add() {
  s_name = document.getElementById('S_name').value;
  s_rn = document.getElementById('s_rn').value;
  s_c = document.getElementById('s_class').value;
  s_d = document.getElementById('s_dob').value;
  try {
    if (Number(s_rn) == 0) {
      throw "Roll no entered is zero";
    }
    h.innerHTML = " ";
    txt.innerHTML = " ";
    student_obj[s_rn] = [s_name, s_c, s_d];

  }
  catch (err) {
    alert(`${err}`)
  }
}


function print() {
  for (var property in student_obj) {
    h.innerHTML = "Roll no" + "    &nbsp" + "Name" + " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp " + "Class" + " &nbsp &nbsp &nbsp" + "DOB";
    txt.innerHTML += '&nbsp &nbsp' + property + '&nbsp &nbsp &nbsp &nbsp' + student_obj[property].toString().replaceAll(',', '   :  ') + '<br>';
  }
}


