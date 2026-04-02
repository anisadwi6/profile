import React from 'react';
import anisaFoto from '../assets/anisa.jpg';
import bgPink from '../assets/pink.jpg';
import { useParams, Link } from 'react-router-dom'

export default function AnisaDwiAriyanti() {
  return (
    <div className="min-h-screen bg-pink-50 py-8 px-4 md:py-16">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-pink-100"
>
        
        {/* Banner Pink */}
        {/* <div className="bg-pink-500 h-32 md:h-56"> */}
          {/* <img src={bgPink} alt="bg"/> */}
        {/* </div> */}
        <div className="h-52 md:h-56" style={{ backgroundImage: `url(${bgPink})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>

        <div className="relative px-6 pb-12 md:px-12 md:pb-16">
          
          {/* foto */}
          <div className="absolute -top-16 md:-top-24 left-6 md:left-12 w-32 h-32 md:w-48 md:h-48 rounded-full border-8 border-white overflow-hidden bg-white shadow-xl flex items-center justify-center z-10">
            
          <img 
            src={anisaFoto} 
            alt="Anisa Dwi Ariyanti" 
            className="w-full h-full object-cover rounded-full shadow-inner"
          />
          </div>
          
          {/* nama dan jurusan */}
          <div className="pt-20 md:pt-0 md:pl-64 mt-4 md:mt-8 ">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">Anisa Dwi Ariyanti</h1>
            <p className="text-xl md:text-2xl text-pink-600 font-semibold mt-2">Mahasiswa D3 Teknologi Informasi</p>
          </div>

          {/* biodata dan tentang diri */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16 items-start">
            
            {/* biodata */}
            <div className="lg:col-span-5 space-y-6 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-inner">
              <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-pink-200 pb-2">Biodata</h2>
              <div className="space-y-4 text-base md:text-lg">
                <p className="flex justify-between items-center border-b pb-3"><span className="text-gray-500 font-medium">Nama Lengkap:</span> <span className="font-semibold text-right text-gray-800">Anisa Dwi Ariyanti</span></p>
                <p className="flex justify-between items-center border-b pb-3"><span className="text-gray-500 font-medium">Kelas:</span> <span className="font-semibold text-right text-gray-800">Pemrograman Web </span></p>
                <p className="flex justify-between items-center border-b pb-3"><span className="text-gray-500 font-medium">Jurusan:</span> <span className="font-semibold text-right text-gray-800">Teknologi Informasi</span></p>
                <p className="flex justify-between items-center border-b pb-3"><span className="text-gray-500 font-medium">Domisili:</span> <span className="font-semibold text-right text-gray-800">Malang</span></p>
              </div>
            </div>

            {/* tentang diri */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-pink-200 pb-2 inline-block">Tentang Diri</h2>
            <div className="rounded-3xl shadow-2xl">
              <p className="text-gray-700 leading-relaxed text-justify italic font-serif text-base md:text-lg bg-pink-50/50 p-6 rounded-xl border border-pink-100 shadow-sm">
                Halo, perkenalkan saya Anisa Dwi Ariyanti. Saat ini saya sedang menempuh pendidikan di bidang Teknologi Informasi Universitas Brawijaya. Saya percaya bahwa teknologi memiliki kekuatan untuk mempermudah kehidupan manusia, dan itulah yang memotivasi saya untuk terus belajar mengenai ekosistem JavaScript, termasuk ReactJS dan Tailwind CSS. Melalui tugas ini, saya belajar bagaimana mengelola proyek secara kolaboratif menggunakan GitHub, melakukan manajemen branch, dan menyatukan kode dalam satu repository tim. Saya adalah pribadi yang senang belajar hal baru, teliti dalam mengerjakan detail, dan mampu bekerja sama dengan baik di dalam sebuah tim. Fokus saya saat ini adalah mengasah kemampuan logika pemrograman agar dapat membangun aplikasi yang tidak hanya cantik secara visual, tetapi juga fungsional dan bermanfaat bagi pengguna luas di masa depan.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}