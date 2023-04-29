import { useField } from "formik";
import { useCallback, useEffect, useState } from "react";
import {
  DropEvent,
  FileError,
  FileRejection,
  useDropzone,
} from "react-dropzone";
import { UploadedFileCardWithProgress } from "../UploadedFileWithProgress/UploadedFileCardWithProgress";
import { UploadError } from "features/ReferalModal/UploadError/UploadError";
import UlpoadIcon from "../assets/icons/upload-file.svg";

let currentId = 0;

function getNewId() {
  return ++currentId;
}

export interface UploadableFile {
  id: number;
  file: File;
  errors: FileError[];
  url?: string;
}

export function FileUploader({ name }: { name: string }) {
  const [_, __, helpers] = useField(name);

  const [files, setFiles] = useState<UploadableFile[]>([]);
  const onDrop = useCallback(
    (accFiles: File[], rejFiles: FileRejection[], event: DropEvent) => {
      const mappedAcc = accFiles.map((file) => ({
        file,
        errors: [],
        id: getNewId(),
      }));
      const mappedRej = rejFiles.map((r) => ({ ...r, id: getNewId() }));
      setFiles((curr) => [...curr, ...mappedAcc, ...mappedRej]);
    },
    []
  );

  useEffect(() => {
    helpers.setValue(files);
  }, [files]);

  function onUpload(file: File, url: string) {
    setFiles((curr) =>
      curr.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url };
        }
        return fw;
      })
    );
  }

  function onDelete(file: File) {
    setFiles((curr) => curr.filter((fw) => fw.file !== file));
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    useFsAccessApi: false,
    accept: {
      "image/png": [".png"],
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    maxSize: 80 * 1024, // 300KB
  });

  const getDropzoneClassName = (active: boolean) => {
    if (active) return "annie-dropzone active-dropzone";
    else return "annie-dropzone";
  };

  return (
    <>
      <div {...getRootProps({ className: getDropzoneClassName(isDragActive) })}>
        <input {...getInputProps()} />
        <div className="annie-dropzone-icon">
          <img src={UlpoadIcon} />
        </div>
        <div className="annie-dropzone-text">
          <div>
            <span>Click to upload</span>
            <p>&nbsp;or drag and drop</p>
          </div>
          <p>Maximum file size 5MB</p>
        </div>
      </div>

      {files.map((fileWrapper) => (
        <div key={fileWrapper.id}>
          {fileWrapper.errors.length ? (
            <UploadError
              file={fileWrapper.file}
              errors={fileWrapper.errors}
              onDelete={onDelete}
            />
          ) : (
            <UploadedFileCardWithProgress
              onDelete={onDelete}
              onUpload={onUpload}
              file={fileWrapper.file}
            />
          )}
        </div>
      ))}
    </>
  );
}
