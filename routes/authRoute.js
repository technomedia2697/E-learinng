const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const upload = require('../middleware/uploadMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

// ✅ تسجيل مستخدم جديد مع رفع الصور
router.post(
  '/register',
  upload.fields([
    { name: 'profileImage', maxCount: 1 },
    { name: 'collegeId', maxCount: 1 },
  ]),
  authController.register
);

// ✅ تسجيل الدخول
router.post('/login', authController.login);

// ✅ نسيان كلمة السر
router.post('/forgot-password', authController.forgotPassword);

// ✅ إعادة تعيين كلمة السر
router.post('/reset-password', authController.resetPassword);

// ✅ تسجيل الخروج
router.post('/logout', authMiddleware, authController.logout);

module.exports = router;