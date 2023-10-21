const header = document.getElementById('header');

const headerHTML = `
<div class="corplogo header-element">
    <i class="fa-solid fa-truck-plane" style="color: #1a5fb4;"></i>
    <a href="/index.html" id="logotext" >Importienda</a>
</div>
<input type="checkbox" id="menu-check">
<label id="menu" for="menu-check">
    <span id="menu-abrir"><i class="fa-solid fa-bars"></i></span>
    <span id="menu-cerrar"><i class="fa-solid fa-xmark"></i></span>
</label>
<nav class="navlinks header-element">
    <ul>
        <li><a href="/about/about.html" >Acerca de</a></li>
        <li><a href="/products/products.html" >Productos</a></li>
        <li><a href="/login/login.html" >Login</a></li>
        <li><a href="/contact/formulario.html" >Contacto</a></li>
    </ul>
</nav>
`;

header.innerHTML = headerHTML;