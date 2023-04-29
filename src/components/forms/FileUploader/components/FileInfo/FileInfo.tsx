import { IconButton } from "@mui/material";
import FileIcon from "assets/icons/uploaded-file.svg";
import CloseIcon from "assets/icons/circle-x-cloes.svg";

export interface FileinfoProps {
  file: File;
  onDelete: (file: File) => void;
}

export function FileInfo({ file, onDelete }: FileinfoProps) {
  return (
    <div className="annie-upload-file-info">
      <div className="annie-upload-file-info-icon">
        <img src={FileIcon} />
      </div>
      <div className="annie-upload-file-info-content">
        <div>
          <div className="file-name">{file.name}</div>
          <div className="file-info">
            {Math.round(file.size / 1024)} KB&nbsp; . &nbsp;
            {file.name.split(".")[file.name.split(".").length - 1]}
          </div>
        </div>

        <div>
          <IconButton onClick={() => onDelete(file)} sx={{ padding: 0 }}>
            <img src={CloseIcon} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
