function main() {
    var userChoice = prompt("Masukkan pilihan Anda (1 untuk batu, 2 untuk gunting, 3 untuk kertas): ");

    // Memastikan input pengguna adalah angka dan dalam rentang yang valid
    if (userChoice === "1" || userChoice === "2" || userChoice === "3") {
        var computerChoice = Math.floor(Math.random() * 3) + 1; // Menghasilkan pilihan komputer secara acak (1-3)

        // Menampilkan pilihan pengguna dan komputer
        console.log("Pilihan Anda: " + getChoiceName(userChoice));
        console.log("Pilihan Komputer: " + getChoiceName(computerChoice.toString()));

        // Menampilkan hasil permainan
        var result = determineWinner(parseInt(userChoice), computerChoice);
        console.log(result);
    } else {
        console.log("Input tidak valid. Silakan masukkan 1 untuk batu, 2 untuk gunting, atau 3 untuk kertas.");
    }
}

function getChoiceName(choice) {
    switch (choice) {
        case "1":
            return "Batu";
        case "2":
            return "Gunting";
        case "3":
            return "Kertas";
    }
}

function determineWinner(user, computer) {
    if (user === computer) {
        return "Hasil: Seri!";
    } else if ((user === 1 && computer === 2) ||
               (user === 2 && computer === 3) ||
               (user === 3 && computer === 1)) {
        return "Hasil: Anda Menang!";
    } else {
        return "Hasil: Anda Kalah!";
    }
}

// Menjalankan permainan
main();
