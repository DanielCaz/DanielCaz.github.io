---
title: Benefits of the new Next.JS 13 app router
excerpt: The new Next.JS app router brings a lot of benefits for your projects. Learn more about them and how to get the most out of it in this article.
date: 2023-08-19
tags: [nextjs, webdev]
cover:
  image: /blog/benefits-of-nextjs-app-router/cover.jpg
  thumbnail: /blog/benefits-of-nextjs-app-router/cover_thumb.jpg
  author: Luis Gomes
  source: https://www.pexels.com/photo/close-up-photo-of-programming-of-codes-546819/
---

Next.JS 13 is out and with it comes a new app router and it brings features like react server components, special files like `loading.tsx` and the new Metadata API. But what are the benefits of all these new features? Let's find out!

## Table of contents

- [Less JavaScript shipped to the client](#less-javascript-shipped-to-the-client)
- [An easier way to handle loading states](#an-easier-way-to-handle-loading-states)
- [Layouts](#layouts)
- [The new Metadata API](#the-new-metadata-api)
- [Conclusion](#conclusion)

## Less JavaScript shipped to the client

This is my favorite new feature of the new app router, since all components are server components by default, us as developers can choose which components should be client-side rendered and which should be server-side rendered. This results in faster page loads, better SEO and a better user experience overall.

## An easier way to handle loading states

Another feature that I really like are the new special files but in particular the `loading.tsx` file. This file is rendered while the page is fetching data on the server side and it gives us a way to inform the user that the page is in fact loading so it doesn't seem unreponsive or slow without having to rely on useState which also results in less JavaScript! Have you noticed a pattern here?
See an example below:

```tsx
export default function Loading() {
  // This can be a loading animation, skeleton
  // or anything else you want!
  return <p>Loading...</p>;
}
```

You can read more about the new special files [here](https://nextjs.org/docs/app/api-reference/file-conventions).

And on the topic of these new special files...

## Layouts

One of the most tedious things I had to deal with were layouts and having to configure them in the `_app.tsx` component. Now with the new app router we can create a `layout.tsx` component and it will be used as the default layout for all descendants of the folder it is in! It really is that simple! And the best thing is that you can have multiple layouts for different pages and you can even nest them!

So for example you could create a root layout in the `app/` folder and then create a `dashboard/` folder with a `layout.tsx` component inside of it and it would be used as the default layout for all pages inside of the `dashboard/` folder. See an example below:

```tsx
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // You can customize the html tag here as well!
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>Dashboard Header</header>
      <main>{children}</main>
      <footer>Dashboard Footer</footer>
    </>
  );
}
```

And thats it! No further configuration needed!

## The new Metadata API

The new Metadata API helps us manage what would normally go inside of a `<Head>` component. This is really useful because it allows us to more easily configure all of our metadata in a way simpler way than having to import the `<Head>` component in each page for something as simple as wanting a differente title for each page or having to create a `_document.tsx` component with boilerplate code.

This, in combination with the new layouts feature, makes it really easy to configure all of our metadata in one place and have it be used by all pages that use the layout.
See and example below:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My page title",
  description: "Page description",
  // ...
};

export default function MyComponent() {}
```

You can read more about the new Metadata API [here](https://nextjs.org/docs/app/building-your-application/optimizing/metadata).

## Conclusion

I've barely scratched the surface of what the new app router can do but I hope this article has given you a good idea of how it can help you and your projects. I'm really excited to see what the future holds for Next.JS and I hope you are too!
