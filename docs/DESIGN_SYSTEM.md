# SkillBridge Design System Documentation

## 1. Design Philosophy: Premium Minimalist SaaS

SkillBridge embodies a **Premium Minimalist SaaS** aesthetic tailored for modern technology and product education. The interface avoids over-saturated gradients, visual clutter, and unnecessary decorative noise, directing all user focus toward readability, decision clarity, and frictionless course navigation.

### Core Tenets:
- **Calm Authority**: Navy (`#25234A`) provides institutional stability and trust, paired with purposeful lavender accents (`#A99BEF`, `#DCD5FF`) that convey innovation without visual fatigue.
- **Content-First Hierarchy**: Generous whitespace, distinct typographic scales, and cards with soft depth make scanning effortless.
- **Predictable Feedback**: Every button, input, and card provides immediate visual confirmation upon hover, focus, and interaction.

---

## 2. Colour Palette Specification

| Token Name | Hex Code | Role & Usage |
| :--- | :--- | :--- |
| **Primary Navy** | `#25234A` | Brand identity, primary headings, primary buttons, hero contrast backgrounds, top announcement bar. |
| **Secondary Lavender** | `#A99BEF` | Brand accents, interactive links, secondary highlights, active badges, progress gradients. |
| **Light Lavender** | `#DCD5FF` | Soft background tints, active tab fills, subtle tags, focus rings. |
| **Background** | `#F8F7FC` | Application body background, inputs fill, nested container cards. |
| **Pure White** | `#FFFFFF` | Primary surface cards, dropdown menus, modals, hero content containers. |
| **Primary Text** | `#29283A` | Body copy, card descriptions, labels, input values (high contrast ratio on light backgrounds). |
| **Secondary Text** | `#77758B` | Subheadings, metadata (duration, student counts), helper descriptions. |
| **Success** | `#36A879` | Positive confirmations, completed course states, discount pills, verified credentials. |
| **Error / Alert** | `#E56B78` | Input validation errors, alert indicators, required field markers. |
| **Border / Divider** | `#EAE8F2` | Subtle structural card borders, table dividers, input boundaries. |

---

## 3. Typography Architecture

### Font Families
- **Headings**: `Poppins`, sans-serif (Weights: 600 SemiBold, 700 Bold, 800 ExtraBold)
- **Body & Controls**: `Inter`, sans-serif (Weights: 400 Regular, 500 Medium, 600 SemiBold, 700 Bold)
- **Code & Identifiers**: `JetBrains Mono` / `Courier New`, monospace (Credential IDs, vouchers)

### Scale & Hierarchy
- **Hero Title**: `clamp(2.5rem, 5vw, 3.75rem)` / Line-height: `1.15` / Weight: `800`
- **Page Headings (H1)**: `2.25rem (36px)` / Line-height: `1.25` / Weight: `800`
- **Section Titles (H2)**: `1.875rem (30px)` / Line-height: `1.3` / Weight: `700`
- **Card Titles (H3)**: `1.125rem (18px)` / Line-height: `1.4` / Weight: `700`
- **Body Large**: `1rem (16px)` / Line-height: `1.6` / Weight: `400`
- **Body Standard**: `0.875rem (14px)` / Line-height: `1.5` / Weight: `400-500`
- **Captions & Metadata**: `0.75rem (12px)` / Line-height: `1.4` / Weight: `500-600`
- **Micro Tags**: `0.6875rem (11px)` / Line-height: `1.2` / Weight: `700`

---

## 4. Spacing, Elevation & Border Radius

### 8-Point Grid System
All margins, paddings, and component dimensions adhere to multiples of 4px and 8px:
- `4px (0.25rem)`: Micro gaps (tag icons, chips)
- `8px (0.5rem)`: Button internal padding, small list item gaps
- `16px (1rem)`: Standard component spacing, input padding
- `24px (1.5rem)`: Card body padding
- `32px (2rem)`: Section row spacing
- `48px (3rem)` to `80px (5rem)`: Major page section breaks

### Border Radius
- `rounded-lg (8px)`: Small badges, quick tags
- `rounded-xl (12px)`: Inputs, buttons, filter buttons, toast alerts
- `rounded-2xl (16px)`: Course cards, testimonial cards, stat widgets
- `rounded-3xl (24px)`: Major landing hero sections, CTA banners, modals

### Shadows & Elevation
- **`shadow-soft`**: `0 4px 20px -2px rgba(37, 35, 74, 0.05)` (Default card elevation)
- **`shadow-soft-hover`**: `0 12px 30px -4px rgba(37, 35, 74, 0.12)` (Card hover elevation)
- **`shadow-card`**: `0 1px 3px rgba(37, 35, 74, 0.05), 0 10px 25px -5px rgba(37, 35, 74, 0.04)`
- **`shadow-nav`**: `0 2px 15px rgba(37, 35, 74, 0.04)` (Sticky navigation bar)

---

## 5. Component Inventory & Behavior Guidelines

### Primary Button
- **Styling**: Background `#25234A`, Text `#FFFFFF`, font-weight 700, radius `12px` - `16px`.
- **States**: 
  - Hover: Opacity `90%`, subtle translateY `-1px`, shadow expansion.
  - Active: Scale `0.98`.
  - Focus: 4px ring in `#DCD5FF` with offset.
  - Disabled: Opacity `50%`, cursor not-allowed.

### Secondary / Ghost Button
- **Styling**: Background `#FFFFFF` or `#F8F7FC`, Border `1px solid #EAE8F2`, Text `#25234A`, font-weight 600.
- **States**: Hover background `#EAE8F2/60`.

### Course Card
- **Structure**: 16:9 responsive thumbnail with overlay gradient, category chip, level badge, star rating, 2-line title clamp, 2-line description clamp, instructor avatar with name, price display with discount percentage, and dual action ("View Details" + "Enrol Now").
- **Accessibility**: Includes high-contrast border and visible outline when in Low-Vision mode.

### Form Inputs
- **Structure**: High-contrast label with explicit red asterisk for mandatory fields, placeholder with examples, 1px border `#EAE8F2`.
- **Validation**:
  - Focus state: Ring in `#A99BEF/40` and border in `#A99BEF`.
  - Invalid state: Border `#E56B78`, icon alert, descriptive inline text below input explaining exact fix required.

### Filter Accordion
- Interactive buttons with active checkmark icons, badge counters indicating available courses, and instantaneous filtering feedback.

### Progress Bar
- Accessible `role="progressbar"` with `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`.
- Smooth CSS transition (500ms ease-out) from `#A99BEF` gradient to vibrant `#36A879` upon 100% completion.

---

## 6. Accessibility & Inclusivity System

### WCAG 2.1 AA Compliance
- **Contrast Ratios**: All text tokens exceed the 4.5:1 minimum threshold against their respective backgrounds (Navy `#25234A` on `#FFFFFF` scores `14.8:1`).
- **Focus Indicators**: Every interactive control possesses an unambiguous, 2px to 4px focus ring.
- **Keyboard Navigation**: Full tab ordering across navigation links, search bars, filter buttons, accordions, and checkout inputs.

### Low-Vision / High-Contrast Mode
Toggleable via the navigation bar:
- Enlarges baseline typography by `110%`.
- Replaces subtle `#EAE8F2` borders with solid `2px solid #25234A`.
- Darkens secondary text labels to `#1a1924` for maximum legibility.
- Deepens interactive card shadows to ensure strong surface separation.

### Vernacular Support (Hindi Localization)
- Built-in language switcher (`LanguageContext`) mapping critical UI text to Hindi.
- Supports regional learners across the subcontinent seeking career upskilling.
