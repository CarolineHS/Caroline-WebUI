function getCommentList() {
    $.ajax({
        methods: 'GET',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        success: function(res) {
            console.log(res)
            if(res.status !== 200) return alert('获取评论列表失败')
            console.log('获取数据成功')
            var rows = []
            $.each(res.data, function(i, item) {
                var str = '<li class="list-group-item"><span class="badge" style="background-color: #F0AD4E;">评论时间:' + item.time + '</span><span class="badge" style="background-color: #5BC0DE;">评论人:' + item.username + '</span>' + item.content + '</li>'
                rows.push(str)
            })
            $('#cmt-list').empty().append(rows.join(''))
        }
    })
}

getCommentList()

$(function() {
    $('#formAddCmt').submit(function(e) {
        e.preventDefault()
        var data = $(this).serialize()
        console.log(data)
        $.post('http://www.liulongbin.top:3006/api/addcmt', data, 
        function(res) {
            if(res.status !== 201) return alert('发表评论失败')
            getCommentList()
            // $('#formAddCmt')获取到的为一个jQuery对象，加一个[0]转换成原生dom对象，就可以调用原生dom表单的函数reset()
            $('#formAddCmt')[0].reset()
        })
    })
})