export const posts = [
	{
		id: "1",
		title: "GitHub Pages: Your Free Live Server",
		date: "2025-11-04",
		excerpt:
			"Deploy your static sites instantly with GitHub Pages—no server configuration needed.",
		content: `GitHub Pages has transformed how developers host static content. It's simple, free, and integrates seamlessly with your workflow.

## Why GitHub Pages?

The beauty of GitHub Pages lies in its simplicity. Any repository can become a live website. Push your code, and your site goes live automatically. There's no complicated deployment process, no server maintenance, and no unexpected bills.

## Getting Started

Create a repository named \`username.github.io\` and add your HTML files. That's it. Your site appears at \`https://username.github.io\` within seconds. For project sites, enable Pages in your repository settings and point it to your main branch or a docs folder.

## Custom Domains

Want a custom domain? GitHub Pages supports it. Update your DNS records and add a CNAME file to your repository. Your personal domain now points to your GitHub-hosted content.

## Limitations to Consider

GitHub Pages works best for static sites. If you need server-side logic or databases, you'll need a different solution. However, for portfolios, documentation, blogs, and landing pages, it's unbeatable.

The combination of version control, automatic deployment, and zero hosting costs makes GitHub Pages an obvious choice for developers building their online presence.`,
	},
	{
		id: "2",
		title: "Jekyll: Static Site Generation Made Simple",
		date: "2025-11-03",
		excerpt:
			"Transform markdown files into beautiful static websites with Jekyll.",
		content: `Jekyll is a static site generator that turns your markdown files into a complete website. It's the engine behind GitHub Pages and offers incredible flexibility with minimal complexity.

## What Makes Jekyll Special

Jekyll separates content from presentation. Write in markdown, and Jekyll converts it to HTML. Layouts, includes, and templates let you build sophisticated sites without repeating code. It's the philosophy of dynamic sites without the overhead.

## Writing Your First Post

Create a \`_posts\` folder and add a file named \`YYYY-MM-DD-title.md\`. Jekyll automatically recognizes this as a blog post. Front matter at the top—written in YAML—lets you set titles, dates, and custom variables.

## Templates and Layouts

Layouts are HTML templates with liquid tags that inject content. A post layout might include author information, publication date, and navigation. Reuse these templates across hundreds of posts without duplication.

## The Local Development Loop

Run \`jekyll serve\` locally and watch your changes instantly. The development server rebuilds your site as you edit, making iteration fast. See exactly how your site looks before pushing to production.

## Why Jekyll Dominates

Jekyll powers many technical blogs and documentation sites. It's lightweight, fast, and requires no database. Combined with GitHub Pages, you have a publishing platform that costs nothing and scales effortlessly.`,
	},
	{
		id: "3",
		title: "Solving Difficult Problems in Coding",
		date: "2025-11-02",
		excerpt:
			"Strategies and mindsets that help you tackle complex coding challenges.",
		content: `Difficult problems are where real learning happens. The approach you take matters as much as the technical knowledge you possess.

## Break It Down

Complex problems feel overwhelming as a whole. Divide them into smaller, manageable pieces. A feature that seems impossible becomes simple when you handle one piece at a time. This isn't just philosophy—it's the most effective debugging and development strategy.

## Understand the Problem First

Rushing to code is tempting but costly. Spend time understanding what you're really trying to solve. What are the constraints? What are the edge cases? Write out the problem in plain language. Often, clarity emerges during this process.

## Pseudocode Before Code

Before writing real code, sketch the logic in pseudocode. This forces you to think through the approach without syntax distracting you. When the logic is solid, translating to actual code is straightforward.

## Test Your Assumptions

Difficult problems often hide in assumptions you didn't know you were making. Use print statements, debuggers, and tests to verify what's actually happening. Reality frequently diverges from what you expect.

## Learn from Others

Don't solve problems in isolation. Read others' approaches. Study how experienced developers tackle similar challenges. This accelerates your learning more than struggling alone ever could.

## Embrace Iteration

The first solution rarely works perfectly. Build something, test it, learn from failures, and improve. Iteration isn't defeat—it's the normal process of solving hard problems.

## Take Breaks

When stuck, step away. Your subconscious continues working while you're not at your desk. Return with fresh eyes and often see solutions immediately. This isn't laziness; it's how your brain works best.`,
	},
	{
		id: "4",
		title: "Deploying a React App to Heroku: Navigating Modern Version Challenges",
		date: "2025-11-10",
		excerpt:
			"Getting a React app live on Heroku sounds simple until you hit version incompatibilities. Here's what I learned.",
		content: `This week's assignment was straightforward: deploy a React app to Heroku. The actual experience was a masterclass in debugging modern web development. What should have been a few minutes turned into several hours of troubleshooting version conflicts, configuration changes, and deprecated APIs.

## Heroku's UI Changes

The new Heroku dashboard is cleaner than the old one, but it's different. The process of setting up environment variables, viewing logs, and managing apps has shifted. What used to be obvious is now tucked in different menus. Documentation hasn't fully caught up with the UI changes.

The command line remained consistent, which saved me. Using \`heroku logs --tail\` gave me visibility into what was actually failing, while the dashboard showed me polished success messages that were misleading.

## MongoDB Atlas Connection Strings

MongoDB's newer versions changed how connection strings work. The format is correct, but it's finicky about details:

\`\`\`
// Missing the database name - FAILS
mongodb+srv://user:password@cluster.mongodb.net/?appName=myApp

// With database name - WORKS
mongodb+srv://user:password@cluster.mongodb.net/dbname?appName=myApp
\`\`\`

That tiny difference broke everything. Mongoose would throw namespace errors that had nothing to do with the actual problem. The error message was misleading, making debugging harder.

## Create-React-App's Build Quirks

Create-React-App works great locally, but deployment adds complexity. The build process must:
- Install dependencies
- Compile JSX
- Bundle and optimize

## Express.js Route Order Is Critical

Express processes middleware sequentially. If your catch-all route runs before static file serving, it intercepts CSS, JavaScript, images—everything. Your React app loads as HTML but can't find its assets. It appears broken even though the code is fine.

## Environment Variables in React

React apps can't access environment variables the same way backend code does. You must:
- Prefix variables with \`REACT_APP_\`
- Set them before the build runs
- Reference them in code as \`process.env.REACT_APP_VARIABLE\`

## The Modern Development Ecosystem is Fragile

This week exposed something uncomfortable: modern development stacks are fragile across versions. MongoDB changed connection requirements. Heroku redesigned its platform. Create-React-App has its own quirks. Express requires understanding middleware order. Each piece works great independently, but combining them reveals incompatibilities.

The solution isn't to get upset about it—it's to:
- Read error messages carefully
- Check logs religiously  
- Understand what each tool does
- Test in production early and often

`,
		imageUrl: "../images/crudApiDemoImage.png",
	},
];
