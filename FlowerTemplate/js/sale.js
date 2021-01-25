var price_prd = document.querySelectorAll(".btn");

for (var i = 0; i < price_prd.length; i++) {

    price_prd[i].addEventListener("click", function(e) {
        e.preventDefault();


        if (JSON.parse(localStorage.getItem("basket")) === null) {
            localStorage.setItem("basket", JSON.stringify([]))
        }


        let basket = JSON.parse(localStorage.getItem("basket"));
        let id = this.getAttribute("data-id");
        let img = this.parentElement.parentElement.previousElementSibling.getAttribute("src");
        let name = this.previousElementSibling.previousElementSibling.innerText;
        let existPro = basket.find(p => p.id == id);

        let dprice = this.previousElementSibling.getAttribute("data-price");

        if (existPro === undefined) {
            basket.push({
                id: id,
                img: img,
                name: name,
                count: 1,
                price: dprice
            })

        } else {
            existPro.count += 1
        }

        localStorage.setItem("basket", JSON.stringify(basket));
        countBasket();
    })
}



function countBasket() {
    let basket = JSON.parse(localStorage.getItem("basket"))
    document.getElementById("basket-count").innerText = basket.length
}
countBasket();

$(document).ready(function() {
    let basket = JSON.parse(localStorage.getItem("basket"))
    let table = document.querySelector("#GeneralCardList");

    for (elm of basket) {

        let tr = document.createElement("tr");
        let tdImg = document.createElement("td");
        let tdName = document.createElement("td");
        let tdCount = document.createElement("td");
        let divName = document.createElement("div")
        let divPrice = document.createElement("div")
        let img = document.createElement("img");



        img.setAttribute("src", elm.img);
        img.setAttribute("style", "max-width:55px!important;height:70px !important;margin-left:35px!important;")
        tdName.setAttribute("style", "display:block")
        tdName.setAttribute("style", "padding:3px;")
        table.setAttribute("style", "width:300px;")
        tr.setAttribute("style", "margin-bottom:50px;")

        divName.innerText = elm.name;
        divPrice.innerText = elm.count + " x " + elm.price + "$";

        tdName.append(divName, divPrice)
        tdImg.appendChild(img);
        tr.append(tdImg, tdName, tdCount);
        table.lastElementChild.appendChild(tr);
        // i++;



    }



    $("#GeneralCardList").hide()


    $(".GeneralCard").mouseenter(function() {
        $("#GeneralCardList").show()
    })
    $(".GeneralCard").mouseleave(function() {
        $("#GeneralCardList").hide()
    })

    $("#GeneralCardList").mouseenter(function() {
        $(this).show()
    })
    $("#GeneralCardList").mouseleave(function() {
        $(this).hide()
    })
    $("#GeneralCardList").css({ "z-index": "1000", "position": "fixed", "background-color": "#fff" })
})


function price(x) {
    x.innerText = "Add to cart";

}
let price5 = document.querySelector(".none_price")


function normalprice(x) {
    x.innerText = price5.innerText;

}