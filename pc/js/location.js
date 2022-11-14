//Jquery로 찾을때는 const container = $(".map")[0]; 으로 해야함. 안그럼 dom만 출력되는게 아니라 prevObject라는 것 또한 린턴한다.
const container = document.querySelector(".map"); //지도를 담을 영역의 DOM 레퍼런스
console.log("🚀 ~ file: location.js ~ line 2 ~ container", container);
const options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

const geocoder = new kakao.maps.services.Geocoder();

// 주소로 좌표를 검색합니다
geocoder.addressSearch("영등포구 선유로 130", function (result, status) {
  // 정상적으로 검색이 완료됐으면
  if (status === kakao.maps.services.Status.OK) {
    const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

    // 결과값으로 받은 위치를 마커로 표시합니다
    const imageSrc = "../images/common/google-maps.png", // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(64, 64), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(32, 64) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
      markerPosition = coords; // 마커가 표시될 위치입니다

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage, // 마커이미지 설정
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다 (내용및 모양 내 마음대로 바꿀 수 있다)
    const content = `<div class="customoverlay">
    <a href="https://map.kakao.com/link/map/11394059" target="_blank">
    <span class="title">TIS EDU</span>
    </a>
    </div>`;

    // 커스텀 오버레이가 표시될 위치입니다
    const position = coords;

    // 커스텀 오버레이를 생성합니다
    const customOverlay = new kakao.maps.CustomOverlay({
      map: map,
      position: position,
      content: content,
      yAnchor: 1,
    });

    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
    map.setCenter(coords);
  }
});
