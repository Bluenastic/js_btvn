var man = [
    {
        id:1,
        name:"Quần Shorts Nam chạy bộ Ultra",
        code: "TC102",
        price: "250.000",
        oldPrice: "350.000",
        image: "https://product.hstatic.net/1000271846/product/pants-beige-01_7caa0ecd9ff040e3a231d89f7e4ea5db_master.jpg"

    }, 
    {
        id:2,
        name:"Quần Shorts Black",
        code: "TC103",
        price: "350.000",
        oldPrice: "450.000",
        image: "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2023/s6.917_72.jpg"

    },
    {
        id:3,
        name:"Quần Shorts BEIGE",
        code: "TC104",
        price: "150.000",
        oldPrice: "400.000",
        image: "https://product.hstatic.net/1000271846/product/pants-beige-01_fcff1444268b47ffacc171b2748dbe5a_master.jpg"
    },
];
var women = [
    {
        id:1,
        name:"Váy Ngắn Nữ",
        code: "EC201",
        price: "450.000",
        oldPrice: "550.000",
        image: "https://img.fantaskycdn.com/7aa7a791569b5d7707cee30a83b39bb9_750x.jpeg"
    },
    {
        id:2,
        name:"Chân Váy Nữ Xếp Ly",
        code: "EC202",
        price: "190.000",
        oldPrice: "550.000",
        image: "https://canifa.com/img/1000/1500/resize/6/k/6ks23w008-sk010-1-thumb.webp"
    },
    {
        id:3,
        name:"Váy Tay Bồng Cúp Ngực",
        code: "EC203",
        price: "400.000",
        oldPrice: "600.000",
        image: "https://bizweb.dktcdn.net/100/438/408/products/vay-dam-nu-van6146-tra-1-yodyvn.jpg"
    },
];
function listProducts(){
    for(let i = 0; i<= man.length-1; i++)
    {
        var demo = '<div class= "col-3">';
        demo += '<div class= "card" style="width: 18rem;">';
        demo += '<img src="' +man[i].image +'" class = "card-img-top" style="height:400px;">'; 
        demo += '<div class= "card-body">'; 
        demo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>'; 
        demo += '<p class="card-text"><span class="old-price"><del>Giá cũ: ' + man[i].oldPrice + '</del></span></p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML += demo; 
    }   
    for(let i = 0; i <= women.length-1; i++){
        var demo = '<div class = "col-3">';   
        demo += '<div class="card" style="width: 18rem; ">';
        demo += '<img src="'+women[i].image +'" class = "card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+women[i].name+'</h5>';
        demo += '<p class="card-text">'+women[i].price+'</p>';
        demo += '<p class="card-text"><span class="old-price"><del>Giá cũ: ' + women[i].oldPrice + '</del></span></p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("women").innerHTML += demo;
    }
}