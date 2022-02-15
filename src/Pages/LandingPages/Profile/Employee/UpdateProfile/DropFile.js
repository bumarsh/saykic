import React from "react";
import { useDropzone } from "react-dropzone";

export default function DropFile() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container" style={{ height: "198px" }}>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p style={{ textAlign: "center", marginTop: "2rem" }}>
          Drop files here to upload
        </p>
      </div>
    </section>
  );
}
