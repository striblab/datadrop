<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Three-month average winter minimum temperature</title>
  <meta name="description" content="Three-month average winter minimum temperature">
  <meta name="author" content="Frey Hargarten - StarTribune">

  <link href="../_common_resources/charts/c3-master/c3.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="../_common_resources/styles/startribune_dataviz_styles.css" />
  
  <style>
  .chatter { padding-left:20px; }
  #viewSwitch { text-align:center; }

  #chartMonth .c3-line-statewide-trend, #chartMonth .c3-line-northwest-trend, #chartMonth .c3-line-northeast-trend, #chartMonth .c3-line-southwest-trend, #chartMonth .c3-line-southeast-trend, #chartMonth .c3-line-central-trend, #chartMonth .c3-line-northcentral-trend, #chartMonth .c3-line-south-central-trend, #chartMonth .c3-line-west-central-trend, #chartMonth .c3-line-east-central-trend, #chartColdest .c3-line-downtown-ma { stroke-width: 3px !important; }
  </style> 
</head>

<body>
  <div id="wrapper">

<div>
<div class="chartHeader chartTitle">The coldest nights</div>
<div class="chatter">The coldest temperature recorded each winter in St. Cloud compared to the Twin Cities' airport.</div>
<div id="chartColdest" class="chart"></div>
<div class="chartFooter">
  <div class="sources">Source: MNDNR State Climatology Office</div>
  <div class="branding"><a href="http://startribune.com/datadrop" target="new_">startribune.com/datadrop</a></div>
</div>

<a href="https://docs.google.com/spreadsheets/d/1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs/pub?output=xlsx" target="new_"><button class="downloadButton">&nbsp;Download data</button></a>
  </div>
</div>
</body>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://d3js.org/d3.v3.min.js"></script>
<script src="http://d3js.org/topojson.v0.min.js"></script>
<script src="http://d3js.org/queue.v1.min.js"></script>
<script src="../_common_resources/charts/c3-master/c3.min.js"></script>

<script>
//LIVE JSON MAGIC

//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=minimum_temps
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=nw_freezing
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=ne_freezing
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=statewide_freezing
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=central_freezing
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=eastcentral_freezing
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=northcentral_freezing
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=southcentral_freezing
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=southeast_freezing
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=southwest_freezing
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=westcentral_freezing
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=coldest_winter_temp

// d3.json("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=sAynlThwgR8KyHGh6e8wLhoAkz3N2nlp8Eo_TZ4isiprjKeP40p4p-ivkbwXih7LjN1FQoQoZ0C0bS-tiTiSMoO9ozNGgCXCOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I25X5yNjlRvUCho3stDWMnmU&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX", function(error, dataLoad) {
// d3.json("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=UuHbVptH2xpgtFdeh1uv5k0eJpf3fjqWJzTjRYS266Px1WEXjNtFV8FMcKbhvXoVGE4YPRv9WGO0bS-tiTiSMuJ8OVCpuiLTOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I28GV9U-s-c-Ekxk5E7ctx4s&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX", function(error, dataLoadNW) {
// d3.json("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=qf7RZE1FoJLWeUXyarL97YjKNj6TfuZpY47fuSXTozUltqoeTWp8KALxs0b5ogMsvnGOOnQjpcRAs9lc1ZBdluCi3dY-s4QGOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I2yVQ94pjBEWukxk5E7ctx4s&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX", function(error, dataLoadNE) {
// d3.json("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=pw2cP3rWrFW2yhQhzCBbL9HMRMPJxmedDPdEln6WtYOW0ZFEh9mDYJafk1afT-XcyuE8O5sNXEoyXLS4VlqO4DUhoGccDkxAOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I23WNZXHv7ZlnDs9WyyWRQKAULMzMrbWT6A&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX", function(error, dataLoadST) {
// d3.json("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=AzX4RnwAFUj-fRaqfXoibiLoCsGUroRFYUyUIQfegLUbimgYlbmxxLxmbK-nRnlysmyQEAccAJYTb559ht2VfIe9gPC5iO8QOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I2_Fu-ibX7RhcrPoIPlil-_OcVzS3GHApng&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX", function(error, dataLoadCentral) {
// d3.json("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=V0aQKHrDXZsjjqb9U14npT7Wkvo4Rpl-NqyZxRYxBoP_ZZfXOHxG_PEjLM4UvAhGYkAeqAbUh4MTb559ht2VfIB2HKZtvfC2OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I21owPZezC5FEpW8OvX_vRmSvqnBPmmGKSg&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX", function(error, dataLoadECentral) {
// d3.json("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=GqtBcqMIQQoN1Rlcly9BK36mzvmfmxtZKevUHhjiyuS-tzakigWVzzrCw8cdGOac9Px7IJ60pAQTb559ht2VfEOqC_ZJy8soOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I26qy3G7f6Cct-YkTD-E8lm1m41tgWyMBYw&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX", function(error, dataLoadNCentral) {
// d3.json("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=qRNfKWTzbfJukken0VkzkrKGZc8j7l4v9G3THMDQ_kouaF5Wl3hPUwwqHmViaZY_ISeYPjmKwHsTb559ht2VfNAKOrzgxORfOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I2-rWe3ogulAF-YkTD-E8lm1m41tgWyMBYw&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX", function(error, dataLoadSCentral) {
// d3.json("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=D6MPdboaSRTcb_jh0fcxVQKXWpjk89d8bZOjNK-0OGPKkOov1-k3EQEetRTEeS9yknNy7flVQVbHm0TqVxM25G0ekjNkbwGQOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I2_keAFfiBHLmF9_iDrAE3HcULMzMrbWT6A&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX", function(error, dataLoadSE) {
// d3.json("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=VfvJkQkP6OTdzUb7wvlQfytSF1p0TZN3amCCef-4M5LmJV1CsrzpwtLpXowjnuOD4DHiUGSgN67Hm0TqVxM25Esghro5c88yOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I2_AHfkejeG6xF9_iDrAE3HcULMzMrbWT6A&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX", function(error, dataLoadSW) {
// d3.json("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=gMYmvqh-Q15LH66jdlXUdgnIC3T38vDs0RFZGD6IsVLmwK3PGeNc4x4qwj8UFeKk-AzTR2tbA4bHm0TqVxM25BbXyb37A6EWOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I28xaQQ-JG3A6pW8OvX_vRmSvqnBPmmGKSg&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX", function(error, dataLoadWCentral) {
// d3.json("https://script.googleusercontent.com/macros/echo?user_content_key=8EtQO2QxWvqwVrM8vaY8hP9E0lYRQ8Z1DGdzJG5OqokJnyA-T0mGRY9SoZ0nGfnTDJ3ZCiLuHpFcj9SFIdhVsqs7KHzOa9WkOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TuemWiCPnYU3v6YF6IJkSFYyyTJG-HL6oSfmK20SEw86uyLwhxRZulMt4JgiTXzIzW0Ar8EAym2_V157Et6E0L1fS_MxquqNUxwOOVrbyt14&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX", function(error, dataLoadColdest) {

