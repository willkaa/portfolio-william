export interface Project {
  slug: string;
  title: string;
  kind: string;
  tags: string[];
  blurb: string;
  context: string;
  resource: { url: string; label: string };
  screenshot?: { src: string; alt: string; width: number; height: number };
  sections: { title: string; body: string }[];
}

export const projects: Project[] = [
  {
    slug: "cardiovascular",
    resource: {
      url: "https://cardio-app-app-kxtuw4wns3hfmswbjmnfc5.streamlit.app/",
      label: "View Demo",
    },
    screenshot: {
      src: "assets/cardiovascular-preview.png",
      alt: "Cardiovascular Streamlit application showing health inputs and prediction tabs",
      width: 1822,
      height: 770,
    },
    title: "Cardiovascular Data Modelling",
    kind: "Data science",
    tags: ["Python", "scikit-learn", "Streamlit"],
    blurb:
      "How much do blood pressure, age, and cholesterol tell us about cardiovascular disease in this dataset?",
    context: "Data Modelling · Team of three",
    sections: [
      {
        title: "Research question",
        body: "Our team investigated two questions. Which measurements help a model distinguish patients with and without cardiovascular disease, and how closely can a regression model estimate systolic blood pressure?",
      },
      {
        title: "My contribution",
        body: "I compared logistic regression, gradient boosting, Gaussian naive Bayes, and a neural network. I evaluated the classifiers, measured how accuracy changed when groups of features were removed, and helped prepare the Streamlit application.",
      },
      {
        title: "Methods and findings",
        body: "After removing duplicates and filtering implausible measurements, we retained 68,475 of 70,000 records. With a stratified 80/20 train–test split, gradient boosting achieved 73.76% test accuracy and an F1 score of 0.7205. Using just systolic blood pressure, age, and cholesterol yielded 73.18% accuracy. Removing all blood pressure features lowered it to 64.89%.",
      },
      {
        title: "Team deliverable",
        body: "Our Streamlit prototype displays predictions, evaluation metrics, and feature importance. For the separate regression task, the team’s model estimated systolic blood pressure with a mean absolute error of 7.20 mmHg on the test data. These results describe performance on this academic dataset.",
      },
    ],
  },
  {
    slug: "digishelf-desktop",
    resource: {
      url: "https://drive.google.com/drive/folders/1iGzmjYVcuvCHe_yfw3bg2r35n_vQMSAr?usp=sharing",
      label: "View Project Folder",
    },
    screenshot: {
      src: "assets/digishelf-desktop-preview.png",
      alt: "DigiShelf Desktop library catalogue with book covers and availability filters",
      width: 1917,
      height: 1016,
    },
    title: "DigiShelf Desktop",
    kind: "Desktop development",
    tags: ["C# · WinForms", "SQL Server", "Crystal Reports"],
    blurb:
      "A Windows library application that connects loans and returns to stock counts and reports.",
    context: "Visual Programming · Team of four",
    sections: [
      {
        title: "Operational needs",
        body: "Checking out a book changes its availability. Returning it affects stock, the borrower’s history, and any overdue fines. Staff need to follow the same transaction from the member’s account to the inventory report.",
      },
      {
        title: "Team contribution",
        body: "I worked on this application as part of a four-person team. Members can search the catalogue, borrow or renew books, and look up past loans. Staff can manage books and member records and export data.",
      },
      {
        title: "Data and reporting",
        body: "The WinForms application uses ADO.NET to connect to SQL Server. Eleven tables support library operations. Four Crystal Reports cover inventory, loans, returns and fines, and member records.",
      },
    ],
  },
  {
    slug: "digishelf-java",
    resource: {
      url: "https://drive.google.com/drive/folders/1d6FHUVLetiqUvODsVd5LAoM6g36a4VgB?usp=sharing",
      label: "View Project Folder",
    },
    title: "DigiShelf Java",
    kind: "Object-oriented programming",
    tags: ["Java", "OOP", "Data structures"],
    blurb:
      "A console-based library project exploring how to track books, waiting lists, and study room requests.",
    context: "Object-Oriented Programming · Team of three",
    sections: [
      {
        title: "Design question",
        body: "How should a library keep track of who is next when a book or study room is unavailable? We used these everyday requests to explore how different data structures handle ordering and history.",
      },
      {
        title: "Team contribution",
        body: "I worked in a three-person team to model users, books, and borrowing records as Java objects. The catalogue starts with 24 books across eight genres. Staff, library members, and guests each have their own menu.",
      },
      {
        title: "Implementation",
        body: "Linked lists store the catalogue and borrowing history. A circular queue keeps study room requests in order, and a stack records room usage. Records stay in memory during each session. The submitted source contains a duplicate DoubleNode class declaration that needs to be resolved before the full project compiles.",
      },
    ],
  },
  {
    slug: "mindscape",
    resource: {
      url: "https://drive.google.com/drive/folders/1foSHQPokhxkU-_J7frYU6KY--9r1-Zf4?usp=sharing",
      label: "View Project Folder",
    },
    screenshot: {
      src: "assets/mindscape-preview.png",
      alt: "MindScape homepage with health tools, a wellness slideshow, and article categories",
      width: 702,
      height: 440,
    },
    title: "MindScape",
    kind: "Web development",
    tags: ["PHP · Yii2", "MySQL", "Bootstrap"],
    blurb:
      "User flows and a relational database for a health education website with personal profiles and community forums.",
    context: "Web Design & Development · Team of four",
    sections: [
      {
        title: "User needs",
        body: "MindScape brings health profiles, a BMI calculator, reflection questionnaires, articles, and group discussions into one website. Members can save results and revisit their questionnaire history from their accounts.",
      },
      {
        title: "My contribution",
        body: "I worked on the HTML, user flows, database design, entity–relationship diagram, and Yii implementation. I mapped accounts, health records, and forum membership to the application’s models, views, and controllers.",
      },
      {
        title: "Implementation",
        body: "The database design spans 11 tables. The Yii2 application uses MySQL for storage and Bootstrap for the interface. PHP connects the Scapy chatbot to Gemini. The questionnaires and BMI calculator serve an educational purpose.",
      },
    ],
  },
  {
    slug: "retail-forecasting",
    resource: {
      url: "https://github.com/willkaa/inventory-forecasting",
      label: "View Repository",
    },
    title: "Retail Sales Forecasting",
    kind: "Time series analysis",
    tags: ["Python", "pandas", "SARIMA"],
    blurb:
      "Exploring weekly sales patterns and building a 30-day forecast from retail transactions.",
    context: "Data Inventory Analysis · IS388",
    sections: [
      {
        title: "Research question",
        body: "How do retail sales vary from day to day, and can their weekly pattern help forecast the next month? The transaction records include dates, products, package sizes, quantities, and sales values.",
      },
      {
        title: "My contribution",
        body: "For my individual model, I tested the daily sales series for stationarity, differenced it, and fitted a SARIMA model with a seven-day seasonal period. I produced a 30-day forecast with 95% prediction intervals.",
      },
      {
        title: "From transactions to a time series",
        body: "The notebook standardises product sizes and sums transaction values by date. It compares daily and monthly trends, identifies top-selling products, and explores a second forecasting approach using Prophet.",
      },
      {
        title: "Interpreting the results",
        body: "The SARIMA model had an in-sample R² of 0.7208. Measuring forecast accuracy would require testing on a later period. The chart shows daily totals from the supplied January 2016 transactions. The notebook reports experiments using a longer period in 2016.",
      },
    ],
  },
];
