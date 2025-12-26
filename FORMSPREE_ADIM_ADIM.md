# Formspree Kurulum - Adım Adım Rehber

## 📋 Adım 1: Formspree Hesabı Oluştur

1. Tarayıcınızda şu adrese gidin: **https://formspree.io/**
2. Sağ üst köşede **"Sign Up"** veya **"Get Started"** butonuna tıklayın
3. Hesap oluşturma seçenekleri:
   - **Google ile giriş** (en kolay)
   - **Email ile kayıt** (email + şifre)
4. Email adresinizi doğrulayın (gelen kutunuzu kontrol edin)

---

## 📋 Adım 2: Yeni Form Oluştur

1. Formspree dashboard'a giriş yaptıktan sonra:
   - Ana sayfada **"New Form"** veya **"Create Form"** butonuna tıklayın
   - Veya üst menüden **"Forms"** > **"New Form"** seçin

2. Form bilgilerini doldurun:
   - **Form Name**: `Portfolio Contact` (veya istediğiniz bir isim)
   - **Form Type**: `Contact Form` seçin
   - **"Create Form"** butonuna tıklayın

3. **Form Endpoint URL**'yi kopyalayın:
   - Örnek görünüm: `https://formspree.io/f/xjvqkzpn`
   - Bu URL'nin sonundaki kısım sizin **Form ID**'nizdir
   - Örnek: `xjvqkzpn` (bu kısmı kopyalayın)

---

## 📋 Adım 3: Email Ayarları

1. Oluşturduğunuz formu açın (dashboard'da form listesinden)

2. **"Settings"** veya **"Email Settings"** sekmesine gidin

3. Email ayarlarını yapın:
   - **"Send to"** veya **"Email Address"** kısmına: `arslanmertkaan09@gmail.com` yazın
   - **"Subject"** kısmına: `Portfolio Contact Form - {{subject}}` yazın
   - **"Save"** veya **"Update"** butonuna tıklayın

---

## 📋 Adım 4: Kodda Güncelleme

### 4.1. index.html Dosyasını Açın

Portfolio klasörünüzde `index.html` dosyasını açın.

### 4.2. Form Action'ı Bulun

Şu satırı bulun (yaklaşık 636. satır):
```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### 4.3. YOUR_FORM_ID'yi Değiştirin

`YOUR_FORM_ID` kısmını Formspree'den aldığınız Form ID ile değiştirin.

**Örnek:**
- Formspree URL'niz: `https://formspree.io/f/xjvqkzpn`
- Form ID: `xjvqkzpn`
- Değiştirilecek satır:
```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/xjvqkzpn" method="POST">
```

### 4.4. Dosyayı Kaydedin

Değişiklikleri kaydedin (Cmd+S veya Ctrl+S)

---

## 📋 Adım 5: Test Etme

### 5.1. Yerel Test

1. `index.html` dosyasını tarayıcıda açın
2. Sayfayı aşağı kaydırın ve "Get In Touch" bölümüne gidin
3. Formu doldurun:
   - Name: Test
   - Email: test@example.com
   - Subject: Test Mesajı
   - Message: Bu bir test mesajıdır
4. **"Send Message"** butonuna tıklayın
5. Formspree bir "Thank you" sayfası gösterecek
6. Email'inizin (`arslanmertkaan09@gmail.com`) gelip gelmediğini kontrol edin

### 5.2. GitHub'a Push

Test başarılıysa değişiklikleri GitHub'a push edin:

```bash
cd "/Users/mertkaanarslan/Desktop/portfolio"
git add index.html
git commit -m "Configure Formspree for contact form"
git push
```

---

## ✅ Kurulum Tamamlandı!

Artık form çalışıyor olmalı. Form gönderildiğinde:
- ✅ Formspree'ye kaydedilir
- ✅ `arslanmertkaan09@gmail.com` adresine email gönderilir
- ✅ Formspree dashboard'da gönderimleri görebilirsiniz

---

## 🔍 Kontrol Listesi

- [ ] Formspree hesabı oluşturuldu
- [ ] Yeni form oluşturuldu
- [ ] Form ID kopyalandı
- [ ] Email adresi ayarlandı (`arslanmertkaan09@gmail.com`)
- [ ] `index.html` dosyasında Form ID güncellendi
- [ ] Test gönderimi yapıldı
- [ ] Email geldi mi kontrol edildi
- [ ] GitHub'a push edildi

---

## 🐛 Sorun Giderme

### Form gönderilmiyor
- Form ID'nin doğru olduğundan emin olun
- Tarayıcı konsolunu açın (F12) ve hataları kontrol edin
- Formspree dashboard'da formun aktif olduğundan emin olun

### Email gelmiyor
- Formspree dashboard'da "Submissions" bölümünü kontrol edin
- Email spam klasörünü kontrol edin
- Formspree ayarlarında email adresinin doğru olduğundan emin olun
- Email doğrulaması yapıldı mı kontrol edin

### "Thank you" sayfası görünmüyor
- Form ID'nin doğru olduğundan emin olun
- Formspree dashboard'da formun aktif olduğundan emin olun

---

## 📞 Yardım

Sorun yaşarsanız:
- Formspree dokümantasyonu: https://help.formspree.io/
- Formspree dashboard'da "Help" bölümünü kontrol edin

