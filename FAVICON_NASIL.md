# Favicon (Sekme İkonu) Nasıl Değiştirilir?

Chrome sekmesinde gözüken küçük ikonu (favicon) değiştirmek için:

## 📋 Adım 1: Favicon Dosyasını Hazırlayın

Favicon için bir görsel hazırlayın:
- **Format:** PNG veya ICO
- **Boyut:** 32x32 veya 16x16 piksel (en yaygın)
- **İçerik:** Logo, baş harf, veya profil fotoğrafı

## 📋 Adım 2: Favicon Dosyalarını Oluşturun

### Seçenek A: Online Araç Kullanın (Kolay)

1. [Favicon Generator](https://favicon.io/) veya [RealFaviconGenerator](https://realfavicongenerator.net/) adresine gidin
2. Görselinizi yükleyin
3. Tüm boyutları indirin (16x16, 32x32, 180x180, vb.)
4. İndirilen dosyaları `portfolio/favicon/` klasörüne koyun

### Seçenek B: Manuel Oluşturun

1. Görselinizi 32x32 piksel boyutunda PNG olarak kaydedin
2. `favicon-32x32.png` olarak adlandırın
3. Aynı görseli 16x16 boyutunda kaydedin
4. `favicon-16x16.png` olarak adlandırın
5. Her ikisini de `portfolio/favicon/` klasörüne koyun

## 📋 Adım 3: Dosyaları Klasöre Ekleyin

`portfolio/favicon/` klasörüne şu dosyaları ekleyin:

```
favicon/
  ├── favicon-16x16.png
  ├── favicon-32x32.png
  ├── apple-touch-icon.png (180x180 - iOS için)
  └── site.webmanifest (isteğe bağlı)
```

## 📋 Adım 4: Test Edin

1. `index.html` dosyasını tarayıcıda açın
2. Sekmede yeni favicon'u görmelisiniz
3. Eğer görünmüyorsa:
   - Tarayıcı cache'ini temizleyin (Ctrl+Shift+Delete veya Cmd+Shift+Delete)
   - Sayfayı hard refresh yapın (Ctrl+F5 veya Cmd+Shift+R)

## 🎨 Öneriler

- **Basit tasarım:** Küçük boyutta net görünecek basit bir tasarım kullanın
- **Yüksek kontrast:** Açık/koyu renkler kullanın
- **Profil fotoğrafı:** Profil fotoğrafınızın küçük bir versiyonunu kullanabilirsiniz
- **Baş harf:** İsminizin baş harfini kullanabilirsiniz (örn: "MKA")

## 📝 Not

HTML dosyasında favicon link'leri zaten eklenmiş durumda. Sadece görsel dosyalarını `favicon/` klasörüne eklemeniz yeterli!

---

**Hızlı Test:** Eğer sadece hızlıca test etmek isterseniz, `favicon-32x32.png` dosyasını oluşturup `favicon/` klasörüne koyun. Bu yeterli olacaktır.

