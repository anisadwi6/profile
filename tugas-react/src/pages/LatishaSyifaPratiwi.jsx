import React from 'react';
import latishaFoto from '../assets/latisha.jpg';

export default function LatishaSyifaPratiwi() {
  return (
    <div className="min-h-screen bg-pink-50 py-8 px-4 md:py-16">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-pink-100">
        
        {/* Banner Pink */}
        <div className="bg-gray-400 h-32 md:h-56"></div>
        
        <div className="relative px-6 pb-12 md:px-12 md:pb-16">
          
          {/* FOTO AVATAR: Posisinya di kiri atas nama */}
          <div className="absolute -top-16 md:-top-24 left-6 md:left-12 w-32 h-32 md:w-48 md:h-48 rounded-full border-8 border-white overflow-hidden bg-white shadow-xl flex items-center justify-center z-10">
            {/* PASTE KODE INI SEBAGAI PENGGANTINYA */}
          <img 
            src={latishaFoto} 
            alt="Latisha Syifa Pratiwi" 
            className="w-full h-full object-cover rounded-full shadow-inner"
          />
          </div>
          
          {/* NAMA DAN JURUSAN: Dikasih padding left agar tidak ditabrak foto */}
          <div className="pt-20 md:pt-0 md:pl-64 mt-4 md:mt-8 border-b pb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">Latisha Syifa Pratiwi</h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mt-2">Mahasiswi Informatika</p>
          </div>

          {/* GRID KONTEN: Biodata dan Tentang Diri */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
            
            {/* BIODATA */}
            <div className="lg:col-span-5 space-y-6 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-inner">
              <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-200 pb-2">Biodata</h2>
              <div className="space-y-4 text-base md:text-lg">
                <p className="flex justify-between items-center border-b pb-3"><span className="text-gray-500 font-medium">Nama Lengkap:</span> <span className="font-semibold text-right text-gray-800">Latisha Syifa Pratiwi</span></p>
                <p className="flex justify-between items-center border-b pb-3"><span className="text-gray-500 font-medium">Kelas:</span> <span className="font-semibold text-right text-gray-800">T2D</span></p>
                <p className="flex justify-between items-center border-b pb-3"><span className="text-gray-500 font-medium">Jurusan:</span> <span className="font-semibold text-right text-gray-800">Teknologi Informasi</span></p>
                <p className="flex justify-between items-center border-b pb-3"><span className="text-gray-500 font-medium">Domisili:</span> <span className="font-semibold text-right text-gray-800">Banjarmasin</span></p>
              </div>
            </div>

            {/* TENTANG DIRI */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2 inline-block">Tentang Diri</h2>
              <p className="text-gray-700 leading-relaxed text-justify italic font-serif text-base md:text-lg bg-blue-50/50 p-6 rounded-xl border border-blue-100 shadow-sm">
                Halo, saya Latisha Syifa Pratiwi. Saat ini saya sedang menempuh studi di bidang Informatika dan memiliki minat yang kuat dalam dunia pengembangan web, khususnya pada bagian tampilan dan pengalaman pengguna. Saya tertarik mempelajari bagaimana sebuah website dapat dirancang agar tidak hanya menarik secara visual, tetapi juga nyaman dan mudah digunakan. Selama proses belajar, saya mulai mengenal dan menggunakan berbagai teknologi seperti JavaScript, ReactJS, serta Tailwind CSS untuk membangun aplikasi web yang modern dan responsif. Melalui tugas ini, saya juga mendapatkan pengalaman baru dalam bekerja secara tim dengan memanfaatkan GitHub, mulai dari mengatur alur kerja, mengelola branch, hingga menggabungkan hasil pekerjaan menjadi satu kesatuan yang utuh. Saya termasuk pribadi yang tekun, detail-oriented, dan senang mencoba hal-hal baru, serta mampu beradaptasi dan bekerja sama dengan baik dalam tim. Ke depannya, saya ingin terus mengembangkan kemampuan di bidang pemrograman dan desain antarmuka agar dapat menghasilkan aplikasi yang tidak hanya menarik, tetapi juga memiliki nilai guna yang tinggi bagi pengguna.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}