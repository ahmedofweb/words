const checkbox = document.getElementById('checkbox');
const label = document.querySelector('.label')
const body = document.body

const log = localStorage.getItem("mode");
const btn = localStorage.getItem("btn");

if (log) {
  body.classList.add("dark");
}

if (btn) {
  label.classList.add("active");
}

checkbox.addEventListener('click', ()=>{
  if(!document.body.classList.contains("dark")){
    label.classList.add("active")
    document.body.classList.add('dark');
    localStorage.setItem("mode", "dark");
    localStorage.setItem("btn", "on");
  }else{
    label.classList.remove("active")
    document.body.classList.remove('dark');
    localStorage.setItem("mode", "");
    localStorage.setItem("btn", "");
  }
})