const express = require('express');
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(`
    <html>
      <head>
        <meta property="og:title" content="Mini Calculator" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://placehold.co/600x400?text=Choose+Operation" />
        <meta property="fc:frame:button:1" content="2 + 3" />
        <meta property="fc:frame:button:2" content="5 - 1" />
        <meta property="fc:frame:button:3" content="4 × 2" />
        <meta property="fc:frame:button:4" content="8 ÷ 2" />
        <meta property="fc:frame:post_url" content="https://calculator-psi-roan-26.vercel.app/" />
      </head>
      <body></body>
    </html>
  `);
});

app.post("/calc", (req, res) => {
  const choice = req.body.untrustedData?.buttonIndex;
  let result = "";

  switch (choice) {
    case 1: result = "2 + 3 = 5"; break;
    case 2: result = "5 - 1 = 4"; break;
    case 3: result = "4 × 2 = 8"; break;
    case 4: result = "8 ÷ 2 = 4"; break;
    default: result = "Unknown operation";
  }

  res.setHeader("Content-Type", "text/html");
  res.send(`
    <html>
      <head>
        <meta property="og:title" content="Result" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://placehold.co/600x400?text=${encodeURIComponent(result)}" />
        <meta property="fc:frame:button:1" content="Try Again" />
        <meta property="fc:frame:post_url" content="https://your-vercel-url.vercel.app/" />
      </head>
      <body></body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Mini Calculator Frame running on port 3000");
});
