let todo = [];

let updateTodoList = function(){
    const getDiv = document.querySelector('.todo_list');
    getDiv.innerHTML = '';
    todo.forEach(item => {
        let outDiv = document.createElement('div');
        let inDiv = document.createElement('div')
        let imgDiv = document.createElement('div');
        let input = document.createElement('input');
        let p = document.createElement('p');
        let img = document.createElement('img');
        let strike = document.createElement('strike');
        input.addEventListener('change',()=>{
            if(input.checked){
                strike.textContent = p.textContent;
                inDiv.removeChild(p);
                inDiv.appendChild(strike);
            }
            else {
                inDiv.removeChild(strike);
                p.textContent = strike.textContent;
                inDiv.appendChild(p);
            }
            item.checked = input.checked;

        });
        inDiv.appendChild(input);
        inDiv.appendChild(p);
        imgDiv.appendChild(img);
        outDiv.appendChild(inDiv);
        outDiv.appendChild(imgDiv);
        outDiv.className = 'div0';
        inDiv.className = 'checkboxAndp';
        imgDiv.className = 'img';
        img.className = 'icon';
        img.src = 'icon.png';
        input.type = 'checkbox';
        p.textContent = item.text;
        if (item.checked) {
            input.checked = true;
            strike.textContent = p.textContent;
            inDiv.removeChild(p);
            inDiv.appendChild(strike);
        }
        getDiv.appendChild(outDiv);
        img.addEventListener('click', ()=>delete_todo(item.id));
    });
};

let addTodo = ()=>{
    let new_input = document.querySelector('.input').value;
    if(new_input == ''){
        return;
    }
    todo.push({id:Date.now(), text: new_input});
    updateTodoList();
    document.querySelector('.input').value = '';
}

let delete_todo = function(id){
    todo = todo.filter((item) => item.id != id);
    updateTodoList();
}

let btn_add = document.querySelector('.btn');
btn_add.addEventListener('click',addTodo);