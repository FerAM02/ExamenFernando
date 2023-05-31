let Tareas = []
let dato;
function agregarTarea(){
    let tarea = document.getElementById("tareaInput").value;
  dato="";
    console.log(tarea);
    agregar(tarea);
}

function agregar(tareaInput){
    Tareas.push(tareaInput);

    for( var i = 0; i< Tareas.length; i++)
    dato+=`<li>${Tareas[i]}</li>`;
    document.getElementById("lista").innerHTML=dato;
    
}

