// ปุ่ม Say Hello
document.querySelector('#helloBtn').addEventListener('click', () => {
  document.querySelector('#status').textContent = 'สวัสดีครับ ผมวงศพัทธ์ ชำนาญยนต์!';
});

// ปุ่มสลับธีม (Exercise 3)
const themeBtn = document.querySelector('#themeBtn');
const root = document.documentElement;

function applyTheme(theme) {
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
  } else {
    root.removeAttribute('data-theme');
  }
  themeBtn.textContent = theme === 'dark' ? 'โหมดสว่าง' : 'โหมดมืด';
  themeBtn.setAttribute('aria-pressed', theme === 'dark');
}

let current = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
applyTheme(current);

themeBtn.addEventListener('click', () => {
  current = current === 'dark' ? 'light' : 'dark';
  applyTheme(current);
});
