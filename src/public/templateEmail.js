export const templateHtml = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="padding:0;Margin:0">
 <head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>New message</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- -->
  <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet"><!--<![endif]-->
  <style type="text/css">
#outlook a {
	padding:0;
}
.ExternalClass {
	width:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
	line-height:100%;
}
.es-button {
	mso-style-priority:100!important;
	text-decoration:none!important;
}
a[x-apple-data-detectors] {
	color:inherit!important;
	text-decoration:none!important;
	font-size:inherit!important;
	font-family:inherit!important;
	font-weight:inherit!important;
	line-height:inherit!important;
}
.es-desk-hidden {
	display:none;
	float:left;
	overflow:hidden;
	width:0;
	max-height:0;
	line-height:0;
	mso-hide:all;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0!important } .es-m-p0r { padding-right:0!important } .es-m-p0l { padding-left:0!important } .es-m-p0t { padding-top:0!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } a.es-button, button.es-button { font-size:20px!important; display:inline-block!important } .es-m-p5 { padding:5px!important } .es-m-p5t { padding-top:5px!important } .es-m-p5b { padding-bottom:5px!important } .es-m-p5r { padding-right:5px!important } .es-m-p5l { padding-left:5px!important } .es-m-p10 { padding:10px!important } .es-m-p10t { padding-top:10px!important } .es-m-p10b { padding-bottom:10px!important } .es-m-p10r { padding-right:10px!important } .es-m-p10l { padding-left:10px!important } .es-m-p15 { padding:15px!important } .es-m-p15t { padding-top:15px!important } .es-m-p15b { padding-bottom:15px!important } .es-m-p15r { padding-right:15px!important } .es-m-p15l { padding-left:15px!important } .es-m-p20 { padding:20px!important } .es-m-p20t { padding-top:20px!important } .es-m-p20r { padding-right:20px!important } .es-m-p20l { padding-left:20px!important } .es-m-p25 { padding:25px!important } .es-m-p25t { padding-top:25px!important } .es-m-p25b { padding-bottom:25px!important } .es-m-p25r { padding-right:25px!important } .es-m-p25l { padding-left:25px!important } .es-m-p30 { padding:30px!important } .es-m-p30t { padding-top:30px!important } .es-m-p30b { padding-bottom:30px!important } .es-m-p30r { padding-right:30px!important } .es-m-p30l { padding-left:30px!important } .es-m-p35 { padding:35px!important } .es-m-p35t { padding-top:35px!important } .es-m-p35b { padding-bottom:35px!important } .es-m-p35r { padding-right:35px!important } .es-m-p35l { padding-left:35px!important } .es-m-p40 { padding:40px!important } .es-m-p40t { padding-top:40px!important } .es-m-p40b { padding-bottom:40px!important } .es-m-p40r { padding-right:40px!important } .es-m-p40l { padding-left:40px!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style>
 </head>
 <body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
  <div class="es-wrapper-color" style="background-color:#FFFFFF"><!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#ffffff"></v:fill>
			</v:background>
		<![endif]-->
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FFFFFF">
     <tr style="border-collapse:collapse">
      <td valign="top" style="padding:0;Margin:0">
       <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr style="border-collapse:collapse">
          <td align="center" style="padding:0;Margin:0">
           <table class="es-header-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
             <tr style="border-collapse:collapse">
              <td align="left" style="Margin:0;padding-bottom:15px;padding-top:20px;padding-left:20px;padding-right:20px"><!--[if mso]><table style="width:560px" cellpadding="0"
                            cellspacing="0"><tr><td style="width:180px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr style="border-collapse:collapse">
                  <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:180px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img src="https://sgocub.stripocdn.email/content/guids/CABINET_e1816495cd970390ae38384fb5d4006f/images/26791622466451494.gif" alt="Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="Logo" height="59"></a></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:360px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr style="border-collapse:collapse">
                  <td align="left" style="padding:0;Margin:0;width:360px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr class="es-mobile-hidden" style="border-collapse:collapse">
                      <td align="center" height="15" style="padding:0;Margin:0"></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td style="padding:0;Margin:0">
                       <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr class="links" style="border-collapse:collapse">
                          <td align="center" valign="top" width="33.33%" id="esd-menu-id-0" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0"><a target="_blank" href="https://viewstripo.email." style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#333333;font-size:14px">Games</a></td>
                          <td align="center" valign="top" width="33.33%" id="esd-menu-id-1" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0"><a target="_blank" href="https://viewstripo.email." style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#333333;font-size:14px">Programs</a></td>
                          <td align="center" valign="top" width="33.33%" id="esd-menu-id-2" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0"><a target="_blank" href="https://viewstripo.email." style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#333333;font-size:14px">Collections</a></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
         <tr style="border-collapse:collapse">
          <td align="center" style="padding:0;Margin:0">
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
             <tr style="border-collapse:collapse">
              <td align="left" style="padding:0;Margin:0;padding-bottom:30px">
               <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr style="border-collapse:collapse">
                  <td align="left" style="padding:0;Margin:0;width:600px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0;position:relative"><img class="adapt-img" src="https://sgocub.stripocdn.email/content/guids/bannerImgGuid/images/image16945793261012488.png" alt title width="600" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td align="center" class="es-m-p20r es-m-p20l" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><h2 style="Margin:0;line-height:30px;mso-line-height-rule:exactly;font-family:vt323, monospace;font-size:30px;font-style:normal;font-weight:normal;color:#333333">«Even one whole day feels like a couple of hours when you are playing a video game»</h2></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
                style="height:44px; v-text-anchor:middle; width:279px" arcsize="0%" strokecolor="#333333" strokeweight="5px" fillcolor="#ffd000">
		<w:anchorlock></w:anchorlock>
		<center style='color:#333333; font-family:VT323, monospace; font-size:18px; font-weight:400; line-height:18px;  mso-text-raise:1px'>Open chest now!</center>
	</v:roundrect></a>
<![endif]--><!--[if !mso]><!-- --><span class="es-button-border msohide" style="border-style:solid;border-color:#333333;background:#ffd000;border-width:5px;display:inline-block;border-radius:0px;width:auto;mso-hide:all"><a href="https://viewstripo.email" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#333333;font-size:20px;padding:10px 30px 10px 30px;display:inline-block;background:#ffd000;border-radius:0px;font-family:VT323, monospace;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;mso-padding-alt:0;mso-border-alt:10px solid  #ffd000">Open chest now! <img src="https://sgocub.stripocdn.email/content/guids/CABINET_e1816495cd970390ae38384fb5d4006f/images/9351622467809966.png" alt="icon" width="30" align="absmiddle" style="display:inline-block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;vertical-align:middle;margin-left:10px"></a></span><!--<![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
         <tr style="border-collapse:collapse">
          <td align="center" style="padding:0;Margin:0">
           <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" bgcolor="#ffffff">
             <tr style="border-collapse:collapse">
              <td align="left" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px">
               <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr style="border-collapse:collapse">
                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0"><h1 style="Margin:0;line-height:52px;mso-line-height-rule:exactly;font-family:VT323, monospace;font-size:43px;font-style:normal;font-weight:bold;color:#333333">Older Mobile Games <br>That Are Still Fun</h1></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
         <tr style="border-collapse:collapse">
          <td align="center" style="padding:0;Margin:0">
           <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr style="border-collapse:collapse">
              <td align="left" style="padding:0;Margin:0">
               <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr style="border-collapse:collapse">
                  <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://sgocub.stripocdn.email/content/guids/CABINET_e1816495cd970390ae38384fb5d4006f/images/77851622468033251.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="600"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr style="border-collapse:collapse">
              <td align="left" bgcolor="#8AD1F0" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;background-color:#8ad1f0"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr style="border-collapse:collapse">
                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><h2 style="Margin:0;line-height:43px;mso-line-height-rule:exactly;font-family:VT323, monospace;font-size:36px;font-style:normal;font-weight:normal;color:#333333">Bounce Classic</h2><h2 style="Margin:0;line-height:43px;mso-line-height-rule:exactly;font-family:VT323, monospace;font-size:36px;font-style:normal;font-weight:normal;color:#333333;display:none"><br></h2></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td align="left" class="es-m-txt-c" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.&nbsp;Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h2 style="Margin:0;line-height:54px;mso-line-height-rule:exactly;font-family:VT323, monospace;font-size:36px;font-style:normal;font-weight:normal;color:#333333;display:none"><br></h2></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><h2 style="Margin:0;line-height:42px;mso-line-height-rule:exactly;font-family:VT323, monospace;font-size:35px;font-style:normal;font-weight:normal;color:#333333">$24.99</h2><h2 style="Margin:0;line-height:43px;mso-line-height-rule:exactly;font-family:VT323, monospace;font-size:36px;font-style:normal;font-weight:normal;color:#333333;display:none"><br></h2></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr style="border-collapse:collapse">
                  <td align="left" style="padding:0;Margin:0;width:270px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img src="https://sgocub.stripocdn.email/content/guids/CABINET_e1816495cd970390ae38384fb5d4006f/images/8501622466227460.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="150"></a></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
                style="height:44px; v-text-anchor:middle; width:231px" arcsize="0%" strokecolor="#333333" strokeweight="5px" fillcolor="#ffd000">
		<w:anchorlock></w:anchorlock>
		<center style='color:#333333; font-family:VT323, monospace; font-size:18px; font-weight:400; line-height:18px;  mso-text-raise:1px'>Download now.</center>
	</v:roundrect></a>
<![endif]--><!--[if !mso]><!-- --><span class="es-button-border msohide" style="border-style:solid;border-color:#333333;background:#ffd000;border-width:5px;display:inline-block;border-radius:0px;width:auto;mso-hide:all"><a href="https://viewstripo.email" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#333333;font-size:20px;padding:10px 30px 10px 30px;display:inline-block;background:#ffd000;border-radius:0px;font-family:VT323, monospace;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;mso-padding-alt:0;mso-border-alt:10px solid  #ffd000">Download now.</a></span><!--<![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
             <tr style="border-collapse:collapse">
              <td align="left" bgcolor="#8AD1F0" style="padding:20px;Margin:0;background-color:#8ad1f0">
               <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr style="border-collapse:collapse">
                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-left:5px solid #333333;border-right:5px solid #333333;border-top:5px solid #333333;border-bottom:5px solid #333333" role="presentation">
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img class="adapt-img" src="https://sgocub.stripocdn.email/content/guids/videoImgGuid/images/99651622468403129.png" alt width="550" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr style="border-collapse:collapse">
              <td align="left" style="padding:0;Margin:0;padding-bottom:40px">
               <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr style="border-collapse:collapse">
                  <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://sgocub.stripocdn.email/content/guids/CABINET_e1816495cd970390ae38384fb5d4006f/images/28661622468047671.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="600"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
         <tr style="border-collapse:collapse">
          <td align="center" style="padding:0;Margin:0">
           <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr style="border-collapse:collapse">
              <td align="left" style="padding:0;Margin:0;padding-top:10px">
               <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr style="border-collapse:collapse">
                  <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://sgocub.stripocdn.email/content/guids/CABINET_e1816495cd970390ae38384fb5d4006f/images/32101622468139164.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="600"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr style="border-collapse:collapse">
              <td align="left" bgcolor="#A3C254" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;background-color:#a3c254"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr style="border-collapse:collapse">
                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><h2 style="Margin:0;line-height:43px;mso-line-height-rule:exactly;font-family:VT323, monospace;font-size:36px;font-style:normal;font-weight:normal;color:#333333">Temple Run (2013)</h2><h2 style="Margin:0;line-height:43px;mso-line-height-rule:exactly;font-family:VT323, monospace;font-size:36px;font-style:normal;font-weight:normal;color:#333333;display:none"><br></h2></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td align="left" class="es-m-txt-c" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.&nbsp;Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h2 style="Margin:0;line-height:54px;mso-line-height-rule:exactly;font-family:VT323, monospace;font-size:36px;font-style:normal;font-weight:normal;color:#333333;display:none"><br></h2></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><h2 style="Margin:0;line-height:42px;mso-line-height-rule:exactly;font-family:VT323, monospace;font-size:35px;font-style:normal;font-weight:normal;color:#333333">$10.99</h2><h2 style="Margin:0;line-height:43px;mso-line-height-rule:exactly;font-family:VT323, monospace;font-size:36px;font-style:normal;font-weight:normal;color:#333333;display:none"><br></h2></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr style="border-collapse:collapse">
                  <td align="left" style="padding:0;Margin:0;width:270px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img src="https://sgocub.stripocdn.email/content/guids/CABINET_e1816495cd970390ae38384fb5d4006f/images/96511622468237592.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="150"></a></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
                style="height:44px; v-text-anchor:middle; width:231px" arcsize="0%" strokecolor="#333333" strokeweight="5px" fillcolor="#ffd000">
		<w:anchorlock></w:anchorlock>
		<center style='color:#333333; font-family:VT323, monospace; font-size:18px; font-weight:400; line-height:18px;  mso-text-raise:1px'>Download now.</center>
	</v:roundrect></a>
<![endif]--><!--[if !mso]><!-- --><span class="es-button-border msohide" style="border-style:solid;border-color:#333333;background:#ffd000;border-width:5px;display:inline-block;border-radius:0px;width:auto;mso-hide:all"><a href="https://viewstripo.email" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#333333;font-size:20px;padding:10px 30px 10px 30px;display:inline-block;background:#ffd000;border-radius:0px;font-family:VT323, monospace;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;mso-padding-alt:0;mso-border-alt:10px solid  #ffd000">Download now.</a></span><!--<![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
             <tr style="border-collapse:collapse">
              <td align="left" bgcolor="#A3C254" style="padding:20px;Margin:0;background-color:#a3c254">
               <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr style="border-collapse:collapse">
                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-left:5px solid #333333;border-right:5px solid #333333;border-top:5px solid #333333;border-bottom:5px solid #333333" role="presentation">
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img class="adapt-img" src="https://sgocub.stripocdn.email/content/guids/videoImgGuid/images/16301622468446499.png" alt width="550" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr style="border-collapse:collapse">
              <td align="left" style="padding:0;Margin:0">
               <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr style="border-collapse:collapse">
                  <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0;padding-bottom:40px;font-size:0px"><img class="adapt-img" src="https://sgocub.stripocdn.email/content/guids/CABINET_e1816495cd970390ae38384fb5d4006f/images/6981622468158230.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="600"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
         <tr style="border-collapse:collapse">
          <td align="center" style="padding:0;Margin:0">
           <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr style="border-collapse:collapse">
              <td align="left" style="padding:0;Margin:0;padding-top:10px">
               <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr style="border-collapse:collapse">
                  <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://sgocub.stripocdn.email/content/guids/CABINET_e1816495cd970390ae38384fb5d4006f/images/9351622468804294.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="600"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr style="border-collapse:collapse">
              <td align="left" bgcolor="#945835" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;background-color:#945835"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr style="border-collapse:collapse">
                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><h2 style="Margin:0;line-height:43px;mso-line-height-rule:exactly;font-family:VT323, monospace;font-size:36px;font-style:normal;font-weight:normal;color:#ffffff">LIMBO (2010)</h2><h2 style="Margin:0;line-height:43px;mso-line-height-rule:exactly;font-family:VT323, monospace;font-size:36px;font-style:normal;font-weight:normal;color:#ffffff;display:none"><br></h2></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td align="left" class="es-m-txt-c" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#ffffff;font-size:14px">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.&nbsp;Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h2 style="Margin:0;line-height:54px;mso-line-height-rule:exactly;font-family:VT323, monospace;font-size:36px;font-style:normal;font-weight:normal;color:#ffffff;display:none"><br></h2></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><h2 style="Margin:0;line-height:42px;mso-line-height-rule:exactly;font-family:VT323, monospace;font-size:35px;font-style:normal;font-weight:normal;color:#ffffff">$15.99</h2><h2 style="Margin:0;line-height:43px;mso-line-height-rule:exactly;font-family:VT323, monospace;font-size:36px;font-style:normal;font-weight:normal;color:#ffffff;display:none"><br></h2></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr style="border-collapse:collapse">
                  <td align="left" style="padding:0;Margin:0;width:270px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img src="https://sgocub.stripocdn.email/content/guids/CABINET_e1816495cd970390ae38384fb5d4006f/images/2511622468766751.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="150"></a></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
                style="height:44px; v-text-anchor:middle; width:231px" arcsize="0%" strokecolor="#333333" strokeweight="5px" fillcolor="#ffd000">
		<w:anchorlock></w:anchorlock>
		<center style='color:#333333; font-family:VT323, monospace; font-size:18px; font-weight:400; line-height:18px;  mso-text-raise:1px'>Download now.</center>
	</v:roundrect></a>
<![endif]--><!--[if !mso]><!-- --><span class="es-button-border msohide" style="border-style:solid;border-color:#333333;background:#ffd000;border-width:5px;display:inline-block;border-radius:0px;width:auto;mso-hide:all"><a href="https://viewstripo.email" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#333333;font-size:20px;padding:10px 30px 10px 30px;display:inline-block;background:#ffd000;border-radius:0px;font-family:VT323, monospace;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;mso-padding-alt:0;mso-border-alt:10px solid  #ffd000">Download now.</a></span><!--<![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
             <tr style="border-collapse:collapse">
              <td align="left" bgcolor="#945835" style="padding:20px;Margin:0;background-color:#945835">
               <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr style="border-collapse:collapse">
                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-left:5px solid #333333;border-right:5px solid #333333;border-top:5px solid #333333;border-bottom:5px solid #333333" role="presentation">
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img class="adapt-img" src="https://sgocub.stripocdn.email/content/guids/videoImgGuid/images/36031622468909109.png" alt width="550" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr style="border-collapse:collapse">
              <td align="left" style="padding:0;Margin:0">
               <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr style="border-collapse:collapse">
                  <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0;padding-bottom:40px;font-size:0px"><img class="adapt-img" src="https://sgocub.stripocdn.email/content/guids/CABINET_e1816495cd970390ae38384fb5d4006f/images/46041622468815730.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="600"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr style="border-collapse:collapse">
          <td align="center" style="padding:0;Margin:0">
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center">
             <tr style="border-collapse:collapse">
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr style="border-collapse:collapse">
                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img src="https://sgocub.stripocdn.email/content/guids/CABINET_e1816495cd970390ae38384fb5d4006f/images/26791622466451494.gif" alt="Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="54" title="Logo"></a></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0"><h1 style="Margin:0;line-height:52px;mso-line-height-rule:exactly;font-family:VT323, monospace;font-size:43px;font-style:normal;font-weight:bold;color:#333333">Follow us</h1></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0px">
                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr style="border-collapse:collapse">
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://viewstripo.email." style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img title="Facebook" src="https://sgocub.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Fb" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://viewstripo.email." style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img title="Twitter" src="https://sgocub.stripocdn.email/content/assets/img/social-icons/logo-black/twitter-logo-black.png" alt="Tw" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://viewstripo.email." style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img title="Instagram" src="https://sgocub.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Inst" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                          <td valign="top" align="center" style="padding:0;Margin:0"><a target="_blank" href="https://viewstripo.email." style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img title="Youtube" src="https://sgocub.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png" alt="Yt" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#666666;font-size:14px">It is a long established fact that a reader</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#666666;font-size:14px">will be distracted by the readable&nbsp;</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr style="border-collapse:collapse">
              <td align="left" style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px">
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr style="border-collapse:collapse">
                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center top" width="100%" cellspacing="0" cellpadding="0" role="presentation">
                     <tr style="border-collapse:collapse">
                      <td class="es-m-txt-c" align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px"><strong><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px" href="https://viewstripo.email">Home</a>&nbsp;&nbsp;<a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px" href="https://viewstripo.email">Sale</a></strong></p></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td align="center" class="es-infoblock made_with" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;line-height:120%;font-size:0;color:#CCCCCC"><a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=game_industry_6&utm_content=open_chest_now" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"><img src="https://sgocub.stripocdn.email/content/guids/CABINET_09023af45624943febfa123c229a060b/images/7911561025989373.png" alt width="125" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table>
  </div>
 </body>
</html>
`