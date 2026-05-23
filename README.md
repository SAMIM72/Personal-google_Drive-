# 📁 Creating Personal Google Drive

A simple Node.js project for creating and managing a personal Google Drive-style local storage system. This project helps you understand how file handling works using Node.js and the File System (`fs`) module.

---

# 🚀 Features

- 📂 Store files locally
- 🖼️ Save image files
- 📄 Manage PDF and text files
- ⚡ Lightweight Node.js backend
- 🌐 Basic HTML boilerplate included
- 📁 Organized folder structure

---

# 📁 Project Structure

```bash
Creating-personal-google-drive/
│
├── storage/
│   ├── images/
│   ├── Node.js Curriculum.pdf
│   ├── hello.txt
│   ├── num.txt
│   └── numbers.txt
│
├── app.js
├── boilerplate.html
├── package.json
└── README.md
```

---

# 🛠️ Technologies Used

- Node.js
- JavaScript
- HTML5
- File System (`fs`) Module

---

# ⚙️ Step-by-Step Setup Guide

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/Creating-personal-google-drive.git
```

---

## 2️⃣ Move Into the Project Folder

```bash
cd Creating-personal-google-drive
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Run the Project

```bash
node app.js
```

---

## 5️⃣ Open the Project

After running the server, open your browser and visit:

```bash
http://localhost:3000
```

---

# 📚 Step-by-Step Project Explanation

## 📌 Step 1: Create Storage Folder

The `storage/` folder acts like a local Google Drive where all files are stored.

```bash
storage/
```

### Inside it:

- `images/` → stores image files
- `.txt files` → stores text data
- `.pdf files` → stores documents

---

## 📌 Step 2: Create `app.js`

This is the main backend file of the project.

### Example:

```js
const fs = require("fs");

fs.writeFileSync("./storage/hello.txt", "Hello World");
console.log("File created successfully");
```

### What this does:

- Imports the `fs` module
- Creates a text file
- Writes data into the file

---

## 📌 Step 3: Create HTML Boilerplate

The `boilerplate.html` file provides the frontend structure.

### Example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Personal Google Drive</title>
</head>
<body>
  <h1>Welcome to Personal Google Drive</h1>
</body>
</html>
```

---

## 📌 Step 4: Store Files

You can save:

- Images
- PDFs
- Text files
- Notes
- Documents

inside the `storage/` folder.

---

## 📌 Step 5: Read Files Using Node.js

### Example:

```js
const data = fs.readFileSync("./storage/hello.txt", "utf8");

console.log(data);
```

### Output:

```bash
Hello World
```

---

## 📌 Step 6: Delete Files

### Example:

```js
fs.unlinkSync("./storage/hello.txt");
```

This removes the file from storage.

---

# 📸 Storage Preview

✅ Store Images  
✅ Store PDFs  
✅ Store TXT Files  
✅ Organize Local Data  

---

# 📄 Example Files

| File Name | Type |
|---|---|
| hello.txt | Text |
| num.txt | Text |
| numbers.txt | Text |
| Node.js Curriculum.pdf | PDF |

---

# 💡 Learning Concepts

This project helps you learn:

- File handling in Node.js
- Working with folders
- Reading & writing files
- Backend basics
- Local storage systems
- Node.js `fs` module

---

# 🌟 Future Improvements

- 🔐 User Authentication
- ☁️ Cloud Upload Support
- 🗄️ MongoDB Integration
- 📤 Drag & Drop Upload
- 📱 Responsive UI
- 🖼️ Image Preview System

---

# 👨‍💻 Author

**Samim**  
Full Stack Developer 🚀

---

# 📜 License

This project is licensed under the MIT License.

