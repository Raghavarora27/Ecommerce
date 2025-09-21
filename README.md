# eCommerce Dashboard

A pixel-perfect, responsive eCommerce dashboard built with Vite + React + TypeScript + Tailwind CSS, replicating the design from the provided image.

## 🚀 Features

- **Pixel-Perfect Design**: Matches the reference image exactly at 1440px width
- **Responsive Layout**: Adapts gracefully to tablet (768px) and mobile (375px) screens
- **Interactive Charts**: Built with Chart.js and react-chartjs-2
- **Modern UI Components**: Reusable, accessible components with Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML

## 📊 Dashboard Components

### Layout
- **Left Sidebar**: Collapsible navigation with icons and labels
- **Top Header**: Logo, breadcrumbs, search bar, and user controls
- **Main Content**: Grid-based layout with metric cards and charts
- **Right Panel**: Slide-out notification panel

### Metric Cards
- Customers: 3,781 (+11.01%)
- Orders: 1,219 (-0.03%)
- Revenue: $695 (+15.03%)
- Growth: 30.1% (+6.08%) - Highlighted in pink

### Charts
- **Projections vs Actuals**: Bar chart showing monthly data
- **Revenue**: Line chart with current vs previous week comparison
- **Revenue by Location**: World map with location data
- **Total Sales**: Donut chart with sales channel breakdown

### Data Tables
- **Top Selling Products**: Table with product details and sales figures

### Notifications Panel
- **Notifications**: System alerts and updates
- **Activities**: Recent user activities
- **Contacts**: Team member list with avatars

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Charts**: Chart.js + react-chartjs-2
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Charts/
│   │   ├── BarChart.tsx
│   │   ├── LineChart.tsx
│   │   └── DoughnutChart.tsx
│   ├── Header.tsx
│   ├── MetricCard.tsx
│   ├── NotificationPanel.tsx
│   ├── ProductTable.tsx
│   ├── RevenueByLocation.tsx
│   └── Sidebar.tsx
├── data/
│   └── mockData.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🎨 Design System

### Colors
- **Primary**: Purple shades (#8B5CF6, #A855F7)
- **Secondary**: Pink accents (#EC4899, #F472B6)
- **Neutral**: Gray scale (#F9FAFB to #111827)
- **Status**: Green (#10B981), Red (#EF4444)

### Typography
- **Font Family**: Inter
- **Weights**: 300, 400, 500, 600, 700
- **Sizes**: Responsive scaling (text-sm to text-2xl)

### Spacing
- **Grid Gaps**: 4, 6, 8 (responsive)
- **Padding**: 3, 4, 6 (responsive)
- **Margins**: 4, 6, 8 (responsive)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
  - Single column layout
  - Hidden search bar
  - Collapsed sidebar
  - Smaller icons and text

- **Tablet**: 640px - 1024px
  - 2-column metric cards
  - Visible search bar
  - Collapsible sidebar

- **Desktop**: > 1024px
  - 4-column metric cards
  - Full sidebar
  - All features visible

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Descriptive labels for interactive elements
- **Keyboard Navigation**: Full keyboard support for all components
- **Focus Management**: Visible focus indicators
- **Screen Reader Support**: Proper roles and descriptions

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📸 Screenshots

### Desktop (1440px)
The dashboard displays exactly as shown in the reference image with:
- Full sidebar navigation
- 4-column metric cards grid
- Side-by-side charts
- Complete notification panel

### Tablet (768px)
- 2-column metric cards
- Stacked chart layout
- Collapsible sidebar
- Responsive notification panel

### Mobile (375px)
- Single column layout
- Hidden search bar
- Icon-only sidebar
- Full-width notification overlay

## 🔧 Customization

### Adding New Charts
1. Create component in `src/components/Charts/`
2. Import Chart.js components
3. Define data structure in `src/types/`
4. Add to main dashboard layout

### Modifying Colors
Update the color palette in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
```

### Adding New Metrics
1. Update `MetricCard` interface in `src/types/`
2. Add data to `src/data/mockData.ts`
3. Include in dashboard grid

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or issues, please open an issue in the repository or contact the development team.
