var satu = document.getElementById("no1");
satu.addEventListener("click",  function() {
    let kata = document.getElementById("input1").value;
    let jumlah = document.getElementById("input_1").value;
    let panjang = kata.length;

    let kiri = kata.substr(0, jumlah);
    let kanan = kata.substring((panjang)-jumlah, (panjang));
    document.getElementById("one").innerHTML = "Hasilnya :" + kiri + kanan;
});

var dua = document.getElementById("no2");
dua.addEventListener("click", function name() {
    let kata = document.getElementById("input2").value;
    if(kata != "" || kata != null){
        document.getElementById("two").innerHTML = "TRUE";
    } else {
        document.getElementById("two").innerHTML = "FALSE";
    }
});

var tiga = document.getElementById("no3");
tiga.addEventListener("click", function(){
    let inputMenit = prompt("Masukkan Banyak Menit !", 200);
    let jam = parseInt(inputMenit / 60);
    let menit = 200 % 60;

    alert("Hasilnya : " + jam + " Jam " + menit + " Menit !");
})

var empat = document.getElementById("no4");
empat.addEventListener("click", function(){
    let inputEmail = document.getElementById("input4").value;
    let at = inputEmail.search("@");
    let cari = inputEmail.substring(at-3, at);
    let tuker = inputEmail.replace(cari, "...");
    let gagal = "Not Valid";
    if(at == -1){
        result = gagal;
    } else {
        result = tuker;
    }

    alert("Your Email is : " + result);
})

var lima = document.getElementById("no5");
lima.addEventListener("click", function(){
    let kalimat = document.getElementById("input5").value;
    let kata = document.getElementById("input_5").value;
    let len = kalimat.length;
    let len2 = kata.length;
    var hasil = 0;
    var i = 0;

    while (i < (len - len2)) {
        if (kata == kalimat.substr(i, len2)) {
            hasil += 1;
            i += len2 - 1;
        }
        i++;
    }

    document.getElementById("five").innerHTML = "Jumlah Kata yang ditemukan : " + hasil;
})