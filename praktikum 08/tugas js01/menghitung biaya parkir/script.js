let hasil = document.getElementById("hasil")
        function hitungBayar(){
            let jam_masuk = document.getElementById("jam_masuk").value;
            let jam_keluar = document.getElementById("jam_keluar").value;
            let jumlah = parseInt(jam_keluar) - parseInt(jam_masuk);
            console.log(jam_keluar)
            console.log(jumlah);
            let bayar = 0;
            if(jumlah <= 2){
                bayar = 3000
            }else{
                bayar = 3000 + (1000 * (jumlah - 2));
            }
            hasil.innerHTML = parseInt(bayar);
        }