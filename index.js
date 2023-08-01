let insertBtn = document.getElementById("btn1");
let delBtn = document.getElementById("btn2");
let fstName = document.getElementById("firstName");
let lstName = document.getElementById("lastName");
let tab = document.getElementById("tableBodyId");
let para = document.getElementById("span1");
let count = 0;
let fstactive = 0;
let sndactive = 0;


insertBtn.addEventListener('click',()=>{
    count = count + 1;
    fst = fstName.value;
    lst = lstName.value;
    trEl = document.createElement("tr");
    tdEl1 = document.createElement("td");
    tdEl2 = document.createElement("td");
    tdEl1.textContent = fst;
    tdEl2.textContent = lst;
    trEl.appendChild(tdEl1);
    trEl.appendChild(tdEl2);
    trEl.id = `ID:${count}`;
    tab.appendChild(trEl); 

    console.log(trEl);
    para.classList.remove("para2");
    para.classList.add("para");
    if(sndactive > 0){
        delBtn.classList.toggle("active");
        sndactive = 0;
    }
    insertBtn.classList.add("active");
    fstactive = 1;
});

delBtn.addEventListener('click',()=>{
    if(count != 0){
        el = document.getElementById(`ID:${count}`);
        console.log(el)
        tab.removeChild(el);
        para.classList.remove("para");
        para.classList.add("para2");
        count--;

        if(fstactive === 1){
            insertBtn.classList.toggle("active");
            fstactive = 0;
        }
        delBtn.classList.add("active");
        sndactive = 1;
    }
});