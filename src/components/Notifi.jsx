import React from "react";

const notifications = [
  { id: 1, title: "Yeni bir mesajınız var", description: "John Doe size bir mesaj gönderdi. Hemen okuyun!", date: "2024-12-08", isRead: false, sender: "John Doe" },
  { id: 2, title: "Hesabınız güncellendi", description: "Hesap bilgileriniz başarıyla güncellendi. Lütfen profilinizi kontrol edin.", date: "2024-12-07", isRead: true, sender: "Admin" },
  { id: 3, title: "Yeni yorum aldıysınız", description: "Birisi gönderinize yorum yaptı: 'Harika bir yazı!'", date: "2024-12-06", isRead: false, sender: "Jane Smith" },
  { id: 4, title: "Fatura ödendi", description: "Ödemeniz başarıyla tamamlandı. Fatura numaranız: #12345", date: "2024-12-05", isRead: true, sender: "Finance Team" },
  { id: 5, title: "Yeni etkinlik oluşturuldu", description: "Yeni bir etkinlik oluşturuldu: '2024 Yılbaşı Partisi'. Katılmak için kaydolun!", date: "2024-12-04", isRead: false, sender: "Event Team" },
  { id: 6, title: "Yapılacaklar listesi hatırlatması", description: "Bugün yapılması gereken 5 göreviniz var. Hadi başlayalım!", date: "2024-12-03", isRead: false, sender: "Task Manager" },
  { id: 7, title: "Yeni bir etkinlik var", description: "Yeni bir web semineri: 'React için En İyi Uygulamalar'. Kaydınızı yapın!", date: "2024-12-02", isRead: true, sender: "Webinars Team" },
  { id: 8, title: "Yeni güncelleme geldi", description: "Yeni yazılım güncellemesi mevcut. Yeni özelliklere göz atın!", date: "2024-12-01", isRead: true, sender: "Tech Support" },
  { id: 9, title: "Ödül kazandınız", description: "Başarılı bir şekilde tamamladığınız projeler için ödül kazandınız. Detaylar için tıklayın.", date: "2024-11-30", isRead: false, sender: "Rewards Team" },
  { id: 10, title: "Yeni kullanıcı kaydı", description: "Yeni bir kullanıcı kayıt oldu: 'Ali Can'. Hoş geldiniz!", date: "2024-11-29", isRead: false, sender: "Registration Team" }
];

const NotificationList = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Bildirimler</h2>
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={`flex items-start p-5 rounded-lg hover:bg-gray-50 cursor-pointer transition ${
                notification.isRead ? "bg-gray-100" : "bg-blue-50"
              }`}
            >
              {/* Okunmamış bildirim için işaret */}
              {!notification.isRead && (
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-4 mt-2"></div>
              )}

              {/* Avatar ve Gönderen Bilgisi */}
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white">
                  {notification.sender[0]}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-lg text-gray-800">{notification.title}</h3>
                  <span className="text-sm text-gray-500">{notification.date}</span>
                </div>
                <p className="text-gray-600 text-sm mt-2">{notification.description}</p>
              </div>

              {/* "Okundu" butonu */}
              {!notification.isRead && (
                <button className="ml-4 text-blue-500 text-sm">Okundu olarak işaretle</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationList;
