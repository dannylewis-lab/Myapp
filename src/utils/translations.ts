// Translation management system for Myapp
// Supports English (en) and Swahili (sw) languages

export type Language = 'en' | 'sw';

interface TranslationSet {
  [key: string]: string | TranslationSet;
}

interface Translations {
  en: TranslationSet;
  sw: TranslationSet;
}

// Comprehensive translations for all app features
const translations: Translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      dashboard: 'Dashboard',
      transactions: 'Transactions',
      budgets: 'Budgets',
      savingsGoals: 'Savings Goals',
      reports: 'Reports',
      accounts: 'Accounts',
      settings: 'Settings',
      advisor: 'Financial Advisor',
      education: 'Financial Education',
      profile: 'Profile',
      logout: 'Logout',
    },

    // Authentication
    auth: {
      login: 'Login',
      signup: 'Sign Up',
      register: 'Register',
      logout: 'Logout',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      rememberMe: 'Remember Me',
      forgotPassword: 'Forgot Password?',
      resetPassword: 'Reset Password',
      sendResetLink: 'Send Reset Link',
      resetLinkSent: 'Password reset link has been sent to your email',
      invalidCredentials: 'Invalid email or password',
      passwordMismatch: 'Passwords do not match',
      accountCreated: 'Account created successfully',
      pleaseLogin: 'Please login to continue',
      sessionExpired: 'Your session has expired. Please login again',
      twoFactorAuth: 'Two-Factor Authentication',
      enterCode: 'Enter verification code',
      codeInvalid: 'Invalid verification code',
    },

    // Transactions
    transactions: {
      title: 'Transactions',
      income: 'Income',
      expense: 'Expense',
      transfer: 'Transfer',
      addTransaction: 'Add Transaction',
      editTransaction: 'Edit Transaction',
      deleteTransaction: 'Delete Transaction',
      date: 'Date',
      amount: 'Amount',
      category: 'Category',
      description: 'Description',
      account: 'Account',
      merchant: 'Merchant',
      reference: 'Reference',
      receipt: 'Receipt',
      downloadReceipt: 'Download Receipt',
      pending: 'Pending',
      completed: 'Completed',
      failed: 'Failed',
      cancelled: 'Cancelled',
      filter: 'Filter',
      filterByDate: 'Filter by Date',
      filterByAmount: 'Filter by Amount',
      filterByCategory: 'Filter by Category',
      sortBy: 'Sort By',
      sortByDate: 'Sort by Date',
      sortByAmount: 'Sort by Amount',
      searchTransactions: 'Search Transactions',
      noTransactions: 'No transactions found',
      recurringTransaction: 'Recurring Transaction',
      transactionDetails: 'Transaction Details',
      exportTransactions: 'Export Transactions',
      transactionHistory: 'Transaction History',
    },

    // Budget
    budgets: {
      title: 'Budgets',
      createBudget: 'Create Budget',
      editBudget: 'Edit Budget',
      deleteBudget: 'Delete Budget',
      budgetName: 'Budget Name',
      category: 'Category',
      limit: 'Budget Limit',
      spent: 'Spent',
      remaining: 'Remaining',
      period: 'Period',
      monthly: 'Monthly',
      weekly: 'Weekly',
      yearly: 'Yearly',
      alert: 'Alert',
      alertThreshold: 'Alert at %',
      noBudgets: 'No budgets created yet',
      budgetExceeded: 'Budget exceeded',
      nearLimit: 'Near budget limit',
      onTrack: 'On track',
      budgetAnalysis: 'Budget Analysis',
      spendingPatterns: 'Spending Patterns',
      budgetVsActual: 'Budget vs Actual',
      recommendations: 'Recommendations',
    },

    // Savings Goals
    savingsGoals: {
      title: 'Savings Goals',
      createGoal: 'Create Goal',
      editGoal: 'Edit Goal',
      deleteGoal: 'Delete Goal',
      goalName: 'Goal Name',
      targetAmount: 'Target Amount',
      currentAmount: 'Current Amount',
      deadline: 'Deadline',
      priority: 'Priority',
      high: 'High',
      medium: 'Medium',
      low: 'Low',
      category: 'Goal Category',
      vacation: 'Vacation',
      education: 'Education',
      emergency: 'Emergency Fund',
      car: 'Car',
      home: 'Home',
      other: 'Other',
      progress: 'Progress',
      monthlyContribution: 'Monthly Contribution',
      estimatedCompletion: 'Estimated Completion',
      onTrack: 'On Track',
      behind: 'Behind',
      completed: 'Completed',
      noGoals: 'No savings goals yet',
      autoDeposit: 'Auto Deposit',
      enableAutoDeposit: 'Enable automatic deposits',
      motivation: 'You\'re doing great! Keep saving.',
    },

    // Reports
    reports: {
      title: 'Reports',
      generateReport: 'Generate Report',
      income: 'Income Report',
      expenses: 'Expense Report',
      summary: 'Summary Report',
      detailed: 'Detailed Report',
      period: 'Period',
      dateRange: 'Date Range',
      from: 'From',
      to: 'To',
      category: 'By Category',
      account: 'By Account',
      totalIncome: 'Total Income',
      totalExpenses: 'Total Expenses',
      netIncome: 'Net Income',
      savingsRate: 'Savings Rate',
      averageTransaction: 'Average Transaction',
      largestTransaction: 'Largest Transaction',
      topCategories: 'Top Categories',
      spendingTrend: 'Spending Trend',
      comparison: 'Month-over-Month Comparison',
      download: 'Download Report',
      export: 'Export as PDF',
      email: 'Email Report',
      print: 'Print Report',
      chartView: 'Chart View',
      tableView: 'Table View',
    },

    // Accounts
    accounts: {
      title: 'Accounts',
      addAccount: 'Add Account',
      editAccount: 'Edit Account',
      deleteAccount: 'Delete Account',
      accountName: 'Account Name',
      accountNumber: 'Account Number',
      accountType: 'Account Type',
      checking: 'Checking',
      savings: 'Savings',
      investment: 'Investment',
      credit: 'Credit Card',
      balance: 'Balance',
      currency: 'Currency',
      bank: 'Bank',
      provider: 'Provider',
      linkedDate: 'Linked Date',
      status: 'Status',
      active: 'Active',
      inactive: 'Inactive',
      unlinkAccount: 'Unlink Account',
      linkNewAccount: 'Link New Account',
      accountDetails: 'Account Details',
      transactions: 'Recent Transactions',
      noAccounts: 'No accounts linked',
      syncAccount: 'Sync Account',
      synced: 'Synced',
      lastSynced: 'Last Synced',
    },

    // Settings
    settings: {
      title: 'Settings',
      profile: 'Profile',
      security: 'Security',
      notifications: 'Notifications',
      preferences: 'Preferences',
      about: 'About',
      help: 'Help & Support',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      phone: 'Phone Number',
      profilePicture: 'Profile Picture',
      updateProfile: 'Update Profile',
      changePassword: 'Change Password',
      currentPassword: 'Current Password',
      newPassword: 'New Password',
      confirmNewPassword: 'Confirm New Password',
      twoFactorAuth: 'Two-Factor Authentication',
      enableTwoFactor: 'Enable 2FA',
      disableTwoFactor: 'Disable 2FA',
      loginNotifications: 'Login Notifications',
      transactionAlerts: 'Transaction Alerts',
      budgetAlerts: 'Budget Alerts',
      emailNotifications: 'Email Notifications',
      pushNotifications: 'Push Notifications',
      smsNotifications: 'SMS Notifications',
      language: 'Language',
      currency: 'Currency',
      theme: 'Theme',
      light: 'Light',
      dark: 'Dark',
      auto: 'Auto',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      version: 'Version',
      appVersion: 'App Version',
      checkUpdates: 'Check for Updates',
      dataBackup: 'Data Backup',
      backupData: 'Backup Data',
      restoreData: 'Restore Data',
      deleteAccount: 'Delete Account',
      deleteAccountWarning: 'This action cannot be undone',
    },

    // Financial Advisor
    advisor: {
      title: 'Financial Advisor',
      personalAdvisor: 'Personal Advisor',
      insights: 'Financial Insights',
      recommendations: 'Recommendations',
      analysis: 'Financial Analysis',
      spendingHabits: 'Your Spending Habits',
      savingsOpportunities: 'Savings Opportunities',
      investmentTips: 'Investment Tips',
      debtManagement: 'Debt Management',
      goalSuggestions: 'Goal Suggestions',
      budgetTips: 'Budget Tips',
      monthlyInsight: 'Monthly Insight',
      weeklyTip: 'Weekly Tip',
      youCanSave: 'You can save',
      byReducing: 'by reducing',
      considerIncreasing: 'Consider increasing your',
      yourSpendingIn: 'your spending in',
      trendingUp: 'Trending up',
      trendingDown: 'Trending down',
      stable: 'Stable',
      askAdvisor: 'Ask Advisor',
      chat: 'Chat with Advisor',
      callAdvisor: 'Call Advisor',
      bookAppointment: 'Book Appointment',
      availableAdvisors: 'Available Advisors',
      expertise: 'Expertise',
      availability: 'Availability',
      rating: 'Rating',
    },

    // Education
    education: {
      title: 'Financial Education',
      articles: 'Articles',
      videos: 'Videos',
      courses: 'Courses',
      quizzes: 'Quizzes',
      library: 'Learning Library',
      basicFinance: 'Basic Finance',
      budgeting: 'Budgeting 101',
      savings: 'How to Save Money',
      investing: 'Introduction to Investing',
      creditScore: 'Understanding Credit Score',
      debtManagement: 'Managing Debt',
      taxPlanning: 'Tax Planning',
      retirementPlanning: 'Retirement Planning',
      emercencyFund: 'Building an Emergency Fund',
      beginnerLevel: 'Beginner',
      intermediateLevel: 'Intermediate',
      advancedLevel: 'Advanced',
      startCourse: 'Start Course',
      continueCourse: 'Continue Course',
      completeCourse: 'Complete Course',
      progress: 'Progress',
      lesson: 'Lesson',
      duration: 'Duration',
      instructor: 'Instructor',
      certificate: 'Certificate',
      earnCertificate: 'Earn Certificate',
      quiz: 'Quiz',
      takeQuiz: 'Take Quiz',
      passed: 'Passed',
      failed: 'Failed',
      score: 'Score',
      tryAgain: 'Try Again',
      suggested: 'Suggested for you',
      trending: 'Trending Now',
      recommended: 'Recommended',
      recentlyViewed: 'Recently Viewed',
      downloadResource: 'Download Resource',
      shareArticle: 'Share Article',
    },

    // Common UI Elements
    common: {
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      add: 'Add',
      remove: 'Remove',
      confirm: 'Confirm',
      close: 'Close',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      search: 'Search',
      filter: 'Filter',
      sort: 'Sort',
      loading: 'Loading...',
      noData: 'No data available',
      error: 'Error',
      success: 'Success',
      warning: 'Warning',
      info: 'Information',
      yes: 'Yes',
      no: 'No',
      ok: 'OK',
      apply: 'Apply',
      reset: 'Reset',
      clear: 'Clear',
      select: 'Select',
      selectAll: 'Select All',
      deselect: 'Deselect',
      deselectAll: 'Deselect All',
      more: 'More',
      less: 'Less',
      showMore: 'Show More',
      showLess: 'Show Less',
      copy: 'Copy',
      copied: 'Copied',
      download: 'Download',
      upload: 'Upload',
      import: 'Import',
      export: 'Export',
      share: 'Share',
      help: 'Help',
      feedback: 'Feedback',
      contactUs: 'Contact Us',
    },

    // Messages
    messages: {
      actionConfirm: 'Are you sure?',
      deleteConfirm: 'Are you sure you want to delete this?',
      unsavedChanges: 'You have unsaved changes',
      discardChanges: 'Discard changes?',
      saved: 'Saved successfully',
      deleted: 'Deleted successfully',
      updated: 'Updated successfully',
      created: 'Created successfully',
      somethingWentWrong: 'Something went wrong',
      tryAgain: 'Try Again',
      connectionError: 'Connection error',
      offline: 'You are offline',
      online: 'You are online',
      fieldRequired: 'This field is required',
      invalidEmail: 'Invalid email address',
      invalidAmount: 'Invalid amount',
      invalidDate: 'Invalid date',
      minLength: 'Minimum length is',
      maxLength: 'Maximum length is',
    },

    // Currency & Numbers
    currency: {
      usd: 'USD',
      eur: 'EUR',
      gbp: 'GBP',
      kes: 'KES',
      ksh: 'KSh',
      tzs: 'TZS',
      ugx: 'UGX',
    },

    // Time
    time: {
      today: 'Today',
      yesterday: 'Yesterday',
      thisWeek: 'This Week',
      lastWeek: 'Last Week',
      thisMonth: 'This Month',
      lastMonth: 'Last Month',
      thisYear: 'This Year',
      lastYear: 'Last Year',
      january: 'January',
      february: 'February',
      march: 'March',
      april: 'April',
      may: 'May',
      june: 'June',
      july: 'July',
      august: 'August',
      september: 'September',
      october: 'October',
      november: 'November',
      december: 'December',
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
    },
  },

  sw: {
    // Navigation
    nav: {
      home: 'Nyumbani',
      dashboard: 'Dashibodi',
      transactions: 'Miamala',
      budgets: 'Bajeti',
      savingsGoals: 'Malengo ya Akiba',
      reports: 'Ripoti',
      accounts: 'Akaunti',
      settings: 'Mipango',
      advisor: 'Mshauri wa Fedha',
      education: 'Elimu ya Fedha',
      profile: 'Wasifu',
      logout: 'Kuondoka',
    },

    // Authentication
    auth: {
      login: 'Ingia',
      signup: 'Jisajili',
      register: 'Jisajili',
      logout: 'Kuondoka',
      email: 'Barua Pepe',
      password: 'Neno la Siri',
      confirmPassword: 'Thibitisha Neno la Siri',
      rememberMe: 'Nikumbuke',
      forgotPassword: 'Umesahau Neno la Siri?',
      resetPassword: 'Rejesha Neno la Siri',
      sendResetLink: 'Tuma Kiungo cha Kurejeshea',
      resetLinkSent: 'Kiungo cha kurejeshea neno la siri kimechukuliwa kwa barua pepe yako',
      invalidCredentials: 'Barua pepe au neno la siri si sahihi',
      passwordMismatch: 'Maneno ya siri hayafanani',
      accountCreated: 'Akaunti imeundwa kwa ufanisi',
      pleaseLogin: 'Tafadhali ingia ili kuendelea',
      sessionExpired: 'Kipindi chako kimefagiwa. Tafadhali ingia tena',
      twoFactorAuth: 'Uthibitisho wa Mambo Mawili',
      enterCode: 'Ingiza nambari ya uthibitisho',
      codeInvalid: 'Nambari ya uthibitisho si sahihi',
    },

    // Transactions
    transactions: {
      title: 'Miamala',
      income: 'Mapato',
      expense: 'Matumizi',
      transfer: 'Kuhamisha',
      addTransaction: 'Ongeza Miamala',
      editTransaction: 'Hariri Miamala',
      deleteTransaction: 'Futa Miamala',
      date: 'Tarehe',
      amount: 'Kiasi',
      category: 'Jamii',
      description: 'Maelezo',
      account: 'Akaunti',
      merchant: 'Muuzaji',
      reference: 'Rejeleo',
      receipt: 'Risiti',
      downloadReceipt: 'Pakua Risiti',
      pending: 'Inasubiri',
      completed: 'Imekamilika',
      failed: 'Imeshindwa',
      cancelled: 'Imeghairiwa',
      filter: 'Chuja',
      filterByDate: 'Chuja kwa Tarehe',
      filterByAmount: 'Chuja kwa Kiasi',
      filterByCategory: 'Chuja kwa Jamii',
      sortBy: 'Panga kwa',
      sortByDate: 'Panga kwa Tarehe',
      sortByAmount: 'Panga kwa Kiasi',
      searchTransactions: 'Tafuta Miamala',
      noTransactions: 'Hakuna miamala iliyopatikana',
      recurringTransaction: 'Miamala Inayorudiwa',
      transactionDetails: 'Maelezo ya Miamala',
      exportTransactions: 'Hamisha Miamala',
      transactionHistory: 'Historia ya Miamala',
    },

    // Budget
    budgets: {
      title: 'Bajeti',
      createBudget: 'Unda Bajeti',
      editBudget: 'Hariri Bajeti',
      deleteBudget: 'Futa Bajeti',
      budgetName: 'Jina la Bajeti',
      category: 'Jamii',
      limit: 'Kiwango cha Bajeti',
      spent: 'Zilizotumiwa',
      remaining: 'Zilizobaki',
      period: 'Kipindi',
      monthly: 'Kila Mwezi',
      weekly: 'Kila Wiki',
      yearly: 'Kila Mwaka',
      alert: 'Onyo',
      alertThreshold: 'Onyo katika %',
      noBudgets: 'Hakuna bajeti iliyoundwa',
      budgetExceeded: 'Bajeti imezidi',
      nearLimit: 'Karibu na kiwango cha bajeti',
      onTrack: 'Njiani',
      budgetAnalysis: 'Uchambuzi wa Bajeti',
      spendingPatterns: 'Mifumo ya Matumizi',
      budgetVsActual: 'Bajeti dhidi ya Halisi',
      recommendations: 'Mapendekezo',
    },

    // Savings Goals
    savingsGoals: {
      title: 'Malengo ya Akiba',
      createGoal: 'Unda Lengo',
      editGoal: 'Hariri Lengo',
      deleteGoal: 'Futa Lengo',
      goalName: 'Jina la Lengo',
      targetAmount: 'Kiasi Kinacholenga',
      currentAmount: 'Kiasi cha Sasa',
      deadline: 'Tarehe Muhimu',
      priority: 'Kipaumbele',
      high: 'Kina Juu',
      medium: 'Kiasi',
      low: 'Kidogo',
      category: 'Jamii ya Lengo',
      vacation: 'Likizo',
      education: 'Elimu',
      emergency: 'Hazina ya Dharura',
      car: 'Gari',
      home: 'Nyumba',
      other: 'Nyingine',
      progress: 'Maendeleo',
      monthlyContribution: 'Mchango wa Kila Mwezi',
      estimatedCompletion: 'Kumaliza Kwa Kawaida',
      onTrack: 'Njiani',
      behind: 'Nyuma',
      completed: 'Imekamilika',
      noGoals: 'Hakuna malengo ya akiba',
      autoDeposit: 'Akiba Otomati',
      enableAutoDeposit: 'Wezesha akiba otomati',
      motivation: 'Unafanya vizuri! Endelea akiba.',
    },

    // Reports
    reports: {
      title: 'Ripoti',
      generateReport: 'Tengeneza Ripoti',
      income: 'Ripoti ya Mapato',
      expenses: 'Ripoti ya Matumizi',
      summary: 'Ripoti ya Muhtasari',
      detailed: 'Ripoti ya Kina',
      period: 'Kipindi',
      dateRange: 'Rafu ya Tarehe',
      from: 'Kutoka',
      to: 'Hadi',
      category: 'Kwa Jamii',
      account: 'Kwa Akaunti',
      totalIncome: 'Jumla ya Mapato',
      totalExpenses: 'Jumla ya Matumizi',
      netIncome: 'Mapato Safi',
      savingsRate: 'Kiwango cha Akiba',
      averageTransaction: 'Miamala ya Wastani',
      largestTransaction: 'Miamala Kubwa',
      topCategories: 'Jamii Kuu',
      spendingTrend: 'Mwelekeo wa Matumizi',
      comparison: 'Kulinganisha Mwezi kwa Mwezi',
      download: 'Pakua Ripoti',
      export: 'Hamisha kama PDF',
      email: 'Tuma Ripoti kwa Barua Pepe',
      print: 'Chapisha Ripoti',
      chartView: 'Mwonekano wa Chati',
      tableView: 'Mwonekano wa Jedwali',
    },

    // Accounts
    accounts: {
      title: 'Akaunti',
      addAccount: 'Ongeza Akaunti',
      editAccount: 'Hariri Akaunti',
      deleteAccount: 'Futa Akaunti',
      accountName: 'Jina la Akaunti',
      accountNumber: 'Nambari ya Akaunti',
      accountType: 'Aina ya Akaunti',
      checking: 'Kuangalia',
      savings: 'Akiba',
      investment: 'Uongezi',
      credit: 'Kadi ya Mkopo',
      balance: 'Salio',
      currency: 'Sarafu',
      bank: 'Benki',
      provider: 'Mtoa Huduma',
      linkedDate: 'Tarehe ya Kuunganisha',
      status: 'Hali',
      active: 'Hai',
      inactive: 'Haijahaii',
      unlinkAccount: 'Tenganisha Akaunti',
      linkNewAccount: 'Unganisha Akaunti Mpya',
      accountDetails: 'Maelezo ya Akaunti',
      transactions: 'Miamala Hivi Karibuni',
      noAccounts: 'Hakuna akaunti iliyounganishwa',
      syncAccount: 'Sambazana Akaunti',
      synced: 'Iliyosambazana',
      lastSynced: 'Sambazana Mwisho',
    },

    // Settings
    settings: {
      title: 'Mipango',
      profile: 'Wasifu',
      security: 'Usalama',
      notifications: 'Arifa',
      preferences: 'Mapendeleo',
      about: 'Kuhusu',
      help: 'Msaada na Usaidizi',
      firstName: 'Jina la Kwanza',
      lastName: 'Jina la Ukoo',
      email: 'Anwani ya Barua Pepe',
      phone: 'Nambari ya Simu',
      profilePicture: 'Picha ya Wasifu',
      updateProfile: 'Sasisha Wasifu',
      changePassword: 'Badili Neno la Siri',
      currentPassword: 'Neno la Siri la Sasa',
      newPassword: 'Neno Jipya la Siri',
      confirmNewPassword: 'Thibitisha Neno Jipya la Siri',
      twoFactorAuth: 'Uthibitisho wa Mambo Mawili',
      enableTwoFactor: 'Wezesha 2FA',
      disableTwoFactor: 'Lemaza 2FA',
      loginNotifications: 'Arifa za Kuingia',
      transactionAlerts: 'Onyo za Miamala',
      budgetAlerts: 'Onyo za Bajeti',
      emailNotifications: 'Arifa za Barua Pepe',
      pushNotifications: 'Arifa za Msukumo',
      smsNotifications: 'Arifa za SMS',
      language: 'Lugha',
      currency: 'Sarafu',
      theme: 'Hadithi',
      light: 'Nuru',
      dark: 'Giza',
      auto: 'Otomati',
      privacyPolicy: 'Sera ya Faragha',
      termsOfService: 'Masharti ya Huduma',
      version: 'Toleo',
      appVersion: 'Toleo la Programu',
      checkUpdates: 'Angalia Maupdates',
      dataBackup: 'Kuzaliana na Data',
      backupData: 'Zaliana Data',
      restoreData: 'Rejeshea Data',
      deleteAccount: 'Futa Akaunti',
      deleteAccountWarning: 'Hatua hii haiwezi kutenduliwa',
    },

    // Financial Advisor
    advisor: {
      title: 'Mshauri wa Fedha',
      personalAdvisor: 'Mshauri wa Kibinafsi',
      insights: 'Maarifa ya Fedha',
      recommendations: 'Mapendekezo',
      analysis: 'Uchambuzi wa Fedha',
      spendingHabits: 'Maadat Yako ya Matumizi',
      savingsOpportunities: 'Fursa za Akiba',
      investmentTips: 'Vidokezo vya Uongezi',
      debtManagement: 'Usimamizi wa Deni',
      goalSuggestions: 'Mapendekezo ya Malengo',
      budgetTips: 'Vidokezo vya Bajeti',
      monthlyInsight: 'Maarifa ya Kila Mwezi',
      weeklyTip: 'Kidokezo cha Kila Wiki',
      youCanSave: 'Unaweza kuokoa',
      byReducing: 'kwa kupunguza',
      considerIncreasing: 'Fikiria kuongeza',
      yourSpendingIn: 'matumizi yako katika',
      trendingUp: 'Kuongezeka',
      trendingDown: 'Kupungua',
      stable: 'Thabiti',
      askAdvisor: 'Uliza Mshauri',
      chat: 'Sehemu na Mshauri',
      callAdvisor: 'Piga Simu kwa Mshauri',
      bookAppointment: 'Mahakama Miadi',
      availableAdvisors: 'Washauri Wapatikanao',
      expertise: 'Ujuzi',
      availability: 'Upatikanaji',
      rating: 'Daraja',
    },

    // Education
    education: {
      title: 'Elimu ya Fedha',
      articles: 'Makala',
      videos: 'Video',
      courses: 'Kozi',
      quizzes: 'Maswali',
      library: 'Kituo cha Masomo',
      basicFinance: 'Fedha ya Msingi',
      budgeting: 'Kutengeneza Bajeti 101',
      savings: 'Jinsi ya Kuokoa Pesa',
      investing: 'Utangulizi wa Uongezi',
      creditScore: 'Kuelewa Alama ya Mkopo',
      debtManagement: 'Usimamizi wa Deni',
      taxPlanning: 'Upangaji wa Kodi',
      retirementPlanning: 'Upangaji wa Kuzatiana',
      emercencyFund: 'Kujenga Hazina ya Dharura',
      beginnerLevel: 'Mpya',
      intermediateLevel: 'Wastani',
      advancedLevel: 'Juu',
      startCourse: 'Anza Kozi',
      continueCourse: 'Endelea Kozi',
      completeCourse: 'Kamilisha Kozi',
      progress: 'Maendeleo',
      lesson: 'Somo',
      duration: 'Muda',
      instructor: 'Mwalimu',
      certificate: 'Cheti',
      earnCertificate: 'Patia Cheti',
      quiz: 'Maswali',
      takeQuiz: 'Fanya Maswali',
      passed: 'Ilipita',
      failed: 'Ilishindwa',
      score: 'Alama',
      tryAgain: 'Jaribu Tena',
      suggested: 'Inapendekezwa kwako',
      trending: 'Inatrendia Sasa',
      recommended: 'Inapendekezwa',
      recentlyViewed: 'Iliyoangaliwa Hivi Karibuni',
      downloadResource: 'Pakua Rasilimali',
      shareArticle: 'Sambaza Makala',
    },

    // Common UI Elements
    common: {
      save: 'Hifadhi',
      cancel: 'Ghairi',
      delete: 'Futa',
      edit: 'Hariri',
      add: 'Ongeza',
      remove: 'Ondoa',
      confirm: 'Thibitisha',
      close: 'Funga',
      back: 'Nyuma',
      next: 'Inayofuata',
      previous: 'Iliyotangulia',
      search: 'Tafuta',
      filter: 'Chuja',
      sort: 'Panga',
      loading: 'Inapakia...',
      noData: 'Hakuna data',
      error: 'Kosa',
      success: 'Ufanisi',
      warning: 'Onyo',
      info: 'Taarifa',
      yes: 'Ndiyo',
      no: 'Hapana',
      ok: 'SAWA',
      apply: 'Tekeleza',
      reset: 'Rejesha',
      clear: 'Safisha',
      select: 'Chagua',
      selectAll: 'Chagua Zote',
      deselect: 'Harusi',
      deselectAll: 'Harusi Zote',
      more: 'Zaidi',
      less: 'Chini',
      showMore: 'Onyesha Zaidi',
      showLess: 'Onyesha Chini',
      copy: 'Nakili',
      copied: 'Kunakiliwa',
      download: 'Pakua',
      upload: 'Pakia',
      import: 'Agiza',
      export: 'Hamisha',
      share: 'Sambaza',
      help: 'Msaada',
      feedback: 'Mrejesho',
      contactUs: 'Wasiliana Nasi',
    },

    // Messages
    messages: {
      actionConfirm: 'Je, una uhakika?',
      deleteConfirm: 'Je, una uhakika unataka kufuta hii?',
      unsavedChanges: 'Una mabadiliko ambayo hayajahifadhiwa',
      discardChanges: 'Kutupilia mabadiliko?',
      saved: 'Kuhifadhiwa kwa ufanisi',
      deleted: 'Kufutwa kwa ufanisi',
      updated: 'Kusasishwa kwa ufanisi',
      created: 'Kuundwa kwa ufanisi',
      somethingWentWrong: 'Kitu hakikuwa sawa',
      tryAgain: 'Jaribu Tena',
      connectionError: 'Kosa la Muunganisho',
      offline: 'Wewe juu offline',
      online: 'Wewe juu online',
      fieldRequired: 'Hii sehemu inahitajika',
      invalidEmail: 'Barua pepe si sahihi',
      invalidAmount: 'Kiasi si sahihi',
      invalidDate: 'Tarehe si sahihi',
      minLength: 'Chini ya urefu ni',
      maxLength: 'Urefu wa Juu ni',
    },

    // Currency & Numbers
    currency: {
      usd: 'USD',
      eur: 'EUR',
      gbp: 'GBP',
      kes: 'KES',
      ksh: 'KSh',
      tzs: 'TZS',
      ugx: 'UGX',
    },

    // Time
    time: {
      today: 'Leo',
      yesterday: 'Jana',
      thisWeek: 'Wiki Hii',
      lastWeek: 'Wiki Iliyopita',
      thisMonth: 'Mwezi Huu',
      lastMonth: 'Mwezi Uliopita',
      thisYear: 'Mwaka Huu',
      lastYear: 'Mwaka Uliopita',
      january: 'Januari',
      february: 'Februari',
      march: 'Machi',
      april: 'Aprili',
      may: 'Mei',
      june: 'Juni',
      july: 'Julai',
      august: 'Agosti',
      september: 'Septemba',
      october: 'Oktoba',
      november: 'Novemba',
      december: 'Desemba',
      monday: 'Jumatatu',
      tuesday: 'Jumanne',
      wednesday: 'Jumatano',
      thursday: 'Alhamisi',
      friday: 'Ijumaa',
      saturday: 'Jumamosi',
      sunday: 'Jumapili',
    },
  },
};

