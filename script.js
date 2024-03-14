document.addEventListener('DOMContentLoaded', function() {
    const destinos = document.querySelectorAll('.destino');
    const aumentoPorcentaje = 5;
  
    destinos.forEach(destino => {
      destino.addEventListener('mouseenter', () => {
        const alturaOriginal = destino.offsetHeight;
        const nuevaAltura = alturaOriginal + (alturaOriginal * aumentoPorcentaje / 100);
        destino.style.height = nuevaAltura + 'px';
      });
  
      destino.addEventListener('mouseleave', () => {
        destino.style.height = ''; // Restaurar la altura original al salir del ratón
      });
    });
  });
  