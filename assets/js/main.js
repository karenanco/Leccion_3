const botonSubir = document.getElementById('btn-subir');
    botonSubir.addEventListener('click', () => {
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });