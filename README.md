# back
back lib

#### link js
```javascript
<script src="https://backpackerxl.github.io/back/dist/back-render.min.js" ></script>
```

#### use 

```javascript
const ulDom = document.querySelector("xxxxx"),
      rightPro = document.querySelector("xxxx");
ulDom.innerHTML = back.render(tplNameList, <Array> data);
rightPro.innerHTML = back.render(tplProductList, <Array> data);
back.currentLight(ulDom, 0);
```
