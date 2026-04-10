const Team = () => {
  const members = [
    { id: 1, name: "Alex Johnson", role: "Frontend Developer", img: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Sarah Smith", role: "UI Designer", img: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Budi Santoso", role: "Project Manager", img: "https://i.pravatar.cc/150?u=3" }
  ];

  return (
    <div className="container py-5 text-center">
      <h2 className="fw-bold mb-5">Tim Profesional Kami</h2>
      <div className="row g-4">
        {members.map((member) => (
          <div key={member.id} className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-3">
              <img src={member.img} className="rounded-circle mx-auto d-block mb-3" width="120" alt={member.name} />
              <div className="card-body">
                <h5 className="card-title fw-bold">{member.name}</h5>
                <p className="card-text text-primary">{member.role}</p>
                <div className="d-flex justify-content-center gap-2">
                  <i className="bi bi-github"></i>
                  <i className="bi bi-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;