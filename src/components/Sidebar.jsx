import Button from "react-bootstrap/Button";

function Sidebar() {
  const sidebarHeadings = [
    "Trending Now",
    "Popular Songs", 
      "Top Artists",  
    "My Playlists",
  ];

  return (
    <div
      className="text-white box-color p-2"
      style={{
        width: "20%",
        height: "100dvh",
        position: "fixed",
        marginTop:"80px",
        marginBottom:"60px",
        top: 0,
        left: 0,
        overflowY: "auto",
        zIndex: 1000,
      }}
    >
      <div className="shadow-lg bg-navbar p-3 mb-4" style={{ borderRadius: "10px" }}>
        <h4 className="mb-3">Tune In. Vibe Out.</h4>
        {sidebarHeadings.map((data, i) => (
          <p key={i} className="text-white" style={{ cursor: "pointer" }}>
            {data}
          </p>
        ))}
      </div>

      <div className="shadow-lg bg-navbar p-3" style={{ borderRadius: "10px" }}>
        <h4 className="mb-3">Create your first playlist</h4>
        <p>It's easy we will help you</p>
        <Button className="custom-button">Create playlist</Button>
      </div>
    </div>
  );
}
export default Sidebar