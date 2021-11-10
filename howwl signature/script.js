const create = document.querySelector('.create')
const generate = document.querySelector('.generate')
create.addEventListener('click', function () {
  store()
})

generate.addEventListener('click', function () {
  console.log('hello')
  code()
})
function store() {
  var name = $('#fullname').val()
  var des = $('#desig').val()
  var email = $('#emaila').val()
  var phone = $('#tel').val()
  $('#sname').html(name)
  $('#sdes').html(des)
  $('#semail').html(email)
  $('#sphone').html(phone)
  $('#semail').attr('href', 'mailto:' + email)
  $('.popup').hide()
  $('.code').hide()
}

function code() {
  var name = $('#fullname').val()
  var des = $('#desig').val()
  var email = $('#emaila').val()
  var phone = $('#tel').val()
  var codes = `<html><head><link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
      integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
  <title>Email Signature</title><meta content="text/html; charset=utf-8" http-equiv="Content-Type"></head><body><table style="width: 525px" cellspacing="0" cellpadding="0" border="0">
      <tbody>
        <tr>
          <td style="font-size: 10pt; width: 125px" valign="middle">
            <img border="0" src="howwl_logo.gif" width="100px" />
          </td>
          <td
            style="
              font-size: 10pt;
              width: 400px;
              padding-left: 10px;
              border-left: #808080 2px solid;
            "
            valign="top"
          >
           <h1 style="font-size: 20px; color: #3f3f3f" id="sname">
              ${name}
            </h1>
            <h3
              style="margin-top: -0.7rem; color: #808080; font-weight: 500"
              id="sdes"
            >
              ${des}
            </h3>
            <div
              style="
                margin-top: -0.5rem;
                margin-bottom: 0.7rem;
                color: #a0a0a0;
                font-size: 14px;
                font-weight: 500;
              "
            >
              <span id="sphone">${phone}</span>
              <span style="color: #808080">|</span>
              <span
                ><a
                  href="https://www.howwldesign.com"
                  style="text-decoration: none; color: #808080"
                  >www.howwldesign.com</a
                ></span
              >
            </div>
                   <a
              href="https://www.behance.net/moonarun"
              style="text-decoration: none"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/email-signature-3bf35.appspot.com/o/Behance-icon-png.png?alt=media&token=48304b77-1d1e-468e-b5de-0043793ca4b0"
                width="20px"
                alt=""
              />
            </a>
            <a
              href="https://www.instagram.com/howwldesign/?hl=en"
              style="text-decoration: none"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/email-signature-3bf35.appspot.com/o/Intagram-PNg.png?alt=media&token=9dfa9f5b-8172-499d-b271-5133b3d507d4"
                width="20px"
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/company/howwl"
              style="text-decoration: none"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/email-signature-3bf35.appspot.com/o/Linkedin-PNg.png?alt=media&token=44e394a0-a146-4ed4-833c-0fe03716a954"
                width="20px"
                alt=""
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCLZ876RCMEAu338ioB_fwPg"
              style="text-decoration: none"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/email-signature-3bf35.appspot.com/o/Youtube-PNg.png?alt=media&token=89498fc6-23ed-4de7-bd40-17870d75c6d1"
                width="20px"
                alt=""
              />
            </a>
            <a href="https://vimeo.com/howwl" style="text-decoration: none">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/email-signature-3bf35.appspot.com/o/vimeo-PNg.png?alt=media&token=0e1b1e51-aef4-4545-8793-c007b13e7852"
                width="20px"
                alt=""
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
</head></html>`
  $('form').hide()
  $('.code').text(codes)
  console.log('a')
}
