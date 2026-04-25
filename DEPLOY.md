# Deploy to Vercel — Step-by-step guide

Follow these steps to put your landing page online with a free Vercel URL.

---

## Prerequisites

- A **GitHub** account ([github.com](https://github.com))
- A **Vercel** account (you’ll create one with GitHub in Step 3)
- Your **Resend API key** and **PILOT_FORM_EMAIL** (from your local `.env`) — you’ll add them in Vercel

---

## Step 1: Put your code on GitHub

Your project is not a git repo yet. Do this once from your project folder in a terminal (PowerShell or Command Prompt).

### 1.1 Initialize git and commit

```powershell
cd c:\Users\User\phone-answering-landing

git init
git add .
git commit -m "Initial commit: Reception landing page"
```

**Note:** Your `.env` file is ignored by git (see `.gitignore`), so it will **not** be pushed. You’ll add the same variables in Vercel in Step 4.

### 1.2 Create a new repository on GitHub

1. Go to [github.com](https://github.com) and sign in.
2. Click the **+** (top right) → **New repository**.
3. Set:
   - **Repository name:** e.g. `phone-answering-landing` (or any name you like).
   - **Visibility:** Public.
   - Leave “Add a README” **unchecked** (you already have code).
4. Click **Create repository**.

### 1.3 Push your code to GitHub

GitHub will show you commands. Use these (replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repo name):

```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

If GitHub shows a different URL (e.g. SSH), use that instead of the `https://` one.

---

## Step 2: Sign up / log in to Vercel

1. Go to [vercel.com](https://vercel.com).
2. Click **Sign Up** (or **Log In** if you already have an account).
3. Choose **Continue with GitHub** and authorize Vercel to access your GitHub account.

---

## Step 3: Import your project

1. On the Vercel dashboard, click **Add New…** → **Project**.
2. You’ll see a list of your GitHub repositories. Find **phone-answering-landing** (or whatever you named it) and click **Import**.
3. On the **Configure Project** screen:
   - **Framework Preset:** should be **Next.js** (auto-detected).
   - **Root Directory:** leave as `.` (project root).
   - **Build and Output Settings:** leave defaults (Vercel will run `next build`).
4. **Do not click Deploy yet** — add environment variables first (Step 4).

---

## Step 4: Add environment variables

Your app needs `RESEND_API_KEY` and `PILOT_FORM_EMAIL` to send pilot form emails. Add them in Vercel so they are not in your code.

1. On the same **Configure Project** page, find **Environment Variables**.
2. Add each variable:

   | Name               | Value                    | Environment      |
   |--------------------|--------------------------|------------------|
   | `RESEND_API_KEY`   | Your Resend API key      | Production, Preview |
   | `PILOT_FORM_EMAIL` | Email for pilot signups  | Production, Preview |

   Use the same values as in your local `.env` file.

3. Click **Add** for each one. You can leave “Preview” and “Production” both checked.

---

## Step 5: Deploy

1. Click **Deploy**.
2. Wait for the build to finish (usually 1–2 minutes). You’ll see build logs; the first run may install dependencies and run `next build`.
3. When it’s done, you’ll see **Congratulations!** and a link like:

   `https://phone-answering-landing-xxxx.vercel.app`

4. Click **Visit** (or open that URL) to see your live site.

---

## Step 6: Test the site

1. Open your Vercel URL on your phone or another device.
2. Try:
   - Switching languages (EN / RU / ET).
   - Submitting the pilot form at **Join the Pilot Program** or **Get Early Access**.
3. Check that the email arrives at `PILOT_FORM_EMAIL`. If it doesn’t, check [Vercel → Your Project → Settings → Environment Variables](https://vercel.com) and confirm the variables are set and redeploy if you changed them.

---

## Later: updates and custom domain

- **Updates:** When you push new commits to the `main` branch on GitHub, Vercel will automatically build and deploy (if you left the default “Vercel for GitHub” integration on).
- **Custom domain:** In Vercel: **Project → Settings → Domains** → add your domain and follow the DNS instructions.

---

## Quick reference

| Step | What you do |
|------|------------------|
| 1    | `git init`, commit, create GitHub repo, push |
| 2    | Sign up / log in at vercel.com with GitHub |
| 3    | Import project from GitHub, leave settings as default |
| 4    | Add `RESEND_API_KEY` and `PILOT_FORM_EMAIL` in Environment Variables |
| 5    | Click Deploy and open the generated URL |
| 6    | Test the site and pilot form from your phone |

If something fails (e.g. build error or form not sending email), check the Vercel build logs and that both env vars are set for Production and Preview.
