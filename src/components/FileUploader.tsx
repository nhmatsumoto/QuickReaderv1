import { ChangeEvent } from "react";

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
}

export const FileUploader = ({ onFileSelect } : FileUploaderProps) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      onFileSelect(file);
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4 text-center">
      <input
        type="file"
        accept=".txt"
        onChange={handleFileChange}
        className="w-full"
      />
      <p className="text-gray-500 mt-2">Selecione um arquivo .txt</p>
    </div>
  );
};