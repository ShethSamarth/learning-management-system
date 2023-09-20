# Learning Management System

This is a repository for Fullstack Discord Clone: Next.js 13.4, React, Mux, TailwindCSS, ShadCN UI, MongoDB, Prisma.

Key Features:

- Browse & Filter Courses
- Purchase Courses using Stripe
- Mark Chapters as Completed or Uncompleted
- Progress Calculation of each Course
- Student Dashboard
- Teacher Dashboard
- Create new Courses
- Create new Chapters
- Easily reorder chapter position with drag n’ drop
- Upload thumbnails, attachments and videos using UploadThing
- Video processing using Mux
- HLS Video player using Mux
- Rich text editor for chapter description
- Authentication using Clerk
- ORM using Prisma
- MongoDB database
- Beautiful UI using TailwindCSS and ShadcnUI
- Full responsivity and mobile UI

# Final Version

To visit the website, [click here.](https://lms-ss.vercel.app)

### Cloning the repository

```shell
git https://github.com/ShethSamarth/learning-management-system.git
```

### Install packages

```shell
npm install
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

MUX_TOKEN_ID=
MUX_TOKEN_SECRET=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL=http://localhost:3000

NEXT_PUBLIC_TEACHER_ID=
```

### Setup prisma

```shell
npx prisma generate
npx prisma db push
```

### Setup categories in Database

```shell
node scripts/seed.ts
```

### Start the app

```shell
npm run dev
```
