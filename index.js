
/*--------------------------------------------------------------------------------------------------------------------- */
function guardar(){
    class Employees {
        constructor(nameOfPerson, jobOfPerson, workPlace, admissionTime, dischargeTime, totalHours) //horaIngreso,horaSalida) 
        {   
            this.nameOfPerson  = nameOfPerson;
            this.jobOfPerson   = jobOfPerson;
            this.workPlace     = workPlace;
            this.attendance    = false;
            this.admissionTime = parseFloat(admissionTime);
            this.dischargeTime = parseFloat(dischargeTime);
            this.totalHours    = parseFloat(totalHours);
        }
    
    
        assist() //crear una condicion para q ingrese a un contador en caso q falte y otro en caso q asista
        {
            this.attendance = true;
    
        }
    
        startDischargeTime() {
            this.dischargeTime = parseFloat(prompt("ATENCION: Las horas y minutos se separan por un punto\nHora de egreso: "));
        }
    
        totalHoursWorked() 
        {
            this.totalHours = this.dischargeTime - this.admissionTime; 
        }
    } 



    const people = [];

    let namePerson    = document.getElementById("nameOfPerson").value;
    let occupation    = document.getElementById("jobOfPerson").value;
    let office        = document.getElementById("workPlace").value;
    let admission     = document.getElementById("admissionTime").value;

    const employee = new Employees(namePerson, occupation, office, admission); 
    employee.assist();
    people.push(employee);

    const save = () => {
        localStorage.setItem("people", JSON.stringify(people)) /* este modo le mando string a local storage  */
        }
    save();

    const infoForm = document.querySelector("#formulario")

    infoForm.addEventListener("submit", (e) =>{
        e.preventDefault();
        infoForm.reset();

    });


    for (const person of people){
        let contenedor = document.createElement ("div");
  
        contenedor.innerHTML = 
        `<table class="table">
        <tbody>
        <tr>
            <td>${person.nameOfPerson}</td>
            <td>${person.jobOfPerson}</td>
            <td>${person.workPlace}</td>
            <td>${person.admissionTime}</td>
        </tr>
        </tbody>
    </table>`;
    document.body.appendChild(contenedor);
}

}; 

