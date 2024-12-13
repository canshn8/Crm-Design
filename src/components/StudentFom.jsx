import React, { useState } from "react";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    classLevel: "",
    paymentMethod: "",
    paymentAmount: "",
    reference: "",
    dataSource: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Öğrenci bilgileri başarıyla kaydedildi!");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-10 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
        Öğrenci Ekleme ve Ödeme Formu
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8">
        {/* Öğrenci Bilgileri */}
        <div className="col-span-2">
          <h3 className="text-xl font-semibold mb-4 text-gray-600">Öğrenci Bilgileri</h3>
        </div>

        <div className="col-span-1">
          <label className="block text-gray-600 mb-2">Ad</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Adınızı girin"
            required
          />
        </div>

        <div className="col-span-1">
          <label className="block text-gray-600 mb-2">Soyad</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Soyadınızı girin"
            required
          />
        </div>

        <div className="col-span-1">
          <label className="block text-gray-600 mb-2">E-posta</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="E-posta adresinizi girin"
            required
          />
        </div>

        <div className="col-span-1">
          <label className="block text-gray-600 mb-2">Telefon</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Telefon numaranızı girin"
            required
          />
        </div>

        <div className="col-span-1">
          <label className="block text-gray-600 mb-2">Doğum Tarihi</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="col-span-1">
          <label className="block text-gray-600 mb-2">Sınıf Seviyesi</label>
          <select
            name="classLevel"
            value={formData.classLevel}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Seçiniz</option>
            <option value="9">9. Sınıf</option>
            <option value="10">10. Sınıf</option>
            <option value="11">11. Sınıf</option>
            <option value="12">12. Sınıf</option>
          </select>
        </div>

        <div className="col-span-2">
          <label className="block text-gray-600 mb-2">Adres</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Adresinizi girin"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Ödeme Bilgileri */}
        <div className="col-span-2">
          <h3 className="text-xl font-semibold mb-4 text-gray-600">Ödeme Bilgileri</h3>
        </div>

        <div className="col-span-1">
          <label className="block text-gray-600 mb-2">Ödeme Şekli</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Seçiniz</option>
            <option value="Nakit">Nakit</option>
            <option value="Kredi Kartı">Kredi Kartı</option>
            <option value="Havale/EFT">Havale/EFT</option>
          </select>
        </div>

        <div className="col-span-1">
          <label className="block text-gray-600 mb-2">Tutar (₺)</label>
          <input
            type="number"
            name="paymentAmount"
            value={formData.paymentAmount}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ödeme tutarını girin"
            required
          />
        </div>

        {/* Referans ve Veri Kaynağı */}
        <div className="col-span-1">
          <label className="block text-gray-600 mb-2">Referans</label>
          <input
            type="text"
            name="reference"
            value={formData.reference}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Referans bilgisini girin"
          />
        </div>

        <div className="col-span-1">
          <label className="block text-gray-600 mb-2">Veri Kaynağı</label>
          <input
            type="text"
            name="dataSource"
            value={formData.dataSource}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Veri kaynağını belirtin"
          />
        </div>

        <div className="col-span-2 mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-4 rounded-lg hover:bg-blue-600 transition font-semibold"
          >
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
