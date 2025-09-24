import { useState } from "react";
import "./Home.css";

const emojiList = ["🚀", "🌞", "🌈", "🌍", "🪐", "🦄", "🌻", "🧑‍🎨", "🦋"];
const colorList = ["#fff", "#FFD700", "#87CEEB","#1976d2", "#FFB6C1", "#90EE90", "#228B22","#a7f3d0", "#FFA500", "#D3D3D3", "#9370DB"];

function Home() {
  const [emoji, setEmoji] = useState("🪐");
  const [bgColor, setBgColor] = useState("#fff");
  const [size, setSize] = useState(4);

  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Modern gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #e0e7ef 0%, #a7f3d0 100%)",
          opacity: 0.7,
        }}
      />
      <header style={{ background: "yellow" ,textAlign: "center", padding: "32px 0 8px 0", fontSize: "2.5rem", fontWeight: "bold", color: "#1976d2", letterSpacing: "1px"}}>
       😎 My Emoji Playground  🌻
      </header>
      <p style={{textAlign: "center", fontSize: "1.3rem", color: "#333", marginBottom: "24px", }}>
        Create, customize, and play with emojis. Choose your favorite, pick a color, and adjust the size!
      </p>
      <div className="editor-layout">
        <div className="emoji-list">
          {emojiList.map(e => (
            <button key={e} className="emoji-btn" onClick={() => setEmoji(e)}>{e}</button>
          ))}
        </div>
        <div className="emoji-container" style={{background: bgColor}}>
          <span style={{fontSize: `${size}rem`}}>{emoji}</span>
          <input type="range" min={2} max={8} value={size} onChange={e => setSize(e.target.value)} className="emoji-slider" />
          <button className="emoji-reset" onClick={() => {setEmoji("🪐"); setBgColor("#fff"); setSize(4);}}>
           &#8635;
          </button>
           
        </div>
        <div className="color-list">
          {colorList.map(c => (
            <button key={c} className="color-btn" style={{background: c}} onClick={() => setBgColor(c)}></button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;