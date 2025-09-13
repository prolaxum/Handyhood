# ArtisanGig - Artisan Portfolio & Gig Finder App

A React Native mobile application that connects skilled artisans (carpenters, electricians, plumbers, tailors) with customers through AI-powered project matching.

## 🎯 Problem Statement

India's massive gig economy is largely focused on services like food delivery or ride-sharing. A vast, untapped segment is the skilled artisan workforce—carpenters, electricians, plumbers, and tailors. They often work on word-of-mouth recommendations, lack a professional portfolio, and struggle to find reliable, high-paying work.

## 💡 Solution

An "Artisan Portfolio & Gig Finder" app that enables artisans to create digital portfolios and connects them with customers through AI-powered project matching. Customers can upload photos of their projects, and the AI analyzes the image to match them with the most suitable artisans in their area.

## ✨ Key Features

### For Artisans:
- **Digital Portfolio Creation**: Upload photos, descriptions, and showcase completed work
- **Skill Verification**: Verified profiles with customer reviews and ratings
- **Job Matching**: AI-powered matching with relevant projects
- **Earnings Tracking**: Monitor completed jobs and total earnings
- **Professional Reputation**: Build reputation based on quality work, not just connections

### For Customers:
- **AI Project Matching**: Upload project photos for intelligent artisan matching
- **Portfolio Browsing**: View artisan portfolios, reviews, and ratings
- **Job Posting**: Post detailed project requirements with budget ranges
- **Real-time Communication**: Chat with artisans and track project progress
- **Verified Reviews**: Make informed decisions based on authentic customer feedback

## 🚀 Technology Stack

- **Frontend**: React Native with Expo
- **Navigation**: React Navigation 6
- **UI Components**: React Native Paper, React Native Elements
- **Image Handling**: Expo Image Picker, Expo Camera
- **Maps**: React Native Maps
- **Gradients**: Expo Linear Gradient
- **Icons**: Expo Vector Icons

## 📱 App Structure

```
src/
├── screens/
│   ├── WelcomeScreen.js          # Onboarding and welcome
│   ├── LoginScreen.js            # User authentication
│   ├── RegisterScreen.js         # User registration
│   ├── RoleSelectionScreen.js    # Choose artisan or customer
│   ├── artisan/
│   │   ├── ArtisanHomeScreen.js  # Dashboard with stats and jobs
│   │   ├── PortfolioScreen.js    # Portfolio management
│   │   ├── JobsScreen.js         # Browse and apply for jobs
│   │   └── ProfileScreen.js      # Artisan profile settings
│   └── customer/
│       ├── CustomerHomeScreen.js # Find artisans and services
│       ├── PostJobScreen.js      # Post new job requirements
│       ├── MyJobsScreen.js       # Track posted jobs
│       └── ProfileScreen.js      # Customer profile settings
├── navigation/
│   ├── ArtisanTabNavigator.js    # Bottom tab navigation for artisans
│   └── CustomerTabNavigator.js   # Bottom tab navigation for customers
└── components/                   # Reusable UI components
```

## 🎨 Design Features

- **Modern UI/UX**: Clean, intuitive interface with gradient designs
- **Indian Market Focus**: Localized for Indian artisans and customers
- **Responsive Design**: Optimized for various screen sizes
- **Accessibility**: User-friendly for all skill levels
- **Visual Hierarchy**: Clear information architecture

## 🔧 Installation & Setup

1. **Prerequisites**:
   - Node.js (v14 or higher)
   - npm or yarn
   - Expo CLI (`npm install -g @expo/cli`)

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm start
   # or
   expo start
   ```

4. **Run on Device**:
   - Install Expo Go app on your mobile device
   - Scan the QR code from the terminal
   - Or use iOS Simulator/Android Emulator

## 📋 Key Screens

### Authentication Flow
- **Welcome Screen**: App introduction and feature highlights
- **Role Selection**: Choose between Artisan or Customer
- **Registration**: Detailed signup with skill selection for artisans
- **Login**: Secure authentication with social login options

### Artisan Experience
- **Dashboard**: Earnings, completed jobs, ratings, and quick actions
- **Portfolio**: Upload work photos, manage projects, track performance
- **Job Search**: Browse available jobs with filters and AI matching
- **Profile**: Manage personal information and skills

### Customer Experience
- **Home**: Browse artisans, categories, and featured professionals
- **Post Job**: Detailed job posting with AI matching option
- **My Jobs**: Track posted jobs and applications
- **Profile**: Manage account and preferences

## 🤖 AI Features (Planned)

- **Image Analysis**: Analyze uploaded project photos
- **Skill Matching**: Match project requirements with artisan skills
- **Location Optimization**: Find artisans within specified radius
- **Price Estimation**: AI-powered cost estimation
- **Quality Prediction**: Predict project success based on artisan history

## 🌟 Unique Value Propositions

1. **Formalized Work**: Move from word-of-mouth to professional platform
2. **AI-Powered Matching**: Smart project-artisan pairing
3. **Portfolio Building**: Professional reputation through verified work
4. **Quality Assurance**: Review system ensures high standards
5. **Economic Empowerment**: Better income opportunities for artisans
6. **Customer Confidence**: Verified artisans with proven track records

## 🎯 Target Market

- **Primary**: Skilled artisans in Indian cities (carpenters, electricians, plumbers, tailors)
- **Secondary**: Homeowners and businesses needing skilled work
- **Geographic Focus**: Tier 1 and Tier 2 cities in India
- **Demographics**: 25-55 years old, smartphone users

## 📈 Business Model

- **Commission-based**: Small percentage from completed jobs
- **Premium Subscriptions**: Enhanced features for artisans
- **Advertising**: Sponsored listings and featured profiles
- **Value-added Services**: Insurance, payment processing, quality guarantees

## 🔮 Future Enhancements

- **Video Consultations**: Virtual project discussions
- **AR Visualization**: Augmented reality project previews
- **Blockchain Verification**: Immutable work history records
- **Multi-language Support**: Regional language support
- **Offline Mode**: Basic functionality without internet
- **Integration**: Payment gateways, insurance providers

## 📞 Support

For technical support or business inquiries, please contact:
- Email: support@artisangig.com
- Website: www.artisangig.com

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ for India's skilled artisan community**
