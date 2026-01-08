// Récupère l'élément de l'image et du menu
const menuToggle = document.getElementById('baton');
const dropdownMenu = document.getElementById('dropdown-menu');

// Ajoute un événement au clic sur l'image
menuToggle.addEventListener('click', () => {
    // Toggle la classe 'show' pour afficher/masquer le menu
    dropdownMenu.classList.toggle('show');
});
