# ME Portfolio

Static portfolio site for Emily Caldwell, Mechanical Engineer.

## Preview Locally

Open `index.html` in a browser, or run a small local server from the project root:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Pages

- `index.html` - Home and about page
- `projects.html` - Projects listing with filters
- `contact.html` - Dark-mode contact page with resume download
- `terms.html` - Terms and conditions page
- `privacy.html` - Privacy policy page

## Contact Page Updates

- Rebuilt the contact page from `docs/contact-wireframe.png`.
- Added a logo image placeholder button that links back to the home page.
- Added contact details for Emily Caldwell and a resume download button linked to `files/Resume.pdf`.
- Added a footer with credit text and links to Terms & Conditions and Privacy.
- Added matching Terms and Privacy pages with the same visual system.

## Design Notes

- Fonts:
  - Playfair Display for major headings and emphasized display text.
  - Mona Sans for body text, navigation, labels, and smaller headings.
- Display headings and labels are uppercase.
- Current palette:
  - Jet Black: `#13262F`
  - Orange: `#FAA916`
  - White: `#FFFFFF`
  - Royal Blue: `#4A6DE5`
  - Regal Navy: `#033D7D`
- The contact, terms, and privacy pages use a dark editorial style with high contrast, visible focus states, semantic headings, accessible link labels, and minimal JavaScript.

## Assets

- `files/Resume.pdf` - Resume download target
- `src/logo-placeholder.svg` - Temporary logo placeholder
- `docs/contact-wireframe.png` - Contact page wireframe reference

Replace placeholder logo/media assets as final branding and project imagery become available.
