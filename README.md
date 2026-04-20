
```md
# 🛒 E-Ticaret Uygulaması (Expo)

Bu proje, Expo Router kullanılarak geliştirilmiş basit bir e-ticaret uygulamasıdır.

## 🚀 Özellikler

- API’den ürün çekme
- Ürün listeleme
- Sepete ürün ekleme
- Sepetten ürün çıkarma
- Sepet toplam fiyat hesaplama

---

## 📁 Proje Yapısı

```

app/
├── _layout.tsx
├── index.tsx   (ürün listesi)
├── cart.tsx    (sepet ekranı)

context/
└── CartContext.tsx

````

---

## ⚙️ Kurulum

```bash
npm install
npx expo start
````

---

## 🧠 Mantık

* Ürünler API’den çekilir
* Kullanıcı ürünleri liste üzerinden görür
* “Sepete ekle” ile ürün cart state’e eklenir
* Cart ekranında ürünler listelenir
* İstenirse ürün silinebilir
* Toplam fiyat otomatik hesaplanır

---

## 📦 Kullanılan Teknolojiler

* React Native
* Expo
* Expo Router
* axios

---

## eklenecek

* Ürün detay sayfası
* Quantity (adet artırma)
* sepete ekleme


---

## 👨‍💻 Amaç

Bu proje React Native + state management mantığını öğrenmek için hazırlanmıştır.

```
