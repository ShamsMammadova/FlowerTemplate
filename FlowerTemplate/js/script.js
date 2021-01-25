"use strict";

// -------------Start Header

$(document).on("click", ".mobile-menu", function() {
    $("#mobile-nav").slideToggle();
});
$(document).on("click", ".mob-li i", function() {
    $(this).parent().next().slideToggle();
});

// -----------------End Header






// ---------------------------Filter gallery  section start 

$('.list li.filter-button').click(function() {
    // event.preventDefault();
    // var filter = $(event.target).attr('data-filter');        
    console.log(this)
    $('#gallery_item img').each(function() {
        var item = $(this);
        if ((item.attr('data-category').indexOf(filter) != -1))
            item.show();
        else
            item.hide();
    });
});



// Slider start


// slider
let count = 0;
$(".right").click(function() {
    if (count < 3) {
        count++;
        $(".images").animate({
            "margin-left": "-" + 100 * count + "%"
        })
        showHide(count)
    }
    console.log(count)
})

$(".left").click(function() {
    if (count > 0) {
        count--;
        $(".images").animate({
            "margin-left": "-" + 100 * count + "%" //"-100%"
        })
        showHide(count)
    }
    console.log(count)
})

function showHide(count) {
    switch (count) {
        case 0:
            $(".left").hide()
            break;
        case 3:
            $(".right").hide()
            break;
        default:
            $(".left, .right").show()
            break;
    }
}


// --------------------------Accordion start

$(document).ready(function() {

    $(".header1").click(function() {


        if ($(this).next()[0] != $(".active1")[0]) {

            $(".active1").slideUp("slow", function() {
                $(this).removeClass("active1")
            })

            $(this).next().slideDown("slow", function() {
                $(this).addClass("active1")
            })

        } else {
            $(".active1").slideUp("slow", function() {
                $(this).removeClass("active1")
            })
        }

    })


    $(".header2").click(function() {
        if ($(this).next()[0] != $(".active2")[0]) {
            $(".active2").slideUp("slow", function() {
                $(this).removeClass("active2")
            })
            $(this).next().slideDown("slow", function() {
                $(this).addClass("active2")
            })
        } else {
            $(".active2").slideUp("slow", function() {
                $(this).removeClass("active2")
            })
        }
    })

    $(".header3").click(function() {
        if ($(this).next()[0] != $(".active3")[0]) {
            $(".active3").slideUp("slow", function() {
                $(this).removeClass("active3")
            })
            $(this).next().slideDown("slow", function() {
                $(this).addClass("active3")
            })
        } else {
            $(".active3").slideUp("slow", function() {
                $(this).removeClass("active3")
            })
        }
    })

    $(".header4").click(function() {
        if ($(this).next()[0] != $(".active4")[0]) {
            $(".active4").slideUp("slow", function() {
                $(this).removeClass("active4")

            })
            $(this).next().slideDown("slow", function() {
                $(this).addClass("active4")
            })
        } else {
            $(".active4").slideUp("slow", function() {
                $(this).removeClass("active4")
            })
        }
    })

})


// ---------------------------Accordion section end



// ---------------------------Tab section start 


