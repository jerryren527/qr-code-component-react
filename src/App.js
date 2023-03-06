import "./App.css";
import { Card } from "./components/Card";
import qrCode from "./public/img/image-qr-code.png";

function App() {
  const title = "Improve your front-end skills by building projects";
  const body = "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level";

  return (
    <div className="App">
      <Card image={qrCode} title={title} body={body} />
    </div>
  );
}

export default App;
