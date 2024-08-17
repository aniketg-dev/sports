const express = require('express');
const multer = require('multer');
const ExcelJS = require('exceljs');
const fs = require('fs');

const app = express();
const upload = multer();

// Path to the Excel file
const excelFilePath = '/root/Documents/Aniket_Personal/sports/excelSheet/customers.xlsx';

// Middleware to parse form data
app.use(express.urlencoded({ extended: true ,}));
app.use(express.json());
app.use(upload.none());

// Route to handle form submission
app.post('/submit', async (req, res) => {
    console.log('Route hit');
    const { name, email, countryCode, mobile, occupation, reference , notifications, about } = req.body;

    console.log("req.body",req.body);

    let workbook;
    let worksheet;

    // Check if the Excel file exists
    if (fs.existsSync(excelFilePath)) {
        // Load the existing Excel file
        workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(excelFilePath);
        worksheet = workbook.getWorksheet(1);
    } else {
        // Create a new workbook and worksheet
        workbook = new ExcelJS.Workbook();
        worksheet = workbook.addWorksheet('Submissions');
        
        // Add headers to the first row
        worksheet.addRow(['Name', 'Email', "Mobile No.", 'Occupation', 'Reference' , "Notification", "About" ]);
    }
    const number = countryCode +''+ mobile;
    // Add a new row with the form data
    worksheet.addRow([name, email,number, occupation, reference, notifications, about ]);

    // Save the Excel file
    await workbook.xlsx.writeFile(excelFilePath);

    // Send a response to the client
    res.send('Data saved successfully!');
});

// Serve the HTML form (optional)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
