import { useField } from "formik";
import { useCallback, useEffect, useState } from "react";
import {
  DropEvent,
  FileError,
  FileRejection,
  useDropzone,
} from "react-dropzone";
import { UploadedFileCardWithProgress } from "./components/UploadedFileCardWithProgress/UploadedFileCardWithProgress";
import { UploadError } from "./components/UploadError/UploadError";
import UploadFileIcon from "../../icons/UploadFile/UploadFile";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

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

interface Props {
  name: string;
  required: boolean;
  requiredError?: boolean;
}

export function FileUploader({ name, required, requiredError }: Props) {
  const [_, __, helpers] = useField(name);
  const [files, setFiles] = useState<UploadableFile[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  /*const onDrop = useCallback(
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
  );*/

  console.log("Files: ", files);

  const onDrop = useCallback(
    (accFiles: File[], rejFiles: FileRejection[], event: DropEvent) => {
      setErrors([])
      const mappedAcc = accFiles.map((file) => ({
        file,
        errors: [],
        id: getNewId(),
      }));
      const mappedRej = rejFiles.map((r) => ({ ...r, id: getNewId() }));
      if (mappedRej.length > 1) {
        setErrors(["Too many files"])
      } else {
        if (mappedRej.length === 1) {
          mappedRej[0].errors.forEach((error: any) => {
            setErrors((curr) => [...curr, error.message])
          })
        } else {
          setFiles(mappedAcc)
        }
      }
      //setFiles((curr) => [...curr, ...mappedAcc, ...mappedRej]);
    },
    []
  );

  useEffect(() => {
    helpers.setValue(files);
  }, [files]);

  useEffect(() => {
    if(required){
      if(requiredError){
        setErrors(["This document is mandatory."])
      }
      
    } 
  }, [requiredError]);

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
    helpers.setValue([]);
    setFiles([])
    //setFiles((curr) => curr.filter((fw) => fw.file !== file));
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
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

  const removeError = (error: string) => {
    setErrors(errors.filter( e => e !== error))
  }

  return (
    <>
      {
        files.length < 1 ?
          <>
            <div {...getRootProps({ className: getDropzoneClassName(isDragActive) })}>
              <input {...getInputProps()} />
              <div className="annie-dropzone-icon">
                <UploadFileIcon />
              </div>
              <div className="annie-dropzone-text">
                <div>
                  <span>Click to upload</span>
                  <p>&nbsp;or drag and drop</p>
                </div>
                <p>Maximum file size 5MB</p>
              </div>
            </div>
            {errors.length > 0 &&
              errors.map((error: string) => {
                return (
                  <ErrorMessage message={error} handleClose={()=>{removeError(error)}} />
                )
              })}
          </>
          :
          <>
            {files.map((fileWrapper, index) => (
              <div key={fileWrapper.id}>
                {
                  index === 0 &&
                  <>
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
                  </>
                }
              </div>
            ))}
          </>
      }
    </>
  );
}
