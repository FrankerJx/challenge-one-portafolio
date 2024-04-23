const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const message = document.getElementById('mensagem');

// Valores permitidos para cada campo
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto: /^.{1,50}$/,
    mensaje: /^.{1,300}$/
}

const campos = {
    nombre: false,
    email: false,
    asunto: false,
    mensaje: false
}

// Validacion de cada campo Input del formulario

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "email":
            validarCampo(expresiones.correo, e.target, 'email');
        case "asunto":
            validarCampo(expresiones.asunto, e.target, 'asunto');
            break;
        case "mensaje":
            validarCampo(expresiones.mensaje, e.target, 'mensaje');
            break;
    }
}

// Validacion de campos englobado en una función
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('form__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('form__grupo-correcto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        //Si no existe ningun error cambia el estatus false a true
        campos[campo] = true;

    } else {
        document.getElementById(`grupo__${campo}`).classList.add('form__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        //Si existe algun error cambia el estatus a false
        campos[campo] = false;
    }
}

// 'keyup' Detecta cuando se presiona y suelta una tecla dentro del campo
// 'blur' Detecta cuando se da clic fuera del campo
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

// Se agrega la misma función al textarea
message.addEventListener('keyup', validarFormulario);
message.addEventListener('blur', validarFormulario);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campos.nombre && campos.email && campos.asunto) {
        formulario.reset();
        document.getElementById('form__mensaje-exito').classList.add('form__mensaje-exito-activo')
        setTimeout(() => {
            document.getElementById('form__mensaje-exito').classList.remove('form__mensaje-exito-activo')
        }, 5000);
    } else {
        document.getElementById('form__mensaje').classList.add('form__mensaje-activo');
        setTimeout(() => {
            document.getElementById('form__mensaje').classList.remove('form__mensaje-activo')
        }, 5000);
    }
})

// Habilitar botón

function btnHabilitar() {
    nombre = document.getElementById('nombre_input').value;
    email = document.getElementById('email_input').value;
    asunto = document.getElementById('asunto_input').value;
    mensaje = document.getElementById('mensagem').value;
    val = 0;

    if (nombre == "") {
        val++;
    }
    if (email == "") {
        val++;
    }
    if (asunto == "") {
        val++;
    }
    if (mensaje == "") {
        val++;
    }
    if (val == 0) {
        document.getElementById('form__boton').disabled = false;
    } else {
        document.getElementById('form__boton').disabled = true;
    }
}

document.getElementById('nombre_input').addEventListener("keyup", btnHabilitar);
document.getElementById('email_input').addEventListener("keyup", btnHabilitar);
document.getElementById('asunto_input').addEventListener("keyup", btnHabilitar);
document.getElementById('mensagem').addEventListener("keyup", btnHabilitar);


/*
// Código base para deshabilitar el botón

function btnHabilitar() {
    nombre = document.getElementById('nombre_input').value;
    email = document.getElementById('email_input').value;
    asunto = document.getElementById('asunto_input').value;
    mensaje = document.getElementById('mensagem').value;
    val = 0;

    if (nombre == "") {
        val++;
    }
    if (email == "") {
        val++;
    }
    if (asunto == "") {
        val++;
    }
    if (mensaje == "") {
        val++;
    }
    if (val == 0) {
        document.getElementById('form__boton').disabled = false;
    } else {
        document.getElementById('form__boton').disabled = true;
    }
}

document.getElementById('nombre_input').addEventListener("keyup", btnHabilitar);
document.getElementById('email_input').addEventListener("keyup", btnHabilitar);
document.getElementById('asunto_input').addEventListener("keyup", btnHabilitar);
document.getElementById('mensagem').addEventListener("keyup", btnHabilitar);

*/

/*
// Código base para hacer la validación por campo 

if (expresiones.nombre.test(e.target.value)) {
    document.getElementById('grupo__nombre').classList.remove('form__grupo-incorrecto');
    document.getElementById('grupo__nombre').classList.add('form__grupo-correcto');
    document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('formulario__input-error-activo');

} else {
    document.getElementById('grupo__nombre').classList.add('form__grupo-incorrecto');
    document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo');
}
*/