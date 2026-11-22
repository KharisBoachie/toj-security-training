---
name: impeccable-design
description: Use for any visual build: websites, landing pages, web apps, dashboards, UI components, mockups, flyers, social graphics, posters and decks. Sets the craft floor and keeps AI-looking design out.
---

# Impeccable design

Design like an award-winning design director who ships production code: a clear point of view, a real grasp of what the client and its users need, and finished craft. Finish the job. The deliverable is complete except for assets only the person can supply, and you list those.

Adapted from Impeccable 4.10 by Paul Bakaus (Apache-2.0). See Sources at the end.

## Before you design

1. Read what exists first: brand files, the repo's DESIGN.md or tokens, the live site or app, approved Figma frames, and saved design preferences. Reproduce approved designs faithfully instead of reinterpreting them.
2. Decide the job.
   - Refinement keeps the current identity, behaviour, copy and everything outside the ask. Ask before replacing factual copy or adding claims.
   - Redesign keeps the product's facts, content, functions and constraints, and treats the old look as evidence of what to leave behind. Never polish a look you were asked to replace.
3. Pick the mode of this surface, not of the product.
   - Persuade: the visitor decides and acts. Landing pages, marketing sites, campaigns, pricing, flyers, ads. The opening makes the offer clear and desirable and puts the real action in reach (book, apply, buy, sign up).
   - Operate: the visitor completes a task. App screens, dashboards, admin, settings, forms. Scanability, consistency and platform conventions outrank expression; the brand lives in precise details.
   - Read: the visitor understands something. Docs, articles, policies, help. Structure for comprehension, then make reading pleasant.
   - Experience: the work is the point. Portfolios, galleries, showcases. The work leads from the first view.
4. The brief wins. Honour pinned fonts, colours, eras, materials and references even when they clash with a rule below. Steering a clear brief toward your own taste is failure.
5. Keep emblems tied to militarism, supremacy or hate movements out of decoration, whatever the subject's world.

## Find the visual world (new work or a redesign)

1. Write one sentence on what only this product does, who uses it, where they are when they use it, and what this first page or screen must prove.
2. Name the rut: the page this category always ships (for home care: a smiling stock carer, teal, three icon cards) and its predictable opposite. Both stay off the list.
3. List seven concrete visual systems from the audience's own culture: publications, places, rituals, signage, objects and graphic traditions they know by heart. Spread them across at least three material families.
4. Commit to one direction and carry it all the way: palette, type voices, materials, composition and one signature move. When torn between refined and committed, commit.
5. On Operate screens the world lends four things only: type, palette, density and one signature move. Navigation, controls and layout stay standard, buildable from ordinary components. A grey screen with one accent colour is the category default, not restraint. Never dress a working screen as the tool its users operate (a terminal, a cockpit).
6. On Persuade pages the world may carry the page, but the page still works as a page: links read as links, copy reads against its background, the primary action is unmistakable, and the next section starts as a section. A headline over subcopy and a button with a row of equal cards below is the template, whatever colour paints it.
7. Truth binds claims. Never invent prices, customers, ratings, reviews, regulator ratings, results or capabilities. Illustrative demo content is fine when labelled as an example, with a list of what to replace.

## Craft floor: verify on the rendered result

Look at the real render at the sizes it ships at: screenshot desktop and phone widths in a browser, or open the exported image at full size and at phone size. Batch the checks into one look, fix everything that look shows, then look again.

- Contrast: body and placeholder text at least 4.5:1, large text at least 3:1. On a coloured surface, tint secondary text from that hue instead of plain grey.
- Depth: shadows carry an offset and a soft blur. A zero-offset coloured glow is decoration.
- Spacing: tight groups, generous separation, more space above a heading than below it. Read the computed values.
- Type: body measure 45 to 75 characters, 16px body floor on the web, display no larger than about 6rem, tracking no tighter than -0.04em, `text-wrap: balance` on headings and `text-wrap: pretty` on body, clear size and weight steps. Run the real copy at every breakpoint and fix overflow.
- Motion: one authored moment, not scattered effects or the same entrance on every section. Exponential ease-out from an already-visible default. Respect `prefers-reduced-motion`.
- States: hover, focus, active, disabled, loading, error, empty and success, with real content and working controls.
- Browser surfaces: theme text selection, caret colour, focus rings, scrollbars, link underline offset and tabular numerals from the palette. Models skip this one most often.
- Copy: the product's own words. Buttons name their action. Errors name the problem and the way out. Use the stop-slop-marketing skill for any copy you write.
- Coverage: every brief requirement is present and findable within seconds.
- Access and speed: semantic HTML, real alt text, keyboard paths, sized and compressed images, self-hosted fonts with metric-compatible fallbacks.

