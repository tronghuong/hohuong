var http = require('http'); // đây là cách chúng ta require các modules
http.createServer(function(request, response){
response.writeHead(200, {'Content-Type':'text/plain'}); // Status
code và content type
response.write("Xin chào lập trình viên!"); // Thông điệp được gửi
xuống client.
response.end(); // Đóng kết nối
}).listen(3000); // Chờ kết nối ở cổng 3000.
console.log("Server đang chờ kết nối tại cổng 3000");