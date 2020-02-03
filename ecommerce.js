var products = []

function addNewProduct() {     
    var namaProduk = document.getElementById('nama').value;
    var hargaProduk = document.getElementById('harga').value;
    var stockProduk = document.getElementById('stock').value;
    var kategoriProduk = document.getElementById('category').value;
    var kondisiProduk = document.querySelector('input[name=condition]:checked').value;

    var obj = {
        namaProduk,
        hargaProduk,
        stockProduk,
        kategoriProduk,
        kondisiProduk
    }
    products.push(obj)
    showList()
}

function showList(){
    var list = products.map(function(element){
        return(
            `
                <tr>
                    <td>${element.namaProduk}</td>
                    <td>${element.hargaProduk}</td>
                    <td>${element.stockProduk}</td>
                    <td>${element.kategoriProduk}</td>
                    <td>${element.kondisiProduk}</td>
                </tr>
            `
        )
    })
    document.getElementById('hasil').innerHTML=list.join('')
}
showList()