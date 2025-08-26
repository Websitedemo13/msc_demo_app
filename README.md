# MSC Center - Mekong Skill Center

![MSC Center](https://img.shields.io/badge/MSC-Center-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC?style=flat-square&logo=tailwind-css)

> **Mentoring For Success** - Trung tâm đào tạo và phát triển kỹ năng hàng đầu Việt Nam

MSC Center là một ứng dụng web hiện đại được phát triển để giới thiệu và quản lý các hoạt động của Mekong Skill Center - trung tâm đào tạo kỹ năng thuộc UEH University. Ứng dụng được xây dựng với thiết kế đẹp mắt, hiệu suất cao và trải nghiệm người dùng tốt nhất.

## 🌟 Tính năng chính

### 🎯 Trang chủ Hero Section
- Thiết kế hero section ấn tượng với gradient xanh dương đặc trung
- Hiệu ứng hình học và animation mượt mà
- Call-to-action buttons với micro-interactions
- Thống kê thành tích của trung tâm

### 👨‍🏫 Ban Giảng Huấn (Mentors)
- Showcase đội ngũ mentor chuyên nghiệp
- Profile cards với thông tin chi tiết
- Rating và đánh giá từ học viên
- Social media integration
- Responsive grid layout

### 🎓 Cộng đồng MSCer
- Câu chuyện thành công của cựu học viên
- Thông tin mức lương và achievement
- Alumni network và success stories
- Integration với LinkedIn profiles

### 🔐 Hệ thống Authentication
- **Demo Login Accounts:**
  - `admin@msc.edu.vn` / `admin123` (Admin)
  - `student@msc.edu.vn` / `student123` (Student)
  - `mentor@msc.edu.vn` / `mentor123` (Mentor)
- Form validation và error handling
- Social login integration (Demo)
- Responsive design trên mọi thiết bị

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints tối ưu cho mọi thiết bị
- Touch-friendly interface
- Progressive Web App ready

## 🛠️ Công nghệ sử dụng

### Frontend Stack
- **React 18.3.1** - Thư viện UI hiện đại
- **TypeScript 5.9.2** - Type safety và developer experience
- **Vite 7.1.2** - Build tool nhanh chóng
- **React Router 6.30.1** - Client-side routing
- **TailwindCSS 3.4.17** - Utility-first CSS framework

### UI Framework
- **Radix UI** - Accessible component primitives
- **Shadcn/ui** - Beautiful component library
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

### Backend Integration
- **Express.js** - API server
- **PNPM** - Package manager
- **Tanstack Query** - Data fetching và caching

### Development Tools
- **Vitest** - Unit testing framework
- **Prettier** - Code formatting
- **ESLint** - Code linting
- **TypeScript** - Static type checking

## 🚀 Cài đặt và chạy dự án

### Yêu cầu hệ thống
- **Node.js** >= 18.0.0
- **PNPM** >= 8.0.0 (recommended)
- **Git** cho version control

### 1. Clone repository
```bash
git clone <repository-url>
cd msc-center
```

### 2. Cài đặt dependencies
```bash
# Sử dụng PNPM (recommended)
pnpm install

# Hoặc sử dụng npm
npm install

# Hoặc sử dụng yarn
yarn install
```

### 3. Chạy development server
```bash
# Chạy cả frontend và backend
pnpm dev

# Server sẽ chạy tại http://localhost:8080
```

### 4. Build production
```bash
# Build cho production
pnpm build

# Chạy production server
pnpm start
```

### 5. Chạy tests
```bash
# Chạy unit tests
pnpm test

# Type checking
pnpm typecheck
```

## 📁 Cấu trúc dự án

```
msc-center/
├── client/                     # Frontend React application
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # Shadcn/ui components
│   │   ├── Header.tsx        # Navigation header
│   │   └── Layout.tsx        # Page layout wrapper
│   ├── pages/                # Route components
│   │   ├── Index.tsx         # Homepage
│   │   ├── Mentors.tsx       # Ban Giảng Huấn
│   │   ├── MSCer.tsx         # Cộng đồng MSCer
│   │   ├── Login.tsx         # Authentication
│   │   └── ...               # Other pages
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utilities and helpers
│   ├── App.tsx              # Main application component
│   └── global.css           # Global styles và Tailwind
├── server/                   # Backend Express server
│   ├── routes/              # API routes
│   └── index.ts             # Server entry point
├── shared/                   # Shared types và interfaces
├── public/                   # Static assets
├── README.md                # Documentation
├── package.json             # Dependencies và scripts
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## 🎨 Design System

### Color Palette
```css
/* MSC Brand Colors */
--msc-primary: #1f3a93        /* Main brand blue */
--msc-primary-dark: #152a6b   /* Darker blue */
--msc-blue-50: #eff6ff        /* Light blue tints */
--msc-blue-100: #dbeafe
--msc-blue-500: #3b82f6
--msc-blue-900: #1e3a8a
```

### Typography
- **Serif Font**: Playfair Display (Headings)
- **Sans Font**: Inter (Body text)
- **Font Sizes**: Responsive scale từ text-sm đến text-6xl

### Components
- **Buttons**: Primary, Secondary, Outline variants
- **Cards**: Shadow-based với hover effects
- **Forms**: Accessible với proper validation
- **Navigation**: Mobile-responsive với hamburger menu

## 🌐 Deployment

### Build Production
```bash
pnpm build
```

### Environment Variables
Tạo file `.env.local` với các biến môi trường:
```env
# API Configuration
VITE_API_URL=http://localhost:8080/api

# External Services
VITE_GOOGLE_ANALYTICS_ID=your_ga_id
VITE_FACEBOOK_APP_ID=your_fb_app_id
```

### Deployment Options

#### 1. Netlify (Recommended)
1. Push code lên GitHub
2. Connect repository với Netlify
3. Set build command: `pnpm build`
4. Set publish directory: `dist`

#### 2. Vercel
1. Import project từ GitHub
2. Vercel sẽ tự detect Vite setup
3. Deploy tự động

#### 3. Traditional Hosting
```bash
pnpm build
# Upload contents của dist/ folder
```

## 🧪 Testing

### Demo Accounts
Sử dụng các tài khoản demo sau để test authentication:

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@msc.edu.vn | admin123 |
| Student | student@msc.edu.vn | student123 |
| Mentor | mentor@msc.edu.vn | mentor123 |

### Test Cases
- ✅ Responsive design trên mobile/tablet/desktop
- ✅ Navigation và routing
- ✅ Form validation
- ✅ Authentication flow
- ✅ API integration
- ✅ Performance optimization

## 📱 PWA Features

### Service Worker
- Offline caching strategy
- Background sync
- Push notifications (planned)

### Manifest
- App icons và splash screens
- Theme colors
- Standalone mode support

## 🔧 Configuration

### Tailwind CSS
Customization trong `tailwind.config.ts`:
- MSC brand colors
- Custom gradients
- Font families
- Responsive breakpoints

### Vite
Configuration trong `vite.config.ts`:
- Path aliases (@/ mapping)
- Build optimization
- Dev server proxy

## 📊 Performance

### Optimization Techniques
- **Code Splitting**: Route-based chunks
- **Image Optimization**: WebP format với fallbacks
- **CSS Optimization**: Tailwind CSS purging
- **Bundle Analysis**: Source map exploration

### Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.0s

## 🤝 Contributing

### Development Workflow
1. Fork repository
2. Create feature branch
3. Make changes với proper commit messages
4. Test thoroughly
5. Submit pull request

### Code Standards
- TypeScript strict mode
- ESLint configuration
- Prettier formatting
- Conventional commits

## 📞 Support & Contact

### MSC Center
- **Email**: msc.edu.vn@gmail.com
- **Phone**: (+84) 329 381 489
- **Address**: UEH University, Ho Chi Minh City
- **Website**: [msc-fullstack.vercel.app](https://msc-fullstack.vercel.app)

### Technical Support
- **Issues**: GitHub Issues tracker
- **Documentation**: `/docs` folder
- **Community**: Discord server (coming soon)

## 📄 License

Copyright © 2024 MSC Center - UEH University. All rights reserved.

---

**Made with ❤️ by MSC Development Team**

*Mentoring For Success - Nơi ươm mầm những tài năng công nghệ tương lai*
