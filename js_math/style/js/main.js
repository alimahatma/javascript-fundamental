let luas;
let keliling;
let lebar;
let panjang;

function hitung() {
    lebar = parseFloat(document.getElementById("in_lebar").value);
    panjang = parseFloat(document.getElementById("in_panjang").value);

    luas  = panjang * lebar;
    keliling = 2 * (panjang + lebar);

    document.getElementById('out_luas').value = luas;
    document.getElementById('out_kel').value = keliling;
}