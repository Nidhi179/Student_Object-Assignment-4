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
    print_details() {
        try {
            if (x == 0) throw "is zero";
            if (isNaN(x)) throw "not a number";
            h.innerHTML = "Details are: "
            txt.innerHTML = this.Rollno + " &nbsp&nbsp&nbsp" + this.Name + " &nbsp&nbsp&nbsp" + this.Class + " &nbsp&nbsp&nbsp" + this.dob;
        }
        catch (err) {
            message.innerHTML = "Input " + err;
        }
    }

}


var student1 = new student(1, "Nidhi Bangera", "D15A", "17-09-2001");
student1.print_details();
function add() {
    h.innerHTML = " ";
    txt.innerHTML = " ";
    s_name = document.getElementById('S_name').value;
    s_rn = document.getElementById('s_rn').value;
    s_c = document.getElementById('s_class').value;
    s_d = document.getElementById('s_dob').value;
    student1.print_details();
    const student2 = new student(s_rn, s_name, s_c, s_d);
    student2.print_details();

}






