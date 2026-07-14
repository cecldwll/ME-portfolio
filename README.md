# ME Portfolio

Static portfolio site for Emily Caldwell, Mechanical Engineer.

## Preview Locally

Open `index.html` in a browser, or run a small local server from the project root:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Pages

- `index.html` - Portfolio home page
- `about.html` - About page
- `projects.html` - Project listing with category filters
- `project-detail.html?project=<project-slug>` - Shared project-specific detail page with a photo gallery, overview, requirements, and skills
- `contact.html` - Dark-mode contact page with resume download
- `terms.html` - Terms and conditions page
- `privacy.html` - Privacy policy page

## Project Details

Project-specific content is stored in the `projectDetails` object in `src/scripts.js`. Each project record contains its title, category, subtitle, gallery images, overview, requirements, and skills.

The current project pages cover:

- Plastics: Modular Roof Rack System, Wheel Center Caps, Misc. Car Parts, and Planetary Gears
- Metal: Removable Winch Plate, C-Clamp, Tire Changer Upgrades, Metal Die and Stand, and Lathe Tool
- Wood: Chicken Coop

The finished overview copy is based on `docs/overviews.txt`. Requirements and skills are maintained directly in `src/scripts.js`.

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
- The site uses a dark editorial style with high contrast, visible focus states, semantic headings, accessible labels, and lightweight JavaScript.

## Assets

- `files/Resume.pdf` - Resume download target
- `src/logo-placeholder.svg` - Temporary logo placeholder
- `docs/overviews.txt` - Source copy for project overviews
- `docs/project-list.md` - Project category and summary reference
- `images/optimized/projects/` - Optimized project gallery images

Replace the placeholder logo when final branding becomes available.
