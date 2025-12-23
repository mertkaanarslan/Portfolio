# GitHub'a Portfolyo Yükleme Rehberi

Bu rehber, portfolyonuzu GitHub'a yükleyip GitHub Pages ile yayınlamanız için adım adım talimatlar içerir.

## 🎯 Hızlı Başlangıç

### Yöntem 1: GitHub Web Arayüzü ile (En Kolay)

#### Adım 1: Yeni Repository Oluştur

1. [GitHub.com](https://github.com) adresine gidin ve giriş yapın
2. Sağ üst köşedeki **"+"** butonuna tıklayın
3. **"New repository"** seçeneğini seçin
4. Repository adını girin (örn: `portfolio` veya `mertkaan-portfolio`)
5. **Public** seçeneğini işaretleyin (GitHub Pages ücretsiz sürümü için gerekli)
6. **ÖNEMLİ**: README, .gitignore veya license eklemeyin (dosyalar zaten var)
7. **"Create repository"** butonuna tıklayın

#### Adım 2: Dosyaları Yükle

1. Oluşturduğunuz repository sayfasında, **"uploading an existing file"** linkine tıklayın
2. `portfolio` klasöründeki tüm dosyaları sürükleyip bırakın:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md` (isteğe bağlı)
3. En alta inin ve commit mesajı yazın (örn: "Initial portfolio upload")
4. **"Commit changes"** butonuna tıklayın

#### Adım 3: GitHub Pages'i Aktifleştir

1. Repository sayfasında **"Settings"** sekmesine tıklayın
2. Sol menüden **"Pages"** seçeneğine tıklayın
3. **"Source"** bölümünde **"Deploy from a branch"** seçin
4. Branch olarak **"main"** seçin
5. Folder olarak **"/ (root)"** seçin
6. **"Save"** butonuna tıklayın
7. Birkaç dakika bekleyin (GitHub sitenizi oluşturuyor)
8. Siteniz şu adreste yayınlanacak: `https://KULLANICI_ADINIZ.github.io/REPO_ADI/`

### Yöntem 2: Git Komut Satırı ile (Gelişmiş)

#### Ön Gereksinimler

Git'in bilgisayarınızda yüklü olması gerekir. Yüklü değilse:
- Mac: `brew install git` veya [git-scm.com](https://git-scm.com) adresinden indirin
- Windows: [git-scm.com](https://git-scm.com) adresinden indirin

#### Adım 1: Terminal'i Açın

- **Mac**: Terminal uygulamasını açın
- **Windows**: Git Bash veya Command Prompt'u açın

#### Adım 2: Portfolio Klasörüne Gidin

```bash
cd "/Users/mertkaanarslan/Desktop/FlappyBird 3d/portfolio"
```

#### Adım 3: Git Repository'sini Başlatın

```bash
git init
```

#### Adım 4: Dosyaları Ekleyin

```bash
git add .
```

#### Adım 5: İlk Commit'i Yapın

```bash
git commit -m "Initial portfolio commit"
```

#### Adım 6: GitHub Repository'sini Bağlayın

**Önce GitHub'da repository oluşturun** (Yöntem 1, Adım 1'i takip edin), sonra:

```bash
# KULLANICI_ADINIZ ve REPO_ADI kısımlarını kendi bilgilerinizle değiştirin
git remote add origin https://github.com/KULLANICI_ADINIZ/REPO_ADI.git
```

Örnek:
```bash
git remote add origin https://github.com/mertkaanarslan/portfolio.git
```

#### Adım 7: Dosyaları GitHub'a Gönderin

```bash
git branch -M main
git push -u origin main
```

GitHub kullanıcı adı ve şifreniz istenecek. Şifre yerine **Personal Access Token** kullanmanız gerekebilir.

#### Adım 8: GitHub Pages'i Aktifleştir

Yöntem 1, Adım 3'ü takip edin.

## 🔐 Personal Access Token Oluşturma

GitHub artık şifre ile push kabul etmiyor. Token oluşturmanız gerekiyor:

1. GitHub'da sağ üst köşedeki profil fotoğrafınıza tıklayın
2. **"Settings"** seçeneğine tıklayın
3. Sol menüden **"Developer settings"** seçin
4. **"Personal access tokens"** > **"Tokens (classic)"** seçin
5. **"Generate new token"** > **"Generate new token (classic)"** seçin
6. Token'a bir isim verin (örn: "Portfolio Upload")
7. **"repo"** seçeneğini işaretleyin (tüm alt seçenekler otomatik seçilir)
8. En alta inin ve **"Generate token"** butonuna tıklayın
9. **ÖNEMLİ**: Token'ı kopyalayın ve güvenli bir yere kaydedin (bir daha gösterilmeyecek!)
10. Git push yaparken şifre yerine bu token'ı kullanın

## ✅ Kontrol Listesi

Portfolyonuzu yayınlamadan önce:

- [ ] Tüm dosyalar GitHub'a yüklendi
- [ ] GitHub Pages aktif edildi
- [ ] Site URL'si çalışıyor
- [ ] Tüm linkler çalışıyor
- [ ] Mobil görünüm test edildi
- [ ] Dil değiştirme (EN/TR) çalışıyor
- [ ] Kişisel bilgiler güncellendi

## 🐛 Sorun Giderme

### Site görünmüyor
- GitHub Pages ayarlarını kontrol edin
- Birkaç dakika bekleyin (bazen 10 dakika sürebilir)
- Tarayıcı cache'ini temizleyin (Ctrl+F5 veya Cmd+Shift+R)

### Dosyalar yüklenmedi
- Dosya boyutlarını kontrol edin (100MB'dan küçük olmalı)
- Dosya isimlerinde özel karakter olmamalı
- Git push sırasında hata mesajlarını okuyun

### Stil veya script çalışmıyor
- Dosya yollarının doğru olduğundan emin olun
- Tarayıcı konsolunu kontrol edin (F12 > Console)
- GitHub Pages'de dosya yolları case-sensitive'dir (büyük/küçük harf duyarlı)

## 📚 Ek Kaynaklar

- [GitHub Pages Dokümantasyonu](https://docs.github.com/en/pages)
- [Git Temel Komutlar](https://git-scm.com/docs)
- [GitHub Desktop (GUI)](https://desktop.github.com) - Komut satırı yerine GUI kullanmak isterseniz

## 💡 İpuçları

1. **Repository adını özelleştirin**: `username.github.io` adında bir repo oluşturursanız, site `https://username.github.io` adresinde yayınlanır (alt klasör olmadan)

2. **Custom domain ekleyin**: Kendi domain'inizi GitHub Pages'e bağlayabilirsiniz (Settings > Pages > Custom domain)

3. **Otomatik güncelleme**: Dosyaları değiştirdikten sonra:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
   GitHub Pages otomatik olarak güncellenecektir

4. **Backup**: Dosyalarınızı yerel olarak da saklayın

---

**Sorularınız mı var?** GitHub dokümantasyonunu veya GitHub Community Forum'u ziyaret edin.

