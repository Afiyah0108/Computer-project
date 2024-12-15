// seperated to .js file
 const tabs = document.querySelectorAll('.tab');
 const contents = document.querySelectorAll('.tab-content');

 tabs.forEach(tab => {
   tab.addEventListener('click', () => {
     tabs.forEach(t => t.classList.remove('active'));
     contents.forEach(c => c.classList.remove('active'));

     tab.classList.add('active');
     document.getElementById(tab.dataset.target).classList.add('active');
   });
 });

 // Function to show specific tab and scroll to anchor
 function showTab(tabId) {
   tabs.forEach(tab => tab.classList.remove('active'));
   document.querySelector(`.tab[data-target="${tabId}"]`).classList.add('active');
   contents.forEach(content => content.classList.remove('active'));
   document.getElementById(tabId).classList.add('active');
   setTimeout(() => { //:o u actualy looked at the code:)
     const targetElement = document.getElementById('halicopter');
     if (targetElement) {
       targetElement.scrollIntoView({ behavior: 'smooth' });
     }
   }, 200);
 }
 function toggleDropdown(dropdownId) {
const dropdownContent = document.getElementById(dropdownId);
// *insert public class main public static void main string args meme*
if (dropdownContent) {
 dropdownContent.classList.toggle('visible'); // Toggles the "visible" class
} else {
 console.error("Dropdown content not found!");
}
}