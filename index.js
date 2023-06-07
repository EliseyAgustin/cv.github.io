let datos = [];

    function ordenar(campo) {
      const resultados = document.getElementById('resultados');
      const ascendente = resultados.dataset.ascendente === 'true';

      datos.sort((a, b) => {
        const valorA = a[campo];
        const valorB = b[campo];

        if (ascendente) {
          return valorA.localeCompare(valorB);
        } else {
          return valorB.localeCompare(valorA);
        }
      });

      resultados.dataset.ascendente = !ascendente;
      mostrarResultados();
    }

    function mostrarResultados() {
      const resultados = document.getElementById('resultados');
      const tbody = resultados.querySelector('tbody');
      tbody.innerHTML = '';

      for (const dato of datos) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${dato.nombre}</td>
          <td>${dato.apellido}</td>
          <td>${dato.empresa}</td>
          <td>${dato.sueldo} ${obtenerSimboloMoneda(dato.moneda)}</td>
          <td>${dato.correo}</td>
        `;
        tbody.appendChild(fila);
      }
    }

    function obtenerSimboloMoneda(moneda) {
      switch (moneda) {
        case 'pesos':
          return '&#36;';
        case 'dolares':
          return '&#36;';
        case 'euros':
          return '&#128;';
        case 'reales':
          return '&#82;&#36;';
        default:
          return '';
      }
    }

    function enviarDatos(event) {
      event.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const empresa = document.getElementById('empresa').value;
      const sueldo = document.getElementById('sueldo').value;
      const moneda = document.getElementById('moneda').value;
      const correo = document.getElementById('correo').value;

      if (sueldo < 10000) {
        alert('No se puede ingresar un monto menor a 10000');
        return;
      }

      console.log('Datos enviados:');
      console.log('Nombre:', nombre);
      console.log('Apellido:', apellido);
      console.log('Empresa:', empresa);
      console.log('Sueldo mínimo:', sueldo, obtenerSimboloMoneda(moneda));
      console.log('Correo electrónico:', correo);

      datos.push({ nombre, apellido, empresa, sueldo, moneda, correo });
      mostrarResultados();

      document.getElementById('nombre').value = '';
      document.getElementById('apellido').value = '';
      document.getElementById('empresa').value = '';
      document.getElementById('sueldo').value = '';
      document.getElementById('correo').value = '';
    }
