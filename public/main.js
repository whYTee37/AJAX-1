/*file: AJAX 的实现*/

getCSS.onclick = () => {
  //alert("1");
  const req = new XMLHttpRequest();
  req.open("GET", "/style.css");
  req.onreadystatechange = () => {
    if (req.readyState === 4 && req.status === 200) {
      const sty = document.createElement("style");
      sty.innerHTML = req.response;
      document.head.appendChild(sty);
    }
  };
  req.send();
};

getJS.onclick = function () {
  let req = new XMLHttpRequest();
  req.open("GET", "2.js");
  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
      const scr = document.createElement("script");
      scr.innerHTML = req.response;
      document.body.appendChild(scr);
    }
  };
  req.send();
};

getHTML.onclick = function () {
  let req = new XMLHttpRequest();
  req.open("GET", "/3.html");
  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
      let new_div = document.createElement("div");
      new_div.innerHTML = req.response;
      document.body.appendChild(new_div);
    }
  };
  req.send();
};

getXML.onclick = function () {
  let req = new XMLHttpRequest();
  req.open("GET", "4.xml");
  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
      let new_xml = document.createElement("xml");
      new_xml.innerHTML = req.response;
      document.body.appendChild(new_xml);
      //   let new_xml = req.responseXML;
      //   document.body.appendChild(new_xml);
    }
  };
  req.send();
};

getJSON.onclick = function () {
  let req = new XMLHttpRequest();
  req.open("GET", "5.json");
  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
      console.log(req.response);
      const obj = JSON.parse(req.response);
      console.log(obj);
    }
  };
  req.send();
};

let n = 2;
getPage.onclick = function () {
  let req = new XMLHttpRequest();
  req.open("GET", `/page${n}`);
  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
      const arr = JSON.parse(req.response);
      console.log(arr);
      arr.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = item.id;
        ulhere.appendChild(li);
      });
      n++;
    }
  };
  req.send();
};
