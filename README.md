# React Native Development Environment Setup Guide

## Prerequisites
- Windows 10 or 11 (64-bit)
- Administrative access to your computer

## 1. Install Chocolatey (Package Manager)
```bash
# Open PowerShell as Administrator
Set-ExecutionPolicy Bypass -Scope Process -Force
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## 2. Install Node.js and Node Version Manager
```bash
# Install Node.js LTS
choco install nodejs-lts

# Verify installations
node --version
npm --version
```

## 3. Install React Native CLI
```bash
npm install -g react-native-cli
```

## 4. Environment Variables Setup
1. Open System Properties > Advanced > Environment Variables
2. Create/Edit PATH to include:
   - Node.js installation path
   - npm global modules path

### Example Environment Variables
```
ANDROID_HOME = C:\Users\YourUsername\AppData\Local\Android\Sdk
```

## 5. Install Android Studio
1. Download from official Android Studio website
2. During installation, ensure you select:
   - Android SDK
   - Android SDK Platform
   - Android Virtual Device
   - Performance (Intel ® HAXM)
   - Android SDK Build-Tools

## 6. Android SDK Configuration
1. Open Android Studio
2. Go to Tools > SDK Manager
3. Select and install:
   - Latest Android SDK
   - Android SDK Platform
   - Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image



## 7. Git Clone and Project Setup
```bash
# Clone your project repository
git clone https://repository-url.git

# Install dependencies
npm install

# For Android setup
npx react-native run-android
```

## Troubleshooting
- Ensure all paths are correctly set
- Check Java JDK version compatibility
- Verify Android SDK and build tools versions

## Recommended Extensions
- VS Code React Native Tools
- ESLint
- Prettier



# Design Decisions
- Used TypeScript for type safety
- Implemented Zustand for state management
- Created reusable components and hooks
- Use constants for mock data and configurations



## Key Challenges

### 1. Environment Configuration
- Complex manual SDK setup
- Multiple dependencies
- Intricate environment variable configuration
- Loss of Expo's simplified development environment


## Vector Icons Integration Issues


- Complex manual font linking
- Platform-specific configuration complexities
- Custom icon management difficulties
