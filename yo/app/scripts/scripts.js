




    $(document).ready(function($){



		function saveHtml() {
			webpage = '<html>\n<head>\n<script type="text/javascript" src="http://www.francescomalagrino.com/BootstrapPageGenerator/3/js/jquery-2.0.0.min.js"></script>\n<script type="text/javascript" src="http://www.francescomalagrino.com/BootstrapPageGenerator/3/js/jquery-ui"></script>\n<link href="http://www.francescomalagrino.com/BootstrapPageGenerator/3/css/bootstrap-combined.min.css" rel="stylesheet" media="screen">\n<script type="text/javascript" src="http://www.francescomalagrino.com/BootstrapPageGenerator/3/js/bootstrap.min.js"></script>\n</head>\n<body>\n'+ webpage +'\n</body>\n</html>';
			/* FM aka Vegetam Added the function that save the file in the directory Downloads. Work only to Chrome Firefox And IE*/
			if (navigator.appName =='Microsoft Internet Explorer' && window.ActiveXObject)
			{
				var locationFile = location.href.toString();
				var dlg = false;
				with(document){
					ir=createElement('iframe');
					ir.id='ifr';
					ir.location='about.blank';
					ir.style.display='none';
					body.appendChild(ir);
					with(getElementById('ifr').contentWindow.document){
						open('text/html', 'replace');
						charset = 'utf-8';
						write(webpage);
						close();
						document.charset = 'utf-8';
						dlg = execCommand('SaveAs', false, locationFile+'webpage.html');
					}
					return dlg;
				}
			}
			else{
				webpage = webpage;
				var blob = new Blob([webpage], {type: 'text/html;charset=utf-8'});
				saveAs(blob, 'webpage.html');
			}
		}


    });
  




$(window).load(function () {


});






  