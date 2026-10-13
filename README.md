# JJDS Industries website

Next.js website for https://www.jjdsindustries.com.au, deployed through the existing Vercel configuration.

## Local development

Use Node.js 24.

```sh
npm ci
npm run dev
```

## Production verification

```sh
npm run build
npm run start
```

Check the homepage, `/live-job-library`, service pages, the capability statement PDF, and `/sitemap.xml`. Confirm that an unknown URL returns 404 and `/process-pipework-melbourne` redirects to `/process-pipework-australia`.

Use Tab, Enter and Escape to check desktop menus. On mobile, check the menu, contact section and fixed call/SMS buttons at 320px and 390px. The enquiry form requires a name, contact and job details. It prepares an email for the visitor to send; it does not submit to a backend. Copy enquiry is the fallback for visitors without an email app.

## Content and images

- `data/services.js`: service content shared by rendered pages and server metadata. Aliases redirect to the canonical service URL.
- `data/live-jobs.js`: current project details and approved project photography.
- `src/App.jsx`: homepage, service pages, navigation and enquiry UI.
- `src/index.css`: global styling, keyboard focus and mobile layout.
- `public/JJDS-Capability-Statement.pdf`: downloadable capability statement.

Pages render HTML on the server; JavaScript enhances menus and enquiry preparation. Images in the homepage hero and gallery use responsive Next.js image optimisation.

Changes should be reviewed through a pull request before merging into `main` and the existing production deployment.