<?php 

// $jsonData = file_get_contents("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=sAynlThwgR8KyHGh6e8wLhoAkz3N2nlp8Eo_TZ4isiprjKeP40p4p-ivkbwXih7LjN1FQoQoZ0C0bS-tiTiSMoO9ozNGgCXCOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I25X5yNjlRvUCho3stDWMnmU&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
// $jsonDataNW = file_get_contents("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=UuHbVptH2xpgtFdeh1uv5k0eJpf3fjqWJzTjRYS266Px1WEXjNtFV8FMcKbhvXoVGE4YPRv9WGO0bS-tiTiSMuJ8OVCpuiLTOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I28GV9U-s-c-Ekxk5E7ctx4s&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
// $jsonDataNE = file_get_contents("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=qf7RZE1FoJLWeUXyarL97YjKNj6TfuZpY47fuSXTozUltqoeTWp8KALxs0b5ogMsvnGOOnQjpcRAs9lc1ZBdluCi3dY-s4QGOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I2yVQ94pjBEWukxk5E7ctx4s&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
// $jsonDataST = file_get_contents("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=pw2cP3rWrFW2yhQhzCBbL9HMRMPJxmedDPdEln6WtYOW0ZFEh9mDYJafk1afT-XcyuE8O5sNXEoyXLS4VlqO4DUhoGccDkxAOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I23WNZXHv7ZlnDs9WyyWRQKAULMzMrbWT6A&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
// $jsonDataCentral = file_get_contents("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=AzX4RnwAFUj-fRaqfXoibiLoCsGUroRFYUyUIQfegLUbimgYlbmxxLxmbK-nRnlysmyQEAccAJYTb559ht2VfIe9gPC5iO8QOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I2_Fu-ibX7RhcrPoIPlil-_OcVzS3GHApng&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
// $jsonDataECentral = file_get_contents("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=V0aQKHrDXZsjjqb9U14npT7Wkvo4Rpl-NqyZxRYxBoP_ZZfXOHxG_PEjLM4UvAhGYkAeqAbUh4MTb559ht2VfIB2HKZtvfC2OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I21owPZezC5FEpW8OvX_vRmSvqnBPmmGKSg&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
// $jsonDataNCentral = file_get_contents("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=GqtBcqMIQQoN1Rlcly9BK36mzvmfmxtZKevUHhjiyuS-tzakigWVzzrCw8cdGOac9Px7IJ60pAQTb559ht2VfEOqC_ZJy8soOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I26qy3G7f6Cct-YkTD-E8lm1m41tgWyMBYw&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
// $jsonDataSCentral = file_get_contents("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=qRNfKWTzbfJukken0VkzkrKGZc8j7l4v9G3THMDQ_kouaF5Wl3hPUwwqHmViaZY_ISeYPjmKwHsTb559ht2VfNAKOrzgxORfOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I2-rWe3ogulAF-YkTD-E8lm1m41tgWyMBYw&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
// $jsonDataSE = file_get_contents("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=D6MPdboaSRTcb_jh0fcxVQKXWpjk89d8bZOjNK-0OGPKkOov1-k3EQEetRTEeS9yknNy7flVQVbHm0TqVxM25G0ekjNkbwGQOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I2_keAFfiBHLmF9_iDrAE3HcULMzMrbWT6A&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
// $jsonDataSW = file_get_contents("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=VfvJkQkP6OTdzUb7wvlQfytSF1p0TZN3amCCef-4M5LmJV1CsrzpwtLpXowjnuOD4DHiUGSgN67Hm0TqVxM25Esghro5c88yOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I2_AHfkejeG6xF9_iDrAE3HcULMzMrbWT6A&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
// $jsonDataWCentral = file_get_contents("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=gMYmvqh-Q15LH66jdlXUdgnIC3T38vDs0RFZGD6IsVLmwK3PGeNc4x4qwj8UFeKk-AzTR2tbA4bHm0TqVxM25BbXyb37A6EWOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFhxAHSsdnCbLgYzs-t-BG_5pX4e2x7SQRqq_eoV-bfPP7roXG_nhaeehRTHAhjVE2BM6mFz96I28xaQQ-JG3A6pW8OvX_vRmSvqnBPmmGKSg&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataColdest = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=8EtQO2QxWvqwVrM8vaY8hP9E0lYRQ8Z1DGdzJG5OqokJnyA-T0mGRY9SoZ0nGfnTDJ3ZCiLuHpFcj9SFIdhVsqs7KHzOa9WkOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TuemWiCPnYU3v6YF6IJkSFYyyTJG-HL6oSfmK20SEw86uyLwhxRZulMt4JgiTXzIzW0Ar8EAym2_V157Et6E0L1fS_MxquqNUxwOOVrbyt14&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");

