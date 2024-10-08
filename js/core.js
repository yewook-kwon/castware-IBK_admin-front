$('.layerpop2_wrap .layer_close').click(function(){
  $('.black-bg2').css('display','none')
})

$('.btn_wrap .btn_cancle').click(function(){
  $('.black-bg2').css('display','none')
})


$(".login_save").click(function () {
  $(this).toggleClass("active");
});

$(".check_wrap").click(function () {
  $(".check_wrap").toggleClass("active");
});

$(document).ready(function () {
  // .sel_box 클릭 시 해당 .sel_list 표시/숨김
  $(".sel_box").on("click", function (e) {
    e.stopPropagation();

    // 모든 .sel_list 숨김
    $(".sel_list").hide();

    // 클릭된 .sel_box에 해당하는 .sel_list 표시/숨김
    $(this).siblings(".sel_list").toggle();
  });

  // .sel_list의 항목 클릭 시 .sel_box 텍스트 변경 및 .sel_list 숨김
  $(".sel_list li").on("click", function () {
    var selectedText = $(this).text();
    $(this).closest(".sel_box_wrap").find(".sel_box").text(selectedText);
    $(this).closest(".sel_list").hide(); // 여기서 .sel_list를 숨깁니다.
  });

  // 페이지의 다른 곳을 클릭하면 모든 .sel_list 숨김
  $(document).on("click", function () {
    $(".sel_list").hide();
  });

  // .sel_list 클릭 시 .sel_list 숨김
  $(".sel_list").on("click", function (e) {
    e.stopPropagation(); // 이벤트 전파 방지
    $(this).hide();
  });
});

$(document).ready(function () {
  $(".nav li").on("click", function () {
    // 모든 탭에서 active 클래스 제거
    $(".nav li").removeClass("active");

    // 클릭된 탭에 active 클래스 추가
    $(this).addClass("active");

    // 이미지 소스 변경
    $(".nav li img").each(function () {
      var imgSrc = $(this).attr("src").replace("_active", "");
      $(this).attr("src", imgSrc);
    });

    var img = $(this).find("img");
    var imgSrc = img.attr("src");
    var newImgSrc = imgSrc.replace(".png", "_active.png");
    img.attr("src", newImgSrc);

    // 모든 탭 컨텐츠 숨김
    $(".tab-content").removeClass("active");

    // 클릭된 탭에 해당하는 컨텐츠 표시
    var tabId = $(this).data("tab");
    $("#" + tabId).addClass("active");
  });
});

$(".page-navigation li a").click(function () {
  $(".page-navigation li a").removeClass("active"); // 모든 a 태그에서 active 클래스 제거
  $(this).addClass("active"); // 클릭된 a 태그에 active 클래스 추가
});

//템플릿 등록
$(document).ready(function () {
  $("#file").change(function () {
    var fileList = [];
    for (var i = 0; i < this.files.length; i++) {
      fileList.push(this.files[i].name);
    }
    var fileNames = fileList.join(", "); // 배열 값을 쉼표와 공백으로 연결
    $(this).closest(".ml-6").siblings(".form-file").text(fileNames); // .form-file 요소에 파일명 표시
  });
});

//레이어 팝업 - 선택btn

// 지점선택 레이어팝업
$(".tbl_btn").click(function () {
  $(".black-bg").css("display", "flex");
});
$(document).ready(function () {
  // 취소 버튼 클릭 시 black-bg 숨기기
  $(".btn-cancle").click(function () {
    $(".black-bg").hide();
  });
  // 확인 버튼 클릭 시 black-bg 숨기기
  $(".btn-primary").click(function () {
    // 여기에서 확인 동작 수행 (필요한 경우)
    $(".black-bg").hide();
  });
});

// 탭 2depth
$(document).ready(function () {
  $(".tabs_depth2 ul li").click(function () {
    // 모든 탭에서 active 클래스 제거
    $(".tabs_depth2 ul li").removeClass("active");

    // 클릭된 탭에 active 클래스 추가
    $(this).addClass("active");

    // 모든 탭 콘텐츠 숨김
    $(".tab-content2").hide();

    // 클릭된 탭에 해당하는 콘텐츠 표시
    var tabId = $(this).data("tab");
    $("#" + tabId).show();
  });
});

//달력
$(document).ready(function () {
  var today = new Date();
  var currentMonth = today.getMonth();
  var currentYear = today.getFullYear();
  var monthNames = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  function renderCalendar(month, year) {
    $(".current-month").text(year + "." + monthNames[month]);
    $(".days").empty();

    var firstDay = new Date(year, month).getDay();
    var daysInMonth = 32 - new Date(year, month, 32).getDate();

    for (var i = 0; i < firstDay; i++) {
      $(".days").append("<div></div>");
    }

    for (var i = 1; i <= daysInMonth; i++) {
      var date = new Date(year, month, i);
      var day = date.getDay();
      var dayClass = day === 0 ? "sunday" : ""; // 일요일에만 'sunday' 클래스 추가
      $(".days").append('<div class="' + dayClass + '">' + i + "</div>");
    }
  }

  $(".prev-month").click(function () {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
  });

  $(".next-month").click(function () {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
  });

  renderCalendar(currentMonth, currentYear);
});

$(function () {
  $("#datepicker").datepicker();
});

