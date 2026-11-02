# ICRI-STE Main Website + Newsroom Integration

This package integrates the newsroom with the supplied ICRI-STE homepage. The homepage design, existing navigation, search, membership/certificate validation and research-resource loading scripts have been preserved.

## Package contents

- `index.html` — updated main website homepage based on the supplied file
- `newsroom.html` — newsroom landing page; this matches the existing main-navigation and site-search links
- `newsroom/index.html` — optional folder-based newsroom landing page
- `newsroom/news/` — seven standalone news articles
- `newsroom/assets/css/newsroom.css` — shared newsroom styles
- `newsroom/assets/js/newsroom.js` — archive search and category filters
- `newsroom/uploads/` — directory for approved public media

## Deployment into your existing website

1. Make a backup of your current website root.
2. Upload/replace the supplied `index.html` in the website root.
3. Upload `newsroom.html` to the same root directory.
4. Upload the complete `newsroom/` folder beside `index.html`.
5. Keep your existing root `assets/` folder and all existing HTML pages, JSON registers and images. They are not replaced by this integration package.
6. Confirm that the existing files referenced by the homepage remain available, including `assets/ICRI-STE-Logo.png`, `assets/ECR_Membership.joson`, `assets/certificates.json`, `assets/Research_Ethics_Benefits.joson`, and the other existing portal pages.

The main navigation and site search open `newsroom.html`. The homepage also includes a Latest Institutional News & Research Highlights section. News articles link back to the correct root homepage and newsroom landing page.

## Newsroom URLs after deployment

- `https://icriste.com/newsroom.html` — newsroom landing page
- `https://icriste.com/newsroom/` — optional folder landing page (if directory indexing is enabled)
- Individual stories: `https://icriste.com/newsroom/news/<article-filename>.html`

## Adding future news

1. Add a standalone HTML article under `newsroom/news/`.
2. Use `../assets/css/newsroom.css` from article pages.
3. Add a news card to `newsroom.html` and `newsroom/index.html` using the existing card structure.
4. Add or update a homepage preview card in `index.html` when the item should be featured.
5. Put approved media in `newsroom/uploads/`.

## Editorial safeguards

- An invitation is not described as an accepted appointment.
- A proposal shortlisted for submission is not described as an approved or funded project.
- Research alignment is not described as independent validation or clinical deployment.
- Private letters, signatures, QR codes and personal contact details are not published in the uploads directory.

## Important note

This is a website integration package, not a full mirror of every existing website file. The original homepage references other assets, JSON databases and portal pages that were not part of the uploaded index file. Keep those existing website files in place during deployment.
