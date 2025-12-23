#!/bin/bash

# Portfolio Deploy Script
# Bu script değişiklikleri GitHub'a push eder

cd "$(dirname "$0")"

echo "🚀 Portfolio güncellemesi başlatılıyor..."

# Değişiklikleri kontrol et
if [ -z "$(git status --porcelain)" ]; then
    echo "ℹ️  Değişiklik yok, push edilecek bir şey yok."
    exit 0
fi

# Değişiklikleri göster
echo "📝 Değişiklikler:"
git status -s

# Commit mesajı al
read -p "💬 Commit mesajı girin (Enter = 'Update portfolio'): " commit_msg
commit_msg=${commit_msg:-Update portfolio}

# Git işlemleri
echo "📦 Dosyalar ekleniyor..."
git add .

echo "💾 Commit yapılıyor..."
git commit -m "$commit_msg"

echo "☁️  GitHub'a push ediliyor..."
git push

echo "✅ Başarıyla push edildi!"
echo "🌐 Site birkaç dakika içinde güncellenecek: https://mertkaanarslan.github.io/Portfolio/"

