# MomOps - Autonomous Baby Care Agent

An intelligent AI agent for baby care built with React and Vite. MomOps continuously monitors your baby's patterns and proactively recommends interventions for sleep, feeding, and development.

## 🤖 AI Agent Capabilities

- **🔍 Autonomous Monitoring** - Continuously analyzes patterns in the background
- **💡 Proactive Recommendations** - Identifies issues before you ask and suggests interventions
- **🎯 Goal-Oriented Planning** - Set goals and get multi-step action plans
- **🧠 Multi-Step Reasoning** - Analyzes correlations and explains WHY
- **📈 Adaptive Learning** - Improves suggestions based on your baby's patterns
- **🎨 Context-Aware** - Considers age, time of day, and recent activities

## Features

### 🏠 Home Dashboard
- Quick action buttons for feeding, naps, and diaper changes
- Real-time predictions for next feeding, nap, and diaper change
- Milestones & memories tracker
- Activity timeline

### 📅 Schedule Management
- **List View**: Daily activity timeline
- **Calendar View**: Hourly breakdown of activities
- **Generate Schedule**: Create detailed daily schedules for caregivers with:
  - Feeding times and instructions
  - Nap schedules
  - Developmental activities (tummy time, music, reading, sensory play)
  - Bath time and bedtime routines
  - PDF export for nannies

### 📊 Insights & Analytics
- Intelligent insights about baby's patterns
- Sleep analysis and comparisons
- Feeding pattern tracking
- Activity correlations (e.g., bath time → better sleep)
- Visual charts and statistics

### 👥 Caregiver Management
- Nanny schedule tracking
- Hourly rate and payment calculations
- Venmo integration for easy payments
- Work schedule coordination
- PDF schedule generation

### 💬 AI Agent Dashboard
- **Autonomous monitoring** of all baby patterns
- **Proactive recommendations** without prompting
- **Goal setting** with multi-step action plans
- **Priority-ranked insights** (HIGH/MEDIUM/LOW)
- **Reasoning explanations** for every suggestion
- **Chat interface** for questions and advice
- **Pattern analysis** with correlations and predictions

### 👶 Baby Profile
- Baby photo upload
- Age tracking
- Milestone tracking based on age
- Precious memories
- Editable profile information

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Custom styling with CSS variables
- **LocalStorage** - Data persistence
- **Autonomous AI Agent** - Pattern analysis, reasoning, and proactive recommendations

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/momops.git
cd momops
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

### First Time Setup

1. Enter your baby's name and birth date on the welcome screen
2. Optionally upload a photo of your baby
3. Start tracking activities!

### Tracking Activities

- **Feeding**: Track breast or bottle feeding with amounts and notes
- **Naps**: Start/stop timer or manually log nap duration
- **Diapers**: Record diaper changes (pee, poop, or both)
- **Medications**: Log medications with dosage
- **Other Activities**: Track tummy time, baths, walks, reading, etc.

### Generating Schedules

1. Go to Schedule tab → Generate Schedule
2. Select the date for the schedule
3. Click "Generate & Download Schedule PDF"
4. Share with your caregiver

### Sample Data

Load sample data from the menu (⋮) to explore the agent's features with pre-populated activities.

## Features in Detail

### Predictive Scheduling
The agent analyzes your baby's patterns and predicts:
- Next feeding time (typically every 2-3 hours)
- Next nap time (based on wake windows)
- Next diaper change

### Intelligent Insights & Agentic Recommendations
The AI agent proactively provides:
- **Sleep optimization**: "Sleep deficit detected (only 3h by 2 PM). Immediate nap recommended."
- **Feeding management**: "4 hours since last feed. Prepare bottle/breast soon."
- **Development tracking**: "No tummy time today. Schedule 10-minute session for motor development."
- **Pattern correlations**: "Bath time helps! Naps after bath averaged 1h 45m longer."
- **Goal progress**: "Sleep goal: 75% achieved. Continue current routine."

### Age-Appropriate Milestones
Automatically tracks milestones based on baby's age:
- First smile (6-8 weeks)
- First laugh (3-4 months)
- Rolling over (4-6 months)
- Sitting independently (6 months)
- Crawling (7-10 months)
- First steps (12-15 months)

## Data Privacy

All data is stored locally in your browser's localStorage. No data is sent to external servers. Your baby's information stays on your device.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Why MomOps is Different

MomOps is an autonomous AI agent that operates continuously in the background, proactively identifying issues and creating action plans to optimize your baby's care - no prompting required.

## Acknowledgments

- Built with love for parents and caregivers
- Inspired by the need for simple, beautiful baby tracking
- Icons and design follow modern UI/UX principles

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

Made with ❤️ for parents everywhere
