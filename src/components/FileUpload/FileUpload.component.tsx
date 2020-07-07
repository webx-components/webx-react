import React, {Component, ReactNode} from 'react';
import theme from "./FileUpload.module.css";
import fileSvg from "./svg/file.svg";

/**
 * class FileUpload
 * @author Ingo Andelhofs
 */
export default class FileUpload extends Component {
  public render(): ReactNode {
    return <div className={theme.FileUpload}>
      <img className={theme.FileUploadSvg} src={fileSvg} alt="File Icon"/>
      <span className={theme.Text}>
        <span className={theme.UploadFileText}>Upload a file </span>
        <span className={theme.DragAndDropFileText}>or drag and drop</span>
      </span>
    </div>;
  }
}