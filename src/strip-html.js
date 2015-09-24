export default function stripHTML(html) {
   let div = document.createElement('div')
   div.innerHTML = html
   return div.textContent || div.innerText || ''
}