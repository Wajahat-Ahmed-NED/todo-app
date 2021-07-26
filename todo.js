var a=document.getElementById('inp')
var dv=document.getElementById('main')

function chek(){
    var newElement=document.createElement('P');
    newElement.setAttribute('class','bg-light ')
    // e.preventDefault()
    
    // console.log("hello world")
    // var text='It is a simple text';
    var text=document.createTextNode(a.value)
    newElement.appendChild(text)
    dv.appendChild(newElement)


    a.value=' ';

    
    var text='  ';
    text=document.createTextNode(text)
    // btnEdit.appendChild(text)    
    newElement.appendChild(text)    



    var btnDel=document.createElement('BUTTON');
    btnDel.setAttribute('onclick','delBtn(this)')
    btnDel.setAttribute('class','btn btn-danger')
    var text='Delete';
    text=document.createTextNode(text)
    btnDel.appendChild(text)
    newElement.appendChild(btnDel)
    dv.appendChild(newElement)
    // document.write("  ")


    var text='  ';
    text=document.createTextNode(text)
    // btnEdit.appendChild(text)    
    newElement.appendChild(text)    

    var btnEdit=document.createElement('BUTTON')
    btnEdit.setAttribute('onclick','editBtn(this)')
    btnEdit.setAttribute('class','btn btn-danger')

    var text='Edit';
    text=document.createTextNode(text)
    btnEdit.appendChild(text)    
    newElement.appendChild(btnEdit)    
    dv.appendChild(newElement)
}

function delAll(){
    // console.log('is me')
    dv.remove();
}

function editBtn(e){
    // console.log(e.parentNode.firstChild.nodeValue)
    // e.parentNode.firstChild.remove; 
    // var text=document.createTextNode(a.value)
    // newElement.appendChild(text)
    e.parentNode.firstChild.nodeValue=prompt("Enter a new value",e.parentNode.firstChild.nodeValue)
    // console.log(e.parentNode.firstChild.nodeValue)
}

function delBtn(e){
    e.parentNode.remove()
}

 
