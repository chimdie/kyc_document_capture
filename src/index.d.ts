declare module "kyc_document_capture";

declare module "react-dom/client" {
  namespace JSX {
    interface IntrinsicElements {
      "smart-camera-web": Partial<{
        "hide-back-to-host": boolean;
        "show-navigation": boolean;
        "show-attribution": boolean;
        "capture-id": boolean | "back";
        "document-capture-modes": Array<"camera" | "upload">;
        "only-document": boolean;
        "document-type": boolean | "GREEN_BOOK";
        "show-thanks": boolean;
      }>;
    }
  }
}

declare module "./index" {
  export type ImagesComputedEventDetails = {
    partner_params: {
      libraryVersion: string;
      permissionGranted: boolean;
    };
    images: Array<{
      image_type_id: number;
      image: string;
    }>;
  };

  type EventPayload<T = null> = {
    detail: T;
  };

  export interface Events {
    imagesComputed(arg: EventPayload<ImagesComputedEventDetails>): null;
    captureComplete(arg: EventPayload): null;
    close(arg: EventPayload): null;
    backExit(arg: EventPayload): null;
  }
}
export {};
