// exports 전역 변수에는 객체 설정이 불가능
// module.exports는 객체를 그대로 설정하는 것이 가능
const user = {
    getUser: function(){
        return { id: 'work01', name: '홍길동'};
    },
    group: { id: 'work02', name: '홍길순' }
};

module.exports = user;