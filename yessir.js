Load = () => {
    return console.log("JS Connected!!");
}

function Adicionar (){
    let task = document.getElementById("task").value;

    let add = document.createElement("li");
    add.appendChild(task);

    let list = document.createElement("ul");
    list.appendChild(add);

    return document.appendChild(list);
}

function Remover (){
    

}