var arr= [];
function save()
{
    var a = {
        name: document.getElementById('name').value,
        id: document.getElementById('id').value,
        product: document.getElementById('product').value,
        quantity: document.getElementById('quantity').value,
        price: document.getElementById('price').value,
    }
    console.log(a);
    arr.push(a);
}
function show()
{
    var html ='';
    for (i in arr)
    {
        var n=1;
        n++;
        html+ "<tr>";
        html+= "<td>" +(n) + "</td>";
        html+= "<td>" +arr[i].name + "</td>";
        html+= "<td>" +arr[i].id + "</td>";
        html+= "<td>" +arr[i].product + "</td>";
        html+= "<td>" +arr[i].quantity + "</td>";
        html+= "<td>" +arr[i].price + "</td>";
        html+= "<td>" +parseFloat(arr[i].quantity)*parseFloat(arr[i].price) + "</td>"; html+ "</tr>";
        html+= "</tr>";
    }
    document.getElementById('tbl').innerHTML=html;
}
function reset()
{
    document.getElementById('name').value='';
    document.getElementById('id').value='';
    document.getElementById('prodcut').value='';
    document.getElementById('quantity').value='';
    document.getElementById('price').value='';
}