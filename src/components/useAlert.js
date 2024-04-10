import Swal from "sweetalert2";

export const useAlert = () => {

     // Success alert
     const handleSuccessAlert = (message, path = "") => {
          Swal.fire({
               icon: "success",
               title: message,
               showConfirmButton: false,
               timer: 1500,
               customClass: {
                    container: 'swal2-container',
               },
          }
          ).then(() => {
               if (path) {
                    console.log('navigate')

               }
          });
     };

     // Error alert
     const handleErrorAlert = (message, path = "") => {
          Swal.fire({
               icon: "error",
               title: message,
               customClass: {
                    container: 'swal2-container',
               },
               confirmButtonText: "OK",
          });
          if (path) {
               console.log('navigate')

          }
     };

     const handleInfoAlert = (message, path = "") => {
          Swal.fire({
               icon: "info",
               title: message,
               customClass: {
                    container: 'swal2-container',
               },
               confirmButtonText: "OK",
          });
          if (path) {
               console.log('navigate')
          }
     }

     const handleEditConfirmation = async (message) => {
          const result = await Swal.fire({
               icon: "question",
               title: message,
               customClass: {
                    container: 'swal2-container',
               },
               showCancelButton: true,
               confirmButtonText: "Si",
               cancelButtonText: "No",
          });

          return result;
     }

     const handleAcceptConfirmation = async (message) => {
          const result = await Swal.fire({
               icon: "info",
               title: message,
               customClass: {
                    container: 'swal2-container',
               },
               showCancelButton: false,
               confirmButtonText: "Ok",
          });

          return result;
     }

     return {
          // Methods
          handleSuccessAlert,
          handleErrorAlert,
          handleEditConfirmation,
          handleAcceptConfirmation,
          handleInfoAlert
     }
}