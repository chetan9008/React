import { useState } from "react";
import QRCode from "react-qr-code";
const QRCodeGenerator = () => {
  let [input, setInput] = useState("");
  let [qrCode, setQrcode] = useState("");
  return (
    <div>
      <h1>Q R Code Generator</h1>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="enter the text"
        name="qr-code-generator"
        value={input}
      />
      <button
        disabled={!input}
        onClick={() => {
          setQrcode(input);
          setInput("");
        }}
      >
        Generate
      </button>
      <QRCode value={qrCode} size={400} />
    </div>
  );
};
export default QRCodeGenerator;