function openCity(evt, cityName) {
    var i, tabcontent1, tablinks1;

    tabcontent1 = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent1.length; i++) {
        tabcontent1[i].style.display = "none";
    }

    tablinks1 = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks1.length; i++) {
        tablinks1[i].className = tablinks1[i].className.replace(" active", "");

    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openCity2(evt, cityName) {
    var i, tabcontent2, tablinks2;

    tabcontent2 = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent2.length; i++) {
        tabcontent2[i].style.display = "none";
    }

    tablinks2 = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks2.length; i++) {
        tablinks2[i].className = tablinks2[i].className.replace(" active", "");
    }


    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openCity3(evt, cityName) {

    var i, tabcontent3, tablinks3;
    2

    tabcontent3 = document.getElementsByClassName("tabcontent3");
    for (i = 0; i < tabcontent3.length; i++) {
        tabcontent3[i].style.display = "none";
    }

    tablinks3 = document.getElementsByClassName("tablinks3");
    for (i = 0; i < tablinks3.length; i++) {
        tablinks3[i].className = tablinks3[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openCity4(evt, cityName) {

    var i, tabcontent4, tablinks4;
    2

    tabcontent4 = document.getElementsByClassName("tabcontent4");
    for (i = 0; i < tabcontent4.length; i++) {
        tabcontent4[i].style.display = "none";
    }

    tablinks4 = document.getElementsByClassName("tablinks4");
    for (i = 0; i < tablinks4.length; i++) {
        tablinks4[i].className = tablinks4[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}








// ---------------------------Progress start

for (let i = 0; i < ($(".progress-menu-i").length); i++) {
    $(".progress-bar-i")[i].style.width = Number($(".prog-percent")[i].innerText) + "%";
    setProgress($(".progress-menu-i")[i], Number($(".prog-percent")[i].innerText), 1700 / Number($(".prog-percent")[i].innerText))
}

function setProgress(obj, max, time) {
    let count = 0;
    let interval = setInterval(function() {
        if (count >= max) {
            clearInterval(interval);
        } else {
            count++;
            obj.firstElementChild.lastElementChild.innerText = count;
        }
    }, time);
}


// ---------------------------Progress end



//----------------- Add to Basket js ---------------------------
window.onload = function() {
    // localStorage.removeItem("basket");
    if (localStorage.getItem("basket") === null) {
        localStorage.setItem("basket", JSON.stringify([]));
    }

    UpdateBasketIcon();
    const productButtons = document.querySelectorAll('.btn-product');
    const basket = JSON.parse(localStorage.getItem("basket"));

    // console.log(productButtons);

    [...productButtons].forEach(pro => {

            pro.onclick = function(e) {
                e.preventDefault();
                const proId = this.parentElement.getAttribute("data-id");

                const basketElement = basket.find(el => {
                    return el.id === proId;
                })

                if (basketElement === undefined) {

                    basket.push({
                        id: proId,
                        count: 1,
                        name: pro.previousElementSibling.previousElementSibling.innerText,
                        image: pro.parentElement.previousElementSibling.getAttribute("src")
                    })

                } else {
                    basketElement.count++;
                }
                //update localstorage to include new product
                localStorage.setItem("basket", JSON.stringify(basket));
                UpdateBasketIcon();
            }
        })
        // basket.forEach(el => {
        //     const tr = document.createElement('tr');
        //     const proImgTd = document.createElement('td');
        //     const proImg = document.createElement('img');
        //     const proNameTd = document.createElement('td');
        //     const proCount = document.createElement('td');
        //     const remove = document.createElement('td');
        //     const a = document.createElement('a');
        //     a.href = "#"
        //     a.classList = "remove"
        //     a.id = el.id
        //     a.innerHTML = '<i class="fas fa-trash-alt"></i>'
        //     remove.appendChild(a)
        //     proCount.innerText = el.count;
        //     proImg.src = el.image;
        //     proImgTd.appendChild(proImg);
        //     proNameTd.innerText = el.name;
        //     tr.appendChild(proImgTd);
        //     tr.appendChild(proNameTd);
        //     tr.appendChild(proCount);
        //     tr.appendChild(remove);
        //     document.querySelector('.table').lastElementChild.appendChild(tr)
        // })
        // let removeBtn = document.querySelectorAll(".remove")
        // removeBtn.forEach(btn => {
        //     btn.onclick = function(e){
        //         e.preventDefault();
        //         let id = this.id;
        //         let newbasket = [];
        //         basket.forEach(element => {
        //             if (element.id != id) {
        //                 newbasket.push(element)
        //             }
        //         });
        //         localStorage.clear();
        //         localStorage.setItem("basket", JSON.stringify(newbasket));
        //         window.location.reload(true)
        //     }
        // });
}



function UpdateBasketIcon() {
    const baskets = JSON.parse(localStorage.getItem("basket"));
    document.querySelector('#basket-count').innerText = baskets.length;
    document.querySelector('#basket-count').innerText = baskets.reduce((t, p) => t + p.count, 0);
}