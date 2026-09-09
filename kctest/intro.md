# Killercoda content-rendering test

M1-IMG: <img src=x onerror="window.__KCX_IMG=1;document.title='KCX-IMG'">

M2-BOLD: <b>bold-html</b>

M3-SVG: <svg onload="window.__KCX_SVG=1"></svg>

M4-SCRIPT: <script>window.__KCX_SCRIPT=1</script>

M5-DETAILS: <details open ontoggle="window.__KCX_DETAILS=1">dd</details>

M6-ANCHOR: <a href="javascript:window.__KCX_AHREF=1">jsl</a>

M7-STYLEANIM: <style>@keyframes kcxanim{from{opacity:0.99}to{opacity:1}}</style><div style="animation-name:kcxanim" onanimationstart="window.__KCX_ANIM=1">zz</div>

M8-IFRAME: <iframe src="javascript:parent.__KCX_IFRAME=1"></iframe>

M9-MDLINK: [mdlink](javascript:window.__KCX_MDLINK=1)

M10-MDIMG: ![alt](x" onerror="window.__KCX_MDIMG=1)

M11-FORM: <form action="https://example.com"><input name=q><button>go</button></form>

M12-OBJ: <object data="javascript:window.__KCX_OBJ=1"></object>

M13-BODYATTR: <p onmouseover="window.__KCX_HOVER=1">hover-me</p>

M14-BASE: <base href="https://example.com/">

end-of-markers
