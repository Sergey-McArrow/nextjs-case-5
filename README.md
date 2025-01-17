# Full Stack Middle Developer Case Study

Hi and thank you for participating in this case study of **Tree Solutions**! We're excited to see how you approach building a full-stack application from scratch while showcasing your skills with modern web development tools.

This case study focuses on building a **multi-step property form** with a **portfolio overview** page that stores and retrieves data from a **PostgreSQL database hosted on Vercel**. Below are the detailed requirements and expectations for this assignment.

---

## 🛠️ Tech Stack

- **Next.js (App Router)**

- **TypeScript**

- **Prisma** + **PostgreSQL**

- **React Hook Form** + **Zod**

- **React Query**

- **TailwindCSS** + **Shadcn UI**

- **Vercel**

---

## 📋 What You'll Be Building

The application consists of:

1. **A Multi-Step Wizard**:

   - **Step 1: Property Details**
     - Collect basic property information like name, address, and close date.
     - Validation should include error messages (e.g., required fields, invalid formats).
   - **Step 2: Rent Roll**
     - Display or seed data for tenants/units.
     - Provide an interface to browse this data (pagination optional).
   - **Step 3: Financing**
     - Start with a single "Debt 1" form, and allow users to add up to 10 additional debts using tabs.
     - Each tab should have its own fields (e.g., lender name, loan amount, interest rate).
   - **Step 4: Income & Expenses**
     - Input fields for incomes and expenses (e.g., net rental, utilities, property taxes).
     - **Real-time calculations** for:
       - **(EGI)** Effective Gross Income
       - **Total Expenses**
       - **Net Operating Income (NOI)**
   - **Step 5: Ownership Structure**
     - Default three owners (Name + Ownership Percentage) with validation.
     - Allow adding additional owners dynamically.

2. **A Portfolio Overview Page**:
   - Displays all properties submitted through the wizard in a clean, card-based layout.
   - Each card should include:
     - Property Name and Address
     - Key financial metrics (e.g., Asset Value, LTV, DSCR, NOI, Rent per sqft, Expense Ratio)
     - Summary information for easy review.

---

## 🛠️ Requirements

### 1. **Form Handling**

- Use **React Hook Form** for form management and state handling.
- Use **Zod** for validation schemas and display **clear error messages** for invalid inputs.

### 2. **UI Design**

- Use **Shadcn UI** components for the entire interface.
- Use **TailwindCSS** for layout and styling.
- While the provided [Figma design](https://www.figma.com/design/ihr175BRpZX3eX7K3YhFdG/Test_Test-Tree_Solutions?node-id=1-10264&t=SzdtaG3HiD6Xt8V7-4) serves as a **reference**, you are not required to match it pixel-perfectly. Focus on creating a clean and functional UI.

### 3. **Database Integration**

- Use **Prisma** to define schemas and manage data for all steps of the wizard.
- Store data in a **PostgreSQL database hosted on Vercel**.
- Ensure the schema supports:
  - Properties with related data for financing, rent rolls, and ownership.
  - Financial metrics like expenses and income.

### 4. **Backend & API**

- Build backend API routes using **Next.js**.
- Use **React Query** to fetch and mutate data between the frontend and backend.

### 5. **Deployment**

- Deploy the application to **Vercel**.
- Use Vercel’s PostgreSQL for the production database and set the appropriate `DATABASE_URL` environment variable.

---

## 🧮 Key Calculations

The following calculations must be implemented for the **Income & Expenses** step and the **Portfolio Overview** page. Ensure these values are computed in real-time where applicable.

1. **Effective Gross Income (EGI)**  
   `EGI = Net Rental + Retail Income + Insurance Income + Misc Additional Income`
2. **Total Expenses**  
   `Total Expenses = Property Taxes + Insurance + Utilities + Repairs & Maintenance + Miscellaneous`
3. **Net Operating Income (NOI)**  
   `NOI = EGI - Total Expenses`
4. **Asset Value**  
   `Asset Value = NOI / Cap Rate`
   - Use a fixed Cap Rate of 5% (0.05).
5. **LTV (Loan-to-Value)**  
   `LTV (%) = (Total Debt / Asset Value) * 100`
6. **DSCR (Debt Service Coverage Ratio)**  
   `DSCR = NOI / Annual Debt Service`
7. **Rent per sqft**  
   `Rent per sqft = Net Rental / Total Square Footage`
8. **Expense Ratio**  
   `Expense Ratio (%) = (Total Expenses / EGI) * 100`

---

## 🚀 Submission Instructions

1. **Deploy the App**

   - Deploy your app to **Vercel** with a working PostgreSQL database.

2. **Provide the Following**:

   - **Deployed Application URL** on Vercel.
   - **Git Repository Link** (public or private invite).

3. **Time Expectation**:
   - The assignment is designed to take **up to 6 hours**. Work at your own pace and ensure the essential features are completed.

---

## 📝 Evaluation Criteria

We’ll evaluate your submission based on the following:

1. **Code Quality**

   - Proper TypeScript usage, clean organization, and maintainability.

2. **Functional Completeness**

   - All five steps of the wizard with proper validations and error handling.
   - Accurate implementation of real-time calculations.

3. **Database & API**

   - Well-structured Prisma schemas and efficient use of PostgreSQL.
   - Properly functioning API routes and integration with React Query.

4. **UI/UX**

   - Clean and functional design using **Shadcn** components and **TailwindCSS**.
   - Smooth user flow with meaningful error messages.

5. **Deployment**
   - Fully functional application deployed on **Vercel**, including database connectivity.

---

## 🔗 Resources

- [Figma Design Reference](https://www.figma.com/design/ihr175BRpZX3eX7K3YhFdG/Test_Test-Tree_Solutions?node-id=1-10264&t=SzdtaG3HiD6Xt8V7-4)  
  Use this as a guide for layout and structure, but pixel-perfect implementation is not required.

---

Thank you for participating! If you have any questions, don’t hesitate to reach out. We’re looking forward to seeing what you build! 🚀
