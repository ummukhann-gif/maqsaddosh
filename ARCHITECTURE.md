# Maqsaddosh Mini App Architecture

## 1. Project Structure & Justification
We have adopted a strict **Feature-Sliced Design (FSD)** variant tailored for React and Telegram Mini Apps. This ensures scalability and maintainability.

- **`src/app`**: Global configuration, providers, and routing. This is the entry point logic.
- **`src/pages`**: High-level page components (e.g., `HomePage`, `SearchPage`) composed of widgets.
- **`src/widgets`**: Complex, self-contained UI blocks (e.g., `BottomNavigation`, `SearchResultsList`).
- **`src/features`**: Specific business logic units (e.g., `LanguageSwitcher`, `UserLogin`).
- **`src/entities`**: Core business models (e.g., `User`, `Category`).
- **`src/shared`**: Reusable, dumb UI components (atoms/molecules) and utility functions.

This structure allows for independent development of features and minimizes coupling.

## 2. Key Technical Decisions
- **Styling**: Tailwind CSS for rapid, utility-first styling with minimal bundle overhead.
- **State Management**: Zustand for global state (User, Settings) due to its simplicity and small footprint compared to Redux.
- **Routing**: React Router DOM (v6) for client-side navigation, essential for a smooth SPA experience within Telegram.

## 3. Clarifying Questions for the User (REQUIRED)
Before proceeding with the detailed implementation, I need clarification on the following:

1.  **Authentication Flow**: The design shows a "Login" screen. Will we be integrating directly with Telegram's `initData` for seamless auth, or is there a separate backend/OTP flow required?
2.  **Language Support**: The UI shows multi-language options ("O'zbekcha", "English"). Should I implement a full i18n solution (e.g., `react-i18next`) immediately for scalability, or stick to static text for the MVP?
3.  **Component Library**: Do you prefer we build all UI components (Buttons, Inputs) from scratch to match Figma pixel-perfectly, or can we leverage a headless library like Radix UI / Shadcn for better accessibility and speed?

---
*Waiting for your response to proceed with implementation.*
