 //Funcion para ordenar las columnas de la tabla de mayor a menor
 function ordenarTabla() {
  const tablaResultados = document.getElementById('resultados');
  const tbody = tablaResultados.querySelector('tbody');
  const filas = Array.from(tbody.getElementsByTagName('tr'));

  const ordenSelect = document.getElementById('ordenar-select');
  const orden = ordenSelect.value;

  filas.sort((filaA, filaB) => {
    const valorA = parseFloat(filaA.cells[3].innerText);
    const valorB = parseFloat(filaB.cells[3].innerText);

    if (orden === 'ascendente') {
      return valorA - valorB;
    } else {
      return valorB - valorA;
    }
  });

  filas.forEach((fila) => {
    tbody.appendChild(fila); // Reinsertar las filas en el orden correcto
  });
}

    //Funcion para enviar datos de formulario a la tabla
    function enviarDatos(event) {
      event.preventDefault();
    
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const correo = document.getElementById('correo').value;
      const empresa = document.getElementById('empresa').value;
      const sueldoARS = parseFloat(document.getElementById('sueldo').value);

      document.getElementById('nombre').value = '';
      document.getElementById('apellido').value = '';
      document.getElementById('correo').value = '';
      document.getElementById('empresa').value = '';
      document.getElementById('sueldo').value = '';
    
      // Validar que el sueldo sea un número válido y no sea menor a 10000
      if (isNaN(sueldoARS) || sueldoARS < 10000) {
        alert('El sueldo ingresado no es válido. Por favor, ingrese un valor numérico mayor o igual a 10000.');
        return;
      }
    
      const dolar = sueldoARS * 0.011;
      const euro = sueldoARS * 0.0095;
      const real = sueldoARS * 0.058;
    
      const tablaResultados = document.getElementById('resultados').getElementsByTagName('tbody')[0];
    
      if (!isNaN(dolar) && !isNaN(euro) && !isNaN(real)) {
        const nuevaFila = tablaResultados.insertRow();
    
        const celdaNombre = nuevaFila.insertCell();
        celdaNombre.innerHTML = nombre;
    
        const celdaApellido = nuevaFila.insertCell();
        celdaApellido.innerHTML = apellido;
    
        const celdaEmpresa = nuevaFila.insertCell();
        celdaEmpresa.innerHTML = empresa;
    
        const celdaSueldoARS = nuevaFila.insertCell();
        celdaSueldoARS.innerHTML = sueldoARS;
    
        const celdaSueldoDolares = nuevaFila.insertCell();
        celdaSueldoDolares.innerHTML = dolar.toFixed(2);
    
        const celdaSueldoEuros = nuevaFila.insertCell();
        celdaSueldoEuros.innerHTML = euro.toFixed(2);
    
        const celdaSueldoReales = nuevaFila.insertCell();
        celdaSueldoReales.innerHTML = real.toFixed(2);
    
        const celdaCorreo = nuevaFila.insertCell();
        celdaCorreo.innerHTML = correo;
    
        const filas = Array.from(tablaResultados.getElementsByTagName('tr'));
        filas.sort((filaA, filaB) => {
          const valorA = obtenerValorMoneda(filaA);
          const valorB = obtenerValorMoneda(filaB);
    
          return valorB - valorA;
        });
      }
    }
