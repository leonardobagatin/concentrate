const generateHTML = () => {
    return `
    <body>
        
        <h1>“Where your attention goes, your time goes.”</h1>
        <p>- Idowu Koyenikan</p>

    </body>`;
};

const generateSTYLING = () => {
    return `
    <style> 
    
    body {
            position: absolute;
            top: 49%;
            width: 99%;
            transform: translateY(-51%);
            text-align: center;
            background: #202124 !important;
        }
      
        h1 {
            font-family: Arial;
            font-size: 24px;
            color: #ffffff;
        }

        p {
            font-family: Arial;
            color: #ffffff;
            font-size: 20px;
        }
        
    </style>`;
};

switch (window.location.hostname) {
    case "www.facebook.com":       
        document.head.innerHTML = generateSTYLING (); 
        document.body.innerHTML = generateHTML ();
        break;
    case "twitter.com":
        document.head.innerHTML = generateSTYLING (); 
        document.body.innerHTML = generateHTML ();
        break;
    case "www.instagram.com":
        document.head.innerHTML = generateSTYLING (); 
        document.body.innerHTML = generateHTML ();
        break;
    case "www.reddit.com":
        document.head.innerHTML = generateSTYLING (); 
        document.body.innerHTML = generateHTML ();
        break;
    case "www.netflix.com":
        document.head.innerHTML = generateSTYLING (); 
        document.body.innerHTML = generateHTML ();
        break;
    case "www.disneyplus.com":
        document.head.innerHTML = generateSTYLING (); 
        document.body.innerHTML = generateHTML ();
        break;
    case "www.primevideo.com":
        document.head.innerHTML = generateSTYLING (); 
        document.body.innerHTML = generateHTML ();
        break;
}