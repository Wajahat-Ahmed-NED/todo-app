var a = document.getElementById('inp')
var dv = document.getElementById('main')

firebase.database().ref('todos').on('child_added', function (data) {
    console.log(data.val().name)
    var newElement = document.createElement('P');
    newElement.setAttribute('class', 'bg-light ')

    // e.preventDefault()

    // console.log("hello world")
    var text = 'It is a simple text';
    var text = document.createTextNode(data.val().name)
    newElement.appendChild(text)
    dv.appendChild(newElement)


    // a.value=' ';


    // var text = '  ';
    // text = document.createTextNode(text)
    // // btnEdit.appendChild(text)    
    // newElement.appendChild(text)



    var btnDel = document.createElement('BUTTON');
    btnDel.setAttribute('id',data.val().key)
    btnDel.setAttribute('onclick', 'delBtn(this)')
    btnDel.setAttribute('class', 'btn btn-danger')
    var text = 'Delete';
    text = document.createTextNode(text)
    btnDel.appendChild(text)
    newElement.appendChild(btnDel)
    dv.appendChild(newElement)
    // document.write("  ")


    var text = '  ';
    text = document.createTextNode(text)
    // btnEdit.appendChild(text)    
    newElement.appendChild(text)

    var btnEdit = document.createElement('BUTTON')
    btnEdit.setAttribute('onclick', 'editBtn(this)')
    btnEdit.setAttribute('class', 'btn btn-danger')
    btnEdit.setAttribute('id',data.val().key)

    var text = 'Edit';
    text = document.createTextNode(text)
    btnEdit.appendChild(text)
    newElement.appendChild(btnEdit)
    dv.appendChild(newElement)
})

function chek() {

    // console.log(firebase)
    var database = firebase.database().ref('todos')
    var key = database.push().key
    var todo = {
        name: a.value,
        key: key,
    }
    database.child(key).set(todo);
    // console.log(key)
    a.value=" "

}

function delAll() {
    // console.log('is me')
    firebase.database().ref('todos').remove()
    dv.remove()
}

function editBtn(e) {
    // console.log(e.parentNode.firstChild.nodeValue)
    // e.parentNode.firstChild.remove; 
    // var text=document.createTextNode(a.value)
    // newElement.appendChild(text)
    var val = prompt("Enter a new value", e.parentNode.firstChild.nodeValue)

    var newObj={
        name:val,
        key:e.id,
    }
    firebase.database().ref('todos').child(e.id).set(newObj)
    // console.log(e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=val;

}

function delBtn(e) {
    firebase.database().ref('todos').child(e.id).remove();
    e.parentNode.remove();
}


