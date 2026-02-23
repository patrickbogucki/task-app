# Color Palette Options

Since this is an enterprise app aimed at a younger demographic, the `shadcn/ui` aesthetic works perfectly. We want a clean, minimalist foundation (whites and slate grays) with a distinct primary brand color that pops, along with semantic colors for task statuses.

Here are three potential palettes:

## Option A: "Tech Indigo" (Modern & Trustworthy)
This is the standard modern SaaS look. It invokes trust but feels fresh.
- **Background**: `bg-white` (White)
- **Surfaces/Cards**: `bg-white` (White) with very subtle borders
- **Primary Brand**: `bg-indigo-600` (Deep vibrant Indigo / `#4F46E5`)
- **Text Primary**: `text-slate-900` (Very dark slate / `#0F172A`)
- **Text Secondary**: `text-slate-500` (Medium slate / `#64748B`)
- **Accent/Hover**: `bg-indigo-50` (Very faint indigo / `#EEF2FF`)

## Option B: "Creative Violet" (Younger & Energetic)
If we want to lean heavier into the "younger crowd" aspect, a violet/purple primary color feels very modern and slightly more playful while remaining professional.
- **Background**: `bg-zinc-50` (Very faint warm gray / `#FAFAFA`)
- **Surfaces/Cards**: `bg-white` (White)
- **Primary Brand**: `bg-violet-600` (Vibrant Violet / `#7C3AED`)
- **Text Primary**: `text-zinc-900` (Almost black / `#18181B`)
- **Text Secondary**: `text-zinc-500` (Medium gray / `#71717A`)
- **Accent/Hover**: `bg-violet-50` (Very faint violet / `#F5F3FF`)

## Option C: "Minimalist Emerald" (Fresh & Action-Oriented)
Since this is a task-completion app, using a green hue as the primary brand color reinforces the idea of "checking things off".
- **Background**: `bg-gray-50` (Faint cool gray / `#F9FAFB`)
- **Surfaces/Cards**: `bg-white` (White)
- **Primary Brand**: `bg-emerald-600` (Sharp Emerald / `#059669`)
- **Text Primary**: `text-gray-900` (Dark gray / `#111827`)
- **Text Secondary**: `text-gray-500` (Medium gray / `#6B7280`)
- **Accent/Hover**: `bg-emerald-50` (Very faint emerald / `#ECFDF5`)

---

### Semantic Colors (Shared across all options)
We will need these for the task statuses (New, In Progress, Completed, Overdue):
- **Info/New**: Blue (`blue-100` bg, `blue-700` text)
- **Warning/In Progress**: Amber (`amber-100` bg, `amber-700` text)
- **Success/Completed**: Green (`emerald-100` bg, `emerald-700` text)
- **Danger/Overdue**: Red (`red-100` bg, `red-700` text)
