If you are using react add this to your type declaration file

```ts
// index.d.ts
declare namespace JSX {
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
```

## How to use

```
import type {} from "kyc_document_capture";
import "kyc_document_capture";
```
