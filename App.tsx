import React from 'react';
import { Menu, Search, ChevronRight, Facebook, Twitter, Instagram, Youtube, GraduationCap, Users, Calendar, BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#2c3e50] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Menu className="h-6 w-6" />
              <div className="flex items-center">
                <GraduationCap className="h-8 w-8 mr-2" />
                <span className="font-bold text-2xl">HMPS-PS</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="hover:text-[#3498db]">Beranda</a>
              <a href="#" className="hover:text-[#3498db]">Profil</a>
              <a href="#" className="hover:text-[#3498db]">Kegiatan</a>
              <a href="#" className="hover:text-[#3498db]">Departemen</a>
              <a href="#" className="hover:text-[#3498db]">Kontak</a>
              <Search className="h-5 w-5 cursor-pointer" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Himpunan Mahasiswa Program Studi</h1>
            <p className="text-xl mb-8">Mewujudkan Mahasiswa yang Aktif, Kreatif, dan Berprestasi dalam Bidang Akademik dan Non-Akademik</p>
            <button className="bg-[#3498db] text-white px-6 py-3 rounded-lg flex items-center hover:bg-[#2980b9] transition-colors">
              Bergabung Bersama Kami
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-[#3498db] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Keanggotaan Aktif</h3>
              <p className="text-gray-600">Bergabunglah dengan komunitas mahasiswa yang aktif dan berdedikasi</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-[#3498db] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Program Kerja</h3>
              <p className="text-gray-600">Berbagai kegiatan akademik dan non-akademik yang inovatif</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-[#3498db] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pengembangan Diri</h3>
              <p className="text-gray-600">Wadah pengembangan soft skill dan hard skill mahasiswa</p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Kegiatan Terkini</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Seminar"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">12 Maret 2024</div>
                <h3 className="text-xl font-semibold mb-2">Seminar Kepemimpinan Mahasiswa</h3>
                <p className="text-gray-600 mb-4">Mengembangkan jiwa kepemimpinan dan manajemen organisasi mahasiswa...</p>
                <a href="#" className="text-[#3498db] font-medium flex items-center hover:text-[#2980b9]">
                  Baca Selengkapnya
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Workshop"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">10 Maret 2024</div>
                <h3 className="text-xl font-semibold mb-2">Workshop Penelitian Ilmiah</h3>
                <p className="text-gray-600 mb-4">Pelatihan metodologi penelitian dan penulisan karya ilmiah...</p>
                <a href="#" className="text-[#3498db] font-medium flex items-center hover:text-[#2980b9]">
                  Baca Selengkapnya
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Gathering"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">8 Maret 2024</div>
                <h3 className="text-xl font-semibold mb-2">Gathering Mahasiswa</h3>
                <p className="text-gray-600 mb-4">Mempererat tali silaturahmi antar mahasiswa program studi...</p>
                <a href="#" className="text-[#3498db] font-medium flex items-center hover:text-[#2980b9]">
                  Baca Selengkapnya
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c3e50] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Tentang HMPS-PS</h3>
              <p className="text-gray-300">Himpunan Mahasiswa Program Studi yang berdedikasi untuk pengembangan akademik dan soft skill mahasiswa</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Tautan</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-[#3498db]">Beranda</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#3498db]">Profil</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#3498db]">Kegiatan</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#3498db]">Departemen</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Kontak</h3>
              <address className="text-gray-300 not-italic">
                Gedung Fakultas<br />
                Kampus Universitas<br />
                Indonesia<br />
                <a href="tel:+62-21-xxxxxxxx" className="hover:text-[#3498db]">+62-21-xxxxxxxx</a>
              </address>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Media Sosial</h3>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 cursor-pointer hover:text-[#3498db]" />
                <Twitter className="h-6 w-6 cursor-pointer hover:text-[#3498db]" />
                <Instagram className="h-6 w-6 cursor-pointer hover:text-[#3498db]" />
                <Youtube className="h-6 w-6 cursor-pointer hover:text-[#3498db]" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-300">&copy; 2024 Himpunan Mahasiswa Program Studi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
