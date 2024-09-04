const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

const gmailEmail = 'maycoljhordan07@gmail.com';
const gmailPassword = 'lkjnthxcjquxuptv';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendEmailNotification = functions.firestore
  .document('contactos/{docId}')
  .onCreate((snap) => {
    const newValue = snap.data();

    const mailOptions = {
      from: gmailEmail,
      to: [
        'maycoljhordan07@gmail.com',
        'sergioandregomezvallejos@gmail.com'
      ],
      subject: 'Has recibido un mensaje de la página de King Reserve',
      text: `Hola,

Has recibido un nuevo mensaje de ${newValue.nombre} ${newValue.apellido} 
(${newValue.email}):

"${newValue.mensaje}"

Por favor, responde al remitente si es necesario.

---
Este mensaje fue enviado desde la página de King Reserve.
© 2024 King Reserve. Todos los derechos reservados.
`,
    };

    return transporter.sendMail(mailOptions)
      .then(() => {
        console.log('¡Email enviado con éxito!');
      })
      .catch((error) => {
        console.error('Error enviando el email:', error);
      });
  });
