# 蓬蓬科普网站部署指南
# Pengpeng Health Deployment Guide

---

## 快速部署

### 方法一：Netlify（最简单）

1. 访问 [netlify.com](https://www.netlify.com)
2. 注册/登录账号
3. 将 `website` 文件夹拖拽到 Netlify 页面
4. 等待部署完成（约30秒）
5. 获得永久访问链接，如：`https://your-site-name.netlify.app`

**优点**：
- 完全免费
- 自动 HTTPS
- 全球 CDN 加速
- 支持自定义域名

---

### 方法二：Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 注册/登录账号（可使用 GitHub 账号）
3. 点击 "New Project"
4. 导入项目文件夹或拖拽部署
5. 部署完成，获得访问链接

**优点**：
- 完全免费
- 自动 HTTPS
- 快速全球部署
- GitHub 集成

---

### 方法三：GitHub Pages

1. 创建 GitHub 账号（如还没有）
2. 创建新仓库，命名为 `your-username.github.io`
3. 将网站文件推送到仓库：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```
4. 在仓库设置中启用 GitHub Pages：
   - 进入 Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main" 和 "/ (root)"
   - 点击 Save
5. 访问 `https://your-username.github.io/your-repo-name`

**优点**：
- 完全免费
- 与 GitHub 集成
- 支持自定义域名

---

### 方法四：Cloudflare Pages

1. 访问 [pages.cloudflare.com](https://pages.cloudflare.com)
2. 注册/登录 Cloudflare 账号
3. 选择 "Create a project"
4. 上传项目或连接 Git 仓库
5. 部署完成

**优点**：
- 完全免费
- 无限带宽
- 全球 CDN
- 自动 HTTPS

---

## 自定义域名

### 在 Netlify 上设置自定义域名

1. 在 Netlify 项目设置中，选择 "Domain management"
2. 点击 "Add custom domain"
3. 输入您的域名
4. 按照指引配置 DNS 记录

### 在 Vercel 上设置自定义域名

1. 在项目设置中，选择 "Domains"
2. 添加您的域名
3. 配置 DNS 记录（通常是 A 记录或 CNAME）

### 在 GitHub Pages 上设置自定义域名

1. 在仓库根目录创建 `CNAME` 文件
2. 文件内容为您的域名（如：`www.example.com`）
3. 在域名提供商处配置 DNS：
   - 添加 CNAME 记录指向 `your-username.github.io`

---

## 常见问题

### Q: 部署后页面样式丢失？
A: 检查静态文件路径是否正确。确保 `static` 文件夹与 HTML 文件在同一级别。

### Q: 视频无法播放？
A: 浏览器可能不支持某些视频格式。建议使用 MP4 格式，或考虑使用视频托管服务（如 Vimeo、Bilibili）。

### Q: 专题区文档无法下载？
A: 确保文档文件已正确上传到 `static/topics/` 目录。

### Q: 语言切换不工作？
A: 确保浏览器支持 localStorage，且没有禁用 JavaScript。

---

## 更新网站内容

### 更新文章内容

1. 编辑相应的 HTML 文件
2. 保存文件
3. 重新部署（大多数平台会自动检测变更并重新部署）

### 添加新文档到专题区

1. 将新文档放入 `static/topics/` 目录
2. 在 `pages/topics.html` 中添加对应的条目
3. 保存并重新部署

### 更新 Logo

1. 将新 Logo 文件命名为 `logo.jpg`
2. 替换 `static/img/logo.jpg`
3. 重新部署

---

## 性能优化建议

1. **图片优化**：使用压缩后的图片，减小文件大小
2. **启用缓存**：部署平台通常会自动处理
3. **使用 CDN**：推荐的平台都提供全球 CDN
4. **压缩资源**：可使用工具压缩 CSS 和 JS 文件

---

## 备份建议

1. 定期备份网站源文件
2. 使用 Git 进行版本控制
3. 重要文档保留副本

---

## 技术支持

如有部署问题，请联系：
- 技术支持：474027594@qq.com

---

祝部署顺利！
Good luck with your deployment!
