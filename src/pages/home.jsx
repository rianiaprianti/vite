const Home = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 className="display-3 fw-bold">Kreativitas Tanpa Batas</h1>
          <p className="lead text-muted">
            Selamat datang di platform kami. Kami fokus pada pengembangan antarmuka 
            pengguna yang cepat, responsif, dan elegan menggunakan React.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button className="btn btn-primary btn-lg px-4 me-md-2">Mulai Sekarang</button>
            <button className="btn btn-outline-secondary btn-lg px-4">Portfolio</button>
          </div>
        </div>
        <div className="col-lg-6">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600" 
            className="img-fluid rounded-4 shadow-lg" 
            alt="Hero" 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;