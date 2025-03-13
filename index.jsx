const App = () => {
    return (
        <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", marginTop: "50px", backgroundColor: "#f3e5f5", padding: "20px", borderRadius: "10px", maxWidth: "500px", margin: "auto", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <img 
                src="./files/rachana.jpeg" 
                alt="Rachana Sharma" 
                style={{ borderRadius: "50%", width: "150px", height: "150px", border: "4px solid #555", objectFit: "cover", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)" }} 
            />
            <h1 style={{ color: "#333", fontSize: "26px", marginTop: "10px", fontWeight: "bold" }}>Rachana Sharma</h1>
            <p style={{ color: "#777", fontSize: "16px", marginBottom: "10px" }}>Software Engineering Student & YouTuber</p>
            <p style={{ fontSize: "16px", fontWeight: "bold", color: "#555", maxWidth: "400px", margin: "auto" }}>
                "Creating content and sharing my journey in tech, lifestyle, and skincare."
            </p>
            
            <a 
                href="mailto:sharmarachana055@gmail.com" 
                style={{ display: "inline-block", padding: "10px", borderRadius: "50%", background: "#ffb6c1", color: "white", textDecoration: "none", fontSize: "20px", margin: "15px", transition: "0.3s" }}
                onMouseOver={(e) => e.target.style.background = "#ff69b4"}
                onMouseOut={(e) => e.target.style.background = "#ffb6c1"}
            >
                <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" width="24" height="24" />
            </a>
            
            <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                {[
                    { link: "https://www.instagram.com/rachusrma/", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", color: "#f8d3e9" },
                    { link: "https://www.tiktok.com/@rachusrma?lang=en", icon: "https://cdn-icons-png.flaticon.com/512/3046/3046125.png", color: "#fbfbfb" },
                    { link: "https://www.facebook.com/rachana.sharma.9440/", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png", color: "#cad0ff" },
                    { link: "https://www.youtube.com/@RachanaSharma25", icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png", color: "#f8b8b8" }
                ].map((item, index) => (
                    <a key={index} href={item.link} target="_blank" style={{ 
                        display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: "18px", fontWeight: "bold", 
                        padding: "12px 20px", borderRadius: "8px", width: "85%", background: item.color, boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.15)", transition: "0.3s" 
                    }}
                    onMouseOver={(e) => e.target.style.background = "#e6e6fa"}
                    onMouseOut={(e) => e.target.style.background = item.color}
                    >
                        <img src={item.icon} alt="Social Icon" width="24" height="24" style={{ marginRight: "10px" }} /> 
                    </a>
                ))}
            </div>
            
            <div style={{ marginTop: "30px", fontSize: "16px", color: "#666" }}>
                <h3>Interests</h3>
                <ul style={{ listStyle: "none", padding: "0" }}>
                    <li>📹 Content Creation (Lifestyle, Shopping, Skincare)</li>
                    <li>🏊 Swimming for relaxation</li>
                    <li>💃 Dancing for fun and self-expression</li>
                </ul>
            </div>
        </div>
    );
};

// Render the App component into the root div
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
