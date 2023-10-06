import './style.css'
import 'bootstrap'
import { Sorozat } from './Sorozat';

const sorozatok : Sorozat[] = [];

/*
Saját kivétel osztály

class MyError extends Error
{

}*/

function listaKiir()
{
  const lista = document.getElementById('lista')!;
  lista.innerHTML = '';
  for (const s of sorozatok)
  {
    const liElem = document.createElement('li');
    liElem.textContent = `${s.toString()}`
    lista.appendChild(liElem);
  }
}

function listahozAdas()
{
  try{
    const cim = (document.getElementById('cim') as HTMLInputElement).value;
    const epizodokDb = parseInt((document.getElementById('epizodokDb') as HTMLInputElement).value);
    const rendezoNev = (document.getElementById('rendezoNev') as HTMLInputElement).value;
  
    const sorozat = new Sorozat(cim,epizodokDb,rendezoNev)
    sorozatok.push(sorozat);
  
    //const series = document.getElementById('lista')!;
  
    //lista.innerHTML += "<li>" + (sorozat.toString()) + "</li>";
    
    //lista.innerHTML += `<li>${sorozat.toString()}</li>`;
    listaKiir();

    document.getElementById('errorUzenet')!.textContent = "";
    (document.getElementById('cim') as HTMLInputElement).value = "";
    (document.getElementById('rendezoNev') as HTMLInputElement).value = "";
    (document.getElementById('epizodokDb') as HTMLInputElement).value = "";
  } catch (e) {
    if(e instanceof Error){
      document.getElementById('errorUzenet')!.textContent = e.message;
    }
  }
  
}

function init()
{
  document.getElementById('buttonBekuld')!.addEventListener('click',listahozAdas);
}

document.addEventListener('DOMContentLoaded', init);
