const navigation = [
    {
        mainnav : [
            {id: 1, title: '신상품', alink: 'new'},
            {id: 2, title: '베스트', alink: 'best'},
            {id: 3, title: '스테디셀러', alink: 'steadyseller'},
            {id: 4, title: '당일발송', alink: 'sdayshipping'},
            {id: 5, title: '이벤트', alink: 'event'},
            {id: 6, title: '고객센터', alink: 'service'},
        ]
    },
    {
        category : [
            {id: 1, title: '아우터', alink: 'outer', subarray: [
                {title: '자켓', alink: 'outer/jak'},
                {title: '점퍼/야상', alink: 'outer/jup'},
                {title: '조끼', alink: 'outer/jak'}
            ]},
            {id: 2, title: '상의', alink: 'tshirt', subarray: [
                {title: '티셔츠', alink: 'outer/jak'},
                {title: '블라우스', alink: 'outer/jup'},
                {title: '니트', alink: 'outer/jak'}
            ]},
            {id: 3, title: '원피스', alink: 'onepiece', subarray: [
                {title: '루피', alink: 'outer/jak'},
                {title: '조로', alink: 'outer/jup'},
                {title: '상디', alink: 'outer/jak'}
            ]},
            {id: 4, title: '하의', alink: 'under', subarray: [
                {title: '바지', alink: 'outer/jak'},
                {title: '레깅스', alink: 'outer/jup'},
                {title: '스커트', alink: 'outer/jak'},
                {title: '트레이닝복', alink: 'outer/jak'}
            ]},
            {id: 5, title: '시즌', alink: 'season', subarray: [
                {title: '수영복', alink: 'outer/jak'},
                {title: '스키복', alink: 'outer/jup'},
                {title: '한복', alink: 'outer/jak'}
            ]},
            {id: 6, title: '슈즈', alink: 'shose', subarray: [
                {title: '운동화', alink: 'outer/jak'},
                {title: '부츠', alink: 'outer/jup'},
                {title: '힐', alink: 'outer/jak'}
            ]},
            {id: 7, title: '악세서리', alink: 'accessory', subarray: [
                {title: '목걸이', alink: 'outer/jak'},
                {title: '귀걸이', alink: 'outer/jup'},
                {title: '팔찌', alink: 'outer/jak'}
            ]},
            {id: 8, title: '그외', alink: 'etc', subarray: [
                {title: '자켓', alink: 'outer/jak'},
                {title: '점퍼/야상', alink: 'outer/jup'},
                {title: '조끼', alink: 'outer/jak'}
            ]}
        ]
    }
];

export default navigation;