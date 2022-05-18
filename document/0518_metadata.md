## 메타 데이터 (METADATA)
* 데이터를 관리하기 위한 데이터 => 데이터를 위한 데이터
* DB, 테이블의 스키마에 대한 정보를 저장하는 테이블
* DB명 테이블명, 컬럼명, 사용자명, SHOW 명령어의 결과값 등
* 개념
  * 데이터 사전 (Data Dictionary): Information_schema
    * 데이터베이스의 정보 저장
    * 시스템 카탈로그(System Catalog)라고도 함
    * 일반적으로 읽기 전용정보 (Read-only)
  * 데이터 디렉토리 (Data Directory)
    * DBMS의 모든 데이터가 저장되는 디렉토리 폴더
    * DB 저장, 상태, 로그저장

## 캐릭터셋(Character Set, Collection)
* 문자 인코딩 정보 / 메타데이터의 일종
* 문자열(varchar, char)의 값을 저장할 때 사용되는 기본 정보
* DB, 테이블 별로 설정 가능
* 종류
  * ASCII/ ISO-8859-1 아스키 계열
  * EUC-KR / KSC_5601 한글 완성형 계열 // 다른언어 사용 X
  * UTF-8 
    * 전 세계 모든 문자에 대한 표준 문자 집합인 '유니코드' 방식
    * mysql -> utf8(기본) != utf-8
      * utf8mb4 == utf-8 (이모지 기록 가능)
      * utf8mb4 설정 (my.ini 수정)
        > <pre>
        > [client] default-character-set=utf8mb4
        > [mysql] default-character-set=utf8mb4
        > [mysqld] character-set-server=utf8mb4
        >          collation-server=utf8mb4_unicode_ci
        > </pre>
      * collation
        * 데이터를 정렬(문자간의 비교)할 때 사용하는 정보
        * 정렬 시에 대소문자 구분 여부 설정 
          * (Case Sensitive - cs / Case Insensitive - ci)
        * 한글에는 의미 없음
        * utf8-general-ci (기본값)

## 스토리지 엔진 (Storage Engine) 
* 데이터베이스 엔진이라고도 불림
* DBMS가 데이터를 CRUD할 때 사용하는 기본 컴포넌트
* MyIsam, InnoDB 가 대표적
  * 기본값이 InnoDB (MySQL 5.7이상 기준)
  * InnoDB
    * 트랜잭션 지원, 업데이트 위주, 줄 단위 락, 복구 용이
    * 동시처리기능 향상
  * MyISAM
    * 읽기 위주, 테이블 단위 락
* 스토리지 엔진 변경 방법
  * MySQL 코드
    > <pre>
    > select engine, support from information_schema.engines
    >   where support='default';
    >   set default_storage_engine = MyISAM;
    > </pre>
  * my.ini 에서 수정하는 법
    > <pre>
    > [mysqld] 
    > default-storage-engine = MyISAM;
    > </pre>
  * 테이블 생성시 엔진을 선택하는 방법
    > <pre>
    > create table Table_name ( 
    >   ... 
    > ) engine=innoDB default charset=utf8mb4;
    > </pre>