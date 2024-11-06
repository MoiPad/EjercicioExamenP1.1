// codigo js
//valorA
//valorB
//valorC
//valorX1
//valorX2


function calcular() {
  let strA = document.getElementById("valorA").value
  let strB = document.getElementById("valorB").value
  let strC = document.getElementById("valorC").value


  if (strA === "") {
    alerta("Advertencia", "El valor de A no puede ir en blanco", "warning")
  } else if (strB === "") {
    alerta("Advertencia", "El valor de B no puede ir en blanco", "warning")
  } else if (strC === "") {
    alerta("Advertencia", "Elvalor de C no  puede ir en blanco", "warning")
  } else {
    let a = parseInt(strA)
    let b = parseInt(strB)
    let c = parseInt(strC)

    // x = (-b ± √(b² - 4ac)) / 2a
    if (a === 0) {
      alerta("Error", "El valor de A no puede ser cero", "error")
    } else {
      let discriminante = (b * b) - (4 * a * c)

      if (discriminante >= 0) {
        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a)
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a)

        document.getElementById("valorX1").value = x1
        document.getElementById("valorX2").value = x2
      } else {
        alerta("Advertencia", "La raíz cuadrada no puede ser negativa", "warning")
      }
    }
  }
}

function limpiar() {
  document.getElementById("valorA").value = ""
  document.getElementById("valorB").value = ""
  document.getElementById("valorC").value = ""
  document.getElementById("valorX1").value = ""
  document.getElementById("valorX2").value = ""
}
function alerta(title, text, icon) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon
  })
}
