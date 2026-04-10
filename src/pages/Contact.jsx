const Contact = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h2 className="fw-bold mb-4 text-center">Hubungi Kami</h2>
            <form>
              <div className="mb-3">
                <label className="form-label">Nama Lengkap</label>
                <input type="text" className="form-control" placeholder="Masukkan nama..." />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="nama@email.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Pesan</label>
                <textarea className="form-control" rows="4" placeholder="Tulis pesan Anda..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 py-2">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;