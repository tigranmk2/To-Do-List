function f() {
  $(".myInput").val("");
  let items = document.querySelectorAll(".item");
  items = Array.from(items);
  document.querySelectorAll(".button").forEach((button, index) =>
    button.addEventListener("click", (e) => {
      console.log(items);
      if (!button.classList.contains("delete")) {
        button.classList.add("delete");
        setTimeout(() => {
          button.classList.remove("delete");
          for (let i = 0; i < items.length; i++) {
            $(items[index]).css("display", "none");
          }
        }, 3100);
      }
      e.preventDefault();
    })
  );
}

$(document).ready(function () {
  $(".btn").click(function () {
    if ($(".myInput").val() != "") {
      $("#myUL").append(`
        <div class="item"><li><p>${$(".myInput").val()}</p></li>
        <button class="button">
        <div class="trash">
          <div class="top">
            <div class="paper"></div>
          </div>
          <div class="box"></div>
          <div class="check">
            <svg viewBox="0 0 8 6">
              <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
            </svg>
          </div>
        </div>
        <span>Delete item</span>
      </button></div>
        `);
    }
    f();
  });

  f();
});
