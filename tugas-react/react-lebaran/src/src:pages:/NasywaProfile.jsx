export default function NasywaProfile() {
  return (
    <div style={{ minHeight:"100vh", backgroundColor:"#C8A882", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"sans-serif", padding:"40px" }}>
      <div style={{ width:"860px", backgroundColor:"#fff", borderRadius:"24px", overflow:"hidden", boxShadow:"0 16px 48px rgba(0,0,0,0.15)" }}>
        
        {/* Header */}
        <div style={{ backgroundColor:"#6B3A1F", height:"160px", position:"relative", display:"flex", justifyContent:"center" }}>
          <div style={{ position:"absolute", bottom:"-56px", width:"112px", height:"112px", borderRadius:"50%", border:"5px solid #fff", overflow:"hidden", boxShadow:"0 4px 12px rgba(0,0,0,0.2)" }}>
            <img src="/src/assets/foto.jpg" alt="Foto Profil" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          </div>
        </div>

        {/* Body */}
        <div style={{ paddingTop:"72px", paddingBottom:"48px", paddingLeft:"60px", paddingRight:"60px" }}>
          
          {/* Nama */}
          <div style={{ textAlign:"center", marginBottom:"40px" }}>
            <h1 style={{ fontSize:"28px", fontWeight:"700", color:"#2D1A0E", margin:0 }}>Nasywa Putri Rachmitha</h1>
            <p style={{ fontSize:"15px", color:"#8B5E3C", fontWeight:"600", margin:"6px 0 0" }}>Mahasiswa Teknologi Informasi</p>
          </div>

          {/* 2 Kolom */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"24px" }}>
            
            {/* Biodata */}
            <div style={{ border:"1.5px solid #D4A96A", borderRadius:"16px", padding:"24px 28px" }}>
              <h2 style={{ fontSize:"16px", fontWeight:"700", color:"#2D1A0E", margin:"0 0 12px", paddingBottom:"12px", borderBottom:"1px solid #D4A96A" }}>Biodata</h2>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"14px" }}>
                <tbody>
                  {[
                    ["NIM","253140707111013"],
                    ["Kelas","T2-D 2025"],
                    ["Universitas","Universitas Brawijaya"],
                    ["Fakultas","Vokasi"],
                    ["Program Studi","D3 Teknologi Informasi"],
                    ["Domisili","Malang, Jawa Timur"],
                  ].map(([label, value]) => (
                    <tr key={label} style={{ borderBottom:"1px solid #F0DFC0" }}>
                      <td style={{ padding:"11px 0", color:"#A07040", width:"130px" }}>{label}</td>
                      <td style={{ padding:"11px 0", textAlign:"right", color:"#2D1A0E", fontWeight:"500" }}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Tentang Diri */}
            <div style={{ border:"1.5px solid #D4A96A", borderRadius:"16px", padding:"24px 28px" }}>
              <h2 style={{ fontSize:"16px", fontWeight:"700", color:"#2D1A0E", margin:"0 0 12px", paddingBottom:"12px", borderBottom:"1px solid #D4A96A" }}>Tentang Diri</h2>
              <p style={{ fontSize:"14px", color:"#5A3A1A", lineHeight:"1.75", margin:0 }}>
                Halo! Nama saya Nasywa Putri Rachmitha, mahasiswi D3 Teknologi Informasi
                di Universitas Brawijaya. Saya memiliki ketertarikan besar pada dunia
                pemrograman web dan desain antarmuka pengguna. Sejak awal kuliah, saya
                aktif mempelajari berbagai teknologi modern seperti ReactJS, Tailwind CSS,
                dan dasar-dasar pengembangan backend. Saya percaya bahwa teknologi adalah
                alat yang luar biasa untuk memecahkan masalah nyata di masyarakat. Selain
                belajar, saya juga senang berkolaborasi dalam tim, mengikuti lomba
                teknologi, dan mengeksplorasi ide-ide kreatif melalui proyek digital.
                Ke depannya, saya bercita-cita menjadi pengembang web yang handal dan
                mampu berkontribusi pada ekosistem teknologi Indonesia.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
