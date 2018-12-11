<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

    <head>
    <title>Login</title>

    <style type="text/css">

    body{
    background-color:lightgray;
}

p{
    color:black;
    font-family: Verdana;
    font-size:50px;
}
#titel{
    position:absolute;
    width:310px;
    height:50px;
    top: 50px;
    left:50%;
    margin-left:-100px;
}

#strich{
    <!--    border: 2px solid black; -->
    position:absolute;
    width:1250px;
    height:50px;
    top: 50px;
    <!--   background-color:#79bfbf; -->
    background-color:grey;
    padding:50px;


}

#bnummer{
    position: absolute;
    width: 330px;
    height: 50px;
    top: 350px;
    left:50%;
    margin-left:-165px;
}

#maLink{
    position: absolute;
    width: 6%;
    height: 3%;
    top: 97%;
    left:94%;

}
</style>
</head>

<body>

<div id="strich"></div>
    <div id="titel"><p>Login</p></div>
<div id="bnummer">
    <form>
    Username: <input type="passwort" name="buchungsnummer" maxlength="12" size="15"></input>
    <br/>
    Password : <input type="passwort" name="buchungsnummer" maxlength="12" size="15"></input>
    <input type="submit" value="bestätigen"> </input>
    </form>
    </div>
    <div id="maLink"><a href="http://localhost:63342/test1/maLogin.xhtml?_ijt=arjdkdhbj3lk2t29b9ns94o3gd">Mitarbeiter</a></div>
</body>
</html>