const kalkulator = require('kalkulatorz');

// Meminta input dari pengguna
var inputTeks = prompt("Masukkan teks yang ingin diulang: ");
var jumlahUlang = parseInt(prompt("Masukkan jumlah pengulangan: "));

// Memastikan input jumlah pengulangan adalah angka
if (!isNaN(jumlahUlang)) {
    // Looping untuk mencetak teks sebanyak yang diminta
    for (var i = 0; i < jumlahUlang; i++) {
        console.log(inputTeks);
    }
} else {
    console.log("Input jumlah pengulangan harus berupa angka.");
    console.log(kalkulator.tambah(5, 3)); // Output: 8
    console.log(kalkulator.kurang(10, 4)); // Output: 6
}
