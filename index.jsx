const App = () => {
    return (
        <div style={{ 
            textAlign: "center", 
            fontFamily: "Arial, sans-serif", 
            background: "linear-gradient(to bottom, #fce4ec, #f8d7da)", 
            padding: "50px 20px", 
            borderRadius: "20px", 
            maxWidth: "350px", 
            margin: "auto", 
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            
            {/* Profile Image */}
            <img 
                src="./files/rachana.jpeg" 
                alt="Rachana Sharma" 
                style={{ 
                    borderRadius: "20px", 
                    width: "150px", 
                    height: "150px", 
                    objectFit: "cover", 
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                    marginBottom: "20px"
                }}       
            />
            
            {/* Name & Description */}
            <h2 style={{ color: "#333", fontSize: "22px", marginTop: "15px", fontWeight: "bold" }}>Rachana Sharma</h2>
            <p style={{ color: "#666", fontSize: "14px", marginBottom: "15px" }}>Software Engineering Student & YouTuber</p>
            <p style={{ fontSize: "16px", fontWeight: "bold", color: "#555", maxWidth: "300px", margin: "auto" }}>
                "Creating content and sharing my journey in tech, lifestyle, and skincare."
            </p>
            
            {/* Social Media Buttons */}
            <div style={{ marginTop: "20px", width: "100%" }}>
                {[ 
                    { text: "YouTube", link: "https://www.youtube.com/@RachanaSharma25", icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png" },
                    { text: "Instagram", link: "https://www.instagram.com/rachusrma/", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png" },
                    { text: "TikTok", link: "https://www.tiktok.com/@rachusrma?lang=en", icon: "https://cdn-icons-png.flaticon.com/512/3046/3046125.png" },
                    { text: "Facebook", link: "https://www.facebook.com/rachana.sharma.9440/", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png" },
                    { text: "Email", link: "mailto:sharmarachana055@gmail.com", icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png" }
                ].map((item, index) => (
                    <a key={index} href={item.link} target="_blank" style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        width: "90%", 
                        padding: "12px 0", 
                        background: "#ffffff", 
                        color: "#333", 
                        textDecoration: "none", 
                        fontSize: "16px", 
                        fontWeight: "bold", 
                        borderRadius: "30px", 
                        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
                        margin: "10px auto",
                        transition: "0.3s",
                        textAlign: "center"
                    }}
                    onMouseOver={(e) => e.target.style.background = "#f8bbd0"}
                    onMouseOut={(e) => e.target.style.background = "#ffffff"}
                    >
                        <img src={item.icon} alt={item.text} width="24" height="24" style={{ marginRight: "10px" }} />
                        {item.text}
                    </a>
                ))}
            </div>
            
            {/* Interests Section */}
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
