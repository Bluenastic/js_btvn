    const man = [
    {
      id: 1,
      name: "bộ quần áo thể thao có mũ giữ ấm",
      code: "TC1025011BA",
      price: "250.000",
      image: "https://cf.shopee.vn/file/0d30cd512491fe280e71cca803a7bb60",
      newPrice: "240.000",
    },
  
    {
      id: 2,
      name: "Áo thun đông nam",
      code: "TC1025011BA",
      price: "398.000",
      image: "https://aothudong.com/upload/images/views/%C3%81o%20thu%20%C4%91%C3%B4ng/10.3.1.jpg",
      newPrice: "300.000",
    },
  
    {
      id: 3,
      name: " áo thun",
      code: "TC1025011BA",
      price: "300.000",
      image: "https://bizweb.dktcdn.net/100/399/392/articles/ao-thun-nam-dep-gia-re-3.jpeg?v=1622709874737",
      newPrice: "240.000",
    },
  
    {
      id: 4,
      name: "áo polo",
      code: "TC1025011BA",
      price: "400.000",
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
      price: "400.000",
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
      html += "<td><button onclick=\"editProduct(" + man[i].id + ", 'man')\">Sửa</button></td>";
      html += "<td><button onclick=\"deleteProduct(" + man[i].id + ", 'man')\">Xóa</button></td>";
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
      html += "<td><button onclick=\"editProduct(" + man[i].id + ", 'man')\">Sửa</button></td>";
      html += "<td><button onclick=\"deleteProduct(" + man[i].id + ", 'man')\">Xóa</button></td>";
      html += "</tr>";
    }
  
    document.getElementById("tbl").innerHTML = html;
  }
  
  function previewImage() {
    var input = document.getElementById("productImage");

    // Kiểm tra nếu đã chọn ảnh
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        // Hiển thị ảnh trước khi thêm
        preview.src = e.target.result;
        preview.style.display = "block";
      };

      // Đọc file ảnh
      reader.readAsDataURL(input.files[0]);
    }
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
  function editProduct(id, gender) {
    // Tìm sản phẩm cần sửa trong mảng tương ứng
    const products = gender === "man" ? man : women;
    const product = products.find(item => item.id == id);
    
    // Hiển thị thông tin sản phẩm lên các trường nhập liệu
    document.getElementById("productID").value = product.id;
    document.getElementById("productCode").value = product.code;
    document.getElementById("productName").value = product.name;
    document.getElementById("productImage").value = product.image;
    document.getElementById("productPri").value = product.price;
    document.getElementById("productDis").value = product.newPrice; 
    document.getElementById("productGender").value = gender;
  }
  
  function updateProduct() {
  var productID = document.getElementById("productID").value;
  var productCode = document.getElementById("productCode").value;
  var productName = document.getElementById("productName").value;
  var productImage = document.getElementById("productImage").file[0];
  var productPrice = document.getElementById("productPri").value;
  var productDiscount = document.getElementById("productDis").value;
  var productGender = document.getElementById("productGender").value;
  var updatedProduct = {
    id: productID,
    code: productCode,
    name: productName,
    image: "",
    price: productPrice,
    newPrice: productDiscount,
  };

  if (productGender === "man") {
    // Tìm vị trí của sản phẩm trong mảng 'man' và cập nhật thông tin
    var index = man.findIndex(item => item.id == productID);
    if (index !== -1) {
      man[index] = updatedProduct;
    }
  } else if (productGender === "women") {
    // Tìm vị trí của sản phẩm trong mảng 'women' và cập nhật thông tin
    var index = women.findIndex(item => item.id == productID);
    if (index !== -1) {
      women[index] = updatedProduct;
    }
  }

  // Cập nhật lại bảng dữ liệu
  show(productGender === "man" ? man : women);
  clearForm();

  // Xóa thông tin đã nhập trong các trường nhập liệu
  document.getElementById("productID").value = "";
  document.getElementById("productCode").value = "";
  document.getElementById("productName").value = "";
  document.getElementById("productImage").value = "";
  document.getElementById("productPri").value = "";
  document.getElementById("productDis").value = "";
}
function deleteProduct(id, gender) {
  // Xác nhận việc xóa sản phẩm
  if (confirm("Bạn có chắc chắn muốn xóa sản phẩm có ID " + id + "?")) {
    if (gender === "man") {
      // Xóa sản phẩm khỏi mảng 'man'
      for (let i = 0; i < man.length; i++) {
        if (man[i].id === id) {
          man.splice(i, 1);
          break;
        }
      }
    } else if (gender === "women") {
      // Xóa sản phẩm khỏi mảng 'women'
      for (let i = 0; i < women.length; i++) {
        if (women[i].id === id) {
          women.splice(i, 1);
          break;
        }
      }
    }

    // Cập nhật bảng dữ liệu
    show(gender === "man" ? man : women);
  }
}

