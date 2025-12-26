# Formspree Kurulum Rehberi (Çok Kolay!)

Formspree, backend gerektirmeden form gönderimi yapmanızı sağlar. Kurulumu çok basittir!

## 🚀 Hızlı Kurulum (2 Dakika)

### Adım 1: Formspree Hesabı Oluştur

1. [https://formspree.io/](https://formspree.io/) adresine gidin
2. Sağ üst köşeden **"Sign Up"** butonuna tıklayın
3. Ücretsiz hesap oluşturun (Google ile giriş yapabilirsiniz)
4. Email adresinizi doğrulayın (gelen email'i kontrol edin)

### Adım 2: Yeni Form Oluştur

1. Formspree dashboard'a giriş yapın
2. **"New Form"** butonuna tıklayın
3. Form adını girin (örn: "Portfolio Contact")
4. **"Create Form"** butonuna tıklayın
5. **Form Endpoint URL**'yi kopyalayın
   - Örnek: `https://formspree.io/f/xjvqkzpn`
   - Bu URL'deki son kısım sizin Form ID'nizdir

### Adım 3: Kodda Güncelle

1. `index.html` dosyasını açın
2. Şu satırı bulun:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. `YOUR_FORM_ID` yerine Formspree'den aldığınız Form ID'yi yazın
   - Örnek: `https://formspree.io/f/xjvqkzpn` ise, `xjvqkzpn` kısmını kullanın
   - Sonuç: `action="https://formspree.io/f/xjvqkzpn"`

### Adım 4: Email Ayarları

1. Formspree dashboard'da formunuzu açın
2. **"Settings"** sekmesine gidin
3. **"Email Notifications"** bölümünde:
   - **"Send to"** kısmına: `arslanmertkaan09@gmail.com` yazın
   - **"Subject"** kısmına: `Portfolio Contact Form - {{subject}}` yazın
4. **"Save"** butonuna tıklayın

### Adım 5: Test Et

1. Portfolio sitenizi açın
2. İletişim formunu doldurun
3. "Send Message" butonuna tıklayın
4. Formspree size bir "Thank you" sayfası gösterecek
5. Email'inizin gelip gelmediğini kontrol edin

## ✅ Tamamlandı!

Artık form çalışıyor olmalı! Form gönderildiğinde `arslanmertkaan09@gmail.com` adresine email gelecek.

## 🎁 Formspree Ücretsiz Plan

- Ayda 50 form gönderimi
- Spam koruması
- Email bildirimleri
- Temel özellikler

Daha fazla gönderim için ücretli plana geçebilirsiniz.

## 🔧 Sorun Giderme

### Email gelmiyor
- Formspree dashboard'da "Submissions" bölümünden gönderimleri kontrol edin
- Email spam klasörünü kontrol edin
- Formspree ayarlarında email adresinin doğru olduğundan emin olun

### Form gönderilmiyor
- Form ID'nin doğru olduğundan emin olun
- Tarayıcı konsolunu açın (F12) ve hataları kontrol edin
- Formspree dashboard'da formun aktif olduğundan emin olun

## 📚 Daha Fazla Bilgi

- [Formspree Dokümantasyonu](https://help.formspree.io/)
- [Formspree Ücretsiz Plan](https://formspree.io/plans)

---

**Not:** Formspree ücretsiz planında ayda 50 form gönderimi limiti vardır. Daha fazla gönderim için ücretli plana geçebilirsiniz.