/**
 * Translation Manager Class
 * Handles all translation operations with caching and fallback support
 */
export class TranslationManager {
  private currentLanguage: Language = 'en';
  private translationsCache: Map<string, string> = new Map();

  constructor(initialLanguage: Language = 'en') {
    this.currentLanguage = initialLanguage;
    this.preloadTranslations();
  }

  /**
   * Preload all translations into cache for faster access
   */
  private preloadTranslations(): void {
    this.translationsCache.clear();
    const flattenedTranslations = this.flattenTranslations(
      translations[this.currentLanguage],
      ''
    );
    flattenedTranslations.forEach((value, key) => {
      this.translationsCache.set(key, value);
    });
  }

  /**
   * Flatten nested translation object into dot-notation keys
   */
  private flattenTranslations(
    obj: TranslationSet,
    prefix: string
  ): Map<string, string> {
    const result = new Map<string, string>();

    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      const fullKey = prefix ? `${prefix}.${key}` : key;

      if (typeof value === 'string') {
        result.set(fullKey, value);
      } else if (typeof value === 'object' && value !== null) {
        const nested = this.flattenTranslations(
          value as TranslationSet,
          fullKey
        );
        nested.forEach((v, k) => result.set(k, v));
      }
    });

    return result;
  }

  /**
   * Set the current language
   */
  setLanguage(language: Language): void {
    if (language !== this.currentLanguage) {
      this.currentLanguage = language;
      this.preloadTranslations();
    }
  }

  /**
   * Get the current language
   */
  getLanguage(): Language {
    return this.currentLanguage;
  }

  /**
   * Get a translation by key with dot notation support
   * Example: t('auth.login') or t('navigation.home')
   */
  t(key: string, defaultValue?: string): string {
    // Check cache first
    if (this.translationsCache.has(key)) {
      return this.translationsCache.get(key) || defaultValue || key;
    }

    // Try to navigate nested object
    const keys = key.split('.');
    let current: any = translations[this.currentLanguage];

    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        // Fallback to English if key not found
        current = this.navigateTranslation(
          translations.en,
          keys
        );
        break;
      }
    }

    const result =
      typeof current === 'string'
        ? current
        : defaultValue || key;

    // Cache the result
    this.translationsCache.set(key, result);
    return result;
  }

  /**
   * Navigate nested translation object
   */
  private navigateTranslation(
    obj: TranslationSet,
    keys: string[]
  ): string {
    let current: any = obj;

    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return keys.join('.');
      }
    }

    return typeof current === 'string' ? current : keys.join('.');
  }

  /**
   * Get translation with variable interpolation
   * Example: tParams('messages.minLength', { value: 8 })
   */
  tParams(
    key: string,
    params: Record<string, string | number>
  ): string {
    let translation = this.t(key);

    Object.keys(params).forEach((param) => {
      const regex = new RegExp(`\\$\\{${param}\\}`, 'g');
      translation = translation.replace(
        regex,
        String(params[param])
      );
    });

    return translation;
  }

  /**
   * Get all translations for current language
   */
  getAllTranslations(): TranslationSet {
    return translations[this.currentLanguage];
  }

  /**
   * Get all available languages
   */
  getAvailableLanguages(): Language[] {
    return ['en', 'sw'];
  }

  /**
   * Check if language is available
   */
  isLanguageAvailable(language: Language): boolean {
    return this.getAvailableLanguages().includes(language);
  }

  /**
   * Add or update a translation at runtime
   */
  setTranslation(
    key: string,
    value: string,
    language?: Language
  ): void {
    const lang = language || this.currentLanguage;
    const keys = key.split('.');
    let current: any = translations[lang];

    // Navigate to parent and set value
    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i];
      if (!(k in current)) {
        current[k] = {};
      }
      current = current[k];
    }

    current[keys[keys.length - 1]] = value;

    // Refresh cache if setting for current language
    if (lang === this.currentLanguage) {
      this.preloadTranslations();
    }
  }

  /**
   * Batch set multiple translations
   */
  setTranslations(
    updates: Record<string, string>,
    language?: Language
  ): void {
    Object.keys(updates).forEach((key) => {
      this.setTranslation(key, updates[key], language);
    });
  }

  /**
   * Get language name in current language
   */
  getLanguageName(language: Language): string {
    const names: Record<Language, string> = {
      en: 'English',
      sw: 'Kiswahili',
    };
    return names[language];
  }

  /**
   * Format a number according to current language locale
   */
  formatNumber(
    value: number,
    decimals: number = 2
  ): string {
    const locale = this.currentLanguage === 'en' ? 'en-US' : 'sw-TZ';
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  }

  /**
   * Format currency value
   */
  formatCurrency(
    value: number,
    currency: string = 'KES',
    decimals: number = 2
  ): string {
    const locale = this.currentLanguage === 'en' ? 'en-US' : 'sw-TZ';
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  }

  /**
   * Format date according to current language
   */
  formatDate(
    date: Date,
    format: 'short' | 'long' | 'full' = 'short'
  ): string {
    const locale = this.currentLanguage === 'en' ? 'en-US' : 'sw-TZ';
    const options: Intl.DateTimeFormatOptions = {
      short: { year: 'numeric', month: 'short', day: 'numeric' },
      long: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
      full: {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
    }[format];

    return new Intl.DateTimeFormat(locale, options).format(date);
  }
}

// Export singleton instance
export const translationManager = new TranslationManager('en');

/**
 * Convenience function for translations
 * Usage: t('auth.login')
 */
export const t = (key: string, defaultValue?: string): string => {
  return translationManager.t(key, defaultValue);
};

/**
 * Convenience function for translations with parameters
 * Usage: tParams('messages.minLength', { value: 8 })
 */
export const tParams = (
  key: string,
  params: Record<string, string | number>
): string => {
  return translationManager.tParams(key, params);
};

/**
 * Get current language
 */
export const getCurrentLanguage = (): Language => {
  return translationManager.getLanguage();
};

/**
 * Set current language
 */
export const setLanguage = (language: Language): void => {
  translationManager.setLanguage(language);
};

/**
 * Format currency helper
 */
export const formatCurrency = (
  value: number,
  currency?: string,
  decimals?: number
): string => {
  return translationManager.formatCurrency(value, currency, decimals);
};

/**
 * Format date helper
 */
export const formatDate = (
  date: Date,
  format?: 'short' | 'long' | 'full'
): string => {
  return translationManager.formatDate(date, format);
};

export default translationManager;
