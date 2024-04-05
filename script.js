let buku = [
    {"Sherlock": "sherlock", "jumlah":1},
    {"Lupin": "lupin", "jumlah":2},
    {"Aladin": "aladin", "jumlah":3},
];

function checkAvailability() {
    let jumlah = document.getElementById('jumlah').value;
    let pilihan = document.getElementById('pilihan').value;

    if (jumlah === '') {
        alert('Masukkan jumlah buku');
        return;
    }

    let bukuDitemukan = false;
    for (let i = 0; i < buku.length; i++) {
        if (buku[i].nama === pilihan) {
            bukuDitemukan = true;
            if (parseInt(jumlah) > buku[i],jumlah) {
                alert('Jumlah buku tidak tersedia');
            } else {
                alert('Silahkan ambil buku anda');
            }
            break;
        }
    }

    if (!bukuDitemukan) {
        alert('Buku tidak ditemukan');
    }
}