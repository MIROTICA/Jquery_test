$(document).ready(function() {
    if (document.querySelector(".price_all .sale").classList.contains("displaynone")) {
        // 할인 없을때 css 변경
        var customPrices = document.querySelectorAll(".price_all .custom_list");

        for (var i of customPrices) {
            i.style.textDecoration = "none";
            i.style.color = "black";
            i.style.fontSize = "15px";
        }
    } else {
        // 할인율 적용
        var prdPriceSale = document.getElementsByClassName("prdPriceSale");

        for (let i of prdPriceSale) {
            var prices = i.innerText.split("원");
            var salePrice = prices[0].replaceAll(",","");
            var customPrice = prices[1];
            var discountRate = Math.ceil((customPrice - salePrice) / customPrice * 100) + "%";

            /*
            console.log(salePrice + ", " + customPrice);
            console.log(discountRate);
             */

            i.nextElementSibling.children[0].innerText = discountRate;
        }
    }
});
