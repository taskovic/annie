import { FileError } from 'react-dropzone';
import { FileHeader } from './FileHeader';

export interface UploadErrorProps {
  file: File;
  onDelete: (file: File) => void;
  errors: FileError[];
}

export function UploadError({ file, onDelete, errors }: UploadErrorProps) {
  return (
    <div className="upload-error">
      <FileHeader file={file} onDelete={onDelete} />
      {errors.map((error) => (
        <div key={error.code} className="error-message">
          {error.message}
        </div>
      ))}
    </div>
  );
}