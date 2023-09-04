If you are using react add this to your type declaration file

```ts
// index.d.ts
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "smart-camera-web": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> &
          Partial<{
            "hide-back-to-host": boolean;
            "show-navigation": boolean;
            "show-attribution": boolean;
            "capture-id": boolean | "back";
            "document-capture-modes": Array<"camera" | "upload">;
            "only-document": boolean;
            "document-type": boolean | "GREEN_BOOK";
            "show-thanks": boolean;
          }>,
        HTMLElement
      >;
    }
  }
}
```

## How to use

```ts
import type {} from "kyc_document_capture";
import "kyc_document_capture";
```

## Events

- imagesComputed
- captureComplete
- close
- backExit

## Attributes

- hide-back-to-host
- show-navigation
- show-attribution
- capture-id
- document-capture-modes
- only-document
- document-type
- show-thanks
