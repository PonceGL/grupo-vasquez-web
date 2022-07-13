import React, {
  FC,
  useRef,
  useEffect,
  useState,
  FormEvent,
  Dispatch,
  SetStateAction,
} from "react";
import { hanldeDocument } from "../../../../utils/documentAddNew";

interface Props {
  closeLoading: Dispatch<SetStateAction<boolean>>;
}

const Form: FC<Props> = ({ closeLoading }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [archivos, setArchivos] = useState<FileList | null>(null);
  const [nameForm, setNameForm] = useState<string>("");
  const [emailForm, setEmailForm] = useState<string>("");
  const [phoneForm, setPhoneForm] = useState<string>("");
  const [messageForm, setMessageForm] = useState<string>("");
  const [messageResponse, setMessageResponse] = useState<string>("");

  const formatBytes = (a: number) => {
    const ziseOnMegabytes = parseFloat((a / 1048576).toFixed(2));

    return ziseOnMegabytes;
  };

  const checkFile = () => {
    if (archivos !== null) {
      if (archivos[0].type !== "application/pdf") {
        setMessageResponse("Tipo de archivo no valido");
        return true;
      }

      if (formatBytes(archivos[0].size) > 3) {
        setMessageResponse("el tamaño del archivo es demasiado grande");
        return true;
      }
    }
  };

  const handleFileUpluad = () => {
    if (inputFileRef.current !== null) {
      inputFileRef.current.click();
    }
  };

  const handleReset = () => {
    if (formRef.current !== null) {
      formRef.current.reset();
      setArchivos(null);
      setNameForm("");
      setEmailForm("");
      setPhoneForm("");
      setMessageForm("");
      setMessageResponse("");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeLoading(true);
    const errorOnFile = checkFile();

    if (formRef.current !== null && errorOnFile) {
      handleReset();
    }

    const formData = new FormData();
    formData.append("subject", "Enviado desde web Grupo Vaszquez");
    formData.append("message", messageForm);
    formData.append(
      "html",
      `<div>
    <p>Nombre: ${nameForm}</p>
    <p>Correo: ${emailForm}</p>
    <p>Télefono: ${phoneForm}</p>
    <p>
    ${
      archivos !== null && archivos.length > 0
        ? `Nombre original del archivo: ${archivos[0].name}`
        : ""
    }
      </p>
    <p>Mensaje:</p>
    <hr/>
    <p>${messageForm}</p>
    </div>`
    );

    if (archivos !== null && archivos.length > 0) {
      formData.append(
        "file",
        archivos[0],
        "Documento enviado desde web Grupo Vasquez.pdf"
      );
    }

    // try {
    hanldeDocument(formData, closeLoading, setMessageResponse);
    // } catch (error) {
    //   console.log("error on submit");
    //   console.error(error);
    // }
  };

  useEffect(() => {
    if (formRef.current !== null) {
      if (messageResponse === "Mensaje enviado con éxito") {
        handleReset();
      }
    }
  }, [formRef, messageResponse]);

  useEffect(() => {
    if (archivos !== null) {
      checkFile();
    }
  }, [archivos]);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full p-4 flex flex-col justify-around items-center bg-sky-800 shadow-2xl relative overflow-hidden md:p-10"
    >
      <input
        type="text"
        name="name"
        className="w-full my-2 p-2 text-zinc-200 border-b border-zinc-200 border-opacity-70 bg-transparent rounded-none placeholder-zinc-50 placeholder-opacity-70 outline-none"
        placeholder="Nombre"
        required
        onChange={(e) => setNameForm(e.target.value)}
        value={nameForm}
      />
      <input
        type="email"
        name="email"
        className="w-full my-2 p-2 text-zinc-200 border-b border-zinc-200 border-opacity-70 bg-transparent rounded-none placeholder-zinc-50 placeholder-opacity-70 outline-none"
        placeholder="Correo Electronico"
        required
        onChange={(e) => setEmailForm(e.target.value)}
        value={emailForm}
      />
      <input
        type="text"
        inputMode="numeric"
        name="phone"
        className="w-full my-2 p-2 text-zinc-200 border-b border-zinc-200 border-opacity-70 bg-transparent rounded-none placeholder-zinc-50 placeholder-opacity-70 outline-none"
        placeholder="Télefono"
        onChange={(e) => setPhoneForm(e.target.value)}
        value={phoneForm}
      />
      <button
        type="button"
        className={`w-full my-4 truncate text-center ${
          archivos !== null && archivos.length > 0
            ? "text-zinc-200 bg-sky-800"
            : "text-sky-800 bg-zinc-200"
        } opacity-80 outline-none rounded-none hover:opacity-100 cursor-pointer transition-all duration-200`}
        onClick={handleFileUpluad}
      >
        {archivos !== null && archivos.length > 0
          ? archivos[0].name
          : "Subir archivo"}
      </button>
      <input
        ref={inputFileRef}
        type="file"
        // accept="application/pdf,application/vnd.ms-excel"
        accept=".pdf"
        multiple={false}
        name="file"
        className="w-full my-2 p-2 opacity-0 absolute left-full"
        onChange={(e) => setArchivos(e.target.files)}
        aria-label="Seleccionar archivos"
      />
      <textarea
        name="message"
        className="w-full min-h-[10rem] my-6 p-2 text-zinc-200 border border-zinc-200 border-opacity-70 bg-transparent placeholder-zinc-50 placeholder-opacity-70 outline-none md:min-h-[15rem]"
        placeholder="Mensaje"
        required
        onChange={(e) => setMessageForm(e.target.value)}
        value={messageForm}
      />
      {messageResponse === "" ? (
        <button
          type="submit"
          className={`w-full py-2 text-center  text-sky-800 bg-zinc-200 opacity-70 outline-none rounded-none hover:opacity-100 cursor-pointer transition-all duration-200`}
        >
          Enviar mensaje
        </button>
      ) : (
        <p
          className={`w-full my-6 p-2 ${
            !messageResponse.includes("éxito")
              ? "text-red-600 bg-zinc-200"
              : "text-zinc-200 bg-sky-800"
          } text-center`}
        >
          {messageResponse}
        </p>
      )}
    </form>
  );
};

export default Form;
