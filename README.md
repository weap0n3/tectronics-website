<div align="center">
  <img src="frontend/public/Logo.png" alt="logo" width="200" height="auto" />
  <h1>Welcome to Tectronics Website</h1>
  
  <p>
    The official web presence for the <strong>Tectronics</strong> student project, a digital practice company from <strong>HAK Zell am See, Austria</strong>. 
  </p>
<!-- Badges -->
<p>
  <a href="https://github.com/weap0n3/tectronics-website/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/weap0n3/tectronics-website?color=orange  " alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/weap0n3/tectronics-website?color=red" alt="last update" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/commit-activity/w/weap0n3/tectronics-website" alt="commit activity" />
  </a>
  <a href="">
    <img src="https://img.shields.io/badge/version-1.0.0-green" alt="stable version" />
  </a>
	
</p>
   
</div>

<br />

## 🧠 Project Overview

**Tectronics.at** is an educational/portfolio website built as part of a student company project (_Übungsfirma_) based in Zell am See, Austria.  
It offers:

- A product catalog for gaming and IT hardware
- Service sections
- Company Info
- Contact Details

(_“Übungsfirma” indicates this is a student company — not a commercial business._)

## 🚀 Stack & Technologies

This project uses the following technologies:

| Technology       | Purpose                                               |
| ---------------- | ----------------------------------------------------- |
| **React**        | UI library for building interactive user interfaces   |
| **TypeScript**   | Statically-typed JavaScript for safer code            |
| **Vite**         | Fast build tool and development server                |
| **Tailwind CSS** | Utility-first CSS framework                           |
| **PHP**          | Backend handling (e.g., server APIs, dynamic content) |

## 📁 Features

- Fully responsive, modern UI built with **React + Tailwind**
- Type-safe frontend with **TypeScript**
- Super fast dev + build using **Vite**
- Backend integration with **PHP** & **Composer**
- Product category pages (e.g., hardware, network equipment)
- Blog / News module
- Contact forms / store info

## 🔮 Future Development & Roadmap

Tectronics is designed as a scalable project. The long-term goal is to evolve it from a static/product showcase site into a fully functional e-commerce and content management platform.

### 🧱 1. Migration to Next.js

Planned upgrade:

- Replace Vite + SPA architecture with **Next.js**
- Enable:
  - Server-Side Rendering (SSR)
  - Static Site Generation (SSG)
  - Better SEO
  - API routes
  - Improved performance

This would allow tighter frontend-backend integration and improved deployment flexibility.

---

### ⚙️ 2. Backend Migration to Node.js / NestJS

Current backend: PHP  
Planned backend: **Node.js** or **NestJS**

Goals:

- Modern TypeScript-based backend
- Unified frontend + backend language (TypeScript)
- REST API or GraphQL
- Better scalability and maintainability

NestJS would provide:

- Clean architecture
- Dependency injection
- Modular structure
- Enterprise-level scalability

⚠️ Note: This requires hosting that supports 24/7 Node.js runtime (e.g. VPS or cloud hosting).

---

### 🛒 3. Shopping Cart & Order System

Planned features:

- Persistent shopping cart
- User authentication (optional)
- Order form & checkout system
- Email confirmation system
- Admin order overview panel

This would transform the site from a showcase project into a functional e-commerce simulation.

---

### 🧩 4. CMS System for Future Students

Long-term vision:
Turn Tectronics into a real **Content Management System (CMS)** where future students can:

- Edit products
- Add blog posts
- Manage categories
- Update homepage sections
- Upload images
- Manage orders

Possible implementation strategies:

- Custom-built CMS with admin dashboard
- Headless CMS (e.g. Strapi, Directus)
- Role-based access system
- Database-driven content

Goal:
Allow non-technical students to manage the website directly via browser without touching code.

---

### ☁️ Hosting Considerations

To support future architecture (Next.js + Node backend), hosting must:

- Support Node.js 24/7 runtime
- Allow environment variables
- Support database connections
- Provide SSL
- Offer scalable deployment

Possible solutions:

- VPS (Hetzner, DigitalOcean)
- Vercel (frontend)
- Railway / Render
- Docker-based deployment

---

## 🎯 Vision

The long-term vision is to transform Tectronics from a static student project into a scalable, modern, full-stack web platform that future generations of students can maintain and expand.
