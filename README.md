# TemplateHub - AI-Powered Template Platform

A comprehensive template platform that provides ready-to-use React/Next.js templates for various industries, complete with AI-powered generation capabilities and real-time authentication.

## 🚀 Live Demo

[View Live Demo](https://templatehub-demo.vercel.app) | [GitHub Repository](https://github.com/yourusername/template-platform)

## ✨ Features

### 🎨 **Template Categories**
- **Healthcare**: Medical dashboards, patient management systems
- **E-commerce**: Online stores, product catalogs, checkout flows
- **Gaming**: Leaderboards, user profiles, tournament systems
- **Finance**: Trading dashboards, portfolio tracking
- **Education**: Learning management systems, student portals
- **Agriculture**: IoT dashboards, crop monitoring systems

### 🤖 **AI-Powered Generation**
- Custom template generation using Gemini AI
- Industry-specific template creation
- Real-time code generation with TypeScript
- Production-ready code output

### 🔐 **Authentication System**
- Real-time email validation for @gmail.com and @student.nitw.ac.in
- Secure authentication with cookie-based sessions
- User type detection (Student vs Regular User)
- Protected routes and middleware

### 📱 **Template Management**
- Live demo previews for all templates
- Download functionality with complete codebases
- Copy-to-clipboard code sharing
- Search and filter capabilities
- Grid and list view modes

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **Lucide React** icons

### Backend & AI
- **Gemini AI API** for template generation
- **Next.js API Routes** for backend logic
- **Cookie-based authentication**

### Development Tools
- **ESLint** for code linting
- **PostCSS** for CSS processing
- **Autoprefixer** for browser compatibility

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Gemini AI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/template-platform.git
   cd template-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Gemini AI API key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
template-platform/
├── app/
│   ├── ai-generator/          # AI template generation
│   ├── api/                   # API routes
│   ├── auth/                  # Authentication pages
│   ├── dashboard/             # Main dashboard
│   ├── templates/             # Template showcase
│   └── page.tsx              # Landing page
├── components/
│   └── ui/                   # Reusable UI components
├── lib/
│   └── download-utils.ts     # Download functionality
├── public/
│   └── images/               # Placeholder images
└── scripts/
    └── generate-placeholders.js
```

## 🎯 Key Features Implementation

### AI Template Generation
- Integrated Gemini AI API for custom template creation
- Industry-specific template generation
- Real-time code generation with proper TypeScript types
- Complete project structure with dependencies

### Authentication System
- Real-time email validation
- Domain-specific validation (@gmail.com, @student.nitw.ac.in)
- Secure cookie-based sessions
- Protected route middleware

### Template Management
- Comprehensive dashboard with all templates
- Live demo previews
- Download system with complete codebases
- Search and filtering capabilities

## 🔧 API Endpoints

### Template Generation
```
POST /api/generate-template
```
Generates custom templates using Gemini AI based on user requirements.

**Request Body:**
```json
{
  "prompt": "Create a healthcare dashboard",
  "templateType": "dashboard",
  "industry": "healthcare",
  "features": ["Real-time Data", "Dark Mode"]
}
```

## 🎨 Template Categories

### Dashboards
- Healthcare: Patient management, medical records
- E-commerce: Sales analytics, inventory management
- Gaming: Leaderboards, user statistics
- Finance: Trading dashboards, portfolio tracking
- Education: Student progress, course management
- Agriculture: Farm monitoring, crop analytics

### Landing Pages
- Industry-specific landing pages
- Conversion-optimized designs
- Mobile-responsive layouts
- SEO-friendly structure

### Authentication Systems
- Complete auth flows
- Social login integration
- Role-based access control
- Security best practices

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- **Netlify**: Static site deployment
- **Railway**: Full-stack deployment
- **AWS**: EC2 or Lambda deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Gemini AI](https://ai.google.dev/) for the AI generation capabilities

---

⭐ **Star this repository if you found it helpful!**
