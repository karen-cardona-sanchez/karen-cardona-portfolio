

dropZones = ["winnieDropZone", "nicoDropZone", "moccaDropZone"];
draggables = ["winnie", "nico", "mocca"];

//Drag Start 

draggables.forEach(id=>{
    const draggable = document.getElementById(id);
    draggable.addEventListener('dragstart', event =>{
        event.dataTransfer.setData('text/plain', event.target.id);
    })
})



dropZones.forEach( id =>{

    const dropZone = document.getElementById(id);
    dropZone.addEventListener('dragover', event=>{
        event.preventDefault();
    })

    dropZone.addEventListener('drop', event =>{
        event.preventDefault();
        const draggableID = event.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(draggableID);

        if ((id=="winnieDropZone" && draggableID=="winnie") ||
            (id == "nicoDropZone" && draggableID=="nico") ||
            (id == "moccaDropZone" && draggableID == "mocca")){
                event.target.appendChild(draggable);
                document.getElementById('dropStatus').textContent("Correct! Great job");
            }else{
                document.getElementById('dropStatus').textContent("Incorrect! Please try again.");
            }
        
    })
})



