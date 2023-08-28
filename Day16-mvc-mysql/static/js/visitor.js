const tbody = document.querySelector('tbody');
const buttonGroup = document.querySelector('#button-group');

// 등록버튼 클릭 시 테이블에 방문데이터 추가
const createVisitor = () => {
    const form = document.forms['visitor-form'];
    axios({
        method: 'post',
        url: '/visitor',
        data: {
            name: form.name.value,
            comment: form.comment.value,
        },
    }).then((res) => {
        const { id, name, comment } = res.data;
        const newVisitor = `
            <tr id="tr_${id}">
                <td>${id}</td>
                <td>${name}</td>
                <td>${comment}</td>
                <td><button type="button">수정</button></td>
                <td><button type="button" onclick="deleteVisitor(this, ${id})">삭제</button></td>
            </tr>
        `;
        $('tbody').append(newVisitor);
    });
};

const deleteVisitor = (obj, id) => {
    const form = document.forms['visitor-form'];
    console.log(obj, id);

    if (!confirm('정말로 삭제하나요?')) {
        return;
    }
    axios({
        method: 'delete',
        url: '/visitor',
        data: { id },
    }).then((res) => {
        console.log('delete /visitor 요청에 대한 응답', res.data);

        alert('삭제성공');
        obj.parentElement.parentElement.remove();
    });
};
