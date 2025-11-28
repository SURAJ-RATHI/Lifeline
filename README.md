# Lifeline Hospital Platform

Full-stack telemedicine platform tailored for Indian patients and clinicians. It blends a Next.js frontend with an Express/MongoDB backend to manage onboarding, appointments, consultations, prescriptions, and secure payments in one experience.

## Features & Functionalities
- **Patient journey:** account creation, multi-step onboarding, doctor discovery with filters, slot booking, payment capture, and call access links.
- **Doctor workspace:** availability management, live appointment queue, prescription creation/updates, and profile management.
- **Virtual consultations:** embedded call interface with appointment context, follow-up notes, and status updates.
- **Payments & invoices:** payment stepper, transaction tracking, and automated receipts.
- **Indian trust cues:** localized testimonials, ratings, and support contact tailored for Indian states and languages.
- **Security & auth:** role-based login, JWT-secured APIs, and protected dashboard routes.
- **Utilities:** notification toasts, form validation, shared UI kit, and reusable hooks/services.

## Folder Structure
```
.
├── backend/                # Express API, routes, models, middleware
│   ├── config/             # Passport configuration
│   ├── middleware/         # Auth, validation, file uploads
│   ├── modal/              # Mongoose models
│   ├── routes/             # Auth, doctor, patient, appointment, payment
│   └── server.js           # App entry point
├── frontend/               # Next.js 14 app router codebase
│   ├── src/app/            # Routes (landing, auth, dashboards, calls)
│   ├── src/components/     # UI + feature components
│   ├── src/lib/            # Constants, helpers, types
│   ├── src/store/          # Zustand stores
│   └── env.local.example   # Frontend environment template
├── README.md               # Project overview (this file)
└── package-lock.json       # Workspace lockfile (root convenience)
```

## Local Setup
1. **Clone & install**
   ```bash
   git clone <repo-url>
   cd Lifeline\ Hospital
   ```
   - Backend: `cd backend && npm install`
   - Frontend: `cd ../frontend && npm install`

2. **Environment variables**
   - Backend: copy `backend/env.example` to `.env` and provide Mongo URI, JWT secrets, SMTP credentials, Razorpay keys, etc.
   - Frontend: copy `frontend/env.local.example` to `.env.local` and set API base URL, WebRTC tokens, and third-party keys that the UI consumes.

3. **Start services**
   ```bash
   # terminal 1 – backend
   cd backend
   npm run dev

   # terminal 2 – frontend
   cd frontend
   npm run dev
   ```
   Visit `http://localhost:3000` for the web app and ensure the backend dev server (default `http://localhost:5000`) is running for API calls.

## Environment Highlights
- **Appointments:** requires MongoDB connection string and cron-friendly timezone configs.
- **Auth:** set `JWT_SECRET`, `REFRESH_TOKEN_SECRET`, OAuth keys if social login is enabled.
- **Payments:** configure Razorpay key/secret or the gateway you integrate.
- **Storage:** optional ImageKit/S3 keys for profile photos (see `backend/utils/imagekit.js`).

## Developer Reference
- **Developer:** SURAJ-RATHI
- **GitHub:** [suraj127021](https://github.com/suraj127021)
- **LinkedIn:** [suraj127021](https://www.linkedin.com/in/suraj127021)

Reach out for collaboration, issue reporting, or deployment guidance.

