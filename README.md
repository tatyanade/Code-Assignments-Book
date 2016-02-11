#Assignment Book Generator Workflow

* Check the to-do list. (It's in the Google drive AssignmentBook/ToDo List: AssignmentBook spreadsheet.)

##How to generate each section.

* Each section is currently still generated separately.
* Update spreadsheets in Google drive with latest text. Spreadsheets are in a folder called AssignmentBook and are called Exercises_MASTER, Book_AssignmentBook and Interviews.
* From these spreadsheets, export data in JSON format using XX plugin.
* Drop this JSON formatted data into the files in the basiljs repository user/assignmentText/data/. These file are called data-assignments.json, data-exercises.json, data-interview.json
* Open blank-book-template.indd in inDesign and run the javascript files (.jsx files) to generate the layouts.
