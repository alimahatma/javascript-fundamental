//menyeleksi dengan id -> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = "Gibran Raqqila Firaz";


//getElementByTagName() -> HTMLCollections
const p = document.getElementsByTagName('p');
for ( let i = 0; i < p.length; i++) {
    p[i].style.background = '#add8e6';
}


