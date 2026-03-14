import { useDropzone } from "react-dropzone";

function UploadBox({ onUpload }) {

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onUpload(acceptedFiles[0]);
      }
    }
  });

  return (

    <div
      {...getRootProps()}
      className="border-2 border-dashed border-blue-400
      bg-blue-50 rounded-2xl p-10 text-center
      cursor-pointer hover:bg-blue-100 transition"
    >

      <input {...getInputProps()} />

      <p className="text-lg font-semibold text-blue-700">
        Drag & Drop your diagram
      </p>

      <p className="text-sm text-gray-500 mt-1">
        or click to upload PNG/JPG
      </p>

    </div>

  );
}

export default UploadBox;