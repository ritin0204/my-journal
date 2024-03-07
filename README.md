# My-Journal Application

## Project Setup

This project consists of two main applications:

* **my-journal:** A React application for the frontend.
* **project:** A Django application for the backend.

### Prerequisites

* **Node.js and npm:** [https://nodejs.org/en](https://nodejs.org/en)
* **Python 3.x:** [https://www.python.org/downloads/windows/](https://www.python.org/downloads/windows/)
* **Git:** [https://git-scm.com/downloads](https://git-scm.com/downloads) (optional, but recommended)

### Setting Up React Application (my_journal)

1. **Navigate to the `my_journal` directory:**

   Bash

   ```
   cd my-journal
   ```
2. **Install dependencies:**

   Bash

   ```
   npm install
   ```
3. **Run the development server:**

   Bash

   ```
   npm start
   ```

   This will start the React development server, typically accessible on `http://localhost:3000` in your browser.

### Setting Up Django Application (project)

1. **Navigate to the `project` directory:**

   Bash

   ```
   cd project
   ```
2. **Create a virtual environment (recommended):**

   Bash

   ```
   python -m venv venv
   source venv/bin/activate  # On macOS/Linux
   venv\Scripts\activate.bat # On Windows
   ```
3. **Install dependencies:**

   Bash

   ```
   pip install -r requirements.txt
   ```
4. **Run Django development server:**

   Bash

   ```
   python manage.py runserver
   ```

   This will start the Django development server, typically accessible on `http://localhost:8000` in your browser.

**Note:** This is a basic setup process. Depending on your project's specific needs, additional configuration might be required.

**Post Script:**

Docker setup instructions will be added in a future update. Please refer to the latest version of this README for any additional information.
