var products = []

function tambahManusia() {     
    var namaProduk = document.getElementById('nama').value;
    var hargaProduk = document.getElementById('harga').value;
    var kategoriProduk = document.getElementById('category').value;
    var kondisiProduk = document.querySelector('input[name=condition]:checked').value;

    var obj = {
        namaProduk,
        hargaProduk,
        kategoriProduk,
        kondisiProduk
    }
    products.push(obj)
    showList1()
}

function showList1(){
    var list = products.map(function(element){
        return(
            `
                <tr>
                    <td>${element.namaProduk}</td>
                    <td>${element.hargaProduk}</td>
                    <td>${element.kategoriProduk}</td>
                    <td>${element.kondisiProduk}</td>
                </tr>
            `
        )
    })
    document.getElementById('hasilProduk').innerHTML=list.join('')
    document.getElementById('formProduk').reset();
}
showList1()

var hewan = []

function tambahHewan() {     
    var namaHewan = document.getElementById('namaHewan').value;
    var hargaHewan = document.getElementById('hargaHewan').value;
    var kelaminHewan = document.querySelector('input[name=condition1]:checked').value;
    var statusHewan = document.querySelector('input[name=condition2]:checked').value;

    var objHewan = {
        namaHewan,
        hargaHewan,
        kelaminHewan,
        statusHewan
    }
    hewan.push(objHewan)
    showList2()
}

function showList2(){
    var list = hewan.map(function(element){
        return(
            `
                <tr>
                    <td>${element.namaHewan}</td>
                    <td>${element.hargaHewan}</td>
                    <td>${element.kelaminHewan}</td>
                    <td>${element.statusHewan}</td>
                </tr>
            `
        )
    })
    document.getElementById('hasilHewan').innerHTML=list.join('')
    document.getElementById('formHewan').reset();
}
showList2()