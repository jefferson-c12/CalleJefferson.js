//INDEX

let addProdBtn = document.getElementById("button")

addProdBtn.addEventListener("click", () => {
    class Product { 
        constructor(nameProd, priceProd, codeProd) {
            this.nameProd = nameProd;
            this.priceProd = priceProd;
            this.codeProd = codeProd;
        };
    };
    let nameAdded = document.getElementById("nameProd").value;
    let priceAdded = document.getElementById("priceProd").value;
    let codeAdded = document.getElementById("codeProd").value;
    newProd = new Product(nameAdded, priceAdded, codeAdded); 
    prodAdd();
    document.getElementById("tbl").innerHTML +=(`
    <tbody>
    <td>${newProd.nameProd}</td>
    <td>${newProd.priceProd}</td>
    <td>${newProd.codeProd}</td>
    </tbody>
    `)
    save_localStorage();
    setTimeout(() => {
        Toastify({
            text: "Se agregó con éxito.",
            className: "info",
            style: {
                    background: "linear-gradient(to right, green, green)",
                }}).showToast();
    }, 1000);
});

let dataBase = [];

prodAdd = () => {
    dataBase.push(newProd);
};

//localStorage (ls_...)

function save_localStorage() {
    localStorage.setItem("producto", JSON.stringify(dataBase))
};

get_localStorage = () => {
    if(localStorage.getItem("producto")) {
        ls_prodAdded = JSON.parse(localStorage.getItem("producto"));
        return ls_prodAdded;
    }else{
        console.log("No se encontraron productos guardados");
    };
};

// lista de los productos guardados en el el LocalStorage

document.addEventListener('DOMContentLoaded', () => {
    class Product_ls {
        constructor(ls_nameProd, ls_priceProd, ls_codeProd) {
            this.ls_nameProd = ls_nameProd;
            this.ls_priceProd = ls_priceProd;
            this.ls_codeProd = ls_codeProd;
        };
    };
    let ls_nameAdded = get_localStorage().map((ls_prodAdded) => {
        return ls_prodAdded.nameProd;
    });
    let ls_priceAdded = get_localStorage().map((ls_prodAdded) => {
        return ls_prodAdded.priceProd;
    });
    let ls_codeAdded = get_localStorage().map((ls_prodAdded) => {
        return ls_prodAdded.codeProd;
    });
    ls_newProd = new Product_ls(ls_nameAdded, ls_priceAdded, ls_codeAdded);
    ls_product = document.getElementById("ls_tbl").innerHTML +=(
        `
        <tbody>
        <div class="ls_div">
        <td>${ls_newProd.ls_nameProd}</td>
        <td>$ ${ls_newProd.ls_priceProd}</td>
        <td>${ls_newProd.ls_codeProd}</td>
        </div>
        </tbody>
        `
    );
});