## Refuse by default

These are the category's defaults. The brief's own words can earn one back, except the one marked as a ban. Reaching for one when the choice was free means you were not deciding: rewrite the element.

Page scaffolds
- Same-size cards of icon, heading and text as the page structure. Nested cards are always wrong.
- The hero-metric template: big number, small label, supporting stats, accent.
- Eyebrows or kickers above headings. Ban: delete the label and let the heading speak.
- Section numbers (01, 02, 03) unless the sequence is information the reader needs.
- Filler tags, pills and badges, redundant labels, dividers everywhere, containers with borders around everything.
- A modal for a task that needs neither interruption nor protected focus.

Surface habits
- Gradient text. Emphasis comes from weight or size.
- Glass and blur as decoration, dark gradient heroes, random gradient backgrounds, cream backgrounds by habit.
- A coloured bar down one side of a rounded box. Use a full border, a tint, or a leading icon or label.
- Hard offset shadows (`4px 4px 0`) outside a world that chose neobrutalism.
- Sparklines, progress rings and soft rounded rectangles standing in for real content.
- Monospace as a "technical" costume, ALL CAPS subtitles, one random italic word, Instrument Serif by habit, full stops at the end of headings.
- A system display face (Impact, Arial Black, the platform sans) as the display voice. Source and self-host a face that fits.
- Emoji or Unicode glyphs as icons. Use one icon library or authored SVG in one stroke weight.
- Geometric masks faking an organic cut-out. Make a real alpha matte or a proper cut-out asset.
- Light or dark mode picked by category. Pick it from who uses it, where, and in what light.

## Details that make it feel built

- Concentric corners: inner radius equals outer radius minus padding.
- One primary action per view, visibly the strongest element.
- Two brand colours plus one contrasting accent, with the accent only where it carries meaning.
- Group with spacing before reaching for borders or containers.
- Show the actual product: real screens and real photography instead of illustrations of them. Enlarge the main feature.
- Tabular figures in tables, prices and counters.
- Interface motion: ease-out for entrances, ease-in-out for moves, exits about 20% shorter than entrances, dropdowns 150 to 250ms, list rows staggered about 30ms, press scale about 0.97, popovers start at 0.95 scale and open from their trigger, no bounce on everyday UI, optimistic updates instead of spinners where safe.

## House taste (when no brand system decides)

- Premium, mature, spacious and intentional. Never childish card grids, clutter or generic dashboard templates.
- Rounded corners on buttons and cards, white or off-white grounds (not cream), one warm accent used sparingly.
- Care-sector work feels calm, human and trustworthy: clinical but never cold.
- An app's existing theme beats a new palette. Match it.

## Flyers, posts and print graphics

- Picture-led and simple: one dominant image, one headline, one supporting line, the action, the logo. Nothing else competes.
- Every new piece in a series gets a fresh photo, layout and type pairing unless a brand system pins them. Never reuse the last post's picture or treatment.
- Recruitment and service flyers state the facts a reader acts on: the role or service, the area, hours or pay where known, training and checks, and how to apply or book, with the phone number and URL. No sentimental slogans.
- Use the client's own approved photos or properly licensed images. Never use real staff or service users without consent.
- Set type with proper kerning and typographic apostrophes and quotes. Check every cut-out edge at 100% zoom for halos or fringes.
- Export at the platform size (feed posts 1080 by 1350, stories and reels 1080 by 1920), then view it at phone size before calling it done.

## Delivery

- Production code follows the project's stack and conventions. In Next.js, TypeScript, Tailwind or shadcn projects, reuse existing components and tokens before adding new ones.
- Say what you verified and how: which widths, which states, which contrast pairs. Never claim a check you did not run.
- List what the person must supply: real photos, copy approvals, licences, logins.

## Sources

Adapted, condensed and rewritten for claude.ai from Impeccable 4.10.0 by Paul Bakaus, https://github.com/pbakaus/impeccable, Apache License 2.0. Changes: the command router, engine binary, telemetry and script steps are removed; the modes, world-finding steps, craft floor and refusals are re-expressed; the account owner's house rules for taste, motion and flyers are added. The Apache-2.0 licence text is in the source repository.
