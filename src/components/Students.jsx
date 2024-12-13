import React from "react";
import { FaEdit, FaTrashAlt, FaBan } from "react-icons/fa";

const students = [
  {
    id: 1,
    firstName: "Ahmet",
    lastName: "Yılmaz",
    email: "ahmet.yilmaz@example.com",
    phone: "555-123-4567",
    classLevel: "10",
    paymentStatus: "Ödendi",
    registrationDate: "2024-01-15",
    address: "İstanbul, Türkiye",
    reference: "Mehmet Kaya",
  },
  {
    id: 2,
    firstName: "Elif",
    lastName: "Demir",
    email: "elif.demir@example.com",
    phone: "555-987-6543",
    classLevel: "11",
    paymentStatus: "Beklemede",
    registrationDate: "2024-02-10",
    address: "Ankara, Türkiye",
    reference: "Ayşe Ak",
  },
  {
    id: 3,
    firstName: "Burak",
    lastName: "Çelik",
    email: "burak.celik@example.com",
    phone: "555-111-2233",
    classLevel: "12",
    paymentStatus: "Ödendi",
    registrationDate: "2023-12-05",
    address: "İzmir, Türkiye",
    reference: "Ali Vural",
  },
  {
    id: 4,
    firstName: "Zeynep",
    lastName: "Kara",
    email: "zeynep.kara@example.com",
    phone: "555-444-5566",
    classLevel: "9",
    paymentStatus: "İptal Edildi",
    registrationDate: "2024-03-02",
    address: "Antalya, Türkiye",
    reference: "Fatma Yıldız",
  },
  {
    id: 5,
    firstName: "Emre",
    lastName: "Şahin",
    email: "emre.sahin@example.com",
    phone: "555-666-7788",
    classLevel: "10",
    paymentStatus: "Ödendi",
    registrationDate: "2024-04-20",
    address: "Bursa, Türkiye",
    reference: "Murat Can",
  },
  {
    id: 6,
    firstName: "Ayşe",
    lastName: "Güneş",
    email: "ayse.gunes@example.com",
    phone: "555-999-8877",
    classLevel: "11",
    paymentStatus: "Beklemede",
    registrationDate: "2024-05-15",
    address: "Adana, Türkiye",
    reference: "Hülya Demir",
  },
  {
    id: 7,
    firstName: "Mehmet",
    lastName: "Arslan",
    email: "mehmet.arslan@example.com",
    phone: "555-222-3344",
    classLevel: "12",
    paymentStatus: "Ödendi",
    registrationDate: "2023-11-25",
    address: "Konya, Türkiye",
    reference: "Selim Yavuz",
  },{
    id: 8,
    firstName: "Mehmet",
    lastName: "Arslan",
    email: "mehmet.arslan@example.com",
    phone: "555-222-3344",
    classLevel: "12",
    paymentStatus: "Ödendi",
    registrationDate: "2023-11-25",
    address: "Konya, Türkiye",
    reference: "Selim Yavuz",
  },{
    id: 9,
    firstName: "Mehmet",
    lastName: "Arslan",
    email: "mehmet.arslan@example.com",
    phone: "555-222-3344",
    classLevel: "12",
    paymentStatus: "Ödendi",
    registrationDate: "2023-11-25",
    address: "Konya, Türkiye",
    reference: "Selim Yavuz",
  },{
    id: 10,
    firstName: "Mehmet",
    lastName: "Arslan",
    email: "mehmet.arslan@example.com",
    phone: "555-222-3344",
    classLevel: "12",
    paymentStatus: "Ödendi",
    registrationDate: "2023-11-25",
    address: "Konya, Türkiye",
    reference: "Selim Yavuz",
  },{
    id: 11,
    firstName: "Mehmet",
    lastName: "Arslan",
    email: "mehmet.arslan@example.com",
    phone: "555-222-3344",
    classLevel: "12",
    paymentStatus: "Ödendi",
    registrationDate: "2023-11-25",
    address: "Konya, Türkiye",
    reference: "Selim Yavuz",
  },{
    id: 12,
    firstName: "Mehmet",
    lastName: "Arslan",
    email: "mehmet.arslan@example.com",
    phone: "555-222-3344",
    classLevel: "12",
    paymentStatus: "Ödendi",
    registrationDate: "2023-11-25",
    address: "Konya, Türkiye",
    reference: "Selim Yavuz",
  },{
    id: 13,
    firstName: "Mehmet",
    lastName: "Arslan",
    email: "mehmet.arslan@example.com",
    phone: "555-222-3344",
    classLevel: "12",
    paymentStatus: "Ödendi",
    registrationDate: "2023-11-25",
    address: "Konya, Türkiye",
    reference: "Selim Yavuz",
  },{
    id: 14,
    firstName: "Mehmet",
    lastName: "Arslan",
    email: "mehmet.arslan@example.com",
    phone: "555-222-3344",
    classLevel: "12",
    paymentStatus: "Ödendi",
    registrationDate: "2023-11-25",
    address: "Konya, Türkiye",
    reference: "Selim Yavuz",
  },{
    id: 15,
    firstName: "Mehmet",
    lastName: "Arslan",
    email: "mehmet.arslan@example.com",
    phone: "555-222-3344",
    classLevel: "12",
    paymentStatus: "Ödendi",
    registrationDate: "2023-11-25",
    address: "Konya, Türkiye",
    reference: "Selim Yavuz",
  },
];
const StudentList = () => {
  const handleEdit = (id) => alert(`Öğrenci ID: ${id} için düzenleme işlemi.`);
  const handleDelete = (id) => alert(`Öğrenci ID: ${id} için silme işlemi.`);
  const handleCancelMembership = (id) =>
    alert(`Öğrenci ID: ${id} için üyelik iptali.`);

  return (
    <div className="max-w-full mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">
        Öğrenci İşlemleri
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Ad</th>
              <th className="p-3 text-left">Soyad</th>
              <th className="p-3 text-left hidden md:table-cell">E-posta</th>
              <th className="p-3 text-left">Telefon</th>
              <th className="p-3 text-left hidden md:table-cell">Sınıf</th>
              <th className="p-3 text-left">Ödeme Durumu</th>
              <th className="p-3 text-left hidden lg:table-cell">Kayıt Tarihi</th>
              <th className="p-3 text-center">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-100">
                <td className="p-3">{student.id}</td>
                <td className="p-3">{student.firstName}</td>
                <td className="p-3">{student.lastName}</td>
                <td className="p-3 hidden md:table-cell">{student.email}</td>
                <td className="p-3">{student.phone}</td>
                <td className="p-3 hidden md:table-cell">{student.classLevel}</td>
                <td className="p-3">{student.paymentStatus}</td>
                <td className="p-3 hidden lg:table-cell">{student.registrationDate}</td>
                <td className="p-3 flex justify-center space-x-2">
                  <button className="text-blue-500 hover:text-blue-700" onClick={() => handleEdit(student.id)}>
                    <FaEdit size={20} />
                  </button>
                  <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(student.id)}>
                    <FaTrashAlt size={20} />
                  </button>
                  <button className="text-yellow-500 hover:text-yellow-700" onClick={() => handleCancelMembership(student.id)}>
                    <FaBan size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default StudentList;
