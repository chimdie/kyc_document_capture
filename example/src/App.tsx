import "./App.css";
import type {} from "kyc_document_capture";
import "kyc_document_capture";

function App() {
  return (
    <>
      <smart-camera-web capture-id="back" only-document></smart-camera-web>
    </>
  );
}

export default App;
