import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { FileInfo } from "../FileInfo/FileInfo";

export interface UploadedFileCardWithProgressProps {
  file: File;
  onDelete: (file: File) => void;
  onUpload: (file: File, url: string) => void;
}

export function UploadedFileCardWithProgress({
  file,
  onDelete,
  onUpload,
}: UploadedFileCardWithProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    async function upload() {
      const url = await uploadFile(file, setProgress);
      onUpload(file, url);
    }

    upload();
  }, []);

  return (
    <div className="uploaded-file-card-with-progress">
      <FileInfo file={file} onDelete={onDelete} />
      {progress < 100 && (
        <div className="uploaded-file-card-progress-container">
          <LinearProgress
            className="uploaded-file-card-progress"
            variant="determinate"
            value={progress}
          />
          <div className="uploaded-file-card-progress-value">{progress}%</div>
        </div>
      )}
    </div>
  );
}

function uploadFile(file: File, onProgress: (percentage: number) => void) {
  const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
  const key = "docs_upload_example_us_preset";

  return new Promise<string>((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.onload = () => {
      const resp = JSON.parse(xhr.responseText);
      res(resp.secure_url);
    };
    xhr.onerror = (evt) => rej(evt);
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentage = (event.loaded / event.total) * 100;
        onProgress(Math.round(percentage));
      }
    };

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", key);

    xhr.send(formData);
  });
}