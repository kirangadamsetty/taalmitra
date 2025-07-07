function Sidebar() {
  const sidebarHeadings = [
    "Trending Now",
    "Popular Songs",
    "New Releases",
    "Indian Classics",
    "Top Artists",
    "Recently Played",
    "Favourites",
    "My Playlists",
  ];

  return (
    <div className="text-white box-color p-2" style={{ width:"250px",minHeight: "100dvh" }}>
      <div className="shadow-lg bg-navbar p-3" style={{ borderRadius: "10px" }}>
        <h4 className="red-text-color">Tune In. Vibe Out.</h4>
        {sidebarHeadings.map((data, i) => (
          <p key={i} className="text-white" style={{ cursor: "pointer" }}>
            {data}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;