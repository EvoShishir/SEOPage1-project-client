import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { RiAttachment2 } from "react-icons/ri";
import axios from "axios";
import "./ModalComponent.css";

const ModalComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [files, setFiles] = useState(null);
  const [filePreviews, setFilePreviews] = useState([]);
  const [attachments, setAttachments] = useState([]);

  useEffect(() => {
    handleFetch();
  }, []);

  const backend = "https://seopage1-project-server.onrender.com";

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    setFiles(selectedFiles);

    const previews = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const reader = new FileReader();
      reader.onload = (event) => {
        previews.push({
          name: selectedFiles[i].name,
          preview: event.target.result,
        });
        if (previews.length === selectedFiles.length) {
          setFilePreviews(previews);
        }
      };
      reader.readAsDataURL(selectedFiles[i]);
    }
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("attachments", files[i]);
      }

      alert("Uploading files. The page will reload after uploading");

      const response = await axios.post(`${backend}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        console.log("Files uploaded successfully!");
        setFilePreviews([]);
        window.location.reload();
      } else {
        console.error("File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const handleFetch = async () => {
    try {
      const files = await axios.get(`${backend}/files`);
      setAttachments(files.data.files);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClearFiles = () => {
    setFilePreviews([]);
    setAttachments([]);
    setFiles(null);
  };

  return (
    <>
      <h4
        className="flex"
        style={{ cursor: "pointer" }}
        onClick={() => setModalOpen(true)}
      >
        <RiAttachment2 />
        {attachments.length}
      </h4>
      <Modal
        title="Upload Attachments"
        centered
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        width={1000}
        footer={[]}
      >
        <input
          type="file"
          name="attachments"
          multiple
          onChange={handleFileChange}
        />
        <button onClick={handleFileUpload}>Upload</button>
        {filePreviews.length > 0 && (
          <div>
            <button onClick={handleClearFiles}>Clear Files</button>
            <h2>Selected Files:</h2>
            <div className="previews">
              {filePreviews.map((file, index) => (
                <div className="single-preview" key={index}>
                  <img src={file.preview} alt={`File Preview ${index + 1}`} />
                  <p>{file.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {attachments.length > 0 && (
          <div>
            <button onClick={handleClearFiles}>Clear Files</button>
            <h2>All files:</h2>
            <div className="previews">
              {attachments.map((attachment, index) => (
                <div className="single-preview" key={index}>
                  <img
                    src={`${backend}/files/${attachment}`}
                    alt={`File Preview ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};
export default ModalComponent;
