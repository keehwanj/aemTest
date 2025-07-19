<%@include file="/libs/foundation/global.jsp"%>
<ul class="tabs" data-tabs="tabs">
  <li class="active"><a href="#tab1">tab 1</a></li>
  <li><a href="#tab2">tab 2</li>
</ul>

<div id="my-tab-content" class="tab-content">
  <div class="tab-pane" id="tab1">
      <h1>Tab1</h1>
      <p>orange orange orange orange orange</p>
  </div>
  <div class="tab-pane" id="tab2">
     <h1>Tab2</h1>
     <p>blue blue blue blue blue</p>
  </div>
</div>
<script> 
$(function() {
    $('.tabs').bind('click', function (e) {
        // e.target is the new active tab according to docs
        // so save the reference in case it's needed later on
        window.activeTab = e.target;
        // display the alert
        alert("hello");
        // Load data etc
    });
});
</script>

