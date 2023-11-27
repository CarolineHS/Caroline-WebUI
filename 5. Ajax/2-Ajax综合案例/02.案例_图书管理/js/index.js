/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */
const creator = 'caroline'

function getBooksList() {
    axios({
        url: 'http://hmajax.itheima.net/api/books',
        method: 'get',
        params: {
            creator
        }
    }).then(result => {
        console.log(result)
        const bookList = result.data.data
        console.log(bookList)
        const htmlStr = bookList.map((item, index) => {
            return `<tr>
            <td>${index + 1}</td>
            <td>${item.bookname}</td>
            <td>${item.author}</td>
            <td>${item.publisher}</td>
            <td data-id=${item.id}>
              <span class="del">删除</span>
              <span class="edit">编辑</span>
            </td>
          </tr>`
        }).join('')
        document.querySelector('.list').innerHTML = htmlStr
    })
}

getBooksList()

const addModalDom = document.querySelector('.add-modal')
const addModal = new bootstrap.Modal(addModalDom)

document.querySelector('.add-btn').addEventListener('click', () => {
    const addForm = document.querySelector('.add-form')
    const bookObj = serialize(addForm, { hash: true, empty: true })
    axios({
        url: 'http://hmajax.itheima.net/api/books',
        method: 'post',
        data: {
            // bookname,
            // author,
            // publisher,
            ...bookObj,
            creator
        }
    }).then(result => {
        console.log(result)
        getBooksList()
        addForm.reset()
        addModal.hide()
    })   
})

document.querySelector('.list').addEventListener('click', e => {
    if (e.target.classList.contains('del')) {
        // console.log('点击删除元素')
        const theId = e.target.parentNode.dataset.id
        axios({
            url: `http://hmajax.itheima.net/api/books/${theId}`,
            method: 'DELETE'
        }).then(() => {
            getBooksList()
        })
    }
})

const editDom = document.querySelector('.edit-modal')
const editModal = new bootstrap.Modal(editDom)

document.querySelector('.list').addEventListener('click', e => {
    if (e.target.classList.contains('edit')) {
        const theId = e.target.parentNode.dataset.id
        axios({
            url: `http://hmajax.itheima.net/api/books/${theId}`,
            method: 'get'
        }).then(result => {
            const bookObj = result.data.data
            // document.querySelector('.edit-form .bookname').value = bookObj.bookname
            // document.querySelector('.edit-form .author').value = bookObj.author
            const keys = Object.keys(bookObj)
            keys.forEach(key => {
                document.querySelector(`.edit-form .${key}`).value = bookObj[key]
            })
        })
        editModal.show()
    }
})
document.querySelector('.edit-btn').addEventListener('click', () => {
    const editForm = document.querySelector('.edit-form')
    const bookObj = serialize(editForm, { hash: true, empty: true })
    axios({
        url: `http://hmajax.itheima.net/api/books/${bookObj.id}`,
        method: 'put',
        data: {
            ...bookObj,
            creator 
        }
    }).then(() => {
        getBooksList()
        editModal.hide()
    })
})