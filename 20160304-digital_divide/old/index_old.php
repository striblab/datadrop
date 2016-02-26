<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Digital Divide by the Numbers</title>
  <meta name="description" content="Digital Divide by the Numbers">
  <meta name="author" content="Jeff Hargarten - StarTribune">

  <link rel="stylesheet" href="../_common_resources/styles/startribune_dataviz_styles.css" />
  <link href="../_common_resources/charts/c3-master/c3.css" rel="stylesheet" type="text/css">
  
  <style>
    .wrapper-dropdown-1 { width:100%; }
    .wrapper-demo { width:100%; }

    .mn{ fill:#44c767; pointer-events: all; } 
    .state-groups:hover{ opacity:.5 !important; cursor:pointer; }
    .state-groups text{ font-size: 9px !important; fill:#fff !important; }
    .state-groups text:hover{ cursor:pointer; pointer-events: all; }
    text { font-family: sans-serif; font-size: 9px; font-color:#fff !important; fill:#000 !important; cursor:default; }

    .none{ fill:#fff; pointer-events: all; }
    text.none { fill:#000 !important; color:#000 !important; pointer-events: all; }
    .selected { stroke-width:2px; stroke:#333 !important; }
    .faded { opacity:.2 !important; }

    .states text{ color:white !important; font-size: 10px !important; pointer-events: all; }
    .dq1{ background-color:#040506; fill:#040506 !important; color:white !important; pointer-events: all; font-weight:bold; }
    .dq2{ background-color:#22282c; fill:#22282c !important; color:white !important; pointer-events: all; font-weight:bold; }
    .dq3{ background-color:#404b52; fill:#404b52 !important; color:white !important; pointer-events: all; font-weight:bold; }
    .dq4{ background-color:#6c7f8c; fill:#6c7f8c !important; color:white !important; pointer-events: all; font-weight:bold; }
    .mid{ fill:#ccc; }

    .aq1{ background-color:#a50f15; fill:#a50f15 !important; color:white !important; pointer-events: all; font-weight:bold; }
    .aq2{ background-color:#fb6a4a; fill:#fb6a4a !important; color:white !important; pointer-events: all; font-weight:bold; }
    .aq3{ background-color:#fcae91; fill:#fcae91 !important; color:white !important; pointer-events: all; font-weight:bold; }
    .aq4{ background-color:#bae4b3; fill:#bae4b3 !important; color:white !important; pointer-events: all; font-weight:bold; }
    .aq5{ background-color:#74c476; fill:#74c476 !important; color:white !important; pointer-events: all; font-weight:bold; }
    .aq6{ background-color:#006d2c; fill:#006d2c !important; color:white !important; pointer-events: all; font-weight:bold; }

    #cartoMapChatter div { display:inline-block; margin-left:5px; }

    .stateName { font-weight:900; }
    .countyName { font-weight:900; }

    .map { width:100%; }
    .map path:hover { fill:#333 !important; }

    #view { width:100%; }
    .switch { padding:10px; display:inline-block; text-align:center; width:100px; background-color:#ddd; font-weight:900; font-family:"Benton Sans",Helvetica,Arial,sans-serif; }
    .switch:hover, .selected { background-color:#333; color:#fff; cursor:pointer; }

    .myButton { background-color:#fff; ont-family:"Benton Sans",Helvetica,Arial,sans-serif !important; border:0; border-radius:0; color:#000; cursor: pointer; display: inline-block; font-family: arial; font-size: 1.2em; font-weight: 900; moz-border-radius:0; padding: 13px; text-decoration: none; webkit-border-radius:0; width: 48%; }
    .myButton:active { background-color: #333; }
    .myButton:hover { background-color: #333 !important; color:#fff; }
  </style> 
</head>

<body>
  <div id="wrapper">

    <div id="topChatter" class="chatter">
    <p>From handfuls of city blocks connected with fiberoptic Internet to neighborhoods where a quarter of residents don’t own computers, Minneapolis’ digital map looks like a patchwork of technological inequality, mirroring trends seen throughout Minnesota and the nation as a whole.</p>
    <p>Minnesota’s digital divide persists and threatens to deepen, despite success in recent years to close existing gaps. The state is rated above average in the nation for computer ownership and Internet access, with the highest adoption rates in the five-state region. Yet racial, socioeconomic and regional inequalities still exist and, according to experts, could get worse with upcoming technological shifts.</p>
    </div>

    <div class="section" id="national">      
      <div class="chartTitle">Metropolitan area digital adoption</div>
      <div class="chatter">The Twin Cities metro area has among the highest digital adoption rates in the country, with <span class="aq6">93.6 percent</span> owning computers and <span class="aq6">85.4 percent</span> having access to high-speed broadband.</div>
      <div class="map" id="us_map"><svg ></svg></div>
      <!-- width="700" height="500" viewBox="0 0 700 500" preserveAspectRatio="xMidYMid" -->
      <div id="quantize">
      <span class='legend'>
      <nav class='legend clearfix'>
      <span style='background:#fff;'>Less</span>
      <span class="aq1"></span>
      <span class="aq2"></span>
      <span class="aq3"></span>
      <span class="aq4"></span>
      <span class="aq5"></span>
      <span class="aq6"></span>
      <span style='background:#fff;'>More</span>
      </nav>
      </span>
      </div>
      <a href='javascript:void(0);' class='zoom'>Reset View</a>
      <div class="breaker"></div>
      <div class="source">Source: <a href="https://www.census.gov/econ/ict/" target="new_">U.S. Census Bureau 2013 Information & Communication Technology Survey</a></div>
      <div class="breaker"></div>

      <div class="chartTitle">State fibreoptic adoption</div>
      <div class="chatter">Fibreoptic connectivity across Minnesota is scarcer than in most other states with only <span class="dq4">17 percent</span> of the population covered among 61 different providers. Connectivity is set to expand over the new few years, mostly in the metro area.</div>
      <div class="chart" id="fiber_map"><svg width="550" height="400" viewBox="0 0 440 300" preserveAspectRatio="xMidYMid"></svg></div>
      <div id="legendContainer">
      <div id="quantize">
      <span class='legend'>
        <nav class='legend clearfix'>
          <span style='background:#fff;'>Less</span>
          <span class='dq4'></span>
          <span class='dq3'></span>
          <span class='dq2'></span>
          <span class='dq1'></span>
          <span style='background:#fff;'>More</span>
        </nav>
      </span>
      </div>
      </div>
      <a href='javascript:void(0);' class='zoom'>Reset View</a>
      <div class="breaker"></div>
      <div id="cartoMapChatter" class="chatter">National fiber coverage: <div class='dq3'>25%</div></div>
      <div class="breaker"></div>
      <div class="source">Source: <a href="http://broadbandnow.com/Fiber" target="new_">Broadband Now, February 23, 2015</a>
    </div>

    <div class="section" id="connected">
      <div class="filter">
        <div class="header">Connected Nation Survey</div>
        

      </div>
      <div class="chartTitle">Digital adoption by select states</div>
      <div class="chatter">Chatter</div>
      <div class="chart" id="connected_chart"><svg></svg></div>

      <div id="view">
        <div class="switch" data="Statewide">Statewide</div>
        <div class="switch" data="Among Adults Age 65 and Older">65+</div>
        <div class="switch" data="Among African Americans">Blacks</div>
        <div class="switch" data="Among Hispanics">Hispanics</div>
        <div class="switch" data="Among Households with Children">Children</div>
        <div class="switch" data="Among Low-Income Households">Income</div>
        <div class="switch" data="Among Rural Residents">Rural</div>
      </div>

        <div class="breaker"></div>
        <div class="source">Source: Connect Minnesota, <a href="http://mn.gov/deed/programs-services/broadband/task-force/" target="new_">Governor's Task Force on Broadband</a></div>
    </div>

    <div class="section" id="minnesota">
      <div class="chartTitle">Minnesota broadband adoption by county</div>
      <div class="chatter">About <span class="dq2">71 percent</span> of Minnesota households had access to non-mobile broadband in 2014, up from about <span class="dq3">62 percent</span> in 2012. Rural counties in Minnesota tend to have lower adoption rates and available, a challenge the Minnesota Department of Employment and Economic development has been tackling for years.</div>
      <div class="map" id="mn_map"><svg width="320" height="350" viewBox="0 0 500 550" preserveAspectRatio="xMidYMid"></svg></div>
      <div id="quantize">
      <span class='legend'>
        <nav class='legend clearfix'>
          <span style='background:#fff;'>Less</span>
          <span class='dq4'></span>
          <span class='dq3'></span>
          <span class='dq2'></span>
          <span class='dq1'></span>
          <span style='background:#fff;'>More</span>
        </nav>
      </span>
      </div>
      <div class="breaker"></div>
      <button id="old" class="myButton">2012</button>
      <button id="new" class="myButton">2014</button>
      <div class="breaker"></div>
      <div class="source">Source: Connect Minnesota, <a href="http://mn.gov/deed/programs-services/broadband/task-force/" target="new_">Governor's Task Force on Broadband</a></div>
    </div>

    <div class="breaker"></div>

    <div class="section" id="minneapolis">
      <div class="chartTitle">Minneapolis digital gaps</div>
      <div class="chatter">While digital adoption in Minneapolis is relatively high, gaps exist along lines of race, age, income an education.</div>
      <div class="source">Source: City of Minneapolis</div>

      <div class="chartTitle">The unemployed lag behind</div>
      <div class="chatter">Only <span class="dq4">65 percent</span> of unemployed Minneapolis residents looking for work have home Internet access.</div>
      <div class="source">Source: City of Minneapolis</div>

      <div class="chartTitle">Digital racial disparities</div>
      <div class="chatter">Only <span class="dq4">6 percent</span> of whites don’t have any Internet access at home, compared to <span class="dq3">24 percent</span> of African Americans and 10% of other races/multiracial or Hispanic respondents.</div>
      <div class="source">Source: City of Minneapolis</div>

      <div class="chartTitle">The Northside ranks lowest in digital access</div>
      <div class="chatter">North Minneapolis neighborhoods are usually further behind in computer ownership and high-speed Internet access than the rest of the city.</div>
      <div class="source">Source: City of Minneapolis</div>

      <div class="filter">
        <div data="2014">2014</div>
        <div data="2013">2013</div>
        <div data="2012">2012</div>
      </div>

      <div class="title">Digital Adoption by neighborhood</div>
      <div class="map" id="mpls_map"><svg width="320" height="350" viewBox="0 0 500 550" preserveAspectRatio="xMidYMid"></svg></div>
       <div id="quantize">
      <span class='legend'>
        <nav class='legend clearfix'>
          <span style='background:#fff;'>Less</span>
          <span class='dq4'></span>
          <span class='dq3'></span>
          <span class='dq2'></span>
          <span class='dq1'></span>
          <span style='background:#fff;'>More</span>
        </nav>
      </span>
      </div>
      <div class="breaker"></div>
      <div class="title">Digital adoption by neighborhood bloc</div>
      <div class="chart" id="mpls_chart"></div>
    </div>

    <div class="breaker"></div>

    <div class="section" id="survey">


      <div class="filter">
              <div id="selector">
  <section class="main">
        <div class="wrapper-demo">
          <div id="dd" class="wrapper-dropdown-1" tabindex="1">
            <span>Filter by survey question</span>
              <ul class="dropdown race" tabindex="1">
        <li data="q1">Please rate each of the following aspects of the City of Minneapolis.</li>
        <li data="q2">How important, if at all, is it to you to have each of the following at home? </li>
        <li data="q3">Minneapolis has an outdoor wireless network (WiFi) that covers 97% of the city. How familiar are you, if at all, with the availability of this WiFi network?</li>
        <li data="q4">Please indicate whether you have each of the following in your household.</li>
        <li data="q5">How often, if ever, do you access the Internet using each of the following?</li>
        <li data="q6">How often, if ever, do you use a computer or access the Internet in each of the following locations?</li>
        <li data="q7">How do you connect to the Internet at home?</li>
        <li data="q8">How do you get help with computer or Internet questions or problems?</li>
        <li data="q9">How frequently, if ever, do you do each of the following things on the Internet?</li>
        <li data="q10">How comfortable, if at all, are you at each of the following?</li> 
              </ul>
          </div>
        ​</div>
</section>
</div>
      </div>

      <div class="neighborhood">Neighborhood Name</div>
      <div class="chart" id="survey_chart"></div>
    </div>

    <div class="section">

  </div>
</body>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="../_common_resources/charts/c3-master/c3.min.js"></script>

<script>
//LIVE JSON MAGIC

//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=19UbRO-CAFgsvU9rnipW6v_5cQxqTrhJPHMiXvlIBm5M&sheet=mncounty_internet2014
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1J8ZCg7kqs89l2JDt2052cZsrF2yoA7bYj15n0ma8DhA&sheet=mplsSurvey2012
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1J8ZCg7kqs89l2JDt2052cZsrF2yoA7bYj15n0ma8DhA&sheet=mplsSurvey2013
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1J8ZCg7kqs89l2JDt2052cZsrF2yoA7bYj15n0ma8DhA&sheet=mplsSurvey2014
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1J8ZCg7kqs89l2JDt2052cZsrF2yoA7bYj15n0ma8DhA&sheet=broadbandAdoption
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1J8ZCg7kqs89l2JDt2052cZsrF2yoA7bYj15n0ma8DhA&sheet=mobileAdoption
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1J8ZCg7kqs89l2JDt2052cZsrF2yoA7bYj15n0ma8DhA&sheet=barriers
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1J8ZCg7kqs89l2JDt2052cZsrF2yoA7bYj15n0ma8DhA&sheet=fiberConnectivity
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1J8ZCg7kqs89l2JDt2052cZsrF2yoA7bYj15n0ma8DhA&sheet=metroConnectivity

//THESE LOAD DIFFERENT TABS OF THE GOOGLE SHEET INTO SEPERATE JSON STRINGS, USING THE ACTUAL URLS
<?php

$jsonDataUS = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=QNHpJhZqI826taeju_dSGU6_Z1jA6f7N7zV0ExdgNM0x_69NQ2wMmKOevpwsjQP7Wr0T25fQRXq8abqidd_qGYqlTY3UmS-dOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TDKmXXMxaxxYwQuY5LYBij5AHEx7MO3NlZ2a6-1TkrF_Oz4qafQOPPWDxbiqlNcUV35iDyrfKhro0Uwfj8pbYtdT1sxuBeTeH&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataMN = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=bfAafrZ1JHA-mEN5fNZlPeeO4SqNqwRK_CbBHujDP6LoUlry3fYmnM3XuhlsViVbvlncl3bZ1er6vbKcKFYo9zuJ5MR941E4OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TWqLFHFX8hLuo23BslZYE0XJD1yQTLpmvc4A4mu0_fDdPulE6XFXPB7WIIUegsI7a35iDyrfKhroQtn3ImUoawuSiiCLAyTfHNIjuh_ICuRU&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataFiber = file_get_contents("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=To3qOj6fNkLSqORwFgj7nCNA10pn72DLYTH4O4liIe0drNwjlx3Hpp19IRRkKlQ7hc1vMccykX99Ix-2z_QztL6PG8OxVGUcOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOH1aAzLwJHT6K97Xj7tLMTHEWS2EugyRTIYKZa9Cy9Sg38UsOMAH2udZhWN0j1uvorSp2X_A3mbahRGP7Yup8iLBtLXBexRYoROiIEeeGKVAQ&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataBarriers = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=fWHTm2aIIiCpTcKhgJHlhxfYk9x2AadRSd6WIImFgJyv2EsH0S06R-gTjfmIXOpEVWO4oiX3lwjvNqzqkQy-XSHoQMMgeWmZOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TDKmXXMxaxxYwQuY5LYBij5AHEx7MO3NlZ2a6-1TkrF_Oz4qafQOPPWDxbiqlNcUVKX_2MMxSu5S101E0xoZE9g&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataMobile = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=2Ja9ZxKxMPWpkdoquQcWW8jv0IuYn6T9p2vgPZDDjVMOQU0_svDbqc92gt33_rwPZ9QpRETUElbvNqzqkQy-XVndkTYdBp-FOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TDKmXXMxaxxYwQuY5LYBij5AHEx7MO3NlZ2a6-1TkrF_Oz4qafQOPPWDxbiqlNcUV35iDyrfKhroh4Ofjc5S_g7_DziKN7FRj&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataBroadband = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=GJXAgtj5iwoBvIRLyfJdi2lNTADM23__KHWWWiXS3EtQV3BMBHUcXAA_iSxAcELGmDkVGIdjodPRFz5ZdeIpObC_Rs2soYW3OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TDKmXXMxaxxYwQuY5LYBij5AHEx7MO3NlZ2a6-1TkrF_Oz4qafQOPPWDxbiqlNcUVKX_2MMxSu5SbjWR1VH_bhGo6IpkfrLjN&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonData2012 = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=UkqVif4S1lo-zwnIIsQ0UCSf1eSqqHQE8p6exPuaLOFATLf6Q5XIEhsteLFLoPgZ8uqPHwNi95oxxMkS4ESy-wuyWGayBGanOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TDKmXXMxaxxYwQuY5LYBij5AHEx7MO3NlZ2a6-1TkrF_Oz4qafQOPPWDxbiqlNcUV35iDyrfKhrrSfyPPgO8ZLY4_qvdbfkzN&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonData2013 = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=nLQq3JHtVmEVcESxuwQTLUpR2Z7BguC2Hhbt6ThDs82KwDWbrf86Nhine28lE4E750nRWiKkIEK3Xf01Ziswsu4LJ9ygEglcOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TDKmXXMxaxxYwQuY5LYBij5AHEx7MO3NlZ2a6-1TkrF_Oz4qafQOPPWDxbiqlNcUV35iDyrfKhrrSfyPPgO8ZLfe88XTNDkqz&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonData2014 = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=HiK9JbG6WJZ2TwIOz_3squtnmPKV06RGXWPanUuZV3hrOX2HAVHjzyEayZww6sTIVLdBcvCiaO63Xf01ZiswsgMyJKfXUR5pOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TDKmXXMxaxxYwQuY5LYBij5AHEx7MO3NlZ2a6-1TkrF_Oz4qafQOPPWDxbiqlNcUV35iDyrfKhrrSfyPPgO8ZLc6_7oqKIM6d&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataTest2014 = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=9B-AWywwxrR1TBeP9Ia3cXAIqYN1T86VynrSb5_fkHf9DL_z4AgKJPoSIuffDiHDfT_drofP9agv2QzIHhbNA2NX_mOIqL0rOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TuemWiCPnYU3v6YF6IJkSFYyyTJG-HL6oSfmK20SEw86uyLwhxRZulMt4JgiTXzIzGetL3GQdFGtzSS3bVLNjDQsWJUuuPAtW&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");


?>

//THESE ADD THEM TO JAVASCRIPT VARIABLES WE CAN ACCESS THROUGHOUT THE DOCUMENT
var dataLoadUS = <?php echo $jsonDataUS; ?>;
var dataLoadMN = <?php echo $jsonDataMN; ?>;
var dataLoadFiber = <?php echo $jsonDataFiber; ?>;
var dataLoadBarriers = <?php echo $jsonDataBarriers; ?>;
var dataLoadMobile = <?php echo $jsonDataMobile; ?>;
var dataLoadBroadband = <?php echo $jsonDataBroadband; ?>;
var dataLoad2012 = <?php echo $jsonData2012; ?>;
var dataLoad2013 = <?php echo $jsonData2013; ?>;
var dataLoad2014 = <?php echo $jsonData2014; ?>;
var dataLoadTest2014 = <?php echo $jsonDataTest2014; ?>;


var dataUS = dataLoadUS.metroConnectivity;
var dataFiber = dataLoadFiber.fiberConnectivity;
var dataMobile = dataLoadMobile.mobileAdoption;
var dataBarriers = dataLoadBarriers.barriers;
var dataBroadband = dataLoadBroadband.broadbandAdoption;
var dataMN = dataLoadMN.mncounty_internet2014;
var data2012 = dataLoad2012.mplsSurvey2012;
var data2013 = dataLoad2013.mplsSurvey2013;
var data2014 = dataLoad2014.mplsSurvey2014;
var dataTest = dataLoadTest2014.weather2014;

</script>

<script>
var q1 = "#c0e2ca";
var q2 = "#9ad3b5";
var q3 = "#73c5a0";
var q4 = "#4db68b";
var q5 = "#26a876";
var q6 = "#009961";

//MN BROADBAND MAP 2014
var projection7 = d3.geo.albersUsa()
    .scale(5037)
    .translate([50, 970]);
var path7 = d3.geo.path()
                 .projection(projection7);

var svg7 = d3.select("#mn_map svg");

d3.json("shapefiles/counties.json", function(json) {
        svg7.selectAll("path")
           .data(json.features)
           .enter()
           .append("path")
           .attr("d", path7)
           .attr("stroke-width", 3)
           .style("stroke", "white")
           .style("fill", function(d) {

            for (var i=0; i < dataMN.length; i++){
                  var j = Number(dataMN[i].y2014);
                if (d.properties.COUNTYNAME == dataMN[i].county) {
                    if (j > 75) { return q6; }
                    else if (j > 50) { return q5; }
                    else if (j > 40) { return q4; }
                    else if (j > 30) { return q3; }
                    else if (j > 20) { return q2; }
                    else if (j <= 20) { return q1; }
                        }
                      }
                   })
           .call(d3.helper.tooltip(
        function(d){
          for (var i=0; i < dataMN.length; i++){
                if (d.properties.COUNTYNAME == dataMN[i].county) {
          return "<div class='state'>" + d.properties.COUNTYNAME + "</div>" + "<hr><div class='broadband'>Broadband availability</div><div class='percentage'>" + dataMN[i].high_speed + "%</div>";
                      }
                    }
                  }
        ));
 });

//US DIGITAL ADOPTION
var width = $("#us_map").width(),
    height = 500,
    centered;

var projection = d3.geo.albersUsa().scale(800);
var path = d3.geo.path().projection(projection);

var svg = d3.select("#us_map svg")
    .attr("width", width)
    .attr("height", height);

var color1 = "#a7706b";
var color2 = "#79B0C5";
var basecolor = "#ddd";

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height);

var g = svg.append("g");

d3.json("shapefiles/states.json", function(json) {

        g.append("g")
           .attr("id", "states")
           .selectAll("path")
           .data(json.features)
           .enter()
           .append("path")
           .attr("d", path)
           .attr("stroke-width", 1.5)
           // .on("click", clicked)
           .style("stroke", "white")
           .text(function(d) { return d.properties.NAME; })
           .style("fill", "#ddd");

var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("circle")
            .attr("d", path.projection(projection));
        g.selectAll("path")  
            .attr("d", path.projection(projection)); 

  });


$(".zoom").click(function() {
  clicked2();
  $('#cartoMapChatter').html("National fiber coverage: <div class='dq3'>25%</div>");

  d3.selectAll(".state-groups rect").attr('class', function(d) {
         for (var i=0; i < dataFiber.length; i++) {
         if (d.state_full == dataFiber[i].state){
         if (dataFiber[i].pct_covered == 0) { return "none"; }
         if (dataFiber[i].pct_covered <= .2) { return "dq4"; }
         if (dataFiber[i].pct_covered <= .4) { return "dq3"; }
         if (dataFiber[i].pct_covered <= .6) { return "dq2"; }
         if (dataFiber[i].pct_covered <= 1) { return "dq1"; }
       }
      } 
  });
});


function clicked(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 4;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  g.selectAll("path")
      .classed("faded", true)
      .classed("active", centered && function(d) { return d === centered; });

  g.transition()
      .duration(750)
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
}

function clicked2(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 1;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  g.selectAll("path")
      .classed("faded", false)
      .classed("active", centered && function(d) { return d === centered; });

  g.transition()
      .duration(750)
.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
}

});

d3.json("shapefiles/metro_areas.json", function(json) {

        g.append("g")
           .attr("id", "states")
           .selectAll("path")
           .data(json.features)
           .enter()
           .append("path")
           .attr("d", path)
           .attr("stroke-width", 0)
           .on("mouseover", function(d) { d3.select(this).style("stroke", "black").style("stroke-width", 1) })
           .style("stroke", "white")
           .text(function(d) { return d.properties.NAME; })
           .attr("class", function(d) {
                for (var i=0; i < dataUS.length; i++){
                  if (d.properties.NAME == (dataUS[i].metro_area + ", " + dataUS[i].state)){
                    if (dataUS[i].high_speed_internet >= 85) { return "aq6"; }
                    else if (dataUS[i].high_speed_internet >= 75) { return "aq5"; }
                    else if (dataUS[i].high_speed_internet >= 70) { return "aq4"; }
                    else if (dataUS[i].high_speed_internet >= 65) { return "aq3"; }
                    else if (dataUS[i].high_speed_internet >= 60) { return "aq2"; }
                    else if (dataUS[i].high_speed_internet >= 50) { return "aq1"; }
                  }
                }    
                   })
             .call(d3.helper.tooltip(
        function(d, i){
          var metrics = "";
          var broadband = "";
          var computer = "";
                for (var i=0; i < dataUS.length; i++){
                  if (d.properties.NAME == (dataUS[i].metro_area + ", " + dataUS[i].state)){
                    broadband = dataUS[i].high_speed_internet;
                    computer = dataUS[i].with_a_computer;

                    if (dataUS[i].high_speed_internet >= 85) { var classMe = "aq6"; }
                    else if (dataUS[i].high_speed_internet >= 75) { var classMe =  "aq5"; }
                    else if (dataUS[i].high_speed_internet >= 70) { var classMe =  "aq4"; }
                    else if (dataUS[i].high_speed_internet >= 65) { var classMe =  "aq3"; }
                    else if (dataUS[i].high_speed_internet >= 60) { var classMe =  "aq2"; }
                    else if (dataUS[i].high_speed_internet >= 50) { var classMe =  "aq1"; }

                    if (dataUS[i].with_a_computer >= 85) { var classMe2 = "aq6"; }
                    else if (dataUS[i].with_a_computer >= 75) { var classMe2 =  "aq5"; }
                    else if (dataUS[i].with_a_computer >= 70) { var classMe2 =  "aq4"; }
                    else if (dataUS[i].with_a_computer >= 65) { var classMe2 =  "aq3"; }
                    else if (dataUS[i].with_a_computer >= 60) { var classMe2 =  "aq2"; }
                    else if (dataUS[i].with_a_computer >= 50) { var classMe2 =  "aq1"; }

                    metrics = "<div><span class='" + classMe + "'>" + broadband + "%</span> have high-speed broadband</div><div><span class='" + classMe2 + "'>" + computer + "%</span> have a computer</div>";

                  }

                }  

          return "<div class='countyName'>"+ d.properties.NAME + "</div>" + metrics;
        }
        ));

var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("circle")
            .attr("d", path.projection(projection));
        g.selectAll("path")  
            .attr("d", path.projection(projection)); 

  });


$(".zoom").click(function() {
  clicked2();
});


function clicked(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 4;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  g.selectAll("path")
      .classed("faded", true)
      .classed("active", centered && function(d) { return d === centered; });

  g.transition()
      .duration(750)
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
}

function clicked2(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 1;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  g.selectAll("path")
      .classed("faded", false)
      .classed("active", centered && function(d) { return d === centered; });

  g.transition()
      .duration(750)
.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
}

});

//US FIBER ADOPTION
var cartogram = {
    margin: {
        top: 40,
        right: 140,
        bottom: 0,
        left: 60
    },

    selector: '#fiber_map svg',

    init: function() {
        var self = this;

        self.$el = $(self.selector);

        self.width = 550 - self.margin.left - self.margin.right;
        self.height = 400 - self.margin.top - self.margin.bottom;

        self.svg = d3.select(self.selector)
            .attr('height', self.height + self.margin.top + self.margin.bottom)
            .attr('width', self.width + self.margin.left + self.margin.right)

        self.state_size = self.width / 12;
        self.state_padding = 2;

        self.map = self.svg.append('g')
            .attr('transform', 'translate(' + self.margin.left + ','
                  + self.margin.top + ')')

        self.drawMap();
    },

    drawMap: function() {
        var self = this;

        var states = self.map.selectAll('.states')
            .data(self.state_pos_co2)
            .enter().append('g')
            .attr('class', 'state-groups');

        var state = states.append('rect')
            .attr('id', function(d) {
                return d.state_postal + "d";
            })
            .attr('class', 'state')
            .attr('class', function(d) {
                  for (var i=0; i < dataFiber.length; i++) {
                    if (d.state_full == dataFiber[i].state){
                      if (dataFiber[i].pct_covered == 0) { return "none"; }
                      if (dataFiber[i].pct_covered <= .2) { return "dq4"; }
                      if (dataFiber[i].pct_covered <= .4) { return "dq3"; }
                      if (dataFiber[i].pct_covered <= .6) { return "dq2"; }
                      if (dataFiber[i].pct_covered <= 1) { return "dq1"; }
                    }
                  }
            })
            .attr('rx', 0)
            .attr('ry', 0)
            .attr('x', function(d) {
                return d.column * (self.state_size + self.state_padding);
            })
            .attr('y', function(d) {
                return d.row * (self.state_size + self.state_padding);
            })
            .attr('width', self.state_size)
            .attr('height', self.state_size)
            .on('click', function(d) {

               for (var i=0; i < dataFiber.length; i++) {
                    if (d.state_full == dataFiber[i].state){
                     $("#cartoMapChatter").html("<div class='stateName'>" + d.state_full + "</div><div class='pct'> | Percent covered: <span class='" +  d3.select(this).attr('class') + "'>" + d3.format('%')(dataFiber[i].pct_covered) + "</span> | </div><div class='providers'> Providers: " + dataFiber[i].providers + "</div>")
                    }
                  }

              d3.selectAll("rect").attr('class', function(d) {
                  return "faded";
            }); 
              d3.select(this).attr('class', function(d) {
                  for (var i=0; i < dataFiber.length; i++) {
                    if (d.state_full == dataFiber[i].state){
                      if (dataFiber[i].pct_covered == 0) { return "none"; }
                      if (dataFiber[i].pct_covered <= .2) { return "dq4"; }
                      if (dataFiber[i].pct_covered <= .4) { return "dq3"; }
                      if (dataFiber[i].pct_covered <= .6) { return "dq2"; }
                      if (dataFiber[i].pct_covered <= 1) { return "dq1"; }
                    }
                  }
            });
        });

        var text = states.append('text')
            .attr('class', 'state-label')
            .attr('class', function(d) {
               for (var i=0; i < dataFiber.length; i++) {
                    if (d.state_full == dataFiber[i].state){
                      if (dataFiber[i].pct_covered == 0) { return "none"; }
                      if (dataFiber[i].pct_covered <= .2) { return "dq4"; }
                      if (dataFiber[i].pct_covered <= .4) { return "dq3"; }
                      if (dataFiber[i].pct_covered <= .6) { return "dq2"; }
                      if (dataFiber[i].pct_covered <= 1) { return "dq1"; }
                    }
                  }
            })
            .attr('dominant-baseline', 'central')
            .attr('x', function(d) {
                return (d.column * (self.state_size + self.state_padding))
                        + self.state_size / 2; })
            .attr('y', function(d) {
                return (d.row * (self.state_size + self.state_padding))
                    + self.state_size / 2; })
            .style('text-anchor', 'middle')
            .on('click', function(d) { 
                for (var i=0; i < dataFiber.length; i++) {
                    if (d.state_full == dataFiber[i].state){
                     $("#cartoMapChatter").html("<div class='stateName'>" + d.state_full + "</div><div class='pct'> | Percent covered: <span class='" +  d3.select(this.parentNode).select("rect").attr('class') + "'>" + d3.format('%')(dataFiber[i].pct_covered) + "</span> | </div><div class='providers'> Providers: " + dataFiber[i].providers + "</div>")
                    }
                  }

             d3.selectAll("rect").attr('class', function(d) {
                return "faded";
            }); 
              d3.select(this.parentNode).select("rect").attr('class', function(d) {
                for (var i=0; i < dataFiber.length; i++) {
                    if (d.state_full == dataFiber[i].state){
                      if (dataFiber[i].pct_covered == 0) { return "none"; }
                      if (dataFiber[i].pct_covered <= .2) { return "dq4"; }
                      if (dataFiber[i].pct_covered <= .4) { return "dq3"; }
                      if (dataFiber[i].pct_covered <= .6) { return "dq2"; }
                      if (dataFiber[i].pct_covered <= 1) { return "dq1"; }
                    }
                  }
            });
      })
            .text(function(d) {
                return d.state_postal;
            });
    },

    state_pos_co2: [{'state_full':'Alabama','state_postal':'AL','row':5,'column':6,'state_total_old':'32','state_total_new':'25','state_change':'-63%','color':'dq1'},
        {'state_full':'Alaska','state_postal':'AK','row':6,'column':0,'state_total_old':'0','state_total_new':'0','state_change':'Insufficient data','color':'none'},
        {'state_full':'Arizona','state_postal':'AZ','row':4,'column':1,'state_total_old':'14','state_total_new':'36','state_change':'+36%','color':'dq7'},
        {'state_full':'Arkansas','state_postal':'AR','row':4,'column':4,'state_total_old':'36','state_total_new':'43','state_change':'-33%','color':'dq3'},
        {'state_full':'California','state_postal':'CA','row':3,'column':0,'state_total_old':'358','state_total_new':'267','state_change':'-25%','color':'dq3'},
        {'state_full':'Colorado','state_postal':'CO','row':3,'column':2,'state_total_old':'124','state_total_new':'93','state_change':'-33%','color':'dq3'},
        {'state_full':'Connecticut','state_postal':'CT','row':2,'column':9,'state_total_old':'0','state_total_new':'6','state_change':'Insufficient data','color':'none'},
        {'state_full':'D.C.','state_postal':'DC','row':4,'column':8,'state_total_old':'0','state_total_new':'0','state_change':'Insufficient data','color':'none'},
        {'state_full':'Delaware','state_postal':'DE','row':3,'column':9,'state_total_old':'3','state_total_new':'3','state_change':'-100%','color':'dq1'},
        {'state_full':'Florida','state_postal':'FL','row':6,'column':8,'state_total_old':'150','state_total_new':'136','state_change':'-14%','color':'dq4'},
        {'state_full':'Georgia','state_postal':'GA','row':5,'column':7,'state_total_old':'77','state_total_new':'59','state_change':'-38%','color':'dq3'},
        {'state_full':'Hawaii','state_postal':'HI','row':6,'column':-1,'state_total_old':'0','state_total_new':'11','state_change':'Insufficient data','color':'none'},
        {'state_full':'Idaho','state_postal':'ID','row':1,'column':1,'state_total_old':'71','state_total_new':'68','state_change':'-21%','color':'dq3'},
        {'state_full':'Illinois','state_postal':'IL','row':1,'column':6,'state_total_old':'251','state_total_new':'221','state_change':'-14%','color':'dq4'},
        {'state_full':'Indiana','state_postal':'IN','row':2,'column':5,'state_total_old':'216','state_total_new':'220','state_change':'0%','color':'mid'},
        {'state_full':'Iowa','state_postal':'IA','row':2,'column':4,'state_total_old':'228','state_total_new':'295','state_change':'+29%','color':'dq6'},
        {'state_full':'Kansas','state_postal':'KS','row':4,'column':3,'state_total_old':'215','state_total_new':'205','state_change':'-6%','color':'dq4'},
        {'state_full':'Kentucky','state_postal':'KY','row':3,'column':5,'state_total_old':'308','state_total_new':'162','state_change':'-49%','color':'dq2'},
        {'state_full':'Louisiana','state_postal':'LA','row':5,'column':4,'state_total_old':'30','state_total_new':'26','state_change':'-53%','color':'dq1'},
        {'state_full':'Maine','state_postal':'ME','row':-1,'column':10,'state_total_old':'0','state_total_new':'14','state_change':'Insufficient data','color':'none'},
        {'state_full':'Maryland','state_postal':'MD','row':3,'column':8,'state_total_old':'26','state_total_new':'27','state_change':'-46%','color':'dq2'},
        {'state_full':'Massachusetts','state_postal':'MA','row':1,'column':9,'state_total_old':'0','state_total_new':'11','state_change':'Insufficient data','color':'none'},
        {'state_full':'Michigan','state_postal':'MI','row':1,'column':7,'state_total_old':'102','state_total_new':'179','state_change':'+74%','color':'dq8'},
        {'state_full':'Minnesota','state_postal':'MN','row':1,'column':4,'state_total_old':'153','state_total_new':'210','state_change':'+37%','color':'dq7'},
        {'state_full':'Mississippi','state_postal':'MS','row':5,'column':5,'state_total_old':'65','state_total_new':'46','state_change':'-57%','color':'dq1'},
        {'state_full':'Missouri','state_postal':'MO','row':3,'column':4,'state_total_old':'264','state_total_new':'288','state_change':'+5%','color':'dq5'},
        {'state_full':'Montana','state_postal':'MT','row':1,'column':2,'state_total_old':'145','state_total_new':'139','state_change':'-10%','color':'dq4'},
        {'state_full':'Nebraska','state_postal':'NE','row':3,'column':3,'state_total_old':'199','state_total_new':'179','state_change':'-11%','color':'dq4'},
        {'state_full':'Nevada','state_postal':'NV','row':2,'column':1,'state_total_old':'0','state_total_new':'11','state_change':'Insufficient data','color':'none'},
        {'state_full':'New Hampshire','state_postal':'NH','row':0,'column':10,'state_total_old':'0','state_total_new':'4','state_change':'Insufficient data','color':'none'},
        {'state_full':'New Jersey','state_postal':'NJ','row':2,'column':8,'state_total_old':'8','state_total_new':'19','state_change':'+50%','color':'dq8'},
        {'state_full':'New Mexico','state_postal':'NM','row':4,'column':2,'state_total_old':'24','state_total_new':'14','state_change':'-100%','color':'dq1'},
        {'state_full':'New York','state_postal':'NY','row':1,'column':8,'state_total_old':'203','state_total_new':'135','state_change':'-38%','color':'dq3'},
        {'state_full':'North Carolina','state_postal':'NC','row':4,'column':6,'state_total_old':'156','state_total_new':'111','state_change':'-35%','color':'dq3'},
        {'state_full':'North Dakota','state_postal':'ND','row':1,'column':3,'state_total_old':'84','state_total_new':'117','state_change':'+36%','color':'dq7'},
        {'state_full':'Ohio','state_postal':'OH','row':2,'column':6,'state_total_old':'258','state_total_new':'217','state_change':'-18%','color':'dq4'},
        {'state_full':'Oklahoma','state_postal':'OK','row':5,'column':3,'state_total_old':'46','state_total_new':'53','state_change':'-30%','color':'dq3'},
        {'state_full':'Oregon','state_postal':'OR','row':2,'column':0,'state_total_old':'40','state_total_new':'61','state_change':'+20%','color':'dq6'},
        {'state_full':'Pennsylvania','state_postal':'PA','row':2,'column':7,'state_total_old':'276','state_total_new':'182','state_change':'-34%','color':'dq3'},
        {'state_full':'Rhode Island','state_postal':'RI','row':2,'column':10,'state_total_old':'0','state_total_new':'0','state_change':'Insufficient data','color':'none'},
        {'state_full':'South Carolina','state_postal':'SC','row':4,'column':7,'state_total_old':'16','state_total_new':'30','state_change':'+38%','color':'dq7'},
        {'state_full':'South Dakota','state_postal':'SD','row':2,'column':3,'state_total_old':'88','state_total_new':'108','state_change':'+17%','color':'dq6'},
        {'state_full':'Tennessee','state_postal':'TN','row':4,'column':5,'state_total_old':'244','state_total_new':'147','state_change':'-42%','color':'dq2'},
        {'state_full':'Texas','state_postal':'TX','row':6,'column':3,'state_total_old':'223','state_total_new':'159','state_change':'+29%','color':'dq3'},
        {'state_full':'Utah','state_postal':'UT','row':3,'column':1,'state_total_old':'24','state_total_new':'24','state_change':'-67%','color':'dq1'},
        {'state_full':'Vermont','state_postal':'VT','row':0,'column':9,'state_total_old':'7','state_total_new':'15','state_change':'-57%','color':'dq1'},
        {'state_full':'Virginia','state_postal':'VA','row':3,'column':7,'state_total_old':'130','state_total_new':'123','state_change':'-10%','color':'dq4'},
        {'state_full':'Washington','state_postal':'WA','row':1,'column':0,'state_total_old':'88','state_total_new':'63','state_change':'-39%','color':'dq3'},
        {'state_full':'West Virginia','state_postal':'WV','row':3,'column':6,'state_total_old':'9','state_total_new':'22','state_change':'0%','color':'mid'},
        {'state_full':'Wisconsin','state_postal':'WI','row':1,'column':5,'state_total_old':'279','state_total_new':'242','state_change':'-15%','color':'dq4'},
        {'state_full':'Wyoming','state_postal':'WY','row':2,'column':2,'state_total_old':'33','state_total_new':'37','state_change':'-21%','color':'dq3'}]

};

$(document).ready(function() {
cartogram.init();
});

//MINNEAPOLIS MAP
var projection2 = d3.geo.albersUsa()
    .scale(5037)
    .translate([50, 970]);
var path2 = d3.geo.path().projection(projection2);
var svg2 = d3.select("#mpls_map svg");

d3.json("shapefiles/mpls.json", function(json) {
        svg2.selectAll("path")
           .data(json.features)
           .enter()
           .append("path")
           .attr("d", path)
           .attr("stroke-width", 2.5)
           .style("stroke", "white")
           .style("fill", function(d) {

          })
             .call(d3.helper.tooltip(function(d){
         
            }
        ));
 });
</script>
<script>
//TOOLTIP STUFF
d3.helper = {};

d3.helper.tooltip = function(accessor){
    return function(selection){
        var tooltipDiv;
        var bodyNode = d3.select('body').node();
        selection.on("mouseover", function(d, i){
            // Clean up lost tooltips
            d3.select('body').selectAll('div.tooltip').remove();
            // Append tooltip
            tooltipDiv = d3.select('body').append('div').attr('class', 'tooltip');
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style('left', (absoluteMousePos[0] + 10)+'px')
                .style('top', (absoluteMousePos[1] - 15)+'px')
                .style('position', 'absolute') 
                .style('z-index', 1001);
            // Add text using the accessor function
            var tooltipText = accessor(d, i) || '';
            // Crop text arbitrarily
            //tooltipDiv.style('width', function(d, i){return (tooltipText.length > 80) ? '300px' : null;})
            //    .html(tooltipText);
        })
        .on('mousemove', function(d, i) {
            // Move tooltip
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style('left', (absoluteMousePos[0] + 10)+'px')
                .style('top', (absoluteMousePos[1] - 15)+'px')
            var tooltipText = accessor(d, i) || '';
            tooltipDiv.html(tooltipText);
        })
        .on("mouseout", function(d, i){
            // Remove tooltip
            tooltipDiv.remove();
        });
    };
};

function update(stuff){
 
var factor3 = stuff;

return factor3;
                               
}
</script>
<script>
var  padding = {
        top: 40,
        right: 40,
        bottom: 30,
        left: 40,
    };

var  padding_bars = {
        top: 40,
        right: 40,
        bottom: 30,
        left: 40,
    };

//CONNECTED NATION CHART
var connectedNation = c3.generate({
        bindto: '#connected_chart',
        padding: padding,
        data: {
            json: dataBroadband,
            keys: {
                x: 'state',
                value: ['y2010','y2011','y2012','y2013']
            },
            names: {
              'y2010': '2010',
              'y2011': '2011',
              'y2012': '2012',
              'y2013': '2013'
            }
        },
       bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
      },
        axis: {
          y: {
            tick: {
             values: ['-23', '0', '20', '40', '60', '80'],
             format: d3.format('r')
            }
        },
        x: {
            type: 'category',
            // tick: {
            //     format: '%Y-%m-%d',
            //     count: 4,
            //     multiline: false
            // }
          }
        },
      subchart: { show: true },
        color: { pattern: ['#801515', '#E7A9A9', '#333'] },
    });

//Minneapolis Tech Survey Chart
var chartMPLS = c3.generate({
    bindto: '#mpls_chart',
    padding: padding,
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
        ],
        types: {
            data1: 'bar',
        }
    },
    axis: {
        rotated: true
    }
});
</script>

<script type="text/javascript">
$(".myButton").click(function() {
  clicked2();
});
      
      function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
      }
      DropDown.prototype = {
        initEvents : function() {
          var obj = this;

          obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
          });

          obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
          });
        },
        getValue : function() {
          return this.val;
        },
        getIndex : function() {
          return this.index;
        }
      }

      $(function() {

        var dd = new DropDown( $('#dd') );
        var dd2 = new DropDown( $('#ddY') );

        $(document).click(function() {
          // all dropdowns
          $('.wrapper-dropdown-1').removeClass('active');
        });

      });

</script>
</html>