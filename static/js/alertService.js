import swal from 'sweetalert';

export function success(message) {
  swal("Bien hecho!", message, "success");
}

export function error(message) {
  swal("Algo salio mal :(", message, "error");
}

export function confirm(message, callback) {
  swal(message, {
    buttons: {
      yes: "Si",
      cancel: "Cancelar"
    },
    icon: "info"
  })
  .then((value) => {
    switch(value) {
      case "yes":
        callback()
        break;
      case "cancel":
        break;
    }
  })
}
