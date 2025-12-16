# s2o-guest-web
🍽️ S2O Guest Web (QR Ordering)
QR-based guest menu web app (PWA) for S2O.

s2o-guest-web is the QR-based guest web application of the S2O (Scan2Order) platform.
It allows restaurant guests to view menus, place orders, track order status, and request payment by scanning a QR code — without installing an app or logging in.

This repository is part of the S2O multi-tenant SaaS ecosystem and follows the global architecture, workflow, and contribution standards defined in s2o-docs
.

🎯 Purpose & Scope
What this app does

Display restaurant menus via QR code

Allow guests to add items and place orders

Track order status in real time

Request bill or staff assistance

Work seamlessly across mobile, tablet, and desktop

What this app does NOT do

No user authentication

No admin or restaurant management features

No tenant configuration logic

All business logic, authentication, and tenant isolation are handled by s2o-api.

🧱 Architecture Overview

Platform: Web / PWA (mobile-first)

Architecture pattern: MVT (Model – View – Template)

Communication: REST APIs + WebSocket (real-time)

Session: Table-based session (QR scan)

Tenant model: Multi-tenant (handled by backend)

This application strictly follows the S2O System Architecture defined in ARCHITECTURE.md.

🧩 Project Structure (MVT + Cross-platform)
src/
├─ app/                # Application bootstrap & global providers
├─ modules/            # Feature-based modules (MVT)
│  ├─ menu/            # Menu display
│  ├─ order/           # Cart & ordering
│  ├─ table/           # Table & session context
│  └─ realtime/        # Real-time order updates
├─ shared/             # Cross-platform shared components & utilities
├─ pages/              # Route-level pages
└─ main.tsx

MVT Pattern

Model: API calls, domain models, state

View: Hooks & UI logic

Template: Pure UI components (stateless)

This separation ensures:

Clean code

Easy testing

Flexible UI changes

Cross-platform consistency

📱 Cross-Platform Strategy

Mobile-first design (QR usage)

Responsive layouts for tablet & desktop

Shared UI components

PWA-ready (offline & installable support)

🔗 API & Realtime Communication

Backend: s2o-api

Protocols:

REST APIs for menu & ordering

WebSocket for real-time order status

Session context:

Tenant ID

Restaurant branch

Table ID

🧪 Testing

Unit tests for hooks, models, and utilities

Integration tests for ordering flow

Tests must not break existing functionality

tests/
├─ unit/
└─ integration/

🔐 Security Considerations

No sensitive data stored on client

No credentials or secrets committed

.env.example provided for configuration

All security enforcement handled by backend (s2o-api)

🌱 Development Workflow

This repository follows the global S2O workflow.

Branch Naming
type(scope): short-description-TASKCODE


Example:

feat(guest-web): add-qr-order-flow-SSRMPWQCO-21

Commit Messages (Conventional Commits)
type(scope): short description TASKCODE


Example:

fix(guest-web): fix cart total calculation SSRMPWQCO-34


See full rules in s2o-docs/CONTRIBUTING.md.

🚀 Getting Started
Prerequisites

Node.js (LTS)

Package manager (npm / yarn / pnpm)

Setup
git clone https://github.com/your-org/s2o-guest-web.git
cd s2o-guest-web
cp .env.example .env
npm install
npm run dev


Check the repository-specific configuration if needed.

📘 Documentation

📐 System Architecture: s2o-docs/ARCHITECTURE.md

🔧 Development Workflow: s2o-docs/WORKFLOW.md

📘 Contribution Guide: s2o-docs/CONTRIBUTING.md

📂 Repository Overview: s2o-docs/REPOSITORIES.md

All cross-repository documentation lives in s2o-docs.

🤝 Contributing

All changes must go through a Pull Request

Include task code in branch, commit, and PR

Follow clean code and MVT structure

Do not commit secrets or environment files

We welcome contributions! 🎉
Please follow the global contribution guidelines.

📬 Contact

For questions, issues, or suggestions:

Open an Issue

Submit a Pull Request

Refer to the maintainers listed in the organization

🎉 Thank you for contributing to S2O – Scan2Order!