?>

// var dataLoad = <?php echo $jsonData; ?>;
// var dataLoadNW = <?php echo $jsonDataNW; ?>;
// var dataLoadNE = <?php echo $jsonDataNE; ?>;
// var dataLoadST = <?php echo $jsonDataST; ?>;
// var dataLoadCentral = <?php echo $jsonDataCentral; ?>;
// var dataLoadECentral = <?php echo $jsonDataECentral; ?>;
// var dataLoadNCentral = <?php echo $jsonDataNCentral; ?>;
// var dataLoadSCentral = <?php echo $jsonDataSCentral; ?>;
// var dataLoadSE = <?php echo $jsonDataSE; ?>;
// var dataLoadSW = <?php echo $jsonDataSW; ?>;
// var dataLoadWCentral = <?php echo $jsonDataWCentral; ?>;
var dataLoadColdest = <?php echo $jsonDataColdest; ?>;

// var data = dataLoad.minimum_temps;
// var dataNW = dataLoadNW.nw_freezing;
// var dataNE = dataLoadNE.ne_freezing;
// var dataST = dataLoadST.statewide_freezing;
// var dataC = dataLoadCentral.central_freezing;
// var dataEC = dataLoadECentral.eastcentral_freezing;
// var dataNC = dataLoadNCentral.northcentral_freezing;
// var dataSC = dataLoadSCentral.southcentral_freezing;
// var dataSE = dataLoadSE.southeast_freezing;
// var dataSW = dataLoadSW.southwest_freezing;
// var dataWC = dataLoadWCentral.westcentral_freezing;
var dataColdest = dataLoadColdest.coldest_winter_temp;

var  padding = {
        top: 20,
        right: 40,
        bottom: 20,
        left: 40,
    };

//COLDEST TEMPS
var chartColdest = c3.generate({
        bindto: '#chartColdest',
        size: { height: 250 },
        padding: padding,
        data: {
            json: dataColdest,
            keys: {
                x: 'year',
                value: ['downtown_min','stcloud_min','downtown_ma']
                 // value: ['statewide','northwest','northeast','southwest','southeast','south-central','north-central','east-central','central']
            },
            names: {
              'downtown_min': 'Downtown Minneapolis/Airport',
              'stcloud_min': 'St. Cloud',
              'downtown_ma': '7-year Moving Average'
            },
            types: {
            'downtown_min': 'line',
            'stcloud_min': 'line',
            'downtown_ma': 'spline'
            }
        },
        line: {
          connectNull: true
        },
        axis: {
          y: {
            tick: {
             format: d3.format('r')
            }
        },
        x: {
            type: 'category',
            values: ['1901-1902', '1930-1931', '1959-1960', '1987-1988'],
            tick: {
                // format: '%Y',
                count: 6,
                multiline: false
            }
          }
        },
      subchart: { show: false },
        color: { pattern: ['#333',"#999","#9C0004"] },
    });

d3.select("#chartColdest svg .c3-chart-lines").append("line")          // attach a line
    .style("stroke", "black")  // colour the line
    .attr("x1", 0)     // x position of the first end of the line
    .attr("y1", -31)      // y position of the first end of the line
    .attr("x2", 300)     // x position of the second end of the line
    .attr("y2", -14); 
</script>

</html>