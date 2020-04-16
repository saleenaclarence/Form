const myform= document.querySelector('#form');
const email= document.querySelector('#email');
const name= document.querySelector('#name');
const msg= document.querySelector('.msg');
const users= document.querySelector('#users');

myform.addEventListener('submit', whensubmit);
function whensubmit(e)
{
  e.preventDefault();
    if(name.value==='' || email.value===''){
    msg.innerHTML='please enter both fields';
    setTimeout(()=>msg.remove(),2000);
    }
    else{
      const li= document.createElement('li');
      li.appendChild(document.createTextNode(`${name.value}: ${email.value}`));
      
      users.appendChild(li);
      name.value='';
      email.value='';
    }
}
