export default {
  async fetch(request, env, context) {
	const { CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN } = env;
    const endpoint = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/stream?direct_user=true`;
	const response = await fetch(endpoint, {
		method: 'POST',
		headers: {
			'Authorization': `bearer ${CLOUDFLARE_API_TOKEN}`,
			'Tus-Resumable': '1.0.0',
			'Upload-Length': request.headers.get('Upload-Length'),
			'Upload-Metadata': request.headers.get('Upload-Metadata'),
		},
	});

	const destination = response.headers.get('Location');

    var html1 = `<html>
	<head>
		<link href="https://releases.transloadit.com/uppy/v3.0.1/uppy.min.css" rel="stylesheet" />
	<script nonce="28307df3-ed32-4975-a7f2-ccc104cea4e3">(function(w,d){!function(bv,bw,bx,by){bv[bx]=bv[bx]||{};bv[bx].executed=[];bv.zaraz={deferred:[],listeners:[]};bv.zaraz.q=[];bv.zaraz._f=function(bz){return function(){var bA=Array.prototype.slice.call(arguments);bv.zaraz.q.push({m:bz,a:bA})}};for(const bB of["track","set","debug"])bv.zaraz[bB]=bv.zaraz._f(bB);bv.zaraz.init=()=>{var bC=bw.getElementsByTagName(by)[0],bD=bw.createElement(by),bE=bw.getElementsByTagName("title")[0];bE&&(bv[bx].t=bw.getElementsByTagName("title")[0].text);bv[bx].x=Math.random();bv[bx].w=bv.screen.width;bv[bx].h=bv.screen.height;bv[bx].j=bv.innerHeight;bv[bx].e=bv.innerWidth;bv[bx].l=bv.location.href;bv[bx].r=bw.referrer;bv[bx].k=bv.screen.colorDepth;bv[bx].n=bw.characterSet;bv[bx].o=(new Date).getTimezoneOffset();if(bv.dataLayer)for(const bI of Object.entries(Object.entries(dataLayer).reduce(((bJ,bK)=>({...bJ[1],...bK[1]})))))zaraz.set(bI[0],bI[1],{scope:"page"});bv[bx].q=[];for(;bv.zaraz.q.length;){const bL=bv.zaraz.q.shift();bv[bx].q.push(bL)}bD.defer=!0;for(const bM of[localStorage,sessionStorage])Object.keys(bM||{}).filter((bO=>bO.startsWith("_zaraz_"))).forEach((bN=>{try{bv[bx]["z_"+bN.slice(7)]=JSON.parse(bM.getItem(bN))}catch{bv[bx]["z_"+bN.slice(7)]=bM.getItem(bN)}}));bD.referrerPolicy="origin";bD.src="/cdn-cgi/zaraz/s.js?z="+btoa(encodeURIComponent(JSON.stringify(bv[bx])));bC.parentNode.insertBefore(bD,bC)};["complete","interactive"].includes(bw.readyState)?zaraz.init():bv.addEventListener("DOMContentLoaded",zaraz.init)}(w,d,"zarazData","script");})(window,document);</script></head>
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>OpenVideo</title>
    <link rel="shortcut icon" href="assets/images/favicon.ico">
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://openvideo.net/assets/css/styles.css" type="text/css">
    
<script nonce="4096b136-07d9-4ffd-bea0-56f2f58a21f5">(function(w,d){!function(f,g,h,i){f[h]=f[h]||{};f[h].executed=[];f.zaraz={deferred:[],listeners:[]};f.zaraz.q=[];f.zaraz._f=function(j){return function(){var k=Array.prototype.slice.call(arguments);f.zaraz.q.push({m:j,a:k})}};for(const l of["track","set","debug"])f.zaraz[l]=f.zaraz._f(l);f.zaraz.init=()=>{var m=g.getElementsByTagName(i)[0],n=g.createElement(i),o=g.getElementsByTagName("title")[0];o&&(f[h].t=g.getElementsByTagName("title")[0].text);f[h].x=Math.random();f[h].w=f.screen.width;f[h].h=f.screen.height;f[h].j=f.innerHeight;f[h].e=f.innerWidth;f[h].l=f.location.href;f[h].r=g.referrer;f[h].k=f.screen.colorDepth;f[h].n=g.characterSet;f[h].o=(new Date).getTimezoneOffset();if(f.dataLayer)for(const s of Object.entries(Object.entries(dataLayer).reduce(((t,u)=>({...t[1],...u[1]})))))zaraz.set(s[0],s[1],{scope:"page"});f[h].q=[];for(;f.zaraz.q.length;){const v=f.zaraz.q.shift();f[h].q.push(v)}n.defer=!0;for(const w of[localStorage,sessionStorage])Object.keys(w||{}).filter((y=>y.startsWith("_zaraz_"))).forEach((x=>{try{f[h]["z_"+x.slice(7)]=JSON.parse(w.getItem(x))}catch{f[h]["z_"+x.slice(7)]=w.getItem(x)}}));n.referrerPolicy="origin";n.src="/cdn-cgi/zaraz/s.js?z="+btoa(encodeURIComponent(JSON.stringify(f[h])));m.parentNode.insertBefore(n,m)};["complete","interactive"].includes(g.readyState)?zaraz.init():f.addEventListener("DOMContentLoaded",zaraz.init)}(w,d,"zarazData","script");})(window,document);</script></head>
<body>
    
    <nav class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header text-center" style="padding:10px">
            <a class="" href="https://openvideo.net"><img src="https://openvideo.net/assets/images/logo.png" title="OpenVideo" height="33" /></a>
        </div>
        <ul class="nav navbar-nav text-center">
          <li class="active"><a href="https://openvideo.net">Upload</a></li>
          <li><a href="hls-player">Player</a></li>  
        </ul>
      </div>
    </nav>

    <div class="container">

        <div class="col-md-12">
              <div class="row">
                <div class="col-md-12">
                    <h2 class="text-center"><b>Upload Video</b></h2>
                    <div class="form-group" style="margin: 20px 0px;">
	<body>
		<div id="drag-drop-area" style="height: 300px"></div>
		<div class="for-ProgressBar"></div>
    <button class="upload-button" style="font-size: 30px; margin: 20px">Upload</button>
		<div class="uploaded-files" style="margin-top: 50px">
			<ol></ol>
		</div>
		<script type="module">
			import {
				Uppy,
				Tus,
				DragDrop,
				ProgressBar,
			} from 'https://releases.transloadit.com/uppy/v3.0.1/uppy.min.mjs';

			const uppy = new Uppy({ debug: true, autoProceed: true });

			const onUploadSuccess = el => (file, response) => {
				const li = document.createElement('li');
				const a = document.createElement('a');
				a.href = response.uploadURL;
				a.target = '_blank';
				a.appendChild(document.createTextNode(file.name));
				li.appendChild(a);

				document.querySelector(el).appendChild(li);
			};

			uppy
				.use(DragDrop, { target: '#drag-drop-area' })
				.use(Tus, { endpoint: '/get-url', chunkSize: 150 * 1024 * 1024 })
				.use(ProgressBar, { target: '.for-ProgressBar', hideAfterFinish: false })
				.on('upload-success', onUploadSuccess('.uploaded-files ol'));

			const uploadBtn = document.querySelector('button.upload-button');
			uploadBtn.addEventListener('click', () => uppy.upload());
		</script>
        <div class="navbar navbar-inverse navbar-fixed-bottom" role="navigation" style="margin-top: 10px; margin-bottom: 0px">
        <div class="container">
            <div class="navbar-text text-center" style="float: none;">
                &copy; 2022 Openvideo.net
            </div>
        </div>
    </div>
	</body>
</html>`;

	return new Response(html1, {
		headers: {
			'Access-Control-Expose-Headers': 'Location',
			'Access-Control-Allow-Headers': '*',
			'Access-Control-Allow-Origin': '*',
			"content-type": "text/html;charset=UTF-8",
			'Location': destination,
      },
    });
  },
};
