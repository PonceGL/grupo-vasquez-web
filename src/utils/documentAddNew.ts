import { Dispatch, SetStateAction } from "react";

export const hanldeDocument = async (
  data: any,
  closeLoading: Dispatch<SetStateAction<boolean>>,
  setMessageResponse: Dispatch<SetStateAction<string>>
) => {
  var requestOptions = {
    method: "POST",
    body: data,
    redirect: "follow",
  };

  setTimeout(() => {
    console.log(requestOptions);
    closeLoading(false);
    setMessageResponse("Mensaje enviado con éxito");
  }, 3000);

  // // @ts-ignore: Object is possibly 'null'.
  // fetch("http://localhost:8080/api/send-pdf", requestOptions)
  //   .then((response) => response.json())
  //   .then((result) => {
  //     console.log(result);
  //     closeLoading(false);
  //     setMessageResponse("Mensaje enviado con éxito");
  //   })
  //   .catch((error) => {
  //     console.log("error", error);
  //     closeLoading(false);
  //     setMessageResponse("Error al enviar el mensaje inténtelo más tarde");
  //   });
};
