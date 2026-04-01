import ProfileCard from "../../components/profilcard";


const anggota = [
    {
        nama: "Nasywa Putri Rachmita",
        inisial: "NP",
        warna: "bg-pink-100 text-pink-800",
        jabatan: "Anggota 1",
        path:"/nasywa"
    },
    {
        nama: "Latisha Syifa Pratiwi",
        inisial: "LS",
        warna: "bg-red-100 text-red-800",
        jabatan: "Anggota 2",
        path:"/latisha"
    },
    {
        nama: "Anisa Dwi Ariyanti",
        inisial: "AD",
        warna: "bg-red-100 text-red-800",
        jabatan: "Anggota 3",
        path: "/anisa-dwi-ariyanti"
    }
]

export default function Home() {
  return (
    <div className="bg-red-200 min-h-screen">
      
      {/* Header */}
      <div className="text-center pt-16 pb-4">
        <h1 className="text-4xl font-bold">CECECAN</h1>
        <p className="text-black-500 mt-2">Klik kartu untuk melihat profil anggota</p>
      </div>

      {/* Kartu Anggota */}
      <div className="flex justify-center gap-6 mt-10 flex-wrap px-4">
        {anggota.map((org) => (
          <ProfileCard
            key={org.nama}
            nama={org.nama}
            inisial={org.inisial}
            warna={org.warna}
            jabatan={org.jabatan}
            path={org.path}
          />
        ))}
      </div>

    </div>
  )
}