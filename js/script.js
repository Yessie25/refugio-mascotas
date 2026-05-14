document.addEventListener("DOMContentLoaded", async () => {
    // Cargar mascotas solo en la página principal
    if (document.getElementById("lista-mascotas")) {
        await mostrarMascotas();
    }

    // Validación de formulario en contactos
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            await enviarFormulario();
        });
    }
});

// Simula carga de datos con async/await (sin JSON externo)
async function mostrarMascotas() {
    const mascotas = [
        { nombre: "Luna", edad: "2 años", raza: "Mestiza", descripcion: "Cariñosa y alegre, ama los paseos y los mimos.", imagen: "img/perro1.jpg" },
        { nombre: "Simón", edad: "1 año", raza: "Golden Retriever", descripcion: "Fiel y sociable. Ideal para familias." ,imagen: "img/perro2.jpg" },
        { nombre: "Michi", edad: "3 años", raza: "Gato Bicolor", descripcion: "Curiosa y tierna. Le encanta dormir cerca de ti.", imagen: "img/gato1.jpg" },
        { nombre: "Rocky", edad: "4 años", raza: "Pitbull", descripcion: "Protector y cariñoso. Le gusta el descanso y las caricias.", imagen: "img/perro3.jpg" }
    ];

    // Espera simulada
    await new Promise(resolve => setTimeout(resolve, 500));

    const contenedor = document.getElementById("lista-mascotas");
    contenedor.innerHTML = "";

    mascotas.forEach(mascota => {
        const card = document.createElement("div");
        card.classList.add("mascota");
        card.innerHTML = `
            <img src="${mascota.imagen}" alt="${mascota.nombre}">
            <h4>${mascota.nombre}</h4>
            <p><strong>Edad:</strong> ${mascota.edad}</p>
            <p><strong>Raza:</strong> ${mascota.raza}</p>
            <button class="btn-adoptar">Adoptar</button>
        `;
        card.querySelector(".btn-adoptar").addEventListener("click", () => {
            alert(`¡Gracias por querer adoptar a ${mascota.nombre}! 🐾`);
        });
        contenedor.appendChild(card);
    });
}

// Simula envío de formulario con async/await
async function enviarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    await new Promise(resolve => setTimeout(resolve, 1000)); // simulación de envío
    alert(`Gracias, ${nombre}. Tu mensaje ha sido enviado con éxito.`);
    document.getElementById("contactForm").reset();
}
