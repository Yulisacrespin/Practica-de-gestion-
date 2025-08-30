<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formXLSX");

  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    myLoading(true);

    const formData = new FormData(formulario);
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
    };
    try {
      const response = await axios.post("/subir-data-xlsx", formData, {
        headers,
      });

      const { status_server, message } = response.data;

      if (!status_server) {
        console.log(`HTTP error! status: ${status_server} 😭`);
      }

      if (status_server == "success") {
        console.log(status_server, message);

        setTimeout(function () {
          myLoading(false);
          alerta(message, 1);
        }, 3000);
      } else {
        alerta(message, 0);
      }
    } catch (error) {
      console.error(error);
    }
  });
});

/**
 * Fucion para hacer Loader
 */
let preventReload = false; // Variable para controlar la prevención de recarg
let loading = false;
function myLoading(loading) {
  let loadingElement = document.querySelector(".contentLoading");
  let body = document.body;

  if (loading) {
    loadingElement.style.display = "flex";
    body.style.overflow = "hidden";

    // Activa la prevención de recarga
    preventReload = true;
  } else {
    // Desactiva la prevención de recarga
    preventReload = false;
    loadingElement.style.display = "none";
    body.style.overflow = "";
  }
}

function alerta(msj, tipo_msj) {
  const divExistente = document.querySelector(".alert");
  if (divExistente) {
    divExistente.remove();
  }

  // Crear un nuevo div para la alerta
  const divRespuesta = document.createElement("div");

  divRespuesta.innerHTML = `
    <div class="alert ${
      tipo_msj == 1 ? "alert-success" : "alert-danger"
    }  alert-dismissible text-center" role="alert" style="font-size: 20px;">
      ${msj}
    </div>
  `;

  setTimeout(function () {
    divRespuesta.innerHTML = "";
  }, 3000);

  // Agregar el div al final del contenedor con clase "container"
  const container = document.querySelector("#respuesta");
  container.insertAdjacentElement("beforeend", divRespuesta);
}
=======
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formXLSX");

  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    myLoading(true);

    const formData = new FormData(formulario);
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
    };
    try {
      const response = await axios.post("/subir-data-xlsx", formData, {
        headers,
      });

      const { status_server, message } = response.data;

      if (!status_server) {
        console.log(`HTTP error! status: ${status_server} 😭`);
      }

      if (status_server == "success") {
        console.log(status_server, message);

        setTimeout(function () {
          myLoading(false);
          alerta(message, 1);
        }, 3000);
      } else {
        alerta(message, 0);
      }
    } catch (error) {
      console.error(error);
    }
  });
});

/**
 * Fucion para hacer Loader
 */
let preventReload = false; // Variable para controlar la prevención de recarg
let loading = false;
function myLoading(loading) {
  let loadingElement = document.querySelector(".contentLoading");
  let body = document.body;

  if (loading) {
    loadingElement.style.display = "flex";
    body.style.overflow = "hidden";

    // Activa la prevención de recarga
    preventReload = true;
  } else {
    // Desactiva la prevención de recarga
    preventReload = false;
    loadingElement.style.display = "none";
    body.style.overflow = "";
  }
}

function alerta(msj, tipo_msj) {
  const divExistente = document.querySelector(".alert");
  if (divExistente) {
    divExistente.remove();
  }

  // Crear un nuevo div para la alerta
  const divRespuesta = document.createElement("div");

  divRespuesta.innerHTML = `
    <div class="alert ${
      tipo_msj == 1 ? "alert-success" : "alert-danger"
    }  alert-dismissible text-center" role="alert" style="font-size: 20px;">
      ${msj}
    </div>
  `;

  setTimeout(function () {
    divRespuesta.innerHTML = "";
  }, 3000);

  // Agregar el div al final del contenedor con clase "container"
  const container = document.querySelector("#respuesta");
  container.insertAdjacentElement("beforeend", divRespuesta);
}
>>>>>>> d1e665b8d854092e81342ee267621cf0bb3b75fd
