// declare global {
namespace JSX {
  interface IntrinsicElements {
    // "smart-camera-web": React.DetailedHTMLProps<
    //   React.HTMLAttributes<HTMLElement> &
    //   HTMLElement
    // >;
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
// }
