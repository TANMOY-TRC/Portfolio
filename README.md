# Minimalist Academic & Professional Portfolio

A highly customizable, multipage portfolio website built with **Next.js** and **TailwindCSS**. Designed to bridge the gap between academia and professional software engineering, this template features a minimalist design, a fully functional MDX-powered blog, automatic SEO generation, and centralized routing for all your professional links.

The entire website is data-driven. Even if you are a beginner, you can update your entire portfolio just by modifying simple JSON/TypeScript objects, no need to touch the core UI components.


## Project Highlights

- **Dual-Purpose Design:** Tailored to showcase achievements for both academia and professional industry audiences.
- **Minimalist UI:** Clean, multi-page layout prioritizing content readability and modern aesthetics.
- **MDX-Powered Blog:** Built-in blog supporting GitHub-flavored Markdown and React components via `next-mdx-remote`.
- **Data-Driven Architecture:** The entire website's content can be seamlessly updated via simple JSON-like data objects, making it incredibly friendly for newbies.
- **Automatic SEO:** Out-of-the-box SEO generation to ensure your portfolio and blog posts rank well.


## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Configuration and Data Management](#configuration-and-data-management)
- [Blog Engine and MDX Format](#blog-engine-and-mdx-format)
- [Behavioral Notes and Edge Cases](#behavioral-notes-and-edge-cases)
- [Credits and Acknowledgements](#credits-and-acknowledgements)
- [License](#license)


## Project Overview

This project is a fully responsive and dynamic multi-page portfolio website. It is specifically designed keeping in mind the nuanced needs of both academic researchers and industry professionals. Utilizing a component-based architecture for scalability and reusability, the application separates the core UI logic from the data, allowing users to update their entire portfolio, including the blogs, credential badges, publications and projects, without diving into complex React code.


## Features

- **Responsive Design:** Adapts seamlessly to mobile, tablet and desktop devices.
- **Built-in Blogging System:** Write posts in `.mdx` format with automatic routing and formatting.
- **Dynamic Content Management:** Profile data, experience, education and projects are heavily modularized in the `data/` folder.
- **SEO Optimized:** Dynamic metadata and sitemap generation.
- **Custom UI Components:** Pre-built, reusable UI blocks combined with MagicUI animations.


## Technologies Used

- **Framework:** Next.js (App Router)
- **Styling:** TailwindCSS
- **Content Processing:** `next-mdx-remote` (MDX, GitHub-flavored Markdown)
- **Language:** TypeScript
- **Icons:** Lucide, React Icons and custom icons


## Project Structure

The project is structured to separate content from logic, ensuring easy updates.

```plaintext
src/
├── app/                  # Next.js app router (pages, layouts, SEO files)
│   ├── about/            # About page route
│   ├── blog/             # Blog listing, filter and dynamic [slug] routes
│   ├── credential/       # Centralized credentials and links route
│   ├── research/         # Academic research page
│   └── work/             # Professional work/portfolio route
├── components/           # Reusable UI components
│   ├── blocks/           # Content blocks (e.g., awards, education, projects)
│   ├── icons/            # Custom icons
│   ├── layout/           # Header, Footer, NavBar
│   ├── magicui/          # Animated UI components
│   ├── mdx/              # Custom MDX components
│   └── ui/               # Base UI elements
├── config/               # Global configuration (constants, sitemap, theme)
├── context/              # React context providers
├── data/                 # YOUR CONTENT GOES HERE (TS/JSON objects)
│   ├── blogs/            # .mdx files for your blog posts
│   ├── profile.tsx       # Your main bio and profile data
│   └── ...               # Data for cards (e.g., awards, education, projects)
├── lib/                  # Utility functions
└── types/                # TypeScript type definitions for data integrity
```


## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/TANMOY-TRC/Portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

7. Open your browser and navigate to:
   ```bash
   http://localhost:3000
   ```


## Configuration and Data Management

You do not need to modify the files in `/app` or `/components` to update the website's content. All content is driven by the `/data` folder and configured in `/config`.

####  Data Management

- **Updating Profile:** Edit `data/profile.tsx` to change your name, role, profile photo, taglines and bio.
- **Data Format and Types:** Update files like `data/educations.ts` or `data/projects.ts`. These export structured objects that strictly adhere to the TypeScript types defined in the `/types` directory. This ensures your data remains valid, consistent, and prevents build errors.

#### Site Configuration and Metadata

- `config/constants.ts`: Manages base URL, default page title, description and other constants.
- `config/sitemap.ts`: Defines a configuration object containing the routing paths, navigation icons and metadata descriptions for the pages of the portfolio website.
- `config/theme.ts`: Manages default theme and theme toggle options.


## Blog Engine and MDX Format

The `/data/blogs/` directory holds all your .mdx files. The app automatically reads these, parses the frontmatter and handles routing and SEO.

- **Blog Post Data Format:**
  ```plaintext
  ---
  title: "My First Post"
  date: "2026-04-01"
  summary: "A brief summary of the post for the card view."
  image: "/blog/first-post.jpg"
  keywords: ["Next.js", "WebDev"]
  published: "true"
  ---

  Your content goes here. You can use standard GitHub-flavored Markdown or import custom React components!
  ```

- **Blog Open Graph and Twitter Image:** The site generates **Open Graph** and **Twitter** tags automatically. If you provide an image URL in the MDX frontmatter, it will be used as the specific social sharing image for that post. Otherwise, it falls back to the default Open Graph and Twitter Image.


## Behavioral Notes and Edge Cases
For developers looking to tweak the design, please keep the following behavioral notes and edge cases in mind:

- **Images are Unoptimized by Default:** To ensure broad compatibility with certain static export scenarios or external hosting configurations, Next.js image optimization features are currently bypassed. If you want automatic optimization, consider modification of `next.config.ts`.
- **Theme:** `next-themes` handles theme configuration. If you modify the theme colors, update global.css and the changes will be applied automatically.
- **Metadata and Sitemap:** Metadata and sitemaps are generated dynamically, so no additional adjustments are needed.


## Credits and Acknowledgements
This portfolio stands on the shoulders of the open-source community. If you use this template, please retain credits for the original component authors where applicable.
- **UI Components:** Components are primarily adapted from MagicUI and shadcn/ui. The `badge`, `button` and `card` are adapted from **shadcn/ui**, `animated-shiny-text` is adapted from **MagicUI**, `letter-fx` is derived from **OnceUI** and the rest are custom-built.
- **Icons:** Powered by **Lucide**, **React Icons** and custom SVG mapped components.
- **MDX Parsing**: Implementation is based on the `next-mdx-remote` documentation and utilizes `remark` and `rehype` plugins for content processing.

> [!IMPORTANT]
> Developers using any component or this template for their own personal sites **must simply retain a link back to the original repository** in their footer or credits section.


## License

This project is licensed under the [MIT License](./LICENSE).
