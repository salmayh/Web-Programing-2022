function konversiuang() {
    let input = (document.form.nilai.value);
    let konversuang = (document.form.uangasing.value);
    let hasil = 0;
    if(konversuang == "USD"){
        hasil = input*9915;
    }
    else if(konversuang == "SGD"){
        hasil = input*13372;
    }
    else if(konversuang == "RM"){
        hasil = input*874;
    }
    else if(konversuang == "YEN"){
        hasil = input*120;
    }
    else if(konversuang == "EURO"){
        hasil = input*15888;
    }
    else if(konversuang == "SR"){
        hasil = input*2000;
    }
    else{
        hasil = 0;
    }
    document.form.kurs.value=eval(hasil);
}