//환율정보 기준 레이어팝업
$(".radio_wrap").click(function () {
  $(".black-bg").css("display", "flex");
});
$(document).ready(function () {
  // 취소 버튼 클릭 시 black-bg 숨기기
  $(".btn-cancle").click(function () {
    $(".black-bg").hide();
  });
  // 확인 버튼 클릭 시 black-bg 숨기기
  $(".btn-primary").click(function () {
    // 여기에서 확인 동작 수행 (필요한 경우)
    $(".black-bg").hide();
  });
});

$(document).ready(function () {
  $('input[type="radio"][name="rate"]').change(function () {
    var selectedText = $('label[for="' + $(this).attr("id") + '"]').text();
    $(".point").text("[" + selectedText + "]");
  });
});

// 테이블 리사이저
// 컬럼 크기 저장 함수
function saveColumnWidths(table) {
  const headers = table.querySelectorAll("th");
  const widths = Array.from(headers).map(th => th.style.width);
  localStorage.setItem("columnWidths", JSON.stringify(widths)); // 컬럼 크기 저장
}

// 저장된 컬럼 크기 불러오기
function loadColumnWidths(table) {
  const widths = JSON.parse(localStorage.getItem("columnWidths"));
  if (widths) {
    const headers = table.querySelectorAll("th");
    headers.forEach((th, index) => {
      th.style.width = widths[index];
    });
  }
}

// 컬럼 리사이징 코드
document.querySelectorAll("th").forEach(function (th, index) {
  const resizer = document.createElement("div");
  resizer.className = "resizer";
  th.appendChild(resizer);

  let startX, startWidth;

  resizer.addEventListener("mousedown", function (e) {
    startX = e.pageX;
    startWidth = th.offsetWidth;

    document.addEventListener("mousemove", resizeColumn);
    document.addEventListener("mouseup", stopResize);
  });

  function resizeColumn(e) {
    const newWidth = startWidth + (e.pageX - startX);
    th.style.width = newWidth + "px";

    const table = th.closest("table");
    const otherHeaders = Array.from(table.querySelectorAll("th")).filter(header => header !== th);
    
    otherHeaders.forEach(header => {
      header.style.width = header.offsetWidth + "px";
    });
  }

  function stopResize() {
    const table = th.closest("table");
    saveColumnWidths(table); // 컬럼 크기 저장
    document.removeEventListener("mousemove", resizeColumn);
    document.removeEventListener("mouseup", stopResize);
  }
});

// 페이지 로드 시 저장된 컬럼 크기 불러오기
window.addEventListener("load", function () {
  const table = document.querySelector("table");
  loadColumnWidths(table); // 저장된 컬럼 크기 로드
});

//테이블 내용 편집
document.querySelectorAll("td.txt").forEach(function (cell) {
  cell.addEventListener("dblclick", function () {
    if (cell.querySelector("input")) return; // 이미 편집 중인 경우 무시

    const originalContent = cell.textContent;
    const input = document.createElement("input");
    input.value = originalContent;
    cell.textContent = ""; // 기존 내용을 지움
    cell.appendChild(input);
    input.focus();

    // Enter 키를 눌렀을 때 편집 완료
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        cell.textContent = input.value || originalContent;
      }
    });

    // 포커스를 잃으면 편집 완료
    input.addEventListener("blur", function () {
      cell.textContent = input.value || originalContent;
    });
  });
});



// 테이블 정렬 함수
function sortTable(table, columnIndex, isNumeric) {
  let rows = Array.from(table.querySelectorAll("tbody tr"));
  let sortDirection = table.querySelector(`th[data-index="${columnIndex}"]`).classList.contains('sort-asc') ? -1 : 1;

  rows.sort((rowA, rowB) => {
      let cellA = rowA.querySelectorAll('td')[columnIndex].innerText.trim();
      let cellB = rowB.querySelectorAll('td')[columnIndex].innerText.trim();
      
      if (isNumeric) {
          cellA = parseFloat(cellA.replace('%', '')) || 0; // 숫자 변환 (예: 1%, 30% 같은 형식 처리)
          cellB = parseFloat(cellB.replace('%', '')) || 0;
      }

      if (cellA < cellB) {
          return -1 * sortDirection;
      }
      if (cellA > cellB) {
          return 1 * sortDirection;
      }
      return 0;
  });

  // 테이블에 정렬된 행 다시 추가
  rows.forEach(row => table.querySelector('tbody').appendChild(row));

  // 정렬 상태 토글
  table.querySelectorAll('th').forEach(th => th.classList.remove('sort-asc', 'sort-desc'));
  table.querySelector(`th[data-index="${columnIndex}"]`).classList.add(sortDirection === 1 ? 'sort-asc' : 'sort-desc');
}

// 각 th에 클릭 이벤트 추가
document.querySelectorAll('th[data-index]').forEach(th => {
  th.addEventListener('click', function() {
      const table = th.closest('table');
      const columnIndex = th.getAttribute('data-index');
      const isNumeric = th.classList.contains('num'); // 숫자열인지 문자열인지 확인

      sortTable(table, columnIndex, isNumeric);
  });
});


// 전체 체크박스 토글 함수
function toggleCheckboxes(table, isChecked) {
  const checkboxes = table.querySelectorAll('tbody input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
      checkbox.checked = isChecked;
  });
}

// <th> 체크박스에 클릭 이벤트 추가
document.querySelectorAll('th input[type="checkbox"]').forEach(headerCheckbox => {
  headerCheckbox.addEventListener('change', function() {
      const table = this.closest('table'); // 해당 테이블 찾기
      const isChecked = this.checked; // <th> 체크박스의 체크 여부 확인
      toggleCheckboxes(table, isChecked); // 전체 체크박스 토글
  });
});

