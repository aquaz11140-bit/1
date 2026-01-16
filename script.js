const messages = ["ม่ายยยยย", "ไม่จริงใช่ไหมม....", "คิดอีกทีน้าาา 🥺", "ขอร้องงงง 💖"];
let index = 0;

function handleNoClick() {
  const noBtn = document.querySelector(".no-button");
  const yesBtn = document.querySelector(".yes-button");
  const buttons = document.querySelector(".buttons");

  // เปลี่ยนข้อความปุ่ม No
  noBtn.textContent = messages[index];
  index = (index + 1) % messages.length;

  // ขยายปุ่ม Yes
  let size = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = size * 1.3 + "px";

  // ย้ายปุ่ม Yes ไปไว้ปุ่มแรก
  buttons.prepend(yesBtn);
}

function handleYesClick() {
  document.body.innerHTML = `
    <div style="text-align:center; padding-top:80px;">
      <h1 style="font-size:7vw;">รักเหมือนกันนะเบ้บจุ๊บๆ <br>💖😘</br></h1>
      <img src="Cat Love Sticker by Capoo.gif" style="max-width:100%;">
    </div>
  `;
}