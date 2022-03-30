<?php

    // 오브젝트 없음, 배열에 키와 값을 등록 가능

    $person = array(
        'name' => '철수',
        'height' => 77,
        'weight' => 65,
        'age' => 25,
        'city' => '김포'
    )

    // var_dump($person);
    json_encode($person); // json으로 인코딩하는 함수

?>