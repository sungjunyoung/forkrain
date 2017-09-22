# ForkRain
#### 개발자들을 위한 코딩 지식 공유 및 개인화 플랫폼

- youtube : https://youtu.be/IAbN97KTDnE
- slideshare : https://www.slideshare.net/mobile/SungJunyoung/forkrain-ppt

![Logo](./assets/logo.jpg)
---

## 소개
포크레인은 ‘비처럼 쏟아지는 웹상의 정보들을 포크로 찍어 보관하자’라는 뜻의 Github으로 운영되는 개발관련 정보(url) 수집 및 공유 웹사이트입니다. 사용자는 서비스 내에서는 읽기, 포크하기의 권한만 가지며 url을 작성하려면 포크레인의 코드를 fork 하고, clone 하여 정해진 폼에 url, Github id, 태그들을 입력한후 pull request를 보냄으로서 자신만의 url을 등록하고 공유할 수 있습니다. pull request 상에서 개발자들은 등록된 url을 검증하고, 리뷰함으로서 정제된 유익한 url 만이 서비스에 올라가게 되고, 포크레인 서비스는 개발자들만의 ‘놀이터’ 역할이 가능하게 됩니다. 사용자들은 게시물 뿐만 아니라 웹사이트의 코드 또한 개선하고 변경해 pull request를 보내는 것이 가능합니다. ‘완전한’ 오픈소스 컨셉의 서비스인 저희 포크레인은, 위의 컨셉을 가지고 url 수집/공유 서비스에서 더 광범위한 방향으로 확장이 가능할 것으로 생각됩니다.
url 을 게시하시려면, 다음을 숙지하시고 pull-request 를 날려주세요!

## 사용법
#### url을 저장, 공유 하려면
: 블로그나 사이트에서 내가 저장해두고 보고싶거나 공유하고 싶은 자료를 찾았을 때
1. 공유할 url 가져옵니다.(링크 복사)
2. 공유할 url에 대한 해시태그(#) 설명과 함께 게시물을 Pull request 합니다.
3. merge가 되면 내 저장소와 검색을 통해 내가 가져온 url 게시물을 볼 수 있습니다.

#### url을 포크하려면
: 여러 url 게시물들을 보다가 포크하고 싶을 때 혹은 해시태그 검색을 통해 포크하고 싶은 게시물을 찾았을 때
1. Github id로 로그인을 합니다.
2. 게시물의 포크아이콘을 눌러 포크(fork)합니다.
3. 내 저장소에서 포크한 게시물을 볼 수 있습니다.

## 주의사항
: 게시글을 Pull request 할때 아래 양식에 따라 작성해주세요.

#### 번호 Git아이디 URL 해시태그1 ... 해시태그5


<예제>
```
4 changju https://imitator.kr/Linux/1329	서버 ssg접근 에러
3 seunjunyoung  http://egloos.zum.com/lucene/v/1386072 아파치 오픈소스  검색엔진
2 byulkim http://arduino.org/ 아두이노  IOT 센서  연결
1 doyeonlee https://www.edureka.co/blog/devops-tutorial 데브옵스 소프트웨어공학
```

> /forkrain-server/please-edit-me.txt 파일을 사용하여 url 게시가 가능합니다!  
> **해시태그는 5개까지 작성 가능합니다.**  
> 내림차순으로 정렬되 있으며 문서의 가장 위에 추가합니다.  
> 각각  index, githubid, url, [tags] 입니다.  
> 어뷰징은 즉시 reject 됩니다!

## ForkRain 을 사용해보세요!!
* 원하는 자료의 수집과 공유가 가능합니다.
* 당신도 오픈소스 contributor가 될 수 있습니다 :)
