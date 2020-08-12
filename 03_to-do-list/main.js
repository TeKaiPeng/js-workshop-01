// TO DO
//點擊任務標記是否完成 點擊 li 『新增/移除 checked class』 
window.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('li').forEach(function(li){
    li.addEventListener('click', function(){
      li.classList.toggle('checked')
    }) 
  })
//點擊 x 刪除任務
  document.querySelectorAll('.close').forEach(function(close){
    close.addEventListener('click', function(){
      close.parentNode.remove()
    })
  })

//輸入新任務名稱， 按下+新增任務
//'.abc' -> class '#bca' -> id, 'abc'-> tagname
  document.querySelector('#addBtn').addEventListener('click', function() {
    const addList = document.createElement('li')
    const addSpan = document.createElement('span')

    addSpan.classList.add('close')
    addSpan.textContent = "x"

    addList.textContent = document.querySelector('input').value
    addList.appendChild(addSpan)
    document.querySelector('ul').appendChild(addList)

    document.querySelectorAll('.close').forEach(function(close){
      close.addEventListener('click', function(){
        close.parentNode.remove()
      })
    })
  })
})
 