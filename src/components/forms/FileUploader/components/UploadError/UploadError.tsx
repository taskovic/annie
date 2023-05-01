import { FileError } from "react-dropzone";
import { FileInfo } from "../FileInfo/FileInfo";

export interface UploadErrorProps {
  file: File;
  onDelete: (file: File) => void;
  errors: FileError[];
}

export function UploadError({ file, onDelete, errors }: UploadErrorProps) {
  return (
    <div className="upload-error">
      <FileInfo file={file} onDelete={onDelete} />
      {errors.map((error) => (
        <div key={error.code} className="error-message">
          {error.message}
        </div>
      ))}
    </div>
  );
}
