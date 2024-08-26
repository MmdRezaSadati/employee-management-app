import { CldUploadWidget } from "next-cloudinary";
import React, { FC } from "react";
interface CloudinaryResult {
  public_id: string;
}
const ImageUploader: FC<{ setPublicId: any }> = ({ setPublicId }) => {
  return (
    <CldUploadWidget
      uploadPreset="vlpfmikh"
      options={{
        sources: ["local", "url"],
        multiple: false,
        showAdvancedOptions: false,
        styles: {
          palette: {
            window: "#ffffff",
            sourceBg: "#f4f4f5",
            windowBorder: "#90a0b3",
            tabIcon: "#000000",
            inactiveTabIcon: "#555a5f",
            menuIcons: "#555a5f",
            link: "#0433ff",
            action: "#339933",
            inProgress: "#0433ff",
            complete: "#339933",
            error: "#cc0000",
            textDark: "#000000",
            textLight: "#fcfffd",
          },
        },
      }}
      onUpload={(result) => {
        if (result.event !== "success") return;
        const info = result.info as CloudinaryResult;
        setPublicId(info.public_id);
      }}>
      {({ open }) => (
        <button
          onClick={() => open()}
          type="button"
          className="absolute size-full"></button>
      )}
    </CldUploadWidget>
  );
};

export default ImageUploader;
