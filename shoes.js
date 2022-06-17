let shoes = 
[
    {
        imglink:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d6/P00654743_d2.jpg",
        name:"Sailor leather loafers",
        bname:"THE ROW",
        sprice:"€ 895 ",
        price:"€ 626",
    },
    {
        imglink:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/6d/P00654868_d2.jpg",
        name:"LANVIN",
        bname:"Clay leather low-top sneakers",
        sprice:"€ 465 ",
        price:"€ 326",
    },
    {
        imglink:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/5a/P00654883_d2.jpg",
        name:"Flash-X mesh-paneled sneakers",
        bname:"THE ROW",
        sprice:"€ 595 ",
        price:"€ 426",
    },
    {
        imglink:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/70/P00654880_d2.jpg",
        name:"Flash-X mesh-paneled sneakers",
        bname:"LANVIN",
        sprice:"€ 595 ",
        price:"€ 326",
    },
    {
        imglink:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/6a/P00648788_d2.jpg",
        name:"Flat Opanca leather sandals",
        bname:"LEMAIRE",
        sprice:"€ 795 ",
        price:"€ 626",
    },
    {
        imglink:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/fe/P00635442_d2.jpg",
        name:"Forum 84 Low leather sneakers",
        bname:"ADIDAS",
        sprice:"€ 895 ",
        price:"€ 626",
    },
    {
        imglink:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/f3/P00637448_d2.jpg",
        name:"x Suicoke Bandana fringed sandals",
        bname:"THE ROW",
        sprice:"€ 295 ",
        price:"€ 126",
    },
    {
        imglink:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/f6/P00654873_d2.jpg",
        name:"Bumpr mesh sneakers",
        bname:"LANVIN",
        sprice:"€ 544 ",
        price:"€ 399",
    },
    {
        imglink:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/65/P00619471_d2.jpg",
        name:"RICK OWENS",
        bname:"x Converse DRKSTAR Chuck 70 sneakers",
        sprice:"€ 544 ",
        price:"€ 399",
    },
    {
        imglink:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/73/P00654550_d2.jpg",
        name:"YUKETEN",
        bname:"Sal 1 Silver Concho suede slippers",
        sprice:"€ 544 ",
        price:"€ 399",
    },
    {
        imglink:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/20/P00689090_d2.jpg",
        name:"YUKETEN",
        bname:"Type B suede shoes",
        sprice:"€ 544 ",
        price:"€ 399",
    },
    {
        imglink:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/82/P00635447_d2.jpg",
        name:"Ultraboost Web DNA sneakers",
        bname:"ADIDAS",
        sprice:"€ 544 ",
        price:"€ 399",
    },
    {
        imglink:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/09/P00654875_d2.jpg",
        name:"Bumpr mesh sneakers",
        bname:"LANVIN",
        sprice:"€ 544 ",
        price:"€ 399",
    },
    {
        imglink:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/35/P00654342_d2.jpg",
        name:"Native Slip-On leather loafers",
        bname:"YUKETEN",
        sprice:"€ 544 ",
        price:"€ 399",
    },
    {
        imglink:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b3/P00654341_d2.jpg",
        name:"Maine Guide Ox leather shoes",
        bname:"YUKETEN",
        sprice:"€ 544 ",
        price:"€ 399",
    },
    {
        imglink:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/fa/P00654344_d2.jpg",
        name:"Maine Guide Chukka moccasins",
        bname:"YUKETEN",
        sprice:"€ 544 ",
        price:"€ 399",
    },
    {
        imglink:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1d/P00654339_d2.jpg",
        name:"Canoe Moc leather boat shoes",
        bname:"YUKETEN",
        sprice:"€ 544 ",
        price:"€ 399",
    },
    {
        imglink:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/6a/P00634964_d2.jpg",
        name:"Pebble jacquard sneakers",
        bname:"MARNI",
        sprice:"€ 544 ",
        price:"€ 399",
    },
    {
        imglink:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d1/P00648839_d2.jpg",
        name:"Raffia logo sandals",
        bname:"MARNI",
        sprice:"€ 544 ",
        price:"€ 399",
    },
    {
        imglink:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/21/P00654343_d2.jpg",
        name:"Native Slip-On leather loafers",
        bname:"YUKETEN",
        sprice:"€ 544 ",
        price:"€ 399",
    },
    {
        imglink:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/bb/P00654340_d2.jpg",
        name:"Maine Guide Chukka moccasins",
        bname:"YUKETEN",
        sprice:"€ 544 ",
        price:"€ 399",
    },
]

let addAdmit = JSON.parse(localStorage.getItem("cart"))||[]

for(let i=0;i<3;i++){
    shoes.forEach(function(el) {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = el.imglink
        let h5 = document.createElement("h5")
        h5.innerText = el.bname
        let p = document.createElement("p")
        p.innerText = el.name
        let sp = document.createElement("span")
        sp.innerText=el.sprice
        let pri = document.createElement("span")
        pri.innerText = el.price
        let add = document.createElement("button")
        add.innerText = "Add to Cart"
        add.addEventListener("click",function(){
            addToAdmitted(el)
        })
        div.append(img,h5,p,sp,pri,add)
        document.querySelector(".rightcontainer").append(div)
    });
}

function addToAdmitted(el){
    addAdmit.push(el)
    localStorage.setItem("cart",JSON.stringify(addAdmit))
    console.log(addAdmit)
}