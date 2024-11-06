// codigo js
//valorA
//valorB
//valorC
//valorX1
//valorX2
document.getElementById("btnCalcular").addEventListener("click",function(e) {
  e.preventDefault()
  calcular()
})

document.getElementById("btnLimpiar").addEventListener("click", function (){
  limpiar()
})

function calcular() {
  let product1 = document.getElementById("producto1").value
  let product2 = document.getElementById("producto2").value
  let product3 = document.getElementById("producto3").value
  let product4 = document.getElementById("producto4").value
  let product5 = document.getElementById("producto5").value


  if (product1 === "") {
    alerta("Advertencia", "El campo del producto 1 no puede ir en blanco", "warning")
  } else if (product2=== "") {
    alerta("Advertencia", "El campo del producto 2 no puede ir en blanco", "warning")
  } else if (product3 === "") {
    alerta("Advertencia", "El campo del producto 3 no puede ir en blanco", "warning")
  }else if (product4 === "") {
    alerta("Advertencia", "El campo del producto 4 no puede ir en blanco", "warning")
  }else if (product5 === "") {
    alerta("Advertencia", "El campo del producto 5 no puede ir en blanco", "warning")
  } else {
    let p1 = parseFloat(product1)
    let p2 = parseFloat(product2)
    let p3 = parseFloat(product3)
    let p4 = parseFloat(product4)
    let p5 = parseFloat(product5)

    let subTotal = p1 + p2 + p3 +p4 + p5
    document.getElementById("sub-total").value = subTotal.toFixed(2)

    let descuento = 0
    let lblDescuento = "Descuento 0%"

    if(subTotal >= 0 && subTotal <= 999.99){
      descuento = 0.00
      lblDescuento = "Descuento 0%"
    }else if(subTotal >=1000 && subTotal <= 4999.99){
      descuento = 0.10
      lblDescuento = "Descuento 10%"
    }else if(subTotal >=5000 && subTotal <= 8999.99){
      descuento = 0.20
      lblDescuento = "Descuento 20%"
    } else if (subTotal >=9000 && subTotal <= 12999.99){
      descuento = 0.30
      lblDescuento = "Descuento 30%"
    }else if (subTotal >= 13000){
      descuento = 0.40
      lblDescuento = "Descuento 40%"
    }
    let descuentoTotal = subTotal * descuento
    let total = subTotal - descuentoTotal
    document.querySelector("label[for='descuento']").innerText = lblDescuento;
    document.getElementById("descuento").value =  descuentoTotal.toFixed(2)
    document.getElementById("total").value = total.toFixed(2)
  }
}

function limpiar() {
  document.getElementById("producto1").value = ""
  document.getElementById("producto2").value = ""
  document.getElementById("producto3").value = ""
  document.getElementById("producto4").value = ""
  document.getElementById("producto5").value = ""
  document.getElementById("sub-total").value = ""
  document.querySelector("label[for='descuento']").innerText ="Descuento 0%"
  document.getElementById("descuento").value = ""
  document.getElementById("total").value = ""
}
function alerta(title, text, icon) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon
  })
}
