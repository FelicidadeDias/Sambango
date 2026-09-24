
const menu=document.querySelector(".menu"),nav=document.querySelector("nav");
if(menu) menu.addEventListener("click",()=>nav.classList.toggle("active"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("active")));

const form=document.querySelector("#appointmentForm");
if(form){
 form.addEventListener("submit",e=>{
  e.preventDefault();
  const get=id=>document.getElementById(id)?.value||"";
  const msg=`Olá, Centro Médico Sambango.

Gostaria de solicitar uma marcação.

Nome: ${get("nome")}
Telefone: ${get("telefone")}
Serviço/Especialidade: ${get("especialidade")}
Data pretendida: ${get("data")}
Motivo: ${get("motivo")}`;
  window.open("https://wa.me/244956967881?text="+encodeURIComponent(msg),"_blank");
 });
}
const year=document.querySelectorAll("[data-year]");
year.forEach(x=>x.textContent=new Date().getFullYear());
