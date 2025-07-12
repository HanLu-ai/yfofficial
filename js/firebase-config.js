// 从 Firebase SDK 导入初始化应用函数
import { initializeApp } from "firebase/app";
// 从 Firebase SDK 导入获取分析函数
import { getAnalytics } from "firebase/analytics";
// TODO: 根据需要添加其他 Firebase 产品的 SDK
// 参考文档：https://firebase.google.com/docs/web/setup#available-libraries

// 定义 Firebase 配置对象
const firebaseConfig = {
    // Firebase API 密钥
    apiKey: "AIzaSyDjibvtOimBmEM6TmBULKtRsHVSq8O1GhM",
    // Firebase 认证域名
    authDomain: "yf-studio.firebaseapp.com",
    // Firebase 数据库 URL
    databaseURL: "https://yf-studio-default-rtdb.firebaseio.com",
    // Firebase 项目 ID
    projectId: "yf-studio",
    // Firebase 存储桶
    storageBucket: "yf-studio.firebasestorage.app",
    // Firebase 消息发送者 ID
    messagingSenderId: "514297419005",
    // Firebase 应用 ID
    appId: "1:514297419005:web:4a922bb689e9257ae7da94",
    // Firebase 测量 ID（可选）
    measurementId: "G-DC9WCE9R00"
};

// 使用配置对象初始化 Firebase 应用
const app = initializeApp(firebaseConfig);
// 获取 Firebase 分析实例
const analytics = getAnalytics(app);