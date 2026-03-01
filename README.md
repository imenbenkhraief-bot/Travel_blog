# OffWeGo ✈️

A travel blog website built by two engineering students from Tunisia, sharing destinations, travel stories, and tips for adventurers on any budget.

## 🌍 About

OffWeGo is a static travel blog created by Imen Ben Khraief and Line Chouchane. The site features curated destinations across three categories — beach escapes, mountain & nature, and urban cities — alongside personal travel stories and a contact page.

## 📁 Project Structure

```
offwego/
├── index.html          # Home page
├── destination.html    # All destinations overview
├── about.html          # About the creators
├── contact.html        # Contact form & FAQ
├── style.css           # Global styles
├── script.js           # JavaScript interactions
├── images/             # Local images (logo, personal photos)
└── destinations/       # Individual destination pages
    ├── bali.html
    ├── maldives.html
    ├── borabora.html
    ├── hawaii.html
    ├── miami.html
    ├── swiss-alps.html
    ├── banff.html
    ├── iceland.html
    ├── nepal.html
    ├── new-zealand.html
    ├── tokyo.html
    ├── new-york.html
    ├── dubai.html
    ├── london.html
    ├── seoul.html
    ├── venice.html
    └── barcelone.html
```

## 🚀 Getting Started

No build tools or dependencies required. Just open `index.html` in your browser or serve the folder with any static file server.

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000`.

## ✨ Features

- **Scroll-reveal animations** — elements animate into view as you scroll
- **Destination filtering** — browse beaches, mountains, and cities by category
- **Photo lightbox** — click gallery images on the About page to enlarge them
- **FAQ accordion** — expandable questions on the Contact page
- **Contact form** — client-side form with basic validation
- **Smooth scrolling** — anchor links scroll smoothly to sections
- **Responsive navbar** — hamburger menu toggle for mobile
- **Logo animations** — bounce-in on load, hover effect

## 🛠️ Tech Stack

- **HTML5 / CSS3** — semantic markup and custom styling
- **Vanilla JavaScript** — no frameworks, all interactions written from scratch
- **Bootstrap 5.3** — used on select pages for layout utilities

## 📄 Pages

| Page | Description |
|------|-------------|
| `index.html` | Landing page with hero, theme cards, and CTA |
| `destination.html` | Grid of all 17 destinations grouped by theme |
| `about.html` | Creator bios, photo gallery, and travel philosophy |
| `contact.html` | Contact form, social links, map link, and FAQ |
| `destinations/*.html` | Individual pages for each destination |

## 🗺️ Destinations

**Beach Escapes** — Bali, Maldives, Bora Bora, Hawaii, Miami

**Mountain & Nature** — Swiss Alps, Banff, Iceland, Nepal, New Zealand

**Urban & Cities** — Tokyo, New York, Dubai, London, Seoul, Barcelona, Venice

## 👩‍💻 Authors

**Imen Ben Khraief** — [Instagram](https://www.instagram.com/imen.ben.khraief/) · [Facebook](https://www.facebook.com/imen.benkhraief)

**Line Chouchane** — [Instagram](https://www.instagram.com/lyne_chouchane/) · [Facebook](https://www.facebook.com/ly.ne.720017)

Both are ICT engineering students at École Polytechnique de Sousse, Tunisia.

## 📜 License

© 2025 OffWeGo. All rights reserved.
