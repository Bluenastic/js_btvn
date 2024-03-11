const man = [
    {
      id: 1,
      name: "bộ quần áo thể thao có mũ giữ ấm",
      code: "TC1025011BA",
      price: "131.000",
      image: "https://cf.shopee.vn/file/0d30cd512491fe280e71cca803a7bb60",
      newPrice: "514.000",
    },
  
    {
      id: 2,
      name: "Áo thun đông nam",
      code: "TC1025011BA",
      price: "142.000",
      image: "https://aothudong.com/upload/images/views/%C3%81o%20thu%20%C4%91%C3%B4ng/10.3.1.jpg",
      newPrice: "300.000",
    },
  
    {
      id: 3,
      name: "áo thun",
      code: "TC1025011BA",
      price: "600.000",
      image: "https://bizweb.dktcdn.net/100/399/392/articles/ao-thun-nam-dep-gia-re-3.jpeg?v=1622709874737",
      newPrice: "500.000",
    },
  
    {
      id: 4,
      name: "áo polo",
      code: "TC1025011BA",
      price: "300.000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR9LoZe5l8UtO-WikfMkBHcc8LUqSR-9TU8g&usqp=CAU",
      newPrice: "350.000",
    },
  ];
  const women = [
    {
      id: 1,
      name: "quần + áo nữ đi du lịch",
      code: "TC1025011BA",
      price: "250.000",
      image: "https://thieuhoa.com.vn/wp-content/uploads/2023/06/qRLT4xVfwiEruJtJBPZVuw3zO6vEUOv9uDjAGlRH.webp",
      newPrice: "200.000",
    },
  
    {
      id: 2,
      name: "Sét áo Alone + quần ống rộng xuông",
      code: "TC1025011BA",
      price: "398.000",
      image: "https://down-vn.img.susercontent.com/file/fac998b14eeb81d032d310c391edd7fa",
      newPrice: "350.000",
    },
  
    {
      id: 3,
      name: "Áo Blazer",
      code: "TC1025011BA",
      price: "300.000",
      image: "https://caravnxk.com/admin/sanpham/blazer-nu_1704_anh1.jpg",
      newPrice: "250.000",
    },
  
    {
      id: 4,
      name: "Áo sơ mi",
      code: "TC1025011BA",
      price: "500.000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiZkh9a3IM8wcPJg7e5JxDIv8bnGdJ-Mz_bQ&usqp=CAU",
      newPrice: "350.000",
    },
  ];
  
  function listTable() {
    var html = "";
    for (i in man) {
      html + "<tr>";
      html += "<td>" + man[i].id + "</td>";
      html += "<td>" + man[i].code + "</td>";
      html += "<td>" + man[i].name + "</td>";
      html +=
        "<td><img src=" + man[i].image + " style=height:50px;width:50px></td>";
      html += "<td>" + man[i].price + "</td>";
      html += "<td>" + man[i].newPrice + "</td>";
      html += "</tr>";
      document.getElementById("tbl").innerHTML = html;
    }
  }
  function women1() {
    var html = "";
    for (i in women) {
      html + "<tr>";
      html += "<td>" + women[i].id + "</td>";
      html += "<td>" + women[i].code + "</td>";
      html += "<td>" + women[i].name + "</td>";
      html +=
        "<td><img src=" + women[i].image + " style=height:50px;width:50px></td>";
      html += "<td>" + women[i].price + "</td>";
      html += "<td>" + women[i].newPrice + "</td>";
      html += "</tr>";
    }
  
    document.getElementById("tbl").innerHTML = html;
  }
  
  function createProduct() {
    var productID = document.getElementById("productID").value;
    var productCode = document.getElementById("productCode").value;
    var productName = document.getElementById("productName").value;
    var productImage = document.getElementById("productImage").value;
    var productPrice = document.getElementById("productPri").value;
    var productDiscount = document.getElementById("productDis").value;
    var productGender = document.getElementById("productGender").value;
  
    var newProduct = {
      id: productID,
      code: productCode,
      name: productName,
      image: productImage,
      price: productPrice,
      newPrice: productDiscount,
    };
  
    if (productGender === "man") {
      man.push(newProduct);
    } else if (productGender === "women") {
      women.push(newProduct);
    }
  
    document.getElementById("productID").value = "";
    document.getElementById("productCode").value = "";
    document.getElementById("productName").value = "";
    document.getElementById("productImage").value = "";
    document.getElementById("productPri").value = "";
    document.getElementById("productDis").value = "";
  
    show(productGender === "man" ? arr : women1);
  }