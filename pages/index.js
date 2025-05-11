import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import { FiMail, FiPhone, FiCopy, FiCheck, FiArrowLeft } from "react-icons/fi";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  // Bidhaa zilizopo
  const [products] = useState([
    {
      id: 1,
      name: "Simu Smartphone Infinix SMART 8",
      description: "Simu bora yenye skrini kubwa, kamera yenye megapixeli nyingi na betri ya muda mrefu",
      price: "250,000",
      currency: "TZS",
      image: "/IMG_20250503_163457.jpg",
      faida: [
        "Skrini kubwa ya 6.7 inchi",
        "Kamera tatu za hali ya juu",
        "Betri ya kudumu kwa siku nzima",
        "Hifadhi ya picha na video nyingi"
      ]
    },
    {
      id: 2,
      name: "Laptop aina ya HP",
      description: "Laptop nyepesi na yenye nguvu kwa kazi zote za kila siku",
      price: "400,000",
      currency: "TZS",
      image: "/IMG_20250503_162248.jpg",
      faida: [
        "Skrini nzuri ya 14 inchi",
        "Inaendeshwa kwa haraka sana",
        "Hifadhi kubwa ya mafaili",
        "Betri ya muda mrefu"
      ]
    }
  ]);

  const [bidhaaChaguliwa, setBidhaaChaguliwa] = useState(null);
  const [onyeshaMaelezoMalipo, setOnyeshaMaelezoMalipo] = useState(false);
  const [nambariImenakiliwa, setNambariImenakiliwa] = useState(false);

  const wekaBei = (price) => {
    return `TSh ${price}`;
  };

  const nakiliNambari = (nambari) => {
    navigator.clipboard.writeText(nambari);
    setNambariImenakiliwa(true);
    setTimeout(() => setNambariImenakiliwa(false), 2000);
  };

  return (
    <div className={`${geistSans.className} min-h-screen bg-gray-50`}>
      {/* Kichwa */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold">Duka Letu la Elektroniki</h1>
          </div>
          <div className="flex space-x-4">
            <a href="#bidhaa" className="hover:text-blue-200 transition">Bidhaa Zetu</a>
            <a href="#muamala" className="hover:text-blue-200 transition">Njia ya Malipo</a>
            <a href="#mawasiliano" className="hover:text-blue-200 transition">Tuandikie</a>
          </div>
        </div>
      </nav>

      {/* Sehemu ya kuvutia */}
      <header className="bg-blue-700 text-white py-12 text-center">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Vifaa Bora vya Teknolojia</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Pata vifaa vipya vya hali ya juu kwa bei nafuu
          </p>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        {/* Orodha ya bidhaa */}
        <section id="bidhaa" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Bidhaa Zetu</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {products.map((bidhaa) => (
              <div 
                key={bidhaa.id}
                className={`bg-white rounded-lg shadow-md overflow-hidden border ${bidhaaChaguliwa?.id === bidhaa.id ? 'border-green-500 border-2' : 'border-gray-200'}`}
                onClick={() => setBidhaaChaguliwa(bidhaa)}
              >
                <div className="h-48 bg-gray-100 flex items-center justify-center relative">
                  {bidhaa.image ? (
                    <Image 
                      src={bidhaa.image} 
                      alt={bidhaa.name}
                      layout="fill"
                      objectFit="contain"
                      className="p-4"
                    />
                  ) : (
                    <span className="text-5xl">
                      {bidhaa.name.includes("Simu") ? "" : ""}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{bidhaa.name}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {wekaBei(bidhaa.price)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{bidhaa.description}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {bidhaa.faida.map((faida, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{faida}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    className={`w-full py-2 rounded-lg font-medium transition ${bidhaaChaguliwa?.id === bidhaa.id ? 'bg-green-600 text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}
                  >
                    {bidhaaChaguliwa?.id === bidhaa.id ? '✔ Imechaguliwa' : 'Chagua Bidhaa Hii'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Maelezo ya bidhaa uliyochagua */}
        {bidhaaChaguliwa && (
          <section className="mb-12 bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Bidhaa Uliochagua</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3 bg-gray-100 rounded-lg h-48 flex items-center justify-center relative">
                {bidhaaChaguliwa.image ? (
                  <Image 
                    src={bidhaaChaguliwa.image} 
                    alt={bidhaaChaguliwa.name}
                    layout="fill"
                    objectFit="contain"
                    className="p-4"
                  />
                ) : (
                  <span className="text-6xl">
                    {bidhaaChaguliwa.name.includes("Simu") ? "📱" : "💻"}
                  </span>
                )}
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{bidhaaChaguliwa.name}</h3>
                <p className="text-gray-600 mb-4">{bidhaaChaguliwa.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Bei ya bidhaa</p>
                    <p className="font-bold text-blue-700 text-lg">{wekaBei(bidhaaChaguliwa.price)}</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Hali ya bidhaa</p>
                    <p className="font-bold text-green-700 text-lg">Inapatikana</p>
                  </div>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-gray-800 mb-2">Faida za Bidhaa:</h4>
                  <ul className="space-y-2">
                    {bidhaaChaguliwa.faida.map((faida, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{faida}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => setOnyeshaMaelezoMalipo(true)}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition"
                >
                  Nenda Kwenye Malipo
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Maelezo ya malipo ya M-Pesa */}
        {onyeshaMaelezoMalipo && bidhaaChaguliwa && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
              <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Maelekezo ya Malipo ya M-Pesa
              </h2>
              
              <div className="space-y-4 mb-5">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-blue-600 font-medium">Jumla ya Kulipa</p>
                      <p className="text-xl font-bold text-blue-800">{wekaBei(bidhaaChaguliwa.price)}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {bidhaaChaguliwa.name}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    Fuata Hatua Hizi:
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-medium text-sm text-gray-600">Fungua M-Pesa yako</p>
                        <p className="text-sm text-gray-600">Piga <strong className="text-blue-600">&ldquo;*150*00#&rdquo;</strong> kwenye simu yako</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-medium text-sm text-gray-600">Chagua &ldquo;Lipa kwa M-Pesa&rdquo;</p>
                        <p className="text-sm text-gray-600">Bonyeza <strong className="text-blue-600">4</strong> kwa huduma za malipo</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                      <div>
                      <p className="text-sm text-gray-600">'Chagua' &quot;'Lipa kwa M-Pesa'&quot;</p>
                      <p className="text-sm text-gray-600">'Chagua' &quot;'Pay Bill'&quot;</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                      <div>
                        <p className="font-medium text-sm text-gray-600">Weka nambari ya kampuni</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="bg-gray-200 px-2 py-1 rounded font-mono">000000</span>
                          <button 
                            onClick={() => nakiliNambari("000000")}
                            className="text-blue-600 text-sm flex items-center gap-1"
                          >
                            <FiCopy size={14} /> Nakili
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
                      <div>
                        <p className="font-medium text-sm text-gray-600">Weka jina la kumbukumbu</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="bg-gray-200 px-2 py-1 rounded font-mono text-sm text-gray-600">DukaLetu</span>
                          <button 
                            onClick={() => nakiliNambari("DukaLetu")}
                            className="text-blue-600 text-sm flex items-center gap-1"
                          >
                            <FiCopy size={14} /> Nakili
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                    </svg>
                    Maelezo ya M-Pesa
                  </h3>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Nambari ya Kupokea:</p>
                      <div className="flex justify-between items-center">
                        <a 
                          href="tel:0742317163" 
                          className="text-xl font-bold hover:text-blue-600 transition"
                        >
                          0742 317 163
                        </a>
                        <button 
                          onClick={() => nakiliNambari("0742317163")}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm flex items-center gap-1 hover:bg-blue-200 transition"
                        >
                          {nambariImenakiliwa ? (
                            <>
                              <FiCheck className="text-green-500" /> Imenakiliwa
                            </>
                          ) : (
                            <>
                              <FiCopy /> Nakili
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600">Jina la Kupokea:</p>
                      <p className="font-semibold text-sm text-gray-600">ROBERT SHIJA BUZWAGALA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-4 border border-green-200">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <p className="text-green-700 font-medium">Ujumbe wa Uthibitisho</p>
                    <p className="text-sm text-green-600">Utapokea ujumbe wa uhakiki kwenye simu yako baada ya malipo kukamilika.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => setOnyeshaMaelezoMalipo(false)}
                  className="flex-1 py-2 bg-gray-200 text-gray-800 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-300 transition"
                >
                  <FiArrowLeft /> Rudi Nyuma
                </button>
                <a
                  href="tel:0742317163"
                  className="flex-1 py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition"
                >
                  <FiPhone /> Piga kwa Msaada
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Mawasiliano */}
        <section id="mawasiliano" className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-5 text-center">Tuandikie</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <FiMail className="text-blue-600" /> Barua Pepe:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="bg-blue-100 p-2 rounded-full">
                      <FiMail className="text-blue-600" />
                    </span>
                    <a 
                      href="mailto:mzumbweezekia@gmail.com" 
                      className="text-blue-600 hover:underline hover:text-blue-800 transition"
                    >
                      mzumbweezekia@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-blue-100 p-2 rounded-full">
                      <FiMail className="text-blue-600" />
                    </span>
                    <a 
                      href="mailto:robertshija01@gmail.com" 
                      className="text-blue-600 hover:underline hover:text-blue-800 transition"
                    >
                      robertshija01@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <FiPhone className="text-blue-600" /> Simu za Mkononi:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="bg-blue-100 p-2 rounded-full">
                      <FiPhone className="text-blue-600" />
                    </span>
                    <a 
                      href="tel:+255622335970" 
                      className="text-blue-600 hover:underline hover:text-blue-800 transition"
                    >
                      +255 622 335 970
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-blue-100 p-2 rounded-full">
                      <FiPhone className="text-blue-600" />
                    </span>
                    <a 
                      href="tel:+255688976971" 
                      className="text-blue-600 hover:underline hover:text-blue-800 transition"
                    >
                      +255 688 976 971
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FiPhone className="text-blue-600" /> Malipo ya M-Pesa:
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-600">Nambari ya M-Pesa:</p>
                  <p className="text-xl font-mono font-bold text-gray-800">0742 317 163</p>
                </div>
                <div>
                  <p className="font-medium text-gray-600">Jina la Kupokea:</p>
                  <p className="text-lg font-semibold text-gray-800">ROBERT SHIJA BUZWAGALA</p>
                </div>
                <button 
                  onClick={() => nakiliNambari("0742317163")}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm mt-2 flex items-center gap-2 hover:bg-blue-200 transition"
                >
                  {nambariImenakiliwa ? (
                    <>
                      <FiCheck className="text-green-500" /> Imenakiliwa
                    </>
                  ) : (
                    <>
                      <FiCopy /> Nakili Nambari ya M-Pesa
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-700 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="mb-2">Duka Letu la Elektroniki</p>
          <p className="text-sm">© {new Date().getFullYear()} Haki zote zimehifadhiwa</p>
        </div>
      </footer>
    </div>
  );
}