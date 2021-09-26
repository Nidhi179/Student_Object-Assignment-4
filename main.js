//Using object Constructor ***
txt = document.getElementById('details');
h = document.getElementById('header');
class student {
    constructor(Rollno, Name, Class, dob) {
        this.Rollno = Rollno;
        this.Name = Name;
        this.Class = Class;
        this.dob = dob;
    }
    print_details(){
        h.innerHTML = "Details are: "
        txt.innerHTML = this.Rollno +" &nbsp&nbsp&nbsp"+this.Name+" &nbsp&nbsp&nbsp"+this.Class +" &nbsp&nbsp&nbsp"+this.dob;
    }
}


var student1 = new student(1,"Nidhi Bangera","D15A","17-09-2001");
student1.print_details();
function add() {
    h.innerHTML = " ";
    txt.innerHTML = " ";
    s_name = document.getElementById('S_name').value;
    s_rn = document.getElementById('s_rn').value;
    s_c = document.getElementById('s_class').value;
    s_d = document.getElementById('s_dob').value;
    student1.print_details();
    const student2 = new student(s_rn,s_name, s_c, s_d);
    student2.print_details();

}

console.log(student)
console.log(student1)

//console.log(student2)
// function print() {
//     for (var property in student) {
//         h.innerHTML = "Roll no" + "    &nbsp" + "Name" + " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp " + "Class" + " &nbsp &nbsp &nbsp" + "DOB";
//         txt.innerHTML += ' &nbsp &nbsp &nbsp' + student[property].toString().replaceAll(',', '   :  ');
//     }
// }





