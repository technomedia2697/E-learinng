# 📚 E-Learning Platform

تطبيق E-Learning هو منصة تعليم إلكتروني تتيح للمستخدمين إنشاء حسابات خاصة بهم، وتصفح الكورسات والمواد التعليمية، مع توفير خصائص الحماية والتحديث والتواصل.

## ⚙️ هيكل المشروع

```
E-Learning/
├── controllers/      # وحدات التحكم (مثل التسجيل، الدخول، تحديث البيانات)
├── models/           # نماذج البيانات (User, Course, Video, etc.)
├── routes/           # تعريف مسارات API الخاصة بالتطبيق
├── utils/            # أدوات مساعدة (مثل إرسال الإيميل، التوكن)
├── server.js         # الملف الرئيسي لتشغيل الخادم
├── .env              # متغيرات البيئة (قاعدة البيانات، JWT secret)
└── package.json      # معلومات الحزم والمشروع
```

---

## 🚀 كيفية تشغيل المشروع

1. **تثبيت الحزم المطلوبة**

   ```bash
   npm install
   ```

2. **تشغيل الخادم**

   ```bash
   node server.js
   ```

3. **الدخول إلى التطبيق**
   افتح المتصفح واذهب إلى:

   ```
   http://localhost:5000
   ```

---

## 🧩 الميزات

* ✅ تسجيل مستخدمين وإنشاء حساباتهم.
* ✅ تسجيل الدخول باستخدام JWT.
* ✅ الوصول إلى الكورسات والمواد التعليمية.
* ✅ تحديث بيانات المستخدم.
* ✅ إرسال بريد إلكتروني للتفعيل أو الاستعادة.
* ✅ حماية المسارات بالتوكن (JWT Authentication).

---

## 🛠️ التكنولوجيا المستخدمة

* **Node.js** – بيئة التشغيل الخلفية.
* **Express.js** – إطار عمل لإنشاء الخادم.
* **MongoDB** – قاعدة البيانات.
* **Mongoose** – أداة للتعامل مع MongoDB.
* **JWT** – لحماية الجلسات وتوثيق المستخدم.

---

## 👨‍💻 المطور

* **الاسم:**   Eng-Angelo Rezq
* **المؤسسة:** Techno Media
* **الموقع:** Minya, Egypt
* **مجال العمل:** تطوير تطبيقات ويب وموبايل، تحليل بيانات، تعليم تقني.

---


