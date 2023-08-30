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
                <td><button type="button" onclick="editVisitor(${id})">수정</button></td>
                <td><button type="button" onclick="deleteVisitor(this, ${id})">삭제</button></td>
            </tr>
        `;
        $('tbody').append(newVisitor);
    });
};

const deleteVisitor = (obj, id) => {
    const form = document.forms['visitor-form'];

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

const editVisitor = (id) => {
    axios({
        // Get /visitor/:id
        method: 'get',
        url: `/visitor/${id}`,

        // Get /visitor?id=1
        // method: 'get',
        // url: `/visitor`,
        // params: {
        //     id,
        // },
    }).then((res) => {
        console.log(res.data);
        const { name, comment } = res.data;
        const form = document.forms['visitor-form'];
        form.name.value = name;
        form.comment.value = comment;

        const btns = `
            <button type="button" onclick="editDo(${id})">변경</button>
            <button type="button" onclick="editCancel()">취소</button>
        `;
        buttonGroup.innerHTML = btns;
    });
};

function editDo(id) {
    const form = document.forms['visitor-form'];
    axios({
        method: 'patch',
        url: '/visitor',
        data: {
            id,
            name: form.name.value,
            comment: form.comment.value,
        },
    }).then((res) => {
        const { isUpdated } = res.data;
        if (isUpdated) {
            alert('수정 완료 !!');
        }

        const tr = document.querySelector(`#tr_${id}`).children;
        tr[1].textContent = form.name.value;
        tr[2].textContent = form.comment.value;

        editCancel();
    });
}

const editCancel = () => {
    const form = document.forms['visitor-form'];
    form.name.value = '';
    form.comment.value = '';

    const btns = `
            <button type="button" onclick="createVisitor()">등록</button>
        `;
    buttonGroup.innerHTML = btns;
};
