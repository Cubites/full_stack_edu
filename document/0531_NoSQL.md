# DB & NoSQL
## 대용량 데이터베이스 구축
* 등장 배경
  * 데이터가 늘어나 한 대의 DBMS 서버로는 처리하는데 한계가 있음
### VLDB (Very Large DBMS)
* Sharding (샤딩)
  * DBMS 내용을 분할하는 기술 (DB / 테이블)
  * Write(쓰기) 성능 향상
* Replication (복제)
  * 동일한 DBMS를 여러 개 유지 (마스트 / 슬레이브)
  * Read(읽기) 성능 향상
* Scale-up (스케일 업)
  * 일반적으로 말하는 업그레이드를 말함
  * CPU 클럭속도 증가, 코어 수 증가, 메모리 증가 등
  * 일반적으로 성능 증가보다 비용 증가가 큼 => 비용부담
  * 병렬 컴퓨팅(Parallel Computing) / 전용 네트워크
* Scale-out (스케일 아웃)
  * 동일한 서버 / DBMS를 병렬로 구축
  * 분산 컴퓨팅
  * 스케일 업에 비해 상대적으로 저렴
  * 노드 수를 추가하면 성능 향상 가능 => 효율은 상대적으로 떨어짐

## NoSQL (Not Only SQL)
* 일반적으로 RDBMS는 주로 읽기(검색)에 최적화되어 있음
  <br>> 쓰기 성능이 중요한 경우 성능이 떨어질 수 있음
  <br>> 이 경우 NoSQL이 좋은 성능을 보일 수 있음(로그머신, SNS)
* 기존 RDBMS를 완전히 대체하는 것이 아닌 보완 역할
* 특정 기술을 말하는 것이 아닌 일련의 제품군을 의미
* 예: MongoDB, Apache Cassandra(Facebook에 응용), Apache HBASE, REDIS...

### CAP이론
* CAP
  > * 일관성(Consistency)
  > <br>: 어떤 노드를 접근하더라도 데이터 값이 동일해야함
  > * 가용성(Availability)
  > <br>: 노드 일부가 Fail되더라도 서비스가 중단되면 안됨
  > * 파티션 내성(Partition Tolerance)
  > <br>: 노드 간 통신에 장애가 생겨도 문제가 없어야 함
* 어떤 시스템도 위 3가지를 모두 만족시킬 수 없다는 이론
* 두 가지만 가능(CA, AP, CP)
  > * CA: 일반 RDBMS
  > * CP: MongoDB, Hbase, Redis
  > * AP: Cassandra
* 저장 형태에 따른 분류
  * key/value
    * key 값을 주면 value를 리턴하는 형태
    * JSON과 유사
    * 예: Redis
  * Ordered Key(정렬된 키) / value
    * key 값으로 정렬되는 형태
    * 예: Vassandra, Hadoop, Hbase
  * Document based
    * value 값이 JSON /XML 문서인 형태
    * 예: MongoDB

### NoSQL의 특징
#### Schemaless
* 스키마(DDL) 기반이 아니라 필요하면 새로운 컬럼(key)를 추가하면 됨
* 전체적으로 동일한 구조가 아닐 수 있음
  > RDBMS - 정규형 데이터
  > NoSQL - 반(Semi) 정규형 데이터
  > 검색엔진 - 비정규형(Plain Text) 데이터

## DBMS(MySQL)에서 가장 많이 사용하는 기능
### 1. select
* 데이터 목록
  > <pre>
  > select * from 테이블명 limit 1, 20 order by id desc;
  > </pre>
* 데이터 검색
  > <pre>
  > select * from 테이블명 
  >   where 컬럼명 like %검색어% limit 0, 20 order by id desc;
  > </pre>
* 데이터의 세부 페이지
  > <pre>
  > select * from 테이블명 where id=아이디번호;
  > </pre>

### 2. insert
* 기본형
  > <pre>
  > insert into 테이블명 (필드명1, 필드명2, ...) 
  >   values (필드값1, 필드값2, ...);
  > 
  > insert into 테이블명 values (필드값1, 필드값2, ...);
  > </pre>


### 3. update
* 반드시 사전에 select 구문이 필요
* 예
  > <pre>
  > update 테이블명 
  >   set 필드명 = 필드값, 필드명 = 필드값 
  >   where id=아이디번호
  > </pre>

### 4. delete
* 반드시 사전에 select 구문 필요
* 반드시 삭제 전에 다시 확인하는 스크립트문이 필요
* 예
  > <pre>
  > delete from 테이블명 -- 모든 데이터 삭제
  > delect from 테이블명 where 필드명 = 필드값;
  > </pre>

# NodeJS
* nodeJS 의 대표적인 전역객체
  | 전역객체 이름 | 설명 |
  | --- | --- |
  | console | 콘솔 창에 결과를 보여주는 객체 |
  | process | 프로세스의 실행에 대한 정보를 다루는 객체 |
  | exports | 모듈을 다루는 객체 |

* console 객체의 세가지 메소드
  | 메소드 이름 | 설명 |
  | --- | --- |
  | dir(object) | 자바스크립트의 객체 속성을 출력 |
  | time (id) | 실행시간을 측정 (시작 시간) |
  | timeEnd (id) | 실행시간을 측정 (끝 시간) |
  * %d (숫자), %s (문자), %s (json)

* process 정보를 다루는 객체
  | 전역객체 이름 | 설명 |
  | --- | --- |
  | argv | 프로세스를 실행할 때 전달되는 파라미터(매개변수) 정보 |
  | env | 환경 변수 정보 |
  | exit() | 프로세스를 끝내는 메소드 |