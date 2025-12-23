const fs = require("fs");

// to create file
// fs.writeFile("hey.txt", "hello this is file", function (err) {
//   if (err) {
//     console.error(err);
//   } else console.log("done ");
// });

// to append file (likhe hue mai add karna)
// fs.appendFile("hey.txt", " jisme node js Start kr rhe hai", function (err) {
//   if (err) {
//     console.error(err);
//   } else console.log("done ");
// });

// to rename the file path
// fs.rename("hey.txt", "hello.txt", function (err) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("rename done");
//   }
// });

//to copy file
// fs.copyFile("hello.txt", "./copy/copiedFile.txt", function (err) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("Copied File Done");
//   }
// });

// to unlink file (remove file)
// fs.unlink("hello.txt", function (err) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("successfully removed");
//   }
// });

// to remove folder or remove directory (by default it remove blank folders only  )
fs.rmdir("./copy", { recursive: true }, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("doneeeeee remove directory");
  }
});
// this also do the smae thing remove directory folder like rmdir
fs.rm("./copy", { recursive: true }, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("doneeeeee remove directory");
  }
});
