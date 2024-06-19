function verificarEdad() {
    const birthdate = document.getElementById('birthdate').value;
    const errorDiv = document.getElementById('error');
    const contentDiv = document.getElementById('content');
    const ageVerificationDiv = document.getElementById('ageVerification');

    if (!birthdate) {
        errorDiv.textContent = 'Por favor, ingrese una fecha de nacimiento válida.';
        return;
    }

    const birthDate = new Date(birthdate);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Ajuste de edad si la fecha actual es antes del cumpleaños de este año
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    if (age >= 18) {
        errorDiv.textContent = '';
        ageVerificationDiv.style.display = 'none';
        contentDiv.style.display = 'block';
    } else {
        errorDiv.textContent = 'Lo sentimos, debes tener al menos 18 años para acceder a este contenido.';
    }
}