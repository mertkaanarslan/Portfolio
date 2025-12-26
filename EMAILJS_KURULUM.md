# EmailJS Kurulum Rehberi

İletişim formunun çalışması için EmailJS kurulumu gereklidir. Bu rehber adım adım kurulumu açıklar.

## 📧 EmailJS Nedir?

EmailJS, frontend'den direkt olarak email göndermenize olanak sağlayan bir servistir. Backend gerektirmez ve ücretsiz planı vardır (ayda 200 email).

## 🚀 Kurulum Adımları

### Adım 1: EmailJS Hesabı Oluştur

1. [https://www.emailjs.com/](https://www.emailjs.com/) adresine gidin
2. "Sign Up" butonuna tıklayın
3. Ücretsiz hesap oluşturun (Google ile giriş yapabilirsiniz)

### Adım 2: Email Servisi Ekle

1. EmailJS dashboard'a giriş yapın
2. Sol menüden **"Email Services"** seçin
3. **"Add New Service"** butonuna tıklayın
4. **"Gmail"** seçin (veya kendi email servisinizi seçin)
5. Gmail hesabınızla bağlantı kurun
6. Servis adını **"portfolio"** olarak ayarlayın
7. **"Create Service"** butonuna tıklayın
8. **Service ID**'yi kopyalayın (örn: `service_xxxxxxx`)

### Adım 3: Email Template Oluştur

1. Sol menüden **"Email Templates"** seçin
2. **"Create New Template"** butonuna tıklayın
3. Template adını **"portfolio"** olarak ayarlayın
4. Template içeriğini şu şekilde düzenleyin:

**Subject:**
```
{{subject}} - Portfolio Contact Form
```

**Content:**
```
Yeni bir mesaj aldınız!

Gönderen: {{from_name}}
Email: {{from_email}}

Konu: {{subject}}

Mesaj:
{{message}}

---
Bu mesaj portfolio sitenizden gönderilmiştir.
```

5. **"To Email"** kısmına: `arslanmertkaan09@gmail.com` yazın
6. **"From Name"** kısmına: `{{from_name}}` yazın
7. **"Reply To"** kısmına: `{{from_email}}` yazın
8. **"Save"** butonuna tıklayın
9. **Template ID**'yi kopyalayın (örn: `template_xxxxxxx`)

### Adım 4: Public Key Al

1. Sol menüden **"Account"** > **"General"** seçin
2. **"Public Key"** kısmından key'i kopyalayın (örn: `xxxxxxxxxxxxx`)

### Adım 5: Kodda Güncelle

1. `index.html` dosyasını açın
2. Şu satırı bulun:
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY');
   ```
3. `YOUR_PUBLIC_KEY` yerine EmailJS Public Key'inizi yazın

4. `script.js` dosyasını açın
5. Şu satırları bulun:
   ```javascript
   await emailjs.send(
       'service_portfolio', // Service ID
       'template_portfolio', // Template ID
   ```
6. `'service_portfolio'` yerine Service ID'nizi yazın
7. `'template_portfolio'` yerine Template ID'nizi yazın

8. Şu satırı bulun:
   ```javascript
   'YOUR_PUBLIC_KEY' // Public Key
   ```
9. `YOUR_PUBLIC_KEY` yerine Public Key'inizi yazın

### Adım 6: Test Et

1. Portfolio sitenizi açın
2. İletişim formunu doldurun
3. "Send Message" butonuna tıklayın
4. Email'inizin gelip gelmediğini kontrol edin

## ✅ Tamamlandı!

Artık form çalışıyor olmalı. Form gönderildiğinde `arslanmertkaan09@gmail.com` adresine email gelecek.

## 🔧 Sorun Giderme

### Email gelmiyor
- EmailJS dashboard'da "Email Logs" bölümünden hataları kontrol edin
- Service ID, Template ID ve Public Key'in doğru olduğundan emin olun
- Gmail spam klasörünü kontrol edin

### Form gönderilmiyor
- Tarayıcı konsolunu açın (F12) ve hataları kontrol edin
- EmailJS CDN'in yüklendiğinden emin olun
- Public Key'in doğru olduğundan emin olun

## 📚 Daha Fazla Bilgi

- [EmailJS Dokümantasyonu](https://www.emailjs.com/docs/)
- [EmailJS Ücretsiz Plan](https://www.emailjs.com/pricing/)

---

**Not:** EmailJS ücretsiz planında ayda 200 email limiti vardır. Daha fazla email için ücretli plana geçebilirsiniz.

