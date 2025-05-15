const password= document.getElementById('password'); 
const background= document.getElementById('background'); 

password.addEventListener('input',(e)=>{
	const input = e.target.value; 
	const length= input.length; 
	const blurValue= 20 - length * 2  
	background.style.filter=`blur(${blurValue}px)`;
}) 

Swal.fire({ 
  title: "Janette Jacqueline Huang",
  text: "Sapere aude-Beranilah untuk bijaksana. Sir jumpscare banget mirip Tung Tung Tung Sahur", 
  imageUrl: "https://media-hosting.imagekit.io/175aee8b7ade4225/Jacqueline.jpg?Expires=1841899999&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GEGWT2Xojc3xOFxx7qfWZ89nnwytvU7bKJMkSrRiWbyfiNEujHutp96D2H3HtXOPqGVyWbzuP8izwmHMjrxoj8iTdTTUCz5~z42yj88uzTA5SdurqvAuHIrGCc9Grzaqtar7wpvB~cfpwOUuiNV7-etD5LEIJRUzga6OAGFR-tLFXnjHNcqxfcwWQD8HWkrhSn-Eg2yMjn0T1Q4Wuw~b8AFhHDqW9KTdYXrz48HWMplwvgrS4YbTWx5OPwoVD888O65mdEEGj-hghPUCIXtlEiwp9Yq-M1DrIV-oZyDue3T6iGTCwEZjFXEqOr2zH959jdWcIOS~Q0f9hoLWu-7qFQ__",
  imageWidth: 400,
  imageheiht: 200, 
  confirmButtonText:"Tutup",
  showCloseButton: true, 
});