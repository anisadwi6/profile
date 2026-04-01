import { Link } from 'react-router-dom'

export default function ProfileCard({ nama, inisial, warna, jabatan, path }) {
  return (
    <Link
      to={path}
      className="bg-white p-6 rounded-xl shadow text-center w-52 hover:scale-105 transition duration-300 block"
    >
    
      {/* Foto / Inisial */}
      <div className={`w-14 h-14 rounded-full ${warna} flex items-center justify-center text-lg font-semibold mx-auto mb-3`}>
        {inisial}
      </div>

      <h2 className="font-semibold text-base">{nama}</h2>
      <p className="text-gray-400 text-sm mt-1 mb-3">{jabatan}</p>
      <span className="text-xs bg-blue-100 text-gray-700 px-3 py-1 rounded-full">
        Lihat profil →
      </span>
    </Link>
  )
}