<html>
<head>
</head>
<body>
  <script>
   let params = window.location.search
  console.log(params)
  if(params && params.length>0)
  {
    let redirectURl = params.substring(13,params.length)
    console.log(redirectURL)
    window.location.replace(redirectURl)
  }
</script>
</body>
</html